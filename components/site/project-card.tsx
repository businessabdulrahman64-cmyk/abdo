'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { BrowserFrame } from '@/components/site/browser-frame'
import { cn } from '@/lib/utils'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const parallax = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-24, 24])

  const wide = project.layout === 'wide'
  const number = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link
        href={`/work/${project.slug}`}
        aria-label={`${project.title} case study`}
        className={cn(
          'grid grid-cols-1 gap-6 rounded-md outline-offset-8 lg:gap-10',
          wide ? 'lg:grid-cols-12' : 'lg:grid-cols-12',
        )}
      >
        {/* Visual */}
        <div
          className={cn(
            'relative',
            wide ? 'lg:col-span-8' : 'lg:order-2 lg:col-span-7 lg:col-start-6',
          )}
        >
          <div className="relative overflow-hidden rounded-md">
            <motion.div style={{ y: parallax }} className="will-change-transform">
              <BrowserFrame
                src={project.image}
                alt={project.imageAlt}
                url={project.liveUrl}
                priority={index === 0}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="border-border/80 transition-[border-color,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-foreground/25"
                imageClassName="scale-[1.02] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
            </motion.div>
            {/* Hover veil + CTA */}
            <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-background/80 via-background/0 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80">
                {project.technologies.slice(0, 3).join(' · ')}
              </span>
              <span className="inline-flex items-center gap-2 rounded-sm bg-signal px-3.5 py-2 text-sm font-medium text-signal-foreground">
                View Project
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div
          className={cn(
            'flex flex-col justify-between gap-8',
            wide ? 'lg:col-span-4' : 'lg:order-1 lg:col-span-4 lg:col-start-1',
          )}
        >
          <div className="flex items-baseline justify-between border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="text-signal">{number}</span>
            {project.year && <span>{project.year}</span>}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-medium tracking-[-0.03em] transition-colors group-hover:text-foreground md:text-4xl">
              {project.title}
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{project.category}</p>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">{project.description}</p>
          </div>

          <div className="flex flex-col gap-4">
            <ul className="flex flex-wrap gap-2" aria-label="Technologies">
              {project.technologies.map((t) => (
                <li key={t} className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] tracking-wide text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              <span className="relative">
                Read case study
                <span className="absolute inset-x-0 -bottom-0.5 h-px w-0 bg-signal transition-all duration-500 group-hover:w-full" />
              </span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
