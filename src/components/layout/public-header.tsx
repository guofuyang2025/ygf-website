'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { UserNav } from './user-nav'
import { ModeToggle } from './ThemeToggle/theme-toggle'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { useI18n } from '@/lib/contexts/LanguageContent'
import { useAuth } from '@/lib/contexts/AuthContext'
import { useState, useEffect } from 'react'
import {
    Globe,
    LogIn,
    Menu,
    X
} from 'lucide-react'
import Image from 'next/image'

export default function PublicHeader() {
    const { language, toggleLanguage } = useLanguage()
    const t = useI18n()
    const { user } = useAuth()
    const [mounted, setMounted] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // 防止水合错误
    useEffect(() => {
        setMounted(true)
    }, [])

    // 在客户端水合完成前显示加载状态
    if (!mounted) {
        return (
            <header className="sticky top-0 z-50 w-full border-b bg-white/70 dark:bg-black/50 backdrop-blur-md">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg"></div>
                            <span className="text-xl font-bold text-primary dark:text-white">
                                {t.header.siteTitle}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <UserNav />
                            <ModeToggle />
                            {/* 手机端菜单按钮 */}
                            <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" className="md:hidden text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10">
                                        {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuItem asChild>
                                        <Link href="/about" className="w-full">{t.header.about}</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/products" className="w-full">{t.header.products}</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/store" className="w-full">{t.header.store}</Link>
                                    </DropdownMenuItem>
                                    
                                    <DropdownMenuItem asChild>
                                        <Link href="/franchise" className="w-full">{t.header.franchise}</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/careers" className="w-full">{t.header.careers}</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/contact" className="w-full">{t.header.contact}</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/membership" className="w-full">{t.header.membership}</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="block h-full">
                            <Image src="/logo.png" alt="YGF Australia" className='h-full object-cover' width={165} height={165} />
                        </Link>
                        {/* <Link href="/" className="text-xl font-bold text-primary dark:text-white hover:text-primary/80 dark:hover:text-white/80 transition-colors">
                            {t.header.siteTitle}
                        </Link> */}
                        <Separator orientation="vertical" className="h-4 bg-primary/20 dark:bg-white/20" />
                        <nav className="hidden md:flex items-center gap-2">
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/about">{t.header.about}</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/products">{t.header.products}</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/store">{t.header.store}</Link>
                            </Button>
                            
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/franchise">{t.header.franchise}</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/careers">{t.header.careers}</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/contact">{t.header.contact}</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/membership">{t.header.membership}</Link>
                            </Button>
                        </nav>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                            <Globe className="w-4 h-4 mr-2" />
                            {t.header.language}
                        </Button> */}

                        {!user && (
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/auth/sign-in">
                                    <LogIn className="w-4 h-4 mr-2" />
                                    {t.header.login}
                                </Link>
                            </Button>
                        )}

                        <UserNav />
                        {/* <ModeToggle /> */}

                        {/* 手机端菜单按钮 */}
                        <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="md:hidden text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10">
                                    {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuItem asChild>
                                    <Link href="/about" className="w-full">{t.header.about}</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/products" className="w-full">{t.header.products}</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/store" className="w-full">{t.header.store}</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/franchise" className="w-full">{t.header.franchise}</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/careers" className="w-full">{t.header.careers}</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/contact" className="w-full">{t.header.contact}</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/membership" className="w-full">{t.header.membership}</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}
