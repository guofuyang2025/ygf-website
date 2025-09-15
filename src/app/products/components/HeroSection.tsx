'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'
import PageBanner from '@/components/layout/PageBanner'

export function HeroSection() {
    const t = useI18n()

    const backgroundImage = [
        {
            src: "/about/title.png",
            alt: "Background Image"
        },
    ]
    
    return (
            <PageBanner title={t.productsPage.hero.title} backgroundImage={backgroundImage[0]} />
            
    );
}


