'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';

export function usePendingNotifications() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const supabase = createClient();

        // Fetch initial count
        const fetchPendingCount = async () => {
            const { data, error } = await supabase
                .from('ygf_membership')
                .select('id', { count: 'exact' })
                .eq('reviewed', false);

            if (error) {
                console.error('Error fetching pending notifications:', error);
                return;
            }

            setCount(data?.length || 0);
            setLoading(false);
        };

        fetchPendingCount();

        // Subscribe to real-time changes
        const channel = supabase
            .channel('membership_notifications')
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'ygf_membership',
                    filter: 'reviewed=eq.false'
                },
                () => {
                    setCount(prev => prev + 1);
                }
            )
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'ygf_membership',
                    filter: 'reviewed=eq.true'
                },
                () => {
                    setCount(prev => Math.max(0, prev - 1));
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    return { count, loading };
}
