'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useI18n } from '@/lib/contexts/LanguageContent'

export function SpecialCombos() {
    const t = useI18n()

    return (
        <section className="py-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">{t.productsPage.specialCombos.title}</h2>
                <p className="text-lg text-muted-foreground">{t.productsPage.specialCombos.subtitle}</p>
            </div>

            <Card className="hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row gap-0">
                    <div className="lg:w-1/2">
                        <div className="aspect-video lg:aspect-square overflow-hidden">
                            <img
                                src="/products/combo.png"
                                alt="Special Combos"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                        <CardHeader className="p-0 pb-4">
                            <CardTitle className="text-2xl lg:text-3xl font-semibold text-foreground">
                                {t.productsPage.specialCombos.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 space-y-4">
                            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                                {t.productsPage.specialCombos.description}
                            </p>
                            <div className="flex gap-2">
                                <Badge variant="outline">{t.productsPage.specialCombos.limitedTime}</Badge>
                                <Badge variant="outline">{t.productsPage.specialCombos.chefsChoice}</Badge>
                            </div>
                        </CardContent>
                    </div>
                </div>
            </Card>
        </section>
    );
}


