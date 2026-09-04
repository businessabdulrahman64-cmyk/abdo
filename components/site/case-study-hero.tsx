'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { SplitWords } from '@/components/motion/reveal'

const ease = [0.22, 1, 0.36, 1] as const

export function CaseStudyHero({ project, index }: { project: Project; index: number }) {
  return (
    <section className="relative overflow-hidden border-b border-line" aria-labelledby="case-heading">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top_right,black_0%,transparent_60%)]" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 pt-32 pb-14 md:px-8 md:pt-40 md:pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Selected Work
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Case study <span className="text-signal">{String(index + 1).padStart(2, '0')}</span>
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="eyebrow"
            >
              {project.category}
            </motion.p>
            <h1
              id="case-heading"
              className="text-balance text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[6.5rem] lg:leading-[0.95]"
            >
              <SplitWords text={project.title} delay={0.15} />
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="flex flex-col justify-end gap-6 lg:col-span-4"
          >
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{project.description}</p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-medium transition-colors hover:border-signal hover:text-signal"
              >
                Visit live site
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
