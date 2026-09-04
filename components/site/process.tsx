'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { process } from '@/data/site'
import { SectionHeader } from '@/components/site/section-header'
import { Reveal } from '@/components/motion/reveal'

export function Process() {
  const ref = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="scroll-mt-24 border-b border-line" aria-labelledby="process-heading">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-16 px-5 py-20 md:px-8 md:py-28 lg:py-36">
        <SectionHeader
          index="03"
          label="Process"
          id="process-heading"
          title="A clear path from first conversation to production."
          subtitle="Seven steps, each with a visible output, so you always know where the project stands."
        />

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-32 flex flex-col gap-4">
              <p className="eyebrow">How it works</p>
              <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
                The same sequence applies whether the project is a marketing site or a multi-tenant SaaS product. Steps
                scale in depth, not in kind.
              </p>
            </div>
          </div>

          <ol ref={ref} className="relative flex flex-col lg:col-span-8">
            {/* Progress rail */}
            <span className="absolute top-0 bottom-0 left-[9px] w-px bg-line md:left-[11px]" aria-hidden />
            <motion.span
              style={{ height: reduce ? '100%' : height }}
              className="absolute top-0 left-[9px] w-px bg-signal md:left-[11px]"
              aria-hidden
            />

            {process.map((step, i) => (
              <Reveal
                as="li"
                key={step.index}
                amount={0.4}
                delay={0.05}
                className="relative grid grid-cols-[20px_1fr] gap-x-5 border-b border-line py-7 last:border-b-0 md:grid-cols-[24px_96px_1fr] md:gap-x-8 md:py-9"
              >
                <span className="relative z-10 mt-1.5 flex size-5 items-center justify-center md:size-6">
                  <span className="size-2 rounded-full border border-signal bg-background" />
                </span>
                <span className="hidden font-mono text-[11px] tracking-[0.16em] text-muted-foreground md:block md:pt-1.5">
                  {step.index}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="flex items-baseline gap-3 text-2xl font-medium tracking-tight md:text-3xl">
                    <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground md:hidden">{step.index}</span>
                    {step.title}
                  </h3>
                  <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">{step.text}</p>
                </div>
                {i === process.length - 1 && <span className="sr-only">Final step</span>}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
