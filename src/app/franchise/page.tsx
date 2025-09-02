'use client'

import Header from '@/features/home/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FormInput } from '@/components/ui/form-input'
import { FormTextarea } from '@/components/ui/form-textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Building2, Users, Target, TrendingUp, Award, HeadphonesIcon, Send } from 'lucide-react'

export default function FranchisePage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement form submission logic
        console.log('Franchise inquiry submitted')
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                            Franchise Opportunities
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Grow with us and join our successful network. Partner with a proven business model
                            and become part of our expanding franchise family.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* First Card - Dark Background */}
                            <Card className="bg-neutral-900 text-white border-0">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                                        <Building2 className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold">Why Partner With Us?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 leading-relaxed">
                                        Join a network of successful entrepreneurs who have built thriving businesses
                                        with our proven system. We provide comprehensive support, training, and
                                        marketing strategies to ensure your success.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Second Card - Image */}
                            <Card className="overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="https://picsum.photos/300/200?random=1"
                                        alt="Proven Business Model"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-end">
                                        <div className="p-4 text-white">
                                            <h3 className="text-lg font-semibold">Proven Business Model</h3>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <p className="text-muted-foreground">
                                        Our business model has been tested and refined across multiple markets,
                                        ensuring consistent results for all franchise partners.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Third Card - Image */}
                            <Card className="overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="https://picsum.photos/300/200?random=2"
                                        alt="Nationwide Reach"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-end">
                                        <div className="p-4 text-white">
                                            <h3 className="text-lg font-semibold">Nationwide Reach</h3>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <p className="text-muted-foreground">
                                        Expand your business across the country with our established brand recognition
                                        and nationwide marketing campaigns.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Info Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                                Building Success Together
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Our franchise program has transformed the lives of hundreds of entrepreneurs,
                                    providing them with the tools, knowledge, and support needed to build successful
                                    businesses. We believe in creating lasting partnerships that benefit both our
                                    company and our franchisees.
                                </p>
                                <p>
                                    With over 15 years of industry experience, we've developed a comprehensive
                                    system that addresses every aspect of running a successful business. From
                                    initial setup to ongoing operations, our franchisees receive continuous
                                    support and guidance.
                                </p>
                                <p>
                                    The success of our franchise network is built on mutual trust, shared values,
                                    and a commitment to excellence. We're not just looking for business partners
                                    – we're looking for long-term relationships that will help us grow together.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
                            What You'll Receive as a Franchisee
                        </h2>

                        <div className="space-y-20 max-w-6xl mx-auto">
                            {/* Comprehensive Training */}
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

                            {/* Marketing Support */}
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

                            {/* Growth Opportunities */}
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
                </section>

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
                                    src="https://picsum.photos/400/300?random=6"
                                    alt="Franchise Network"
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Ready to Join Our Franchise Network?
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    Fill out the form below and our franchise development team will contact you
                                    within 24 hours to discuss your opportunities.
                                </p>
                            </div>

                            <Card className="p-8">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                                        <HeadphonesIcon className="w-6 h-6 text-blue-600" />
                                        Franchise Inquiry
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormInput
                                                label="First Name"
                                                htmlFor="firstName"
                                                placeholder="Enter your first name"
                                                required
                                            />
                                            <FormInput
                                                label="Last Name"
                                                htmlFor="lastName"
                                                placeholder="Enter your last name"
                                                required
                                            />
                                        </div>

                                        <FormInput
                                            label="Email Address"
                                            htmlFor="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            required
                                        />

                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                                                Subject
                                            </Label>
                                            <Select>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a subject" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="franchise-info">Franchise Information</SelectItem>
                                                    <SelectItem value="investment-details">Investment Details</SelectItem>
                                                    <SelectItem value="territory-availability">Territory Availability</SelectItem>
                                                    <SelectItem value="training-schedule">Training Schedule</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <FormTextarea
                                            label="Message"
                                            htmlFor="message"
                                            placeholder="Tell us about your interest in franchising and any specific questions you have..."
                                            required
                                        />

                                        <Button type="submit" className="w-full" size="lg">
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Franchise Inquiry
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
