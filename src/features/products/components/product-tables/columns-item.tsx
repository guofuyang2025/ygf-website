'use client';
import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import { Product } from '@/constants/data';
import { Column, ColumnDef } from '@tanstack/react-table';
import { CheckCircle2, Text, XCircle } from 'lucide-react';
import Image from 'next/image';
import { CellAction } from './cell-action';
import { CATEGORY_OPTIONS } from './options';
import { Item } from '@/types/database';

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  },
  {
    accessorKey: 'price',
    header: 'Price'
  },
  {
    accessorKey: 'image_url',
    header: 'Image'
  },
  {
    accessorKey: 'created_at',
    header: 'Created At'
  },
  {
    accessorKey: 'updated_at',
    header: 'Updated At'
  }
];
