'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useI18n } from '@/lib/contexts/LanguageContent'
import PageBanner from '@/components/layout/PageBanner'

export default function AboutPage() {
    const t = useI18n()
    const backgroundImage = [
        {
            src: "/about/title.png",
            alt: "Background Image"
        },

    ]

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <PageBanner title={t.aboutPage.hero.title} subtitle={t.aboutPage.hero.subtitle} backgroundImage={backgroundImage[0]} />

                {/* Brand Story Section Title */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-black mb-4">Our Brand Story</h2>
                        <p className="text-xl text-black max-w-2xl mx-auto">
                            Discover the journey that shaped our company and the values that drive us forward
                        </p>
                    </div>
                </section>

                {/* Story Section 1 - Left Image, Right Text */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="/about/mainbuilding.png"
                                    alt="Our Journey Begins"
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl font-bold text-foreground mb-6">{t.aboutPage.story.journey.title}</h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                                    {t.aboutPage.story.journey.description1}
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {t.aboutPage.story.journey.description2}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story Section 2 - Right Image, Left Text */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">{t.aboutPage.story.innovation.title}</h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                                    {t.aboutPage.story.innovation.description1}
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {t.aboutPage.story.innovation.description2}
                                </p>
                            </div>
                            <div>
                                <img
                                    src="/about/ygf_au.png"
                                    alt="Innovation at Our Core"
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-black/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-foreground mb-4">{t.aboutPage.team.title}</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {t.aboutPage.team.subtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Team Member 1 */}
                            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Founder" />
                                        <AvatarFallback className="text-lg">F</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">Founder</h3>
                                        <p className="text-muted-foreground">Yang Guo Fu Malatang</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Visionary leader who created the world's first "drinkable soup malatang" and built YGF from a small Harbin food stall into a global brand with nearly 7,000 restaurants worldwide.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Team Member 2 */}
                            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Co-Founder" />
                                        <AvatarFallback className="text-lg">CF</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">Co-Founder</h3>
                                        <p className="text-muted-foreground">YGF Australia</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Strategic partner bringing over 15 years of Australian F&B industry expertise, including key experience in establishing Spicy World Australia.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Team Member 3 */}
                            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src="https://i.pravatar.cc/150?img=13" alt="Marketing Manager" />
                                        <AvatarFallback className="text-lg">MM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">Marketing Manager</h3>
                                        <p className="text-muted-foreground">YGF Australia</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Marketing expert driving brand awareness and customer engagement across Australia, building the YGF community and expanding our market presence.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                

                {/* Vision/Mission Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-foreground mb-8">{t.aboutPage.mission.title}</h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                                {t.aboutPage.mission.description1}
                            </p>
                            <p className="text-xl text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                                {t.aboutPage.mission.description2}
                            </p>
                            <p className="text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                                {t.aboutPage.mission.description3}
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
