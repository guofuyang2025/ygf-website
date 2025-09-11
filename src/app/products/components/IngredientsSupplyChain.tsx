'use client'

import { Badge } from '@/components/ui/badge'
import { useI18n } from '@/lib/contexts/LanguageContent'

export function IngredientsSupplyChain() {
    const t = useI18n()

    const ingredients: {
        zh: string
        en: string
        descriptionZh: string
        descriptionEn: string
    }[] = [
        {
            zh: '丹麦牛骨粉',
            en: 'Danish Beef Bone Powder',
            descriptionZh: '选用高品质丹麦牛骨粉，口感醇厚，丰富汤底层次。',
            descriptionEn: 'Premium Danish beef bone powder adds body and depth to the broth.'
        },
        {
            zh: '新疆番茄',
            en: 'Xinjiang Tomatoes',
            descriptionZh: '日照充足的新疆番茄，酸甜适中，带来自然鲜香。',
            descriptionEn: 'Sun-kissed Xinjiang tomatoes offer a balanced sweet-tart freshness.'
        },
        {
            zh: '汉源花椒',
            en: 'Hanyuan Sichuan Peppercorn',
            descriptionZh: '四川汉源花椒，麻香浓郁，带来独特的椒麻风味。',
            descriptionEn: 'Aromatic Hanyuan peppercorn delivers signature tingling fragrance.'
        },
        {
            zh: '贵州辣椒',
            en: 'Guizhou Chili',
            descriptionZh: '来自贵州的优质辣椒，香辣爽口，余味悠长。',
            descriptionEn: 'Select Guizhou chilies bring bright, lingering heat and aroma.'
        },
        {
            zh: '豆瓣',
            en: 'Fermented Douban Paste',
            descriptionZh: '经典发酵豆瓣，咸鲜浓香，提味增色。',
            descriptionEn: 'Classic fermented douban adds savory depth and rich color.'
        },
        {
            zh: '井盐',
            en: 'Well Salt',
            descriptionZh: '天然井盐，盐味纯正，点亮食材本味。',
            descriptionEn: 'Natural well salt with clean salinity highlights true flavors.'
        },
        {
            zh: '永川豆豉',
            en: 'Yongchuan Fermented Black Beans',
            descriptionZh: '重庆永川豆豉，发酵香气馥郁，增鲜提香。',
            descriptionEn: 'Yongchuan black beans lend deep, fragrant umami complexity.'
        },
        {
            zh: '胡椒',
            en: 'Black Pepper',
            descriptionZh: '精选胡椒，辛香清透，丰富口感层次。',
            descriptionEn: 'Selected black pepper adds bright, layered spiciness.'
        },
    ]

    return (
        <section className="py-8 mr-5 ml-5">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mt-7 mb-4">Ingredients Supply Chain</h2>
                <p className="text-lg text-muted-foreground">From source control quality, just for a good taste</p>
            </div>

            <div className="w-full overflow-hidden rounded-md">
                <img
                    src="/products/chain.png"
                    alt="Ingredients supply chain"
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Core Ingredients Introduction</h3>
                {/* <p className="text-muted-foreground mb-6">产地，层层把控，风味更稳定</p> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ingredients.map((ing) => (
                        <div key={ing.zh} className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge variant="secondary" className="whitespace-nowrap">{ing.en}</Badge>
                                {/* <span className="text-sm text-muted-foreground">/ {ing.en}</span> */}
                            </div>
                            <div className="space-y-1">
                                {/* <p className="text-sm text-muted-foreground leading-relaxed">{ing.descriptionZh}</p> */}
                                <p className="text-sm text-muted-foreground leading-relaxed">{ing.descriptionEn}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


