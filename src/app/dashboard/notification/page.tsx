import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import NotificationGrid from '@/features/notification/components/notification-grid';

export const metadata = {
    title: 'Dashboard: Notifications'
};

export default function NotificationPage() {
    return (
        <PageContainer scrollable={false}>
            <div className='flex flex-1 flex-col space-y-4'>
                <div className='flex items-start justify-between'>
                    <Heading
                        title='Notifications'
                        description='Review and manage membership applications and other notifications.'
                    />
                </div>
                <Separator />
                <NotificationGrid />
            </div>
        </PageContainer>
    );
}
