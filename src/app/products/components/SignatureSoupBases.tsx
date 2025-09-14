'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useI18n } from '@/lib/contexts/LanguageContent'

export function SignatureSoupBases() {
    const t = useI18n()

    const signatureSoupBases = [
        {
            id: 1,
            name: t.productsPage.soupBases.classicBoneBroth.name,
            description: t.productsPage.soupBases.classicBoneBroth.description,
            image: '/home/lunbo1.png',
            isLeft: true
        },
        {
            id: 2,
            name: t.productsPage.soupBases.tomatoBase.name,
            description: t.productsPage.soupBases.tomatoBase.description,
            image: '/home/lunbo2.png',
            isLeft: false
        },
        {
            id: 3,
            name: t.productsPage.soupBases.dryMixMala.name,
            description: t.productsPage.soupBases.dryMixMala.description,
            image: '/home/lunbo3.png',
            isLeft: true
        }
    ]

    return (
        <section className="py-8 ">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">{t.productsPage.signatureSoupBases.title}</h2>
                <p className="text-lg text-muted-foreground">{t.productsPage.signatureSoupBases.subtitle}</p>
            </div>

            <div className="space-y-8">
                {signatureSoupBases.map((base) => (
                    <Card key={base.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className={`flex flex-col ${base.isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                            <div className="lg:w-1/2">
                                <div className="aspect-video lg:aspect-[3/2] overflow-hidden">
                                    <img
                                        src={base.image}
                                        alt={base.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 p-4 lg:p-6 flex flex-col justify-center">
                                <CardHeader className="p-0 pb-3">
                                    <CardTitle className="text-xl lg:text-2xl font-semibold text-foreground">
                                        {base.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0 space-y-3">
                                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                                        {base.description}
                                    </p>
                                    <Badge variant="outline" className="w-fit">
                                        {t.productsPage.signatureSoupBases.signatureRecipe}
                                    </Badge>
                                </CardContent>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}


