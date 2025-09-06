import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import PublicHeader from '@/components/layout/public-header';
import Footer from '@/components/layout/Footer';
import { getItemsWithParsedData } from '@/db/items';
import { ItemWithData } from '@/types/items';

// 模拟菜单数据
const mockMenuItems = [
    {
        id: 1,
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon with herbs and lemon",
        price: 28.50,
        image: "https://picsum.photos/200/150?random=1"
    },
    {
        id: 2,
        name: "Beef Tenderloin",
        description: "Premium cut with red wine reduction sauce",
        price: 34.00,
        image: "https://picsum.photos/200/150?random=2"
    },
    {
        id: 3,
        name: "Vegetarian Pasta",
        description: "Fresh vegetables with homemade pasta",
        price: 22.50,
        image: "https://picsum.photos/200/150?random=3"
    },
    {
        id: 4,
        name: "Chocolate Soufflé",
        description: "Warm chocolate dessert with vanilla ice cream",
        price: 12.00,
        image: "https://picsum.photos/200/150?random=4"
    }
];

// 特色产品组件
async function FeaturedProducts() {
    try {
        const items = await getItemsWithParsedData();
        const featuredItems = items.slice(0, 3);

        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={item.image_url || `https://picsum.photos/300/200?random=${item.id}`}
                                alt={item.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            <CardDescription className="line-clamp-2">
                                {item.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                            {item.price && (
                                <p className="text-lg font-semibold text-green-600">
                                    ${item.price.toFixed(2)}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    } catch (error) {
        console.error('Error fetching featured products:', error);
        return (
            <div className="text-center py-8">
                <p className="text-muted-foreground">Unable to load featured products</p>
            </div>
        );
    }
}

// 加载状态组件
function FeaturedProductsSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                    <div className="aspect-video bg-muted animate-pulse" />
                    <CardHeader className="pb-3">
                        <div className="h-6 bg-muted rounded animate-pulse mb-2" />
                        <div className="h-4 bg-muted rounded animate-pulse" />
                    </CardHeader>
                    <CardContent className="pt-0">
                        <div className="h-6 bg-muted rounded animate-pulse w-20" />
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* 添加Header */}
            <PublicHeader />

            {/* 主要内容 */}
            <main className="container mx-auto px-4 py-8">
                {/* 顶部标题部分 */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        Our Signature Dishes
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore our most popular dishes and menu highlights, crafted with passion and the finest ingredients
                    </p>
                </div>

                {/* 特色产品部分 */}
                <section className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold mb-2">Featured Dishes</h2>
                        <p className="text-muted-foreground">
                            Discover our most loved creations from the kitchen
                        </p>
                    </div>

                    <Suspense fallback={<FeaturedProductsSkeleton />}>
                        <FeaturedProducts />
                    </Suspense>
                </section>

                <Separator className="my-12" />

                {/* 菜单展示部分 */}
                <section className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold mb-2">Chef's Special</h2>
                        <p className="text-muted-foreground">
                            A seasonal highlight prepared with fresh ingredients
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* 左侧大图 */}
                        <div className="space-y-4">
                            <div className="aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="https://picsum.photos/600/400?random=10"
                                    alt="Chef's Special"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* 右侧菜单项 */}
                        <div className="space-y-4">
                            {mockMenuItems.map((item) => (
                                <Card key={item.id} className="flex gap-4 p-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-semibold text-lg">{item.name}</h3>
                                            <span className="font-semibold text-green-600">
                                                ${item.price.toFixed(2)}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* 页脚 */}
            <Footer />
        </div>
    );
}
