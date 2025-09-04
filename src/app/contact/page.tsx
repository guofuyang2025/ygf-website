'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import ContactEmail from '@/components/form/contact-email'

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                {/* Page Header */}
                <section className="py-20 bg-primary/80">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)]">
                            Contact Us
                        </h1>
                        <p className="text-xl text-white dark:text-black max-w-2xl mx-auto [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.3)] dark:[text-shadow:_0_2px_4px_rgb(255_255_255_/_0.3)]">
                            Have a question or want to work together? We'd love to hear from you.
                            Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-12">

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {/* Contact Form - Left Column */}
                        <Card className="p-6">
                            <CardHeader className="pb-6">
                                <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                                    <MessageCircle className="w-6 h-6 text-blue-600" />
                                    Send us a Message
                                </CardTitle>
                                <p className="text-muted-foreground">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <ContactEmail
                                    subjectOptions={[
                                        { value: 'general', label: 'General Inquiry' },
                                        { value: 'support', label: 'Technical Support' },
                                        { value: 'partnership', label: 'Partnership' },
                                        { value: 'feedback', label: 'Feedback' },
                                        { value: 'other', label: 'Other' },
                                    ]}
                                    buttonLabel="Send Message"
                                    messagePlaceholder="Tell us more about your inquiry..."
                                />
                            </CardContent>
                        </Card>

                        {/* Contact Information - Right Column */}
                        <div className="space-y-6">
                            {/* Company Info Card */}
                            <Card className="p-6">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl font-semibold">Get in Touch</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-foreground">Office Address</h3>
                                            <p className="text-muted-foreground">
                                                123 Innovation Drive<br />
                                                Tech District, Silicon Valley<br />
                                                CA 94025, United States
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-foreground">Phone Number</h3>
                                            <p className="text-muted-foreground">
                                                +1 (555) 123-4567<br />
                                                <span className="text-sm">Mon-Fri 9:00 AM - 6:00 PM PST</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-foreground">Email Address</h3>
                                            <p className="text-muted-foreground">
                                                hello@yourcompany.com<br />
                                                support@yourcompany.com
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
