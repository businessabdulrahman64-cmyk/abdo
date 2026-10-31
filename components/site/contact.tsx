import { ArrowUpRight, Globe, Mail, MessageCircle } from 'lucide-react'
import { site } from '@/data/site'
import { Reveal } from '@/components/motion/reveal'
import { Magnetic } from '@/components/motion/magnetic'

export function Contact() {
  const { email, linkedin, instagram, facebook, portfolio, whatsapp, whatsappDisplay, instagramDisplay } = site.links
  const links = [
    { label: 'WhatsApp', href: whatsapp, value: whatsappDisplay, icon: MessageCircle },
    { label: 'Email', href: `mailto:${email}`, value: email, icon: Mail },
    { label: 'Instagram', href: instagram, value: instagramDisplay, icon: Globe },
    { label: 'LinkedIn', href: linkedin, value: 'abdulrahman-business-a6807a434', icon: Globe },
    { label: 'Facebook', href: facebook, value: 'facebook.com/share/1UokJXhsDd', icon: Globe },
    { label: 'Portfolio', href: portfolio, value: 'abdulrahmanlabs.vercel.app', icon: Globe },
  ]

  const primaryHref = `mailto:${email}?subject=Project%20inquiry`

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-b border-line" aria-labelledby="contact-heading">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_bottom_right,black_0%,transparent_60%)]" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-8 lg:py-44">
        <Reveal className="flex flex-col gap-8 lg:col-span-8">
          <p className="eyebrow flex items-center gap-3">
            <span className="text-signal">06</span>
            <span className="h-px w-6 bg-line" aria-hidden />
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-balance text-4xl font-medium tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-[5rem] lg:leading-[1]"
          >
            Let&apos;s Build Something Great Together.
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Tell me what you&apos;re trying to build, what problem you&apos;re solving, and where you are today.
          </p>
          <div>
            <Magnetic>
              <a
                href={primaryHref}
                className="group inline-flex h-14 items-center gap-3 rounded-sm bg-signal px-7 text-base font-medium text-signal-foreground transition-colors hover:bg-foreground"
              >
                Start a Conversation
                <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col justify-end lg:col-span-4">
          {links.length > 0 ? (
            <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-1">
              {links.map((l) => {
                const Icon = l.icon
                return (
                  <li key={l.label} className="border-b border-line sm:odd:border-r lg:odd:border-r-0">
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex items-center justify-between gap-4 px-1 py-4 transition-colors hover:text-signal"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="size-4 text-signal" aria-hidden />
                        <span className="flex flex-col gap-1">
                          <span className="eyebrow">{l.label}</span>
                          <span className="break-all text-sm font-medium">{l.value}</span>
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    </a>
                  </li>
                )
              })}
            </ul>
          ) : (
            <dl className="flex flex-col gap-6 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <div className="flex flex-col gap-1.5">
                <dt>Engagement</dt>
                <dd className="text-foreground">Freelance · Project-based</dd>
              </div>
              <div className="flex flex-col gap-1.5">
                <dt>Location</dt>
                <dd className="text-foreground">Remote</dd>
              </div>
              <div className="flex flex-col gap-1.5">
                <dt>Availability</dt>
                <dd className="flex items-center gap-2 text-foreground">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-signal" aria-hidden />
                  Open to projects
                </dd>
              </div>
            </dl>
          )}
        </Reveal>
      </div>
    </section>
  )
}
