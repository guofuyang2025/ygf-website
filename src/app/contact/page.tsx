'use client'

import Header from '@/features/home/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FormInput } from '@/components/ui/form-input'
import { FormTextarea } from '@/components/ui/form-textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react'

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement form submission logic
        console.log('Form submitted')
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background py-12">
                <div className="container mx-auto px-4">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Contact Us
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have a question or want to work together? We'd love to hear from you.
                            Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

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
                                                <SelectItem value="general">General Inquiry</SelectItem>
                                                <SelectItem value="support">Technical Support</SelectItem>
                                                <SelectItem value="partnership">Partnership</SelectItem>
                                                <SelectItem value="feedback">Feedback</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <FormTextarea
                                        label="Message"
                                        htmlFor="message"
                                        placeholder="Tell us more about your inquiry..."
                                        required
                                    />

                                    <Button type="submit" className="w-full" size="lg">
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
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
