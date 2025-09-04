# Frontend Template

A modern Next.js 15.5.0 frontend template with Supabase authentication, internationalization, and a beautiful carousel component.

## Features

### 🌍 Internationalization (i18n)
- **Bilingual Support**: English and Chinese (中文)
- **Language Context**: Easy language switching with `useLanguage()` hook
- **Content Management**: Centralized content in `LanguageContent.tsx`
- **Language Toggle**: Available in the header with a globe icon

### 🎠 Carousel Component
- **Full-screen Background**: Perfect for hero sections
- **Auto-play**: Configurable interval (default: 5 seconds)
- **Manual Control**: Left/right arrow navigation
- **Indicators**: Clickable dots for direct slide access
- **Responsive**: Adapts to different screen sizes
- **Customizable**: Show/hide arrows and indicators

### 🔐 Authentication
- **Supabase Integration**: Secure user authentication
- **Protected Routes**: Middleware-based route protection
- **User Management**: Profile and dashboard functionality

### 🎨 UI Components
- **Shadcn/ui**: Modern, accessible component library
- **Dark/Light Theme**: Theme switching with system preference detection
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd FrontendTemplate

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
pnpm dev
```

## Usage

### Language Switching
```tsx
import { useLanguage } from '@/lib/contexts/LanguageContext'

function MyComponent() {
  const { language, toggleLanguage } = useLanguage()
  
  return (
    <button onClick={toggleLanguage}>
      Current: {language === 'en' ? 'English' : '中文'}
    </button>
  )
}
```

### Using Internationalized Content
```tsx
import { useI18n } from '@/lib/contexts/LanguageContent'

function MyComponent() {
  const t = useI18n()
  
  return (
    <h1>{t.homePage.hero.title}</h1>
    <p>{t.homePage.hero.subtitle}</p>
  )
}
```

### Carousel Component
```tsx
import { Carousel } from '@/components/ui/carousel'

const images = [
  { src: '/image1.jpg', alt: 'Description 1' },
  { src: '/image2.jpg', alt: 'Description 2' },
  { src: '/image3.jpg', alt: 'Description 3' }
]

function HeroSection() {
  return (
    <section className="h-screen relative">
      <Carousel
        images={images}
        autoPlay={true}
        interval={4000}
        showArrows={false}
        showIndicators={true}
        className="h-full"
      />
      
      {/* Overlay content */}
      <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
        <h1>Your Title Here</h1>
      </div>
    </section>
  )
}
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx          # Home page with carousel
│   └── layout.tsx        # Root layout with providers
├── components/
│   ├── ui/               # Reusable UI components
│   │   └── carousel.tsx  # Carousel component
│   └── layout/           # Layout components
├── lib/
│   └── contexts/         # React contexts
│       ├── LanguageContext.tsx    # Language state management
│       └── LanguageContent.tsx    # Bilingual content
└── types/                # TypeScript type definitions
```

## Customization

### Adding New Languages
1. Update the `SupportedLanguage` type in `LanguageContext.tsx`
2. Add new language content in `LanguageContent.tsx`
3. Update the language toggle logic

### Customizing Carousel
- Modify transition effects in `carousel.tsx`
- Adjust timing and animations
- Customize arrow and indicator styles

### Adding New Content
- Extend the `Strings` type in `LanguageContent.tsx`
- Add content for both languages
- Use the `useI18n()` hook in your components

## Environment Variables

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Optional: Sentry for error tracking
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm format       # Format code with Prettier
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
