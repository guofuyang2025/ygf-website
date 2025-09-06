'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { UserNav } from './user-nav'
import { ModeToggle } from './ThemeToggle/theme-toggle'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { useI18n } from '@/lib/contexts/LanguageContent'
import { useAuth } from '@/lib/contexts/AuthContext'
import { useState, useEffect } from 'react'
import {
    Globe,
    LogIn
} from 'lucide-react'

export default function PublicHeader() {
    const { language, toggleLanguage } = useLanguage()
    const t = useI18n()
    const { user } = useAuth()
    const [mounted, setMounted] = useState(false)

    // 防止水合错误
    useEffect(() => {
        setMounted(true)
    }, [])

    // 在客户端水合完成前显示加载状态
    if (!mounted) {
        return (
            <header className="sticky top-0 z-50 w-full border-b bg-white/50 dark:bg-black/50 backdrop-blur-md">
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
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/50 dark:bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg"></div>
                        <Link href="/" className="text-xl font-bold text-primary dark:text-white hover:text-primary/80 dark:hover:text-white/80 transition-colors">
                            {t.header.siteTitle}
                        </Link>
                        <Separator orientation="vertical" className="h-4 bg-primary/20 dark:bg-white/20" />
                        <nav className="hidden md:flex items-center gap-2">
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/about">{t.header.about}</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/products">{t.header.products}</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/contact">{t.header.contact}</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/franchise">{t.header.franchise}</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/careers">{t.header.careers}</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/membership">Membership</Link>
                            </Button>
                        </nav>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                            <Globe className="w-4 h-4 mr-2" />
                            {t.header.language}
                        </Button>

                        {!user && (
                            <Button variant="ghost" size="sm" asChild className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                <Link href="/auth/sign-in">
                                    <LogIn className="w-4 h-4 mr-2" />
                                    {t.header.login}
                                </Link>
                            </Button>
                        )}

                        <UserNav />
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}
