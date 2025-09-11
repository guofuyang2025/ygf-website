'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, Target, TrendingUp, Award, HeadphonesIcon, MapPin, Clock } from 'lucide-react'
import CareersEmail, { type CareersEmailRef } from '@/components/form/careers-email'
import { useRef, useState } from 'react'
import { useI18n } from '@/lib/contexts/LanguageContent'
import PageBanner from '@/components/layout/PageBanner'

export default function CareersPage() {
    const t = useI18n()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [submitMessage, setSubmitMessage] = useState('')
    const careersEmailRef = useRef<CareersEmailRef>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')
        setSubmitMessage('')

        try {
            const formData = new FormData(e.currentTarget)

            // Get resume file from the component ref
            const resumeFile = careersEmailRef.current?.getResumeFile()
            if (resumeFile) {
                formData.append('resume', resumeFile)
            }

            const response = await fetch('/api/email/careers', { method: 'POST', body: formData })
            const result = await response.json()

            if (response.ok) {
                setSubmitStatus('success')
                setSubmitMessage(result.message || 'Job application submitted successfully!')
                // Reset form safely
                if (formRef.current) {
                    formRef.current.reset()
                }
                careersEmailRef.current?.resetForm()
            } else {
                setSubmitStatus('error')
                setSubmitMessage(result.message || result.error || 'Failed to submit job application')
            }
        } catch (error) {
            console.error('Error submitting job application:', error)
            setSubmitStatus('error')
            setSubmitMessage('An unexpected error occurred. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const positions = [
        { value: 'front-of-house', label: t.careersPage.currentOpenings.positions.frontOfHouse.title },
        { value: 'kitchen-staff', label: t.careersPage.currentOpenings.positions.kitchenStaff.title },
        { value: 'shift-leader', label: t.careersPage.currentOpenings.positions.shiftLeaders.title },
        { value: 'store-manager', label: t.careersPage.currentOpenings.positions.shiftLeaders.title },
        { value: 'head-office', label: t.careersPage.currentOpenings.positions.headOffice.title },
        { value: 'other', label: 'Other' },
    ]
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
                <PageBanner title={t.careersPage.hero.title} subtitle={t.careersPage.hero.subtitle} backgroundImage={backgroundImage[0]} />

                {/* Why Work With Us Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                {t.careersPage.whyWorkWithUs.title}
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {t.careersPage.whyWorkWithUs.subtitle}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <Building2 className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{t.careersPage.whyWorkWithUs.globalBrand.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.careersPage.whyWorkWithUs.globalBrand.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{t.careersPage.whyWorkWithUs.supportiveEnvironment.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.careersPage.whyWorkWithUs.supportiveEnvironment.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{t.careersPage.whyWorkWithUs.careerDevelopment.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.careersPage.whyWorkWithUs.careerDevelopment.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{t.careersPage.whyWorkWithUs.employeeBenefits.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.careersPage.whyWorkWithUs.employeeBenefits.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Current Openings Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                {t.careersPage.currentOpenings.title}
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {t.careersPage.currentOpenings.subtitle}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <CardTitle className="text-xl font-semibold mb-2">
                                                {t.careersPage.currentOpenings.positions.frontOfHouse.title}
                                            </CardTitle>
                                            <p className="text-muted-foreground mb-4">
                                                {t.careersPage.currentOpenings.positions.frontOfHouse.description}
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Users className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {t.careersPage.currentOpenings.australiaWide}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {t.careersPage.currentOpenings.partTimeFullTime}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            {t.careersPage.currentOpenings.entryLevel}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <CardTitle className="text-xl font-semibold mb-2">
                                                {t.careersPage.currentOpenings.positions.kitchenStaff.title}
                                            </CardTitle>
                                            <p className="text-muted-foreground mb-4">
                                                {t.careersPage.currentOpenings.positions.kitchenStaff.description}
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Target className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {t.careersPage.currentOpenings.australiaWide}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {t.careersPage.currentOpenings.partTimeFullTime}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            {t.careersPage.currentOpenings.entryLevel}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <CardTitle className="text-xl font-semibold mb-2">
                                                {t.careersPage.currentOpenings.positions.shiftLeaders.title}
                                            </CardTitle>
                                            <p className="text-muted-foreground mb-4">
                                                {t.careersPage.currentOpenings.positions.shiftLeaders.description}
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <TrendingUp className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {t.careersPage.currentOpenings.australiaWide}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {t.careersPage.currentOpenings.fullTime}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            {t.careersPage.currentOpenings.years2Plus}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <CardTitle className="text-xl font-semibold mb-2">
                                                {t.careersPage.currentOpenings.positions.headOffice.title}
                                            </CardTitle>
                                            <p className="text-muted-foreground mb-4">
                                                {t.careersPage.currentOpenings.positions.headOffice.description}
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Building2 className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            Adelaide, SA
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {t.careersPage.currentOpenings.fullTime}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            {t.careersPage.currentOpenings.years3Plus}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                {/* <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
                            Why work with us?
                        </h2>

                        <div className="space-y-20 max-w-6xl mx-auto">
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Comprehensive Training</h3>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        Our intensive training program covers every aspect of running your franchise,
                                        from day-to-day operations to advanced business strategies. You'll learn from
                                        industry experts and successful franchisees who have walked the same path.
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Training includes hands-on experience, comprehensive manuals, video tutorials,
                                        and ongoing support to ensure you're always up-to-date with the latest
                                        industry practices and business techniques.
                                    </p>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <img
                                        src="https://picsum.photos/400/300?random=3"
                                        alt="Comprehensive Training"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>

                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <img
                                        src="https://picsum.photos/400/300?random=4"
                                        alt="Marketing Support"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Marketing Support</h3>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        We provide comprehensive marketing support including brand materials,
                                        digital marketing campaigns, social media strategies, and local advertising
                                        guidance. Our marketing team works closely with each franchisee to develop
                                        customized campaigns for their specific market.
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        From grand opening events to ongoing promotional activities, we ensure
                                        your business gets the visibility it needs to attract customers and
                                        build a strong local presence.
                                    </p>
                                </div>
                            </div>

                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Exclusive Growth Opportunities</h3>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        As part of our franchise network, you'll have access to exclusive growth
                                        opportunities including multi-unit ownership, territory expansion, and
                                        special market development programs. We believe in rewarding success and
                                        providing pathways for ambitious franchisees to scale their operations.
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Our franchisees also benefit from exclusive supplier relationships,
                                        bulk purchasing discounts, and access to proprietary business tools and
                                        technologies that give them a competitive edge in their markets.
                                    </p>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <img
                                        src="https://picsum.photos/400/300?random=5"
                                        alt="Growth Opportunities"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Additional Info Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">
                                    Join Our Growing Network
                                </h2>
                                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        Our franchise network spans across 25 states with over 200 successful
                                        locations. Each franchisee brings unique perspectives and local market
                                        knowledge that contributes to our collective success and continuous
                                        improvement.
                                    </p>
                                    <p>
                                        We're committed to maintaining the highest standards of quality and
                                        service across all our locations. Our franchisees are our ambassadors,
                                        representing our brand values and commitment to customer satisfaction
                                        in their communities.
                                    </p>
                                    <p>
                                        The investment required to join our franchise network includes the
                                        initial franchise fee, startup costs, and working capital. We provide
                                        detailed financial projections and support to help you secure the
                                        necessary funding for your business venture.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="/career/training.png"
                                    alt="Franchise Network"
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-20 bg-primary/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    {t.careersPage.application.title}
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    {t.careersPage.application.subtitle}
                                </p>
                            </div>

                            <Card className="p-8 bg-white dark:bg-black">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                                        <HeadphonesIcon className="w-6 h-6 text-blue-600" />
                                        {t.careersPage.application.formTitle}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                                        {/* Submit Status Messages */}
                                        {submitStatus === 'success' && (
                                            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                                                <p className="text-green-800 dark:text-green-200 text-sm">
                                                    {submitMessage}
                                                </p>
                                            </div>
                                        )}

                                        {submitStatus === 'error' && (
                                            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                                <p className="text-red-800 dark:text-red-200 text-sm">
                                                    {submitMessage}
                                                </p>
                                            </div>
                                        )}

                                        <CareersEmail
                                            buttonLabel={isSubmitting ? t.careersPage.application.submittingButton : t.careersPage.application.submitButton}
                                            positions={positions}
                                            isSubmitting={isSubmitting}
                                            ref={careersEmailRef}
                                        />
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}