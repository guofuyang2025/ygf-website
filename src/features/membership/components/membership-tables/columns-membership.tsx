'use client';
import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import { Column, ColumnDef } from '@tanstack/react-table';
import { CheckCircle2, XCircle, Clock, User } from 'lucide-react';
import { CellAction } from './cell-action';
import { Membership } from '@/types/database';

export const columns: ColumnDef<Membership>[] = [
    {
        accessorKey: 'id',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
        cell: ({ row }) => {
            const id = row.getValue('id') as string;
            return <div className="font-mono text-xs">{id.slice(0, 8)}...</div>;
        },
    },
    {
        accessorKey: 'description',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Application Details" />
        ),
        cell: ({ row }) => {
            const description = row.getValue('description') as string;
            const lines = description?.split('\n') || [];
            const nameLine = lines.find(line => line.startsWith('Name:'));
            const emailLine = lines.find(line => line.startsWith('Email:'));
            const name = nameLine?.replace('Name: ', '') || 'Unknown';
            const email = emailLine?.replace('Email: ', '') || 'Unknown';

            return (
                <div className="space-y-1">
                    <div className="font-medium">{name}</div>
                    <div className="text-sm text-muted-foreground">{email}</div>
                </div>
            );
        },
    },
    {
        accessorKey: 'point',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Points" />
        ),
        cell: ({ row }) => {
            const points = row.getValue('point') as number;
            return <div className="font-mono">{points || 0}</div>;
        },
    },
    {
        accessorKey: 'verify',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            const verify = row.getValue('verify') as boolean;
            const reviewed = row.original.reviewed;

            if (!reviewed) {
                return (
                    <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Pending
                    </Badge>
                );
            }

            if (verify) {
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
        },
    },
    {
        accessorKey: 'created_at',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Applied" />
        ),
        cell: ({ row }) => {
            const date = row.getValue('created_at') as string;
            return <div className="text-sm">{new Date(date).toLocaleDateString()}</div>;
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
