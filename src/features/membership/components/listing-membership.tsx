import { DataTable as MembershipTable } from '@/components/ui/table/data-table';
import { columns } from './membership-tables/columns-membership';
import { getMemberships } from '@/db/membership';

export default async function ListingMembership() {
    const data = await getMemberships();

    return (
        <MembershipTable
            data={data}
            totalItems={data.length}
            columns={columns}
            url="/dashboard/membership/:id"
        />
    );
}
