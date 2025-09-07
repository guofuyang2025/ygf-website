'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useI18n } from '@/lib/contexts/LanguageContent'

export function ProductGridSkeleton() {
    const t = useI18n()

    return (
        <section className="py-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">{t.productsPage.freshIngredients.title}</h2>
                <p className="text-lg text-muted-foreground">{t.productsPage.freshIngredients.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                        <div className="aspect-video bg-muted animate-pulse" />
                        <CardHeader className="pb-3">
                            <div className="h-6 bg-muted rounded animate-pulse mb-2" />
                            <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="h-5 bg-muted rounded animate-pulse w-1/2" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}


