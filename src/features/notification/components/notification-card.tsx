'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { createClient } from '@/lib/supabase';
import { Membership } from '@/types/database';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertModal } from '@/components/modal/alert-modal';
import {
    CheckCircle2,
    XCircle,
    User,
    Mail,
    Phone,
    Calendar,
    Clock,
    Eye
} from 'lucide-react';

interface NotificationCardProps {
    application: Membership;
}

export function NotificationCard({ application }: NotificationCardProps) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState<'accept' | 'deny' | null>(null);
    const router = useRouter();

    const parseApplicationData = (description: string | null) => {
        if (!description) return {
            name: 'Unknown',
            email: 'Unknown',
            phone: 'Not provided',
            membershipType: 'Not specified',
            message: 'No message provided'
        };

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
            email: data.email || 'Unknown',
            phone: data.phone || 'Not provided',
            membershipType: data['membership type'] || 'Not specified',
            message: data.message || 'No message provided'
        };
    };

    const applicationData = parseApplicationData(application.description);
    const timeAgo = new Date(application.created_at || '').toLocaleDateString();

    const onConfirm = async () => {
        if (!action) return;

        setLoading(true);
        const supabase = createClient();

        try {
            if (action === 'accept') {
                const { error } = await supabase
                    .from('ygf_membership')
                    .update({ verify: true, reviewed: true })
                    .eq('id', application.id);

                if (error) throw error;
                toast.success('Membership application approved successfully');
            } else if (action === 'deny') {
                const { error } = await supabase
                    .from('ygf_membership')
                    .update({ reviewed: true })
                    .eq('id', application.id);

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

            <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-500" />
                            {applicationData.name}
                        </CardTitle>
                        <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Pending
                        </Badge>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Mail className="w-4 h-4" />
                            <span className="truncate">{applicationData.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Phone className="w-4 h-4" />
                            <span>{applicationData.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>Applied: {timeAgo}</span>
                        </div>
                    </div>

                    <div className="pt-2 border-t">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Membership Type:</p>
                        <Badge variant="secondary" className="capitalize">
                            {applicationData.membershipType}
                        </Badge>
                    </div>

                    {applicationData.message && applicationData.message !== 'No message provided' && (
                        <div className="pt-2 border-t">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Message:</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                                {applicationData.message}
                            </p>
                        </div>
                    )}

                    <div className="flex gap-2 pt-2">
                        <Button
                            size="sm"
                            className="flex-1 bg-green-600 hover:bg-green-700"
                            onClick={handleAccept}
                            disabled={loading}
                        >
                            <CheckCircle2 className="w-4 h-4 mr-1" />
                            Accept
                        </Button>
                        <Button
                            size="sm"
                            variant="destructive"
                            className="flex-1"
                            onClick={handleDeny}
                            disabled={loading}
                        >
                            <XCircle className="w-4 h-4 mr-1" />
                            Deny
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => router.push(`/dashboard/membership/${application.id}`)}
                        >
                            <Eye className="w-4 h-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
