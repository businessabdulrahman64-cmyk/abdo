'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { SplitWords } from '@/components/motion/reveal'
import { Magnetic } from '@/components/motion/magnetic'
import { PipelineVisual } from '@/components/site/pipeline-visual'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line" aria-labelledby="hero-heading">
      {/* Technical backdrop */}
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_65%)]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-14 px-5 pt-32 pb-16 md:px-8 md:pt-40 md:pb-24 lg:grid-cols-12 lg:gap-8 lg:pt-44 lg:pb-28">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow flex items-center gap-3"
          >
            <span className="h-px w-8 bg-signal" aria-hidden />
            AI Web Developer · Digital Product Designer
          </motion.p>

          <h1
            id="hero-heading"
            className="text-balance text-[2.6rem] leading-[1.02] font-medium tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            <SplitWords text="I build digital products that turn ideas into real experiences." delay={0.2} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            I design and develop modern websites, SaaS products, AI-powered experiences, and custom digital systems with
            a strong focus on UX, performance, and business outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Magnetic>
              <Link
                href="/#work"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-signal px-6 font-medium text-signal-foreground transition-colors hover:bg-foreground sm:w-auto"
              >
                View Selected Work
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link
                href="/#contact"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm border border-border px-6 font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/[0.03] sm:w-auto"
              >
                Start a Project
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </Magnetic>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-4 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:grid-cols-3"
          >
            <div className="flex flex-col gap-1">
              <dt>Focus</dt>
              <dd className="text-foreground">Product · Web · AI</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt>Stack</dt>
              <dd className="text-foreground">Next.js · TS · Python</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt>Availability</dt>
              <dd className="flex items-center gap-2 text-foreground">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-signal" aria-hidden />
                Open to projects
              </dd>
            </div>
          </motion.dl>
        </div>

        <div className="flex items-start justify-center lg:col-span-5 lg:justify-end lg:pt-6">
          <PipelineVisual />
        </div>
      </div>
    </section>
  )
}
