'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';
import { Membership } from '@/types/database';
import { NotificationCard } from './notification-card';

export default function NotificationGrid() {
    const [pendingApplications, setPendingApplications] = useState<Membership[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const supabase = createClient();

        // Fetch pending applications
        const fetchPendingApplications = async () => {
            const { data, error } = await supabase
                .from('ygf_membership')
                .select('*')
                .eq('reviewed', false)
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching pending applications:', error);
                return;
            }

            setPendingApplications(data || []);
            setLoading(false);
        };

        fetchPendingApplications();

        // Subscribe to real-time changes
        const channel = supabase
            .channel('membership_notifications_grid')
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'ygf_membership',
                    filter: 'reviewed=eq.false'
                },
                (payload) => {
                    const newApplication = payload.new as Membership;
                    setPendingApplications(prev => [newApplication, ...prev]);
                }
            )
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'ygf_membership'
                },
                (payload) => {
                    const updatedApplication = payload.new as Membership;
                    setPendingApplications(prev =>
                        prev.filter(app => app.id !== updatedApplication.id)
                    );
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 rounded-lg border p-6 animate-pulse">
                        <div className="flex items-center justify-between mb-4">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (pendingApplications.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12">
                <div className="text-center">
                    <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No pending notifications</h3>
                    <p className="text-gray-500 dark:text-gray-400">All membership applications have been reviewed.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Pending Applications ({pendingApplications.length})
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Review and approve membership applications
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pendingApplications.map((application) => (
                    <NotificationCard key={application.id} application={application} />
                ))}
            </div>
        </div>
    );
}
