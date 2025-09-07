'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import Banner from '@/features/home/Banner-shadcn'
import Introduction from '@/features/home/Introduction-shadcn'
import Product from '@/features/home/Product-shadcn'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

// 客户评价卡片组件
function TestimonialCard({
    name,
    feedback,
    avatarSrc,
    rating = 5
}: {
    name: string;
    feedback: string;
    avatarSrc: string;
    rating?: number
}) {
    return (
        <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
            <CardHeader className="pb-4">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={avatarSrc} alt={name} />
                    <AvatarFallback className="text-lg">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex justify-center items-center gap-1 mb-2">
                    {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "{feedback}"
                </p>
            </CardContent>
        </Card>
    )
}

export default function HomePageShadcn() {
    const testimonials = [
        {
            name: "张伟",
            feedback: "这个产品彻底改变了我们公司的运营方式，效率提升了很多！",
            avatarSrc: "https://i.pravatar.cc/100?img=1",
            rating: 5
        },
        {
            name: "李娜",
            feedback: "用户体验非常棒，界面设计简洁美观，功能强大。",
            avatarSrc: "https://i.pravatar.cc/100?img=2",
            rating: 5
        },
        {
            name: "王强",
            feedback: "客服响应迅速，技术支持专业，是值得信赖的合作伙伴。",
            avatarSrc: "https://i.pravatar.cc/100?img=3",
            rating: 5
        }
    ]

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                {/* 使用新的shadcn/ui组件 */}
                <Banner />
                <Introduction />
                <Product />

                {/* 中间部分 - 两个区块 */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                            {/* 左侧区块 - 我们的品牌 */}
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-semibold text-foreground">
                                        我们的品牌
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground leading-relaxed">
                                        我们致力于通过创新技术和卓越服务，为客户创造真正的价值。我们的品牌代表着质量、可靠性和持续创新。
                                    </p>
                                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden">
                                        <img
                                            src="/home/brand.png"
                                            alt="品牌展示"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <Button variant="outline" className="w-full">
                                        了解品牌故事
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* 右侧区块 - 我们的产品 */}
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-semibold text-foreground">
                                        我们的产品
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground leading-relaxed">
                                        从企业级解决方案到个人工具，我们的产品线覆盖了各个领域的需求。每个产品都经过精心设计，确保最佳的用户体验。
                                    </p>
                                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden">
                                        <img
                                            src="/home/product.png"
                                            alt="产品展示"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <Button variant="outline" className="w-full">
                                        查看产品目录
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* 客户评价部分 */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-foreground mb-4">客户评价</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                听听我们的客户怎么说，他们的满意是我们最大的成功
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    name={testimonial.name}
                                    feedback={testimonial.feedback}
                                    avatarSrc={testimonial.avatarSrc}
                                    rating={testimonial.rating}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
