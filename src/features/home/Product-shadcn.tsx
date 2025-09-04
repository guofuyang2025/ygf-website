'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useI18n } from '@/lib/contexts/LanguageContent'

export default function Product() {
    const t = useI18n()

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                    {t.product.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[1, 2, 3].map((id) => (
                        <Card key={id} className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">
                                    {t.product.cardTitle(id)}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {t.product.cardBody}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
