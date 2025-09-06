import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Membership | Dashboard',
    description: 'Membership management page.'
};

export default function MembershipPage() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Membership</h2>
            </div>
        </div>
    );
}
