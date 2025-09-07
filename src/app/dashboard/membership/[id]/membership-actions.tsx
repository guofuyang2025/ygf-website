'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertModal } from '@/components/modal/alert-modal';
import { CheckCircle2, XCircle } from 'lucide-react';

interface MembershipActionsProps {
    membershipId: string;
}

export function MembershipActions({ membershipId }: MembershipActionsProps) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState<'accept' | 'deny' | null>(null);
    const router = useRouter();

    const onConfirm = async () => {
        if (!action) return;

        setLoading(true);
        const supabase = createClient();

        try {
            if (action === 'accept') {
                const { error } = await supabase
                    .from('ygf_membership')
                    .update({ verify: true, reviewed: true })
                    .eq('id', membershipId);

                if (error) throw error;
                toast.success('Membership application approved successfully');
            } else if (action === 'deny') {
                const { error } = await supabase
                    .from('ygf_membership')
                    .update({ reviewed: true })
                    .eq('id', membershipId);

                if (error) throw error;
                toast.success('Membership application rejected');
            }

            router.refresh();
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
            setOpen(false);
            setAction(null);
        }
    };

    const handleAccept = () => {
        setAction('accept');
        setOpen(true);
    };

    const handleDeny = () => {
        setAction('deny');
        setOpen(true);
    };

    const getActionText = () => {
        switch (action) {
            case 'accept':
                return 'approve this membership application';
            case 'deny':
                return 'reject this membership application';
            default:
                return 'perform this action';
        }
    };

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm}
                loading={loading}
                title={`Are you sure you want to ${getActionText()}?`}
                description="This action cannot be undone."
            />
            <Card>
                <CardHeader>
                    <CardTitle>Review Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button
                        onClick={handleAccept}
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={loading}
                    >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Accept Application
                    </Button>
                    <Button
                        onClick={handleDeny}
                        variant="destructive"
                        className="w-full"
                        disabled={loading}
                    >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject Application
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}
