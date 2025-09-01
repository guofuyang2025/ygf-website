// import { getSession } from '@/lib/auth';
// import { redirect } from 'next/navigation';

// export default async function Page() {
//   const session = await getSession();

//   if (!session) {
//     return redirect('/auth/sign-in');
//   } else {
//     redirect('/dashboard/overview');
//   }
// }

'use client'

import Header from '@/features/home/Header'
import Banner from '@/features/home/Banner'
import Introduction from '@/features/home/Introduction'
import Product from '@/features/home/Product'
import Footer from '@/features/home/Footer'

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
