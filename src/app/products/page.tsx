import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import PublicHeader from '@/components/layout/public-header';
import Footer from '@/components/layout/Footer';
import { getItemsWithParsedData } from '@/db/items';
import { ItemWithData } from '@/types/items';

// 招牌汤底数据
const signatureSoupBases = [
    {
        id: 1,
        name: 'Classic Bone Broth',
        description: 'Rich, savory, slow-cooked flavor',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop',
        isLeft: true
    },
    {
        id: 2,
        name: 'Tomato Base',
        description: 'Fresh, tangy, and lighter option',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop',
        isLeft: false
    },
    {
        id: 3,
        name: 'Dry Mix Mala',
        description: 'Bold, aromatic, and spicy without soup',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
        isLeft: true
    }
];

// 招牌汤底组件
function SignatureSoupBases() {
    return (
        <section className="py-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Signature Soup Bases</h2>
                <p className="text-lg text-muted-foreground">Our carefully crafted soup bases that bring authentic flavors to your bowl</p>
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
                                        Signature Recipe
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

// 产品网格组件
async function ProductGrid() {
    try {
        const items = await getItemsWithParsedData();

        return (
            <section className="py-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Our Fresh Ingredients</h2>
                    <p className="text-lg text-muted-foreground">Over 60 fresh ingredients: vegetables, seafood, meats, tofu, noodles, and more — all picked and prepared daily.</p>
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
                                        <Badge variant="secondary">Fresh Daily</Badge>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Error fetching products:', error);
        return (
            <section className="py-8">
                <div className="text-center">
                    <p className="text-muted-foreground">Unable to load products at this time</p>
                </div>
            </section>
        );
    }
}

// 加载骨架屏
function ProductGridSkeleton() {
    return (
        <section className="py-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Fresh Ingredients</h2>
                <p className="text-lg text-muted-foreground">Over 60 fresh ingredients: vegetables, seafood, meats, tofu, noodles, and more — all picked and prepared daily.</p>
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

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* 添加Header */}
            <PublicHeader />

            {/* Hero Section */}
            <section className="bg-primary/80 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)]">
                        Our Signature Dishes
                    </h1>
                    <p className="text-xl text-white dark:text-black max-w-3xl mx-auto leading-relaxed [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.3)] dark:[text-shadow:_0_2px_4px_rgb(255_255_255_/_0.3)]">
                        Explore our most popular dishes and menu highlights, crafted with passion and the finest ingredients
                    </p>
                </div>
            </section>

            {/* 主要内容 */}
            <main className="container mx-auto px-4 py-8">
                {/* 招牌汤底部分 */}
                <SignatureSoupBases />

                <Separator className="my-12" />

                {/* Special Combos Section */}
                <section className="py-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Special Combos & Seasonal Flavors</h2>
                        <p className="text-lg text-muted-foreground">Limited-time chef specials blending authentic Malatang with local Australian inspirations.</p>
                    </div>

                    <Card className="hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col lg:flex-row gap-0">
                            <div className="lg:w-1/2">
                                <div className="aspect-video lg:aspect-square overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop"
                                        alt="Special Combos"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                                <CardHeader className="p-0 pb-4">
                                    <CardTitle className="text-2xl lg:text-3xl font-semibold text-foreground">
                                        Chef's Special Combinations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0 space-y-4">
                                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                                        Experience unique flavor combinations created by our master chefs, featuring seasonal ingredients and innovative cooking techniques that blend traditional Malatang with modern Australian culinary influences.
                                    </p>
                                    <div className="flex gap-2">
                                        <Badge variant="outline">Limited Time</Badge>
                                        <Badge variant="outline">Chef's Choice</Badge>
                                    </div>
                                </CardContent>
                            </div>
                        </div>
                    </Card>
                </section>

                <Separator className="my-12" />

                {/* 产品网格部分 */}
                <Suspense fallback={<ProductGridSkeleton />}>
                    <ProductGrid />
                </Suspense>
            </main>

            {/* 页脚 */}
            <Footer />
        </div>
    );
}