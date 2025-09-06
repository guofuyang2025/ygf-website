'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'
import { Carousel, CarouselRef } from '@/components/ui/carousel'
import { useI18n } from '@/lib/contexts/LanguageContent'
import { useState, useRef } from 'react'
import Link from 'next/link'

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

export default function HomePage() {
  const t = useI18n()
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<CarouselRef>(null)

  // 轮播图图片数据
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
      alt: "Business Technology"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
      alt: "Team Collaboration"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
      alt: "Digital Solutions"
    }
  ]

  // 处理指示器点击
  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index)
    // 通知轮播图组件切换到指定索引
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section with Background Carousel */}
        <section className="relative h-screen w-full">
          {/* 轮播图背景 */}
          <div className="absolute inset-0 w-full h-full">
            <Carousel
              ref={carouselRef}
              images={carouselImages}
              autoPlay={true}
              interval={4000}
              showArrows={false}
              showIndicators={false}
              className="w-full h-full"
              onSlideChange={setCurrentSlide}
            />
            {/* 主题色遮罩层 - 只影响图片 */}
            <div className="absolute inset-0 bg-primary/30"></div>
          </div>

          {/* 内容覆盖层 - 高z-index，不受遮罩影响 */}
          <div className="relative z-30 flex items-center justify-center h-full w-full">
            <div className="text-center px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(var(--primary)_/_0.4)]">
                {t.homePage.hero.title}
              </h1>
              <p className="text-xl md:text-3xl text-white dark:text-black mb-4 max-w-4xl mx-auto [text-shadow:_0_2px_4px_rgb(var(--primary)_/_0.3)]">
                {t.homePage.hero.subtitle}
              </p>
              <p className="text-lg md:text-xl text-white dark:text-black mb-8 max-w-3xl mx-auto [text-shadow:_0_2px_4px_rgb(var(--primary)_/_0.3)]">
                {t.homePage.hero.extraText}
              </p>

            </div>
          </div>

          {/* 轮播指示器 - 放在底部 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex justify-center gap-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 ${index === currentSlide
                    ? 'bg-white shadow-lg scale-110'
                    : 'bg-white/50 hover:bg-white/70'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 中间部分 - 两个区块 */}
        <section className="py-20 bg-primary/80">
          <div className="w-full px-4 lg:px-8">
            <div className="w-full space-y-12">
              {/* 品牌区块 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row w-full">
                  <div className="lg:w-2/3">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop"
                        alt="Brand showcase"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-2xl lg:text-3xl font-semibold text-foreground">
                        {t.homePage.brand.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-base lg:text-lg whitespace-pre-line">
                        {t.homePage.brand.description}
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/about">
                          {t.homePage.brand.ctaButton}
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* 产品区块 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row w-full">
                  <div className="lg:w-2/3">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                        alt="Product showcase"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-2xl lg:text-3xl font-semibold text-foreground">
                        {t.homePage.products.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-base lg:text-lg whitespace-pre-line">
                        {t.homePage.products.description}
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/products">
                          {t.homePage.products.ctaButton}
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 客户评价部分 */}
        <section className="py-20 bg-muted/30">
          <div className="w-full px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">{t.homePage.testimonials.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.homePage.testimonials.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {t.homePage.testimonials.items.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  feedback={testimonial.feedback}
                  avatarSrc={`https://i.pravatar.cc/100?img=${index + 1}`}
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
