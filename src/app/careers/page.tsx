'use client'

import { useState, useRef } from 'react'
import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
    Briefcase,
    MapPin,
    Clock,
    Users,
    Lightbulb,
    TrendingUp,
    FileText,
    Send,
    CheckCircle,
    ArrowRight
} from 'lucide-react'
import CareersEmail, { type CareersEmailRef } from '@/components/form/careers-email'

export default function CareersPage() {
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
                setSubmitMessage(result.message || 'Application submitted successfully!')
                // Reset form safely
                if (formRef.current) {
                    formRef.current.reset()
                }
                careersEmailRef.current?.resetForm()
            } else {
                setSubmitStatus('error')
                setSubmitMessage(result.message || result.error || 'Failed to submit application')
            }
        } catch (error) {
            console.error('Error submitting application:', error)
            setSubmitStatus('error')
            setSubmitMessage('An unexpected error occurred. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const positions = [
        { value: 'frontend-developer', label: 'Senior Frontend Developer' },
        { value: 'product-manager', label: 'Product Manager' },
        { value: 'ux-designer', label: 'UX/UI Designer' },
        { value: 'devops-engineer', label: 'DevOps Engineer' },
        { value: 'other', label: 'Other' },
    ]

    const openPositions = [
        {
            title: 'Senior Frontend Developer',
            description: 'Join our engineering team to build cutting-edge web applications using React, TypeScript, and modern web technologies.',
            location: 'San Francisco, CA',
            type: 'Full-time',
            experience: '3+ years'
        },
        {
            title: 'Product Manager',
            description: 'Lead product strategy and development, working closely with cross-functional teams to deliver exceptional user experiences.',
            location: 'Remote',
            type: 'Full-time',
            experience: '5+ years'
        },
        {
            title: 'UX/UI Designer',
            description: 'Create beautiful and intuitive user interfaces that delight our customers and drive business growth.',
            location: 'New York, NY',
            type: 'Full-time',
            experience: '2+ years'
        },
        {
            title: 'DevOps Engineer',
            description: 'Build and maintain our cloud infrastructure, ensuring scalability, security, and reliability of our systems.',
            location: 'Austin, TX',
            type: 'Full-time',
            experience: '4+ years'
        }
    ]

    const applicationSteps = [
        {
            step: 1,
            title: 'Apply Online',
            description: 'Submit your application through our careers portal with your resume and cover letter.',
            icon: <FileText className="w-8 h-8 text-blue-600" />
        },
        {
            step: 2,
            title: 'Initial Screening',
            description: 'Our HR team will review your application and contact qualified candidates within 48 hours.',
            icon: <CheckCircle className="w-8 h-8 text-green-600" />
        },
        {
            step: 3,
            title: 'Technical Assessment',
            description: 'Complete a technical challenge or coding test relevant to your role and experience level.',
            icon: <Briefcase className="w-8 h-8 text-purple-600" />
        },
        {
            step: 4,
            title: 'Team Interview',
            description: 'Meet with your potential team members and discuss your experience, skills, and cultural fit.',
            icon: <Users className="w-8 h-8 text-orange-600" />
        },
        {
            step: 5,
            title: 'Final Interview',
            description: 'Meet with senior leadership to discuss your vision, goals, and alignment with company values.',
            icon: <CheckCircle className="w-8 h-8 text-blue-600" />
        },
        {
            step: 6,
            title: 'Offer & Onboarding',
            description: 'Receive your offer and begin your exciting journey with our team through comprehensive onboarding.',
            icon: <TrendingUp className="w-8 h-8 text-green-600" />
        }
    ]

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="py-20 bg-primary/80">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)]">
                            Join Our Team
                        </h1>
                        <p className="text-xl text-white dark:text-black max-w-3xl mx-auto leading-relaxed [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.3)] dark:[text-shadow:_0_2px_4px_rgb(255_255_255_/_0.3)]">
                            Build the future with us. We're looking for passionate, talented individuals
                            who want to make a difference and grow their careers in an innovative environment.
                        </p>
                    </div>
                </section>

                {/* Open Positions Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Open Positions
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Explore our current opportunities and find the perfect role for your next career move.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                            {openPositions.map((position, index) => (
                                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <CardTitle className="text-xl font-semibold mb-2">
                                                    {position.title}
                                                </CardTitle>
                                                <p className="text-muted-foreground mb-4">
                                                    {position.description}
                                                </p>
                                            </div>
                                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Briefcase className="w-6 h-6 text-blue-600" />
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                {position.location}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                {position.type}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                {position.experience}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Culture Section */}
                <section className="py-20 bg-primary/20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Our Culture
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                We believe in fostering an environment where creativity, collaboration, and innovation thrive.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <Card className="overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="https://picsum.photos/300/200?random=7"
                                        alt="Collaboration"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-end">
                                        <div className="p-4 text-white">
                                            <h3 className="text-lg font-semibold">Collaboration</h3>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <p className="text-muted-foreground">
                                        We believe the best ideas come from working together. Our team members collaborate
                                        across departments to solve complex challenges and deliver exceptional results.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="https://picsum.photos/300/200?random=8"
                                        alt="Innovation"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-end">
                                        <div className="p-4 text-white">
                                            <h3 className="text-lg font-semibold">Innovation</h3>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <p className="text-muted-foreground">
                                        We encourage creative thinking and experimentation. Our team is constantly
                                        exploring new technologies and approaches to stay ahead of the curve.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="https://picsum.photos/300/200?random=9"
                                        alt="Growth"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-end">
                                        <div className="p-4 text-white">
                                            <h3 className="text-lg font-semibold">Growth</h3>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <p className="text-muted-foreground">
                                        We invest in our people's development through training, mentorship, and
                                        opportunities to take on new challenges and advance their careers.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Application Process Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Application Process
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Our streamlined hiring process ensures a smooth experience for all candidates.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {applicationSteps.map((step) => (
                                <Card key={step.step} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-primary/20">
                                    <CardContent>
                                        <div className="flex justify-center mb-4">
                                            {step.icon}
                                        </div>
                                        <div className="mb-3">
                                            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/80 text-white rounded-full text-sm font-semibold">
                                                {step.step}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-foreground text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Apply Now Form Section */}
                <section className="py-20 bg-primary/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Apply Now
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    Ready to join our team? Submit your application below and we'll get back to you within 48 hours.
                                </p>
                            </div>

                            <Card className="p-8">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                                        <FileText className="w-6 h-6 text-blue-600" />
                                        Career Application
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
                                            buttonLabel={isSubmitting ? 'Submitting...' : 'Submit Application'}
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
