import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { getProject, projects } from '@/data/projects'
import { site } from '@/data/site'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { BrowserFrame } from '@/components/site/browser-frame'
import { Reveal } from '@/components/motion/reveal'
import { CaseStudyHero } from '@/components/site/case-study-hero'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  const title = `${project.title} — Case Study`
  return {
    title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${title} — ${site.name}`,
      description: project.description,
      type: 'article',
      url: `${site.url}/work/${project.slug}`,
      images: [{ url: project.image, width: 1440, height: 900, alt: project.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${site.name}`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const idx = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(idx + 1) % projects.length]

  const sections = [...project.sections]
  if (project.results?.length) {
    sections.push({
      index: String(sections.length + 1).padStart(2, '0'),
      title: 'Results',
      paragraphs: [],
      bullets: project.results,
    })
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: project.liveUrl,
    image: `${site.url}${project.image}`,
    author: { '@type': 'Person', name: site.name },
    dateCreated: project.year,
  }

  return (
    <>
      <Navbar />
      <main id="main">
        <CaseStudyHero project={project} index={idx} />

        {/* Facts */}
        <section aria-label="Project details" className="border-b border-line">
          <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
            <dl className="grid grid-cols-2 gap-px bg-line md:grid-cols-4">
              {[
                ['Category', project.category],
                ['Role', project.role],
                ['Year', project.year],
                ['Stack', project.technologies.join(' · ')],
              ]
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-2 bg-background py-6 pr-6 md:py-8">
                    <dt className="eyebrow">{k}</dt>
                    <dd className="text-pretty text-sm font-medium leading-relaxed">{v}</dd>
                  </div>
                ))}
            </dl>
          </div>
        </section>

        {/* Screenshot */}
        <section className="border-b border-line" aria-label="Project preview">
          <div className="mx-auto w-full max-w-[1400px] px-5 py-12 md:px-8 md:py-20">
            <Reveal amount={0.1}>
              <BrowserFrame
                src={project.image}
                alt={project.imageAlt}
                url={project.liveUrl}
                priority
                sizes="(min-width: 1400px) 1336px, 100vw"
                className="shadow-[0_60px_120px_-60px_oklch(0_0_0/0.9)]"
              />
            </Reveal>
          </div>
        </section>

        {/* Narrative */}
        <section aria-label="Case study" className="border-b border-line">
          <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <aside className="hidden lg:col-span-3 lg:block">
                <nav aria-label="Case study sections" className="sticky top-28 py-20">
                  <ol className="flex flex-col gap-3 border-l border-line">
                    {sections.map((s) => (
                      <li key={s.index}>
                        <a
                          href={`#section-${s.index}`}
                          className="-ml-px flex items-center gap-3 border-l border-transparent pl-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-signal hover:text-foreground"
                        >
                          <span>{s.index}</span>
                          <span>{s.title}</span>
                        </a>
                      </li>
                    ))}
                    {project.liveUrl && (
                      <li>
                        <a
                          href="#live"
                          className="-ml-px flex items-center gap-3 border-l border-transparent pl-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-signal hover:text-foreground"
                        >
                          <span>{String(sections.length + 1).padStart(2, '0')}</span>
                          <span>Live Project</span>
                        </a>
                      </li>
                    )}
                  </ol>
                </nav>
              </aside>

              <div className="flex flex-col lg:col-span-8 lg:col-start-5">
                {sections.map((s) => (
                  <Reveal
                    as="section"
                    key={s.index}
                    amount={0.2}
                    id={`section-${s.index}`}
                    aria-labelledby={`heading-${s.index}`}
                    className="scroll-mt-28 flex flex-col gap-6 border-b border-line py-14 last:border-b-0 md:py-20"
                  >
                    <p className="eyebrow flex items-center gap-3">
                      <span className="text-signal">{s.index}</span>
                      <span className="h-px w-6 bg-line" aria-hidden />
                      Section
                    </p>
                    <h2 id={`heading-${s.index}`} className="text-balance text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                      {s.title}
                    </h2>
                    {s.paragraphs.map((p, i) => (
                      <p key={i} className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                        {p}
                      </p>
                    ))}
                    {s.bullets && (
                      <ul className="grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-line sm:grid-cols-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-3 bg-background px-4 py-3 text-sm font-medium">
                            <span className="size-1.5 rounded-full bg-signal" aria-hidden />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Reveal>
                ))}

                {project.liveUrl && (
                  <Reveal
                    as="section"
                    id="live"
                    amount={0.2}
                    aria-labelledby="heading-live"
                    className="scroll-mt-28 flex flex-col gap-6 py-14 md:py-20"
                  >
                    <p className="eyebrow flex items-center gap-3">
                      <span className="text-signal">{String(sections.length + 1).padStart(2, '0')}</span>
                      <span className="h-px w-6 bg-line" aria-hidden />
                      Section
                    </p>
                    <h2 id="heading-live" className="text-balance text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                      Live Project
                    </h2>
                    <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                      The best way to evaluate the work is to use it. Open the live project in a new tab.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-signal px-6 font-medium text-signal-foreground transition-colors hover:bg-foreground"
                      >
                        Open {project.title}
                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-border px-6 font-medium transition-colors hover:border-foreground/40"
                        >
                          View Source
                          <ArrowUpRight className="size-4" aria-hidden />
                        </a>
                      )}
                    </div>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Next project */}
        <section aria-label="Next project" className="border-b border-line">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden />
              All work
            </Link>
            {next.slug !== project.slug && (
              <Link href={`/work/${next.slug}`} className="group flex flex-col gap-2 md:items-end">
                <span className="eyebrow">Next project</span>
                <span className="inline-flex items-center gap-3 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                  {next.title}
                  <ArrowRight className="size-7 transition-transform duration-300 group-hover:translate-x-2" aria-hidden />
                </span>
              </Link>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
