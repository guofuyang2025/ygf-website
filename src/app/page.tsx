'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselRef } from '@/components/ui/carousel'
import { useI18n } from '@/lib/contexts/LanguageContent'
import { useState, useRef } from 'react'
import Link from 'next/link'
import RotatingTestimonials from '@/features/testimonials/RotatingTestimonials'


export default function HomePage() {
  const t = useI18n()
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<CarouselRef>(null)

  // 轮播图图片数据
  const carouselImages = [
    {
      src: "/home/lunbo1.png",
      alt: "轮播图1 - 美食展示"
    },
    {
      src: "/home/lunbo2.png",
      alt: "轮播图2 - 美食展示"
    },
    {
      src: "/home/lunbo3.png",
      alt: "轮播图3 - 美食展示"
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
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 from-60% to-black to-100%"></div>
          </div>

          {/* 内容覆盖层 - 高z-index，不受遮罩影响 */}
          <div className="relative z-30 flex items-center justify-center h-full w-full">
            <div className="text-center px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(var(--primary)_/_0.4)]">
                {t.homePage.hero.title}
              </h1>
              {/* <p className="text-xl md:text-3xl text-white dark:text-black mb-4 max-w-4xl mx-auto [text-shadow:_0_2px_4px_rgb(var(--primary)_/_0.3)]">
                {t.homePage.hero.subtitle}
              </p>
              <p className="text-lg md:text-xl text-white dark:text-black mb-8 max-w-3xl mx-auto [text-shadow:_0_2px_4px_rgb(var(--primary)_/_0.3)]">
                {t.homePage.hero.extraText}
              </p> */}

            </div>
          </div>

          {/* 轮播指示器 - 放在底部 */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-2/3 z-20">
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
          </div> */}
        </section>

        {/* 中间部分 - 两个区块 */}
        <section className="py-20 bg-gradient-to-b from-black from-20% to-primary to-100%">
          <div className="w-full px-4 lg:px-8">
            <div className="w-full mt-5 space-y-12">
              {/* 品牌区块 */}
              <Card className="hover:shadow-lg transition-shadow duration-300 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row w-full">
                  <div className="lg:w-2/3">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                      <img
                        src="/home/brand.png"
                        alt="Brand showcase"
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-2xl lg:text-3xl font-semibold text-black">
                        {t.homePage.brand.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-black lg:text-lg whitespace-pre-line">
                        {t.homePage.brand.description}
                      </p>
                      <Button variant="outline" className="w-full dark:bg-primary/60 dark:text-white hover:bg-primary/80" asChild>
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
                        src="/home/product.png"
                        alt="Product showcase"
                        className="w-full  object-cover"
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
                      <Button variant="outline" className="w-full dark:bg-primary/80 dark:text-white hover:bg-primary/80" asChild>
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

        {/* Customer Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="w-full px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">{t.homePage.testimonials.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.homePage.testimonials.subtitle}
              </p>
            </div>

            <RotatingTestimonials />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
