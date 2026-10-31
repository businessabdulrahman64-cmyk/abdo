'use client'

import { MessageCircle } from 'lucide-react'
import { site } from '@/data/site'

export function WhatsAppFloat() {
  return (
    <a
      href={site.links.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat on WhatsApp at ${site.links.whatsappDisplay}`}
      className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_rgba(37,211,102,0.28)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-7 md:right-7"
    >
      <MessageCircle className="size-6" aria-hidden />
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}
