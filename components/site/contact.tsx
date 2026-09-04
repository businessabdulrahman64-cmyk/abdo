import { ArrowUpRight } from 'lucide-react'
import { site } from '@/data/site'
import { Reveal } from '@/components/motion/reveal'
import { Magnetic } from '@/components/motion/magnetic'

export function Contact() {
  const { email, linkedin, github } = site.links
  const links = [
    email && { label: 'Email', href: `mailto:${email}`, value: email },
    linkedin && { label: 'LinkedIn', href: linkedin, value: linkedin.replace(/^https?:\/\/(www\.)?/, '') },
    github && { label: 'GitHub', href: github, value: github.replace(/^https?:\/\/(www\.)?/, '') },
  ].filter(Boolean) as { label: string; href: string; value: string }[]

  const primaryHref = email ? `mailto:${email}?subject=Project%20inquiry` : linkedin || github || '#contact'

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
            Have an idea worth building?
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
            <ul className="flex flex-col border-t border-line">
              {links.map((l) => (
                <li key={l.label} className="border-b border-line">
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-signal"
                  >
                    <span className="flex flex-col gap-1">
                      <span className="eyebrow">{l.label}</span>
                      <span className="text-sm font-medium">{l.value}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </a>
                </li>
              ))}
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
