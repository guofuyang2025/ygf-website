'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { UserNav } from './user-nav'
import { ModeToggle } from './ThemeToggle/theme-toggle'
import { useLanguage } from '@/lib/contexts/LanguageContext'
import { useI18n } from '@/lib/contexts/LanguageContent'
import { useAuth } from '@/lib/contexts/AuthContext'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
    Globe,
    LogIn,
    User,
    LayoutDashboard,
    LogOut
} from 'lucide-react'

export default function PublicHeader() {
    const { language, toggleLanguage } = useLanguage()
    const t = useI18n()
    const { user, signOut, loading } = useAuth()
    const [mounted, setMounted] = useState(false)
    const router = useRouter()

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
                        </nav>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                            <Globe className="w-4 h-4 mr-2" />
                            {t.header.language}
                        </Button>

                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-white/10">
                                        <Avatar className="h-8 w-8 bg-white text-primary hover:bg-primary hover:text-white dark:bg-black dark:text-white dark:hover:bg-primary dark:hover:text-white transition-colors duration-200">
                                            <AvatarImage src="" alt={user.email || 'User'} />
                                            <AvatarFallback className="text-xs bg-primary/20 dark:bg-white/20 text-primary dark:text-white">
                                                {user.email?.[0]?.toUpperCase() || 'U'}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <div className="flex items-center justify-start gap-2 p-2">
                                        <div className="flex flex-col space-y-1 leading-none">
                                            <p className="font-medium text-sm">{user.email}</p>
                                        </div>
                                    </div>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.push('/profile')}>
                                        <User className="mr-2 h-4 w-4" />
                                        {t.profileMenu.profile}
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => signOut()}>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        {t.profileMenu.signOut}
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
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
