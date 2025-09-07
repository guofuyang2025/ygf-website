import { Suspense } from 'react';
import { Separator } from '@/components/ui/separator';
import PublicHeader from '@/components/layout/public-header';
import Footer from '@/components/layout/Footer';
import { getItemsWithParsedData } from '@/db/items';
import { LanguageProvider } from '@/lib/contexts/LanguageContext';
import {
    HeroSection,
    SignatureSoupBases,
    SpecialCombos,
    ProductGrid,
    ProductGridSkeleton
} from './components';

// 服务器端组件：获取数据
async function ProductGridServer() {
    try {
        const items = await getItemsWithParsedData();
        return <ProductGrid items={items} />;
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

export default function ProductsPage() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-background">
                {/* 添加Header */}
                <PublicHeader />

                {/* Hero Section */}
                <HeroSection />

                {/* 主要内容 */}
                <main className="container mx-auto px-4 py-8">
                    {/* 招牌汤底部分 */}
                    <SignatureSoupBases />

                    <Separator className="my-12" />

                    {/* Special Combos Section */}
                    <SpecialCombos />

                    <Separator className="my-12" />

                    {/* 产品网格部分 */}
                    <Suspense fallback={<ProductGridSkeleton />}>
                        <ProductGridServer />
                    </Suspense>
                </main>

                {/* 页脚 */}
                <Footer />
            </div>
        </LanguageProvider>
    );
}