import type { Metadata } from 'next'
import { Navbar } from '@/components/site/navbar'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { WhatsAppFloat } from '@/components/site/whatsapp-float'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Abdulrahman for web development, product design, AI integration, and automation projects.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
