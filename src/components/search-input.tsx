'use client';
import { useKBar } from 'kbar';
import { IconSearch } from '@tabler/icons-react';
import { Button } from './ui/button';

export default function SearchInput() {
  const { query } = useKBar();
  return (
    <div className='w-full space-y-2'>
      <Button
        variant='outline'
        className='bg-white text-primary border-primary hover:bg-primary hover:text-white dark:bg-black dark:text-white dark:border-white dark:hover:bg-primary dark:hover:text-white transition-colors duration-200 text-muted-foreground relative h-9 w-full justify-start rounded-[0.5rem] text-sm font-normal shadow-none md:w-40 lg:w-64'
        onClick={query.toggle}
      >
        <IconSearch className='mr-2 h-4 w-4' />
        Search...
      </Button>
    </div>
  );
}
