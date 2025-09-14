'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { useI18n } from '@/lib/contexts/LanguageContent'
import { useState, useEffect } from 'react'

interface Testimonial {
  name: string
  feedback: string
  avatarSrc: string
  rating: number
}

interface RotatingTestimonialsProps {
  className?: string
}

export default function RotatingTestimonials({ className = '' }: RotatingTestimonialsProps) {
  const t = useI18n()
  const testimonials: Testimonial[] = t.homePage.testimonials.items
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const currentTestimonial = testimonials[currentTestimonialIndex]

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-16 ${className}`}>
      {/* Left side - Rotating avatars in triangle formation */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative w-96 h-96">
          {/* Connecting circle */}
          <div className="absolute inset-0 rounded-full border border-primary/30"></div>

          {/* Central avatar - matches current testimonial */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Avatar className="w-24 h-24 border-4 border-white shadow-xl">
              <AvatarImage src={currentTestimonial.avatarSrc} alt={currentTestimonial.name} />
              <AvatarFallback className="text-2xl font-semibold bg-primary text-primary-foreground">
                {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Rotating circle with fixed avatars */}
          <div className="absolute inset-0 animate-spin-slow">
            {testimonials.map((testimonial, index) => {
              // Calculate positions for equilateral triangle
              const angle = (index * 120) - 90 // Start from top (-90 degrees)
              const radius = 190 // Distance from center
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <div
                  key={index}
                  className="absolute w-20 h-20 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <Avatar className="w-20 h-20 border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300 animate-spin-reverse">
                    <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
                    <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Right side - Current testimonial */}
      <div className="flex-1 flex justify-center lg:justify-start">
        <Card className="w-full max-w-md hover:shadow-lg transition-all duration-500 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-primary/20">
              <AvatarImage src={currentTestimonial.avatarSrc} alt={currentTestimonial.name} />
              <AvatarFallback className="text-2xl font-semibold bg-primary text-primary-foreground">
                {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex justify-center items-center gap-1 mb-3">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <CardTitle className="text-xl font-semibold text-foreground">
              {currentTestimonial.name}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center">
            <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
              "{currentTestimonial.feedback}"
            </blockquote>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex
                      ? 'bg-primary scale-125'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`View testimonial from ${testimonials[index].name}`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
