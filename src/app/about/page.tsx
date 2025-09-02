'use client'

import Header from '@/features/home/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useI18n } from '@/lib/contexts/LanguageContent'

export default function AboutPage() {
    const t = useI18n()

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                            {t.aboutPage.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            {t.aboutPage.hero.subtitle}
                        </p>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            {t.aboutPage.hero.description}
                        </p>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20">
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
                                        <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Alice Johnson" />
                                        <AvatarFallback className="text-lg">AJ</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">Alice Johnson</h3>
                                        <p className="text-muted-foreground">Chief Executive Officer</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Visionary leader with 15+ years of experience in tech innovation and strategic growth. Passionate about building teams that create exceptional products.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Team Member 2 */}
                            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Michael Chen" />
                                        <AvatarFallback className="text-lg">MC</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">Michael Chen</h3>
                                        <p className="text-muted-foreground">Lead Developer</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Full-stack developer extraordinaire specializing in React, Node.js, and cloud architecture. Loves solving complex problems with elegant code.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Team Member 3 */}
                            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src="https://i.pravatar.cc/150?img=13" alt="Sarah Williams" />
                                        <AvatarFallback className="text-lg">SW</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">Sarah Williams</h3>
                                        <p className="text-muted-foreground">UX Designer</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Creative designer focused on user-centered design principles. Transforms complex ideas into intuitive, beautiful user experiences.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Story Section 1 - Left Image, Right Text */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="https://picsum.photos/400/300?random=1"
                                    alt="Our Journey Begins"
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl font-bold text-foreground mb-6">{t.aboutPage.story.journey.title}</h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    {t.aboutPage.story.journey.description1}
                                </p>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    {t.aboutPage.story.journey.description2}
                                </p>
                                <Button variant="outline" className="group">
                                    {t.aboutPage.story.journey.button}
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story Section 2 - Right Image, Left Text */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">{t.aboutPage.story.innovation.title}</h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    {t.aboutPage.story.innovation.description1}
                                </p>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    {t.aboutPage.story.innovation.description2}
                                </p>
                                <Button variant="outline" className="group">
                                    {t.aboutPage.story.innovation.button}
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                                </Button>
                            </div>
                            <div>
                                <img
                                    src="https://picsum.photos/400/300?random=2"
                                    alt="Innovation at Our Core"
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision/Mission Section */}
                <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-950/20 dark:to-purple-950/20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-foreground mb-8">{t.aboutPage.mission.title}</h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                                {t.aboutPage.mission.description1}
                            </p>
                            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                                {t.aboutPage.mission.description2}
                            </p>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {t.aboutPage.mission.description3}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-foreground mb-4">{t.aboutPage.stats.title}</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {t.aboutPage.stats.subtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Stat 1 */}
                            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-8 pb-6">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                                    <p className="text-muted-foreground">Years Experience</p>
                                </CardContent>
                            </Card>

                            {/* Stat 2 */}
                            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-8 pb-6">
                                    <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                                    <p className="text-muted-foreground">Happy Clients</p>
                                </CardContent>
                            </Card>

                            {/* Stat 3 */}
                            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-8 pb-6">
                                    <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                                    <p className="text-muted-foreground">Support Available</p>
                                </CardContent>
                            </Card>

                            {/* Stat 4 */}
                            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-8 pb-6">
                                    <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                                    <p className="text-muted-foreground">Projects Delivered</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">{t.aboutPage.cta.title}</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            {t.aboutPage.cta.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
                                {t.aboutPage.cta.startProject}
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                                {t.aboutPage.cta.contactUs}
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
