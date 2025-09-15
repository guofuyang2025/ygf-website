'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import ContactEmail from '@/components/form/contact-email'
import { useI18n } from '@/lib/contexts/LanguageContent'
import PageBanner from '@/components/layout/PageBanner'

export default function ContactPage() {
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
                {/* Page Header */}
                <PageBanner title={t.contactPage.hero.title} backgroundImage={backgroundImage[0]} />

                <div className="container mx-auto px-4 lg:px-8 xl:px-16 py-12">

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {/* Contact Form - Left Column */}
                        <Card className="p-6">
                            <CardHeader className="pb-6">
                                <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                                    <MessageCircle className="w-6 h-6 text-blue-600" />
                                    {t.contactPage.form.title}
                                </CardTitle>
                                <p className="text-muted-foreground">
                                    {t.contactPage.form.subtitle}
                                </p>
                            </CardHeader>
                            <CardContent>

                                <ContactEmail
                                    enquiryTypeOptions={[
                                        { value: 'general', label: 'General enquiry' },
                                        { value: 'contact', label: 'Contact request' },
                                        { value: 'complaint', label: 'Complaint / Feedback' }
                                    ]}
                                    buttonLabel={t.contactPage.form.sendMessage}
                                    messagePlaceholder="Tell us more about your inquiry..."
                                />

                            </CardContent>
                        </Card>

                        {/* Contact Information - Right Column */}
                        <div className="space-y-6">
                            {/* Company Info Card */}
                            <Card className="p-6">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl font-semibold">{t.contactPage.contactInfo.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-foreground">{t.contactPage.contactInfo.officeAddress}</h3>
                                            <p className="text-muted-foreground whitespace-pre-line">
                                                {t.contactPage.contactInfo.address}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-foreground">{t.contactPage.contactInfo.phoneNumber}</h3>
                                            <p className="text-muted-foreground whitespace-pre-line">
                                                {t.contactPage.contactInfo.phone}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-foreground">{t.contactPage.contactInfo.emailAddress}</h3>
                                            <p className="text-muted-foreground whitespace-pre-line">
                                                {t.contactPage.contactInfo.email}
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
