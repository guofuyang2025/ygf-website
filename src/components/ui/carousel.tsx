'use client'

import React, { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface CarouselProps {
  images: Array<{
    src: string
    alt: string
  }>
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showIndicators?: boolean
  className?: string
  onSlideChange?: (index: number) => void
}

export interface CarouselRef {
  goToSlide: (index: number) => void
}

export const Carousel = forwardRef<CarouselRef, CarouselProps>(({
  images,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showIndicators = true,
  className,
  onSlideChange
}, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
    onSlideChange?.(newIndex)
  }, [currentIndex, images.length, onSlideChange])

  const prevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
    onSlideChange?.(newIndex)
  }, [currentIndex, images.length, onSlideChange])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    onSlideChange?.(index)
  }, [onSlideChange])

  // 暴露方法给父组件
  useImperativeHandle(ref, () => ({
    goToSlide
  }), [goToSlide])

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, nextSlide])

  // 当组件挂载时，通知父组件初始状态
  useEffect(() => {
    onSlideChange?.(currentIndex)
  }, []) // 只在挂载时执行一次

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={cn('relative w-full h-full', className)}>
      {/* 轮播容器 */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 transition-opacity duration-500 ease-in-out',
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* 左右箭头 */}
      {showArrows && images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* 指示器 */}
      {showIndicators && images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                'w-3 h-3 rounded-full transition-colors duration-200',
                index === currentIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
})

Carousel.displayName = 'Carousel'
