'use client'

import { Separator } from '@/components/ui/separator'
import { useI18n } from '@/lib/contexts/LanguageContent'

export default function Footer() {
  const t = useI18n()
  
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-lg mr-3"></div>
          <span className="text-xl font-bold text-foreground">Your Company</span>
        </div>
        <p className="text-muted-foreground mb-4">
          Building the future, one line of code at a time
        </p>
        <Separator className="my-6 max-w-md mx-auto" />
        <p className="text-sm text-muted-foreground">
          © 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
