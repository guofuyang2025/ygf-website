import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import ListingMembership from '@/features/membership/components/listing-membership';
import { Suspense } from 'react';

export const metadata = {
    title: 'Dashboard: Membership'
};

export default function MembershipPage() {
    return (
        <PageContainer scrollable={false}>
            <div className='flex flex-1 flex-col space-y-4'>
                <div className='flex items-start justify-between'>
                    <Heading
                        title='Membership Applications'
                        description='Manage membership applications and approvals.'
                    />
                </div>
                <Separator />
                <Suspense
                    fallback={
                        <DataTableSkeleton columnCount={6} rowCount={8} filterCount={2} />
                    }
                >
                    <ListingMembership />
                </Suspense>
            </div>
        </PageContainer>
    );
}
