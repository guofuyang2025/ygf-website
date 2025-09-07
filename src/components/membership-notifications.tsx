'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';
import { Membership } from '@/types/database';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, CheckCircle2, XCircle, UserPlus } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface MembershipNotificationsProps {
    onClose?: () => void;
}

export function MembershipNotifications({ onClose }: MembershipNotificationsProps) {
    const [pendingApplications, setPendingApplications] = useState<Membership[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const supabase = createClient();

        // Fetch initial pending applications
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
        };

        fetchPendingApplications();

        // Subscribe to real-time changes
        const channel = supabase
            .channel('membership_changes')
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
                    toast.success('New membership application received!');
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

    const handleAccept = async (applicationId: string) => {
        setLoading(true);
        const supabase = createClient();

        try {
            const { error } = await supabase
                .from('ygf_membership')
                .update({ verify: true, reviewed: true })
                .eq('id', applicationId);

            if (error) throw error;

            toast.success('Membership application approved');
            setPendingApplications(prev =>
                prev.filter(app => app.id !== applicationId)
            );
        } catch (error) {
            console.error('Error accepting application:', error);
            toast.error('Failed to approve application');
        } finally {
            setLoading(false);
        }
    };

    const handleDeny = async (applicationId: string) => {
        setLoading(true);
        const supabase = createClient();

        try {
            const { error } = await supabase
                .from('ygf_membership')
                .update({ reviewed: true })
                .eq('id', applicationId);

            if (error) throw error;

            toast.success('Membership application rejected');
            setPendingApplications(prev =>
                prev.filter(app => app.id !== applicationId)
            );
        } catch (error) {
            console.error('Error rejecting application:', error);
            toast.error('Failed to reject application');
        } finally {
            setLoading(false);
        }
    };

    const parseApplicationData = (description: string | null) => {
        if (!description) return { name: 'Unknown', email: 'Unknown' };

        const lines = description.split('\n');
        const data: Record<string, string> = {};

        lines.forEach(line => {
            const [key, ...valueParts] = line.split(': ');
            if (key && valueParts.length > 0) {
                data[key.toLowerCase()] = valueParts.join(': ');
            }
        });

        return {
            name: data.name || 'Unknown',
            email: data.email || 'Unknown'
        };
    };

    if (pendingApplications.length === 0) {
        return null;
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 space-y-3 max-w-sm">
            {pendingApplications.slice(0, 3).map((application) => {
                const { name, email } = parseApplicationData(application.description);

                return (
                    <Card key={application.id} className="shadow-lg border-l-4 border-l-blue-500">
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm flex items-center gap-2">
                                    <UserPlus className="w-4 h-4 text-blue-500" />
                                    New Application
                                </CardTitle>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setPendingApplications(prev =>
                                        prev.filter(app => app.id !== application.id)
                                    )}
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="space-y-2">
                                <div>
                                    <p className="font-medium text-sm">{name}</p>
                                    <p className="text-xs text-muted-foreground">{email}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        className="h-7 text-xs bg-green-600 hover:bg-green-700"
                                        onClick={() => handleAccept(application.id)}
                                        disabled={loading}
                                    >
                                        <CheckCircle2 className="w-3 h-3 mr-1" />
                                        Accept
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="destructive"
                                        className="h-7 text-xs"
                                        onClick={() => handleDeny(application.id)}
                                        disabled={loading}
                                    >
                                        <XCircle className="w-3 h-3 mr-1" />
                                        Deny
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-7 text-xs"
                                        onClick={() => router.push(`/dashboard/membership/${application.id}`)}
                                    >
                                        View
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}

            {pendingApplications.length > 3 && (
                <Card className="shadow-lg">
                    <CardContent className="p-3">
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => router.push('/dashboard/membership')}
                        >
                            View {pendingApplications.length - 3} more applications
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
