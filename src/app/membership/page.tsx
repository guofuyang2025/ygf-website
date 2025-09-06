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

export default function MembershipPage() {
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
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))

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
                <section className="py-20 bg-primary/80">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)]">
                            Join Our Membership Program
                        </h1>
                        <p className="text-xl text-white dark:text-black max-w-3xl mx-auto leading-relaxed [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.3)] dark:[text-shadow:_0_2px_4px_rgb(255_255_255_/_0.3)]">
                            Unlock exclusive benefits, earn rewards, and enjoy premium experiences as a valued member of our community.
                        </p>
                    </div>
                </section>




                {/* Detailed Benefits Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
                            What You'll Get as a Member
                        </h2>

                        <div className="space-y-20 max-w-6xl mx-auto">
                            {/* Points System */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Smart Points System</h3>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        Earn points for every dollar spent, review written, and referral made.
                                        Points never expire and can be redeemed for discounts, free products,
                                        or exclusive experiences. The more active you are, the faster you earn.
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Special bonus point events happen regularly, giving you opportunities
                                        to earn extra rewards during holidays, product launches, and member appreciation days.
                                    </p>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <img
                                        src="https://picsum.photos/400/300?random=12"
                                        alt="Smart Points System"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Exclusive Access */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <img
                                        src="https://picsum.photos/400/300?random=13"
                                        alt="Exclusive Access"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Exclusive Member Access</h3>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        Get early access to new products, limited edition items, and special collections
                                        before they're available to the general public. Members also receive exclusive
                                        invitations to virtual events, workshops, and product demonstrations.
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Our member-only community forum provides a space to connect with other members,
                                        share experiences, and get insider tips from our team and fellow enthusiasts.
                                    </p>
                                </div>
                            </div>

                            {/* Personalized Experience */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Personalized Experience</h3>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        Receive personalized product recommendations based on your preferences and
                                        purchase history. Our AI-powered system learns your tastes and suggests
                                        items you're likely to love, making shopping more enjoyable and efficient.
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Members also get access to personalized styling consultations, custom
                                        product bundles, and tailored content that matches their interests and lifestyle.
                                    </p>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <img
                                        src="https://picsum.photos/400/300?random=14"
                                        alt="Personalized Experience"
                                        className="w-full rounded-lg shadow-lg"
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
                                    Ready to Join Our Membership Program?
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    Fill out the form below and start enjoying exclusive benefits today.
                                    Membership is free and takes just a few minutes to set up.
                                </p>
                            </div>

                            <Card className="p-8 bg-white dark:bg-black">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                                        <UserPlus className="w-6 h-6 text-blue-600" />
                                        Membership Application
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name</Label>
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
                                                <Label htmlFor="lastName">Last Name</Label>
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
                                            <Label htmlFor="email">Email Address</Label>
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
                                            <Label htmlFor="phone">Phone Number</Label>
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
                                            <Label htmlFor="membershipType">Membership Type</Label>
                                            <Select value={formData.membershipType} onValueChange={handleSelectChange}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select membership type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="basic">Basic Member (Free)</SelectItem>
                                                    <SelectItem value="premium">Premium Member ($9.99/month)</SelectItem>
                                                    <SelectItem value="vip">VIP Member ($19.99/month)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Tell us about yourself (Optional)</Label>
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
                                            {isSubmitting ? 'Submitting Application...' : 'Join Membership Program'}
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
