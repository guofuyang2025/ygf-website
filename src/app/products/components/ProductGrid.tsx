'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ItemWithData } from '@/types/items'
import { useI18n } from '@/lib/contexts/LanguageContent'

export function ProductGrid({ items }: { items: ItemWithData[] }) {
    const t = useI18n()

    return (
        <section className="py-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">{t.productsPage.freshIngredients.title}</h2>
                <p className="text-lg text-muted-foreground">{t.productsPage.freshIngredients.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={item.image_url || `https://picsum.photos/300/200?random=${item.id}`}
                                alt={item.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {item.description}
                            </p>
                        </CardHeader>
                        <CardContent className="pt-0">
                            {item.price && (
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold text-primary">
                                        ${item.price.toFixed(2)}
                                    </span>
                                    <Badge variant="secondary">{t.productsPage.freshIngredients.freshDaily}</Badge>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}


