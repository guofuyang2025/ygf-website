
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
    ProductGridSkeleton,
    IngredientsSupplyChain
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

const backgroundImage = [
    {
        src: "/products/title.png",
        alt: "Background Image"
    },
]

export default function ProductsPage() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-background">
                {/* 添加Header */}
                <PublicHeader />

                {/* Hero Section */}
                <HeroSection />

                {/* 主要内容 */}
                <main className="container mx-auto px-4 lg:px-8 xl:px-16 py-8 bg-black/5">
                    {/* 招牌汤底部分 */}
                    <SignatureSoupBases />

                    {/* <Separator className="my-10 bg-black/10" /> */}
                </main>
                <section className="bg-gradient-to-b from-black/90 from-95% to-black/70 to-100%">
                    {/* Special Combos Section */}
                    <SpecialCombos />


                    {/* <Separator className="my-12 bg-black/10" /> */}

                    {/* 产品网格部分 */}
                    {/* <Suspense fallback={<ProductGridSkeleton />}>
                        <ProductGridServer />
                    </Suspense> */}
                </section>
                {/* Ingredients supply chain */}
                <section className="bg-gradient-to-b from-black/70 from-0% to-black/0 to-7%">
                <IngredientsSupplyChain />

</section>

                {/* 页脚 */}
                <Footer />
            </div>
        </LanguageProvider>
    );
}