'use client'

type PageBannerProps = {
  title: string
  subtitle?: string
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="py-20 bg-primary/80">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)]">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-xl text-white dark:text-black max-w-2xl mx-auto [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.3)] dark:[text-shadow:_0_2px_4px_rgb(255_255_255_/_0.3)]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}


