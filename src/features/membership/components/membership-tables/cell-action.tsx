'use client';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AlertModal } from '@/components/modal/alert-modal';
import { MoreHorizontal, Trash, Check, X, Eye } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Membership } from '@/types/database';
import { createClient } from '@/lib/supabase';

interface CellActionProps {
    data: Membership;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState<'accept' | 'deny' | 'delete' | null>(null);
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
                    .eq('id', data.id);

                if (error) throw error;
                toast.success('Membership application approved');
            } else if (action === 'deny') {
                const { error } = await supabase
                    .from('ygf_membership')
                    .update({ reviewed: true })
                    .eq('id', data.id);

                if (error) throw error;
                toast.success('Membership application rejected');
            } else if (action === 'delete') {
                const { error } = await supabase
                    .from('ygf_membership')
                    .delete()
                    .eq('id', data.id);

                if (error) throw error;
                toast.success('Membership application deleted');
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

    const handleDelete = () => {
        setAction('delete');
        setOpen(true);
    };

    const getActionText = () => {
        switch (action) {
            case 'accept':
                return 'approve this membership application';
            case 'deny':
                return 'reject this membership application';
            case 'delete':
                return 'delete this membership application';
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
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => router.push(`/dashboard/membership/${data.id}`)}
                    >
                        <Eye className="mr-2 h-4 w-4" /> View details
                    </DropdownMenuItem>
                    {!data.reviewed && (
                        <>
                            <DropdownMenuItem onClick={handleAccept}>
                                <Check className="mr-2 h-4 w-4" /> Accept
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleDeny}>
                                <X className="mr-2 h-4 w-4" /> Deny
                            </DropdownMenuItem>
                        </>
                    )}
                    <DropdownMenuItem onClick={handleDelete}>
                        <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
