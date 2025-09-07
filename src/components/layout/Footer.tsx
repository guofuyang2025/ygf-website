'use client'

import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

function WeChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.5 4C5.91 4 3 6.35 3 9.25c0 1.62.88 3.06 2.26 4.09l-.47 1.77a.6.6 0 0 0 .83.7l2.19-.98c.52.12 1.06.19 1.62.19 3.59 0 6.5-2.35 6.5-5.25S13.09 4 9.5 4Zm-2 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
      <path d="M20.5 10.5c0-2.62-2.69-4.75-6-4.75.98.86 1.5 2 1.5 3.25 0 3.59-3.36 6.25-7.5 6.25-.18 0-.36 0-.53-.02C8.77 17.13 11.27 19 14.5 19c.49 0 .97-.05 1.43-.14l1.94.87a.6.6 0 0 0 .83-.7l-.42-1.6C19.63 16.51 20.5 15.09 20.5 13.5Zm-6.75 1.25a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm3 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z"/>
    </svg>
  )
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 3a5.5 5.5 0 0 0 .1 1.11 5.68 5.68 0 0 0 3.34 3.98c.38.16.77.28 1.16.36V11a8.9 8.9 0 0 1-4.5-1.44v5.72c0 3.27-2.64 5.92-5.9 5.92S4.9 18.55 4.9 15.28c0-3.27 2.64-5.92 5.9-5.92.34 0 .68.03 1 .09v3.05a3.1 3.1 0 0 0-1-.18 2.83 2.83 0 1 0 2.83 2.83V3h2.87Z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-primary py-12 px-4 sm:px-6 lg:px-8 text-white">
      {/* 灰白色遮罩层 */}
      <div className="absolute inset-0 bg-white/20"></div>

      <div className="container mx-auto relative z-10">
        {/* Top Section: Company Info, Contact, Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Left Section: Company Name & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              YangGuoFu
            </h2>
            <p className="text-sm leading-relaxed max-w-xs text-white/90">
              Yangguofu Malatang is a restaurant chain that specializes in麻辣烫. It was founded in 2000, and is headquartered in Harbin, China.
            </p>
          </div>

          {/* Middle Section: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-white/90">
                <Phone className="h-4 w-4 text-white/80" />
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center gap-2 text-white/90">
                <Mail className="h-4 w-4 text-white/80" />
                <span>guofuyang2025@gmail.com</span>
              </p>
              <p className="flex items-center gap-2 text-white/90">
                <MapPin className="h-4 w-4 text-white/80" />
                <span>9/1-3 Metro Pde, Mawson Lakes SA 5095,Australia</span>
              </p>
            </div>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="WeChat" className="text-white/80 hover:text-white transition-colors">
                <WeChatIcon className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="TikTok" className="text-white/80 hover:text-white transition-colors">
                <TikTokIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* <Separator className="my-8 bg-white/20" /> */}

        {/* Bottom Bar: Copyright, Links, Language Selector */}
        {/* <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-sm">
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-white/80">
              © 2025 YangGuoFu. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link href="#" className="hover:text-white text-white/80 transition-colors">
                Sitemap
              </Link>
              <Link href="#" className="hover:text-white text-white/80 transition-colors">
                Terms and Privacy
              </Link>
              <Link href="#" className="hover:text-white text-white/80 transition-colors">
                Security
              </Link>
              <Link href="#" className="hover:text-white text-white/80 transition-colors">
                Cookie Settings
              </Link>
            </nav>
          </div>

          
          <div className="flex items-center gap-2 text-white/80">
            <Globe className="h-4 w-4" />
            <span>Australia - EN</span>
            
          </div>
        </div> */}
      </div>
    </footer>
  );
}
