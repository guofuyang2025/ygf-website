import { notFound } from 'next/navigation';
import { getMembershipById } from '@/db/membership';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Clock, User, Mail, Phone, Calendar } from 'lucide-react';
import { MembershipActions } from './membership-actions';

interface MembershipDetailPageProps {
    params: Promise<{ id: string }>;
}

export default async function MembershipDetailPage({ params }: MembershipDetailPageProps) {
    const { id } = await params;
    const membership = await getMembershipById(id);

    if (!membership) {
        notFound();
    }

    const parseDescription = (description: string | null) => {
        if (!description) return {};

        const lines = description.split('\n');
        const data: Record<string, string> = {};

        lines.forEach(line => {
            const [key, ...valueParts] = line.split(': ');
            if (key && valueParts.length > 0) {
                data[key.toLowerCase()] = valueParts.join(': ');
            }
        });

        return data;
    };

    const applicationData = parseDescription(membership.description);
    const name = applicationData.name || 'Unknown';
    const email = applicationData.email || 'Unknown';
    const phone = applicationData.phone || 'Not provided';
    const membershipType = applicationData['membership type'] || 'Not specified';
    const message = applicationData.message || 'No message provided';

    const getStatusBadge = () => {
        if (!membership.reviewed) {
            return (
                <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Pending Review
                </Badge>
            );
        }

        if (membership.verify) {
            return (
                <Badge variant="default" className="flex items-center gap-1 bg-green-600">
                    <CheckCircle2 className="w-3 h-3" />
                    Approved
                </Badge>
            );
        } else {
            return (
                <Badge variant="destructive" className="flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    Rejected
                </Badge>
            );
        }
    };

    return (
        <div className="container mx-auto p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Membership Application</h1>
                    <p className="text-muted-foreground">Application ID: {membership.id.slice(0, 8)}...</p>
                </div>
                {getStatusBadge()}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Application Details */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                Applicant Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                                    <p className="text-lg">{name}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">Membership Type</label>
                                    <p className="text-lg capitalize">{membershipType}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                                    <p className="text-lg flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        {email}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">Phone</label>
                                    <p className="text-lg flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        {phone}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Application Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground whitespace-pre-wrap">{message}</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Status and Actions */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Application Status</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Current Status</label>
                                <div className="mt-2">{getStatusBadge()}</div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Points</label>
                                <p className="text-lg font-mono">{membership.point || 0}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Applied Date</label>
                                <p className="text-lg flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(membership.created_at || '').toLocaleDateString()}
                                </p>
                            </div>
                            {membership.updated_at && membership.updated_at !== membership.created_at && (
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
                                    <p className="text-lg flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(membership.updated_at).toLocaleDateString()}
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {!membership.reviewed && (
                        <MembershipActions membershipId={membership.id} />
                    )}
                </div>
            </div>
        </div>
    );
}
