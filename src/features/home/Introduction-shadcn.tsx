'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'

export default function Introduction() {
    const t = useI18n()

    return (
        <section className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t.introduction.title}
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {t.introduction.body}
                    </p>
                </div>
            </div>
        </section>
    )
}
