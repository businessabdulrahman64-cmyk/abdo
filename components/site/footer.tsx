import Link from 'next/link'
import { ArrowUpRight, Globe, Mail, MessageCircle } from 'lucide-react'
import { nav, site } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 py-10 md:px-8 md:py-14">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-medium tracking-tight">
            <span className="size-2 rounded-full bg-signal" aria-hidden />
            {site.name}
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.description}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
        {[
          { label: 'WhatsApp', href: site.links.whatsapp, icon: MessageCircle },
          { label: 'Email', href: `mailto:${site.links.email}`, icon: Mail },
          { label: 'Instagram', href: site.links.instagram, icon: Globe },
          { label: 'LinkedIn', href: site.links.linkedin, icon: Globe },
          { label: 'Facebook', href: site.links.facebook, icon: Globe },
          { label: 'Portfolio', href: site.links.portfolio, icon: Globe },
        ].map((item) => {
          const Icon = item.icon
          return (
            <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex items-center gap-2 transition-colors hover:text-signal">
              <Icon className="size-3.5" aria-hidden />
              {item.label}
              <ArrowUpRight className="size-3" aria-hidden />
            </a>
          )
        })}
      </div>
      <div className="flex flex-col gap-3 border-t border-line pt-6 font-mono text-[11px] tracking-wide text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p>Designed and built by {site.name}.</p>
      </div>
    </footer>
  )
}
