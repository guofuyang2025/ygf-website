'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'

export function HeroSection() {
    const t = useI18n()

    return (
        <section className="bg-primary/80 py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)]">
                    {t.productsPage.hero.title}
                </h1>
                <p className="text-xl text-white dark:text-black max-w-3xl mx-auto leading-relaxed [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.3)] dark:[text-shadow:_0_2px_4px_rgb(255_255_255_/_0.3)]">
                    {t.productsPage.hero.subtitle}
                </p>
            </div>
        </section>
    );
}


