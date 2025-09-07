'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, Target, TrendingUp, Award, HeadphonesIcon, MapPin, FileText, CheckCircle } from 'lucide-react'
import CareersEmail, { type CareersEmailRef } from '@/components/form/careers-email'
import { useRef, useState } from 'react'
import { useI18n } from '@/lib/contexts/LanguageContent'

export default function FranchisePage() {
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
                setSubmitMessage(result.message || 'Franchise inquiry submitted successfully!')
                // Reset form safely
                if (formRef.current) {
                    formRef.current.reset()
                }
                careersEmailRef.current?.resetForm()
            } else {
                setSubmitStatus('error')
                setSubmitMessage(result.message || result.error || 'Failed to submit franchise inquiry')
            }
        } catch (error) {
            console.error('Error submitting franchise inquiry:', error)
            setSubmitStatus('error')
            setSubmitMessage('An unexpected error occurred. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const positions = [
        { value: 'franchise-info', label: 'Franchise Information' },
        { value: 'investment-details', label: 'Investment Details' },
        { value: 'territory-availability', label: 'Territory Availability' },
        { value: 'training-schedule', label: 'Training Schedule' },
        { value: 'other', label: 'Other' },
    ]

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="py-20 bg-primary/80">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)]">
                            {t.franchisePage.hero.title}
                        </h1>
                        <p className="text-xl text-white dark:text-black max-w-3xl mx-auto leading-relaxed whitespace-pre-line [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.3)] dark:[text-shadow:_0_2px_4px_rgb(255_255_255_/_0.3)]">
                            {t.franchisePage.hero.subtitle}
                        </p>
                    </div>
                </section>

                {/* Job Description Section */}
                <section className="py-20 bg-primary/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                                {t.franchisePage.jobDescription.title}
                            </h2>
                            <Card className="p-8 bg-white dark:bg-black">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                            {t.franchisePage.jobDescription.description1}
                                        </p>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {t.franchisePage.jobDescription.description2}
                                        </p>
                                    </div>
                                    <div>
                                        <img
                                            src="/franchise/ygf.png"
                                            alt="Franchise Partner Role"
                                            className="w-full rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Qualifications Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                {t.franchisePage.qualifications.title}
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {t.franchisePage.qualifications.subtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{t.franchisePage.qualifications.experience.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.franchisePage.qualifications.experience.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{t.franchisePage.qualifications.businessAcumen.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.franchisePage.qualifications.businessAcumen.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{t.franchisePage.qualifications.leadership.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.franchisePage.qualifications.leadership.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{t.franchisePage.qualifications.flexibility.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.franchisePage.qualifications.flexibility.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Franchise Support Section */}
                <section className="py-20 bg-primary/20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                {t.franchisePage.franchiseSupport.title}
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {t.franchisePage.franchiseSupport.subtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <Card className="overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="/franchise/training.png"
                                        alt="Training & Operations"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-end">
                                        <div className="p-4 text-white">
                                            <h3 className="text-lg font-semibold">{t.franchisePage.franchiseSupport.trainingOperations.title}</h3>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <p className="text-muted-foreground">
                                        {t.franchisePage.franchiseSupport.trainingOperations.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="/franchise/supply.png"
                                        alt="Supply Chain & Logistics"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-end">
                                        <div className="p-4 text-white">
                                            <h3 className="text-lg font-semibold">{t.franchisePage.franchiseSupport.supplyChain.title}</h3>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <p className="text-muted-foreground">
                                        {t.franchisePage.franchiseSupport.supplyChain.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="/franchise/marketing.png"
                                        alt="Marketing Campaigns"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-end">
                                        <div className="p-4 text-white">
                                            <h3 className="text-lg font-semibold">{t.franchisePage.franchiseSupport.marketingCampaigns.title}</h3>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <p className="text-muted-foreground">
                                        {t.franchisePage.franchiseSupport.marketingCampaigns.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="max-w-4xl mx-auto text-center mt-12">
                            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                {t.franchisePage.franchiseSupport.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Application Process Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                {t.franchisePage.process.title}
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {t.franchisePage.process.subtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-primary/20">
                                <CardContent>
                                    <div className="flex justify-center mb-4">
                                        <FileText className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div className="mb-3">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/80 text-white rounded-full text-sm font-semibold">
                                            1
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-3">
                                        {t.franchisePage.process.steps.enquire.title}
                                    </h3>
                                    <p className="text-foreground text-sm leading-relaxed">
                                        {t.franchisePage.process.steps.enquire.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-primary/20">
                                <CardContent>
                                    <div className="flex justify-center mb-4">
                                        <HeadphonesIcon className="w-8 h-8 text-green-600" />
                                    </div>
                                    <div className="mb-3">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/80 text-white rounded-full text-sm font-semibold">
                                            2
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-3">
                                        {t.franchisePage.process.steps.interview.title}
                                    </h3>
                                    <p className="text-foreground text-sm leading-relaxed">
                                        {t.franchisePage.process.steps.interview.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-primary/20">
                                <CardContent>
                                    <div className="flex justify-center mb-4">
                                        <Users className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <div className="mb-3">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/80 text-white rounded-full text-sm font-semibold">
                                            3
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-3">
                                        {t.franchisePage.process.steps.onlineInterview.title}
                                    </h3>
                                    <p className="text-foreground text-sm leading-relaxed">
                                        {t.franchisePage.process.steps.onlineInterview.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-primary/20">
                                <CardContent>
                                    <div className="flex justify-center mb-4">
                                        <Award className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <div className="mb-3">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/80 text-white rounded-full text-sm font-semibold">
                                            4
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-3">
                                        {t.franchisePage.process.steps.meetFounder.title}
                                    </h3>
                                    <p className="text-foreground text-sm leading-relaxed">
                                        {t.franchisePage.process.steps.meetFounder.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section id="franchise-form" className="py-20 bg-primary/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    {t.franchisePage.application.title}
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    {t.franchisePage.application.subtitle}
                                </p>
                            </div>

                            <Card className="p-8 bg-white dark:bg-black">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                                        <HeadphonesIcon className="w-6 h-6 text-blue-600" />
                                        {t.franchisePage.application.formTitle}
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
                                            buttonLabel={isSubmitting ? t.franchisePage.application.submittingButton : t.franchisePage.application.submitButton}
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