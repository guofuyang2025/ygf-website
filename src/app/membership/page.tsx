'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Gift, Percent, Star, Crown, UserPlus, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { useI18n } from '@/lib/contexts/LanguageContent'
import { createClient } from '@/lib/supabase'
import PageBanner from '@/components/layout/PageBanner'
import Image from 'next/image'

export default function MembershipPage() {
    const t = useI18n()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [submitMessage, setSubmitMessage] = useState('')

    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        membershipType: '',
        message: ''
    })

    const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [field]: event.target.value
        }))
    }

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            membershipType: value
        }))
    }

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            membershipType: '',
            message: ''
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')
        setSubmitMessage('')

        try {
            const supabase = createClient()

            // Create membership application with form data
            const { data, error } = await supabase
                .from('ygf_membership')
                .insert({
                    description: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMembership Type: ${formData.membershipType}\nMessage: ${formData.message}`,
                    point: 0,
                    verify: false,
                    reviewed: false
                })
                .select()
                .single()

            if (error) {
                throw error
            }

            setSubmitStatus('success')
            setSubmitMessage('Membership application submitted successfully! We will contact you within 24 hours.')
            resetForm()
        } catch (error) {
            console.error('Error submitting membership application:', error)
            setSubmitStatus('error')
            setSubmitMessage('An unexpected error occurred. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <PageBanner title={t.membershipPage.hero.title} subtitle={t.membershipPage.hero.subtitle} />




                {/* Detailed Benefits Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
                            {t.membershipPage.benefits.title}
                        </h2>

                        <div className="space-y-20 max-w-6xl mx-auto">
                            {/* Points System */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">{t.membershipPage.benefits.pointsSystem.title}</h3>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        {t.membershipPage.benefits.pointsSystem.description1}
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {t.membershipPage.benefits.pointsSystem.description2}
                                    </p>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <Image
                                        src="/home/lunbo1.png"
                                        alt="Smart Points System"
                                        className="w-full rounded-lg shadow-lg"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>

                            {/* Exclusive Access */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <Image
                                        src="/home/lunbo2.png"
                                        alt="Exclusive Access"
                                        className="w-full rounded-lg shadow-lg"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-6">{t.membershipPage.benefits.exclusiveAccess.title}</h3>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        {t.membershipPage.benefits.exclusiveAccess.description1}
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {t.membershipPage.benefits.exclusiveAccess.description2}
                                    </p>
                                </div>
                            </div>

                            {/* Personalized Experience */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">{t.membershipPage.benefits.personalizedExperience.title}</h3>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        {t.membershipPage.benefits.personalizedExperience.description1}
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {t.membershipPage.benefits.personalizedExperience.description2}
                                    </p>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <Image
                                        src="/home/lunbo3.png"
                                        alt="Personalized Experience"
                                        className="w-full rounded-lg shadow-lg"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Membership Application Form */}
                <section className="py-20 bg-primary/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    {t.membershipPage.application.title}
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    {t.membershipPage.application.subtitle}
                                </p>
                            </div>

                            <Card className="p-8 bg-white dark:bg-black">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                                        <UserPlus className="w-6 h-6 text-blue-600" />
                                        {t.membershipPage.application.formTitle}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">{t.membershipPage.application.formFields.firstName}</Label>
                                                <Input
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="Enter your first name"
                                                    required
                                                    value={formData.firstName}
                                                    onChange={handleInputChange('firstName')}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">{t.membershipPage.application.formFields.lastName}</Label>
                                                <Input
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder="Enter your last name"
                                                    required
                                                    value={formData.lastName}
                                                    onChange={handleInputChange('lastName')}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">{t.membershipPage.application.formFields.email}</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email address"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange('email')}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone">{t.membershipPage.application.formFields.phone}</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleInputChange('phone')}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="membershipType">{t.membershipPage.application.formFields.membershipType}</Label>
                                            <Select value={formData.membershipType} onValueChange={handleSelectChange}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select membership type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="basic">{t.membershipPage.application.membershipTypes.basic}</SelectItem>
                                                    <SelectItem value="premium">{t.membershipPage.application.membershipTypes.premium}</SelectItem>
                                                    <SelectItem value="vip">{t.membershipPage.application.membershipTypes.vip}</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">{t.membershipPage.application.formFields.message}</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Share your interests, preferences, or any questions you have about our membership program..."
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleInputChange('message')}
                                            />
                                        </div>

                                        {/* Submit Status Messages */}
                                        {submitStatus === 'success' && (
                                            <div className="flex items-center gap-2 text-green-600">
                                                <CheckCircle className="w-5 h-5" />
                                                <p className="text-sm">{submitMessage}</p>
                                            </div>
                                        )}

                                        {submitStatus === 'error' && (
                                            <div className="flex items-center gap-2 text-red-600">
                                                <p className="text-sm">{submitMessage}</p>
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting}
                                            className="w-full"
                                        >
                                            {isSubmitting ? t.membershipPage.application.submittingButton : t.membershipPage.application.submitButton}
                                        </Button>
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
