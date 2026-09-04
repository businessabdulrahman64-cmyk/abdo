import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-5 pt-40 pb-32 md:px-8">
        <p className="eyebrow">
          <span className="text-signal">404</span> — Not found
        </p>
        <h1 className="text-balance text-4xl font-medium tracking-[-0.03em] md:text-6xl">This page does not exist.</h1>
        <Link href="/" className="inline-flex w-fit items-center gap-2 text-sm font-medium hover:text-signal">
          <ArrowLeft className="size-4" aria-hidden />
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  )
}
