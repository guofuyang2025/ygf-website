'use client'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Introduction from '@/components/Introduction'
import Product from '@/components/Product'
import Footer from '@/components/Footer'

export default function HomePage() {

  return (
    <>
      <Header />
      <main>
        <Banner />
        <Introduction />
        <Product />
      </main>
      <Footer />
    </>
  )
}
