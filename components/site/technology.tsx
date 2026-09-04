'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { technology } from '@/data/site'
import { SectionHeader } from '@/components/site/section-header'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

const flow: Record<string, string> = {
  frontend: 'User → Interface → State → Request',
  backend: 'Request → Validation → Logic → Response',
  data: 'Schema → Query → Integration → Sync',
  creative: 'Scene → Motion → Interaction → Render',
}

export function Technology() {
  const [activeId, setActiveId] = useState(technology[0].id)
  const active = technology.find((g) => g.id === activeId) ?? technology[0]

  return (
    <section id="technology" className="scroll-mt-24 border-b border-line" aria-labelledby="technology-heading">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-16 px-5 py-20 md:px-8 md:py-28 lg:py-36">
        <SectionHeader
          index="04"
          label="Technology"
          id="technology-heading"
          title="A system of tools, chosen per layer."
          subtitle="Select a layer to see what runs there. Each layer is chosen to keep the whole stack fast, typed, and maintainable."
        />

        <Reveal className="grid grid-cols-1 overflow-hidden rounded-md border border-border lg:grid-cols-12">
          {/* Layer selector */}
          <div
            role="tablist"
            aria-label="Technology layers"
            aria-orientation="vertical"
            className="flex overflow-x-auto border-b border-line lg:col-span-4 lg:flex-col lg:overflow-visible lg:border-r lg:border-b-0"
          >
            {technology.map((group, i) => {
              const selected = group.id === activeId
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  id={`tab-${group.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${group.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(group.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                      e.preventDefault()
                      setActiveId(technology[(i + 1) % technology.length].id)
                    }
                    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                      e.preventDefault()
                      setActiveId(technology[(i - 1 + technology.length) % technology.length].id)
                    }
                  }}
                  className={cn(
                    'relative flex min-w-[10rem] flex-1 flex-col items-start gap-1.5 px-5 py-5 text-left transition-colors lg:min-w-0 lg:flex-none lg:border-b lg:border-line lg:px-7 lg:py-7 lg:last:border-b-0',
                    selected ? 'bg-foreground/[0.04] text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span className="flex items-center gap-3 font-mono text-[11px] tracking-[0.16em]">
                    <span className={cn(selected ? 'text-signal' : '')}>0{i + 1}</span>
                    <span className="uppercase">{group.label}</span>
                  </span>
                  <span className="hidden text-sm text-muted-foreground lg:block">{group.note}</span>
                  {selected && (
                    <motion.span
                      layoutId="tech-indicator"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-signal lg:inset-y-0 lg:right-auto lg:left-0 lg:h-auto lg:w-0.5"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div className="relative min-h-[22rem] lg:col-span-8">
            <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                id={`panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${active.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full flex-col justify-between gap-10 p-6 md:p-10"
              >
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span>layer / {active.label}</span>
                  <span className="hidden sm:block">{flow[active.id]}</span>
                </div>

                <ul className="flex flex-wrap gap-3">
                  {active.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * i, duration: 0.4 }}
                      className="group flex items-center gap-3 rounded-sm border border-border bg-background/80 px-4 py-3 text-base font-medium tracking-tight transition-colors hover:border-signal/60 md:text-lg"
                    >
                      <span className="size-1.5 rounded-full bg-muted-foreground/50 transition-colors group-hover:bg-signal" aria-hidden />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Stack diagram */}
                <div className="flex flex-col gap-2" aria-hidden>
                  {technology.map((g) => (
                    <div key={g.id} className="flex items-center gap-3">
                      <span className="w-16 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{g.label}</span>
                      <span
                        className={cn(
                          'h-1.5 flex-1 rounded-full transition-colors duration-500',
                          g.id === active.id ? 'bg-signal' : 'bg-line',
                        )}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
