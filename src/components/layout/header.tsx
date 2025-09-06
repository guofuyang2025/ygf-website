import React from 'react';
import { SidebarTrigger } from '../ui/sidebar';
import { Separator } from '../ui/separator';
import { Breadcrumbs } from '../breadcrumbs';
import SearchInput from '../search-input';
import { UserNav } from './user-nav';
import { ModeToggle } from './ThemeToggle/theme-toggle';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-hasas-data-[collapsible=icon]/sidebar-wrapper:h-12'>
      <div className='flex items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' />
        <Separator orientation='vertical' className='mr-2 h-4' />
        <Breadcrumbs />
      </div>

      <div className='flex items-center gap-2 px-4'>
        {/* <div className='hidden md:flex'>
          <SearchInput />
        </div> */}
        <Button
          asChild
          variant="outline"
          className="bg-white text-primary border-primary hover:bg-primary hover:text-white dark:bg-black dark:text-white dark:border-white dark:hover:bg-primary dark:hover:text-white transition-colors duration-200"
        >
          <Link href="/">
            Back Home
          </Link>
        </Button>
        <UserNav />
        <ModeToggle />
      </div>
    </header>
  );
}
