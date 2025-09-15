import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/public-header';
import Footer from '@/components/layout/Footer';
import PageBanner from '@/components/layout/PageBanner';

export default function Membership() {
    const backgroundImage = [
        {
            src: "/about/title.png",
            alt: "Membership Background Image"
        }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
                {/* Hero Section */}
                <PageBanner 
                    title="Membership Program" 
                    backgroundImage={backgroundImage[0]} 
                />

            {/* Coming Soon Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Membership System Coming Soon
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our exclusive membership program is currently under development. 
                        Get ready for exclusive benefits, special discounts, and exciting gift redemption opportunities. 
                        Stay tuned for the official launch!
                    </p>
                </div>

                {/* Features Preview */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive Benefits</h3>
                        <p className="text-gray-600">Special discounts and perks reserved for our valued members</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Gift Redemption</h3>
                        <p className="text-gray-600">Redeem exciting gifts and rewards with your membership points</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Priority Access</h3>
                        <p className="text-gray-600">Early access to new products and special events</p>
                    </div>
                </div>

                {/* Membership Images */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="relative group">
                        <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                            <Image
                                src="/membership/membership1.png"
                                alt="Membership Benefits Preview"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h4 className="font-semibold text-lg">Exclusive Rewards</h4>
                                <p className="text-sm opacity-90">Coming Soon</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                            <Image
                                src="/membership/membership2.png"
                                alt="Membership Program Preview"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h4 className="font-semibold text-lg">Special Privileges</h4>
                                <p className="text-sm opacity-90">Coming Soon</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                            <Image
                                src="/membership/membership3.png"
                                alt="Membership Experience Preview"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h4 className="font-semibold text-lg">Premium Experience</h4>
                                <p className="text-sm opacity-90">Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-white rounded-2xl shadow-xl p-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Ready to Join Our Community?
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Be the first to know when our membership program launches. 
                        Sign up for updates and get exclusive early access!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact"
                            className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors text-center"
                        >
                            Notify Me When Available
                        </Link>
                        <Link 
                            href="/about"
                            className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-colors text-center"
                        >
                            Learn More About YGF
                        </Link>
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </>
    );
}