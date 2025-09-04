'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'

export default function Banner() {
    const t = useI18n()

    return (
        <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {t.banner.title}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t.banner.subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}
