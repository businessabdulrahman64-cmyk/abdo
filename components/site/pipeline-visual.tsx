'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { pipeline } from '@/data/site'
import { cn } from '@/lib/utils'

const detail: Record<string, string> = {
  Strategy: 'goals · users · scope',
  UX: 'flows · structure · states',
  Design: 'system · type · hierarchy',
  Development: 'next.js · typescript · api',
  AI: 'models · pipelines · guardrails',
  Launch: 'perf · seo · monitoring',
}

/**
 * Hero visual: the product pipeline as a stack of interface layers.
 * Auto-advances through stages; hovering or focusing a layer pins it.
 */
export function PipelineVisual() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [pinned, setPinned] = useState<number | null>(null)

  useEffect(() => {
    if (pinned !== null || reduce) return
    const id = setInterval(() => setActive((a) => (a + 1) % pipeline.length), 2200)
    return () => clearInterval(id)
  }, [pinned, reduce])

  const current = pinned ?? active

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md"
      aria-label="Product pipeline: Strategy, UX, Design, Development, AI, Launch"
      role="group"
    >
      {/* Frame */}
      <div className="rounded-md border border-border bg-surface/60 shadow-[0_40px_80px_-40px_oklch(0_0_0/0.8)] backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="size-2 rounded-full bg-muted-foreground/40" />
            <span className="size-2 rounded-full bg-muted-foreground/40" />
            <span className="size-2 rounded-full bg-muted-foreground/40" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">pipeline.run</span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-signal" aria-hidden />
            live
          </span>
        </div>

        <ol className="flex flex-col p-2" onMouseLeave={() => setPinned(null)}>
          {pipeline.map((stage, i) => {
            const isActive = i === current
            const isDone = i < current
            return (
              <li key={stage} className="relative">
                <button
                  type="button"
                  onMouseEnter={() => setPinned(i)}
                  onFocus={() => setPinned(i)}
                  onBlur={() => setPinned(null)}
                  aria-current={isActive ? 'step' : undefined}
                  className={cn(
                    'group relative flex w-full items-center gap-4 rounded-sm px-3 py-3 text-left transition-colors',
                    isActive ? 'bg-foreground/[0.04]' : 'hover:bg-foreground/[0.02]',
                  )}
                >
                  <span
                    className={cn(
                      'font-mono text-[11px] tabular-nums transition-colors',
                      isActive ? 'text-signal' : isDone ? 'text-foreground/70' : 'text-muted-foreground',
                    )}
                  >
                    0{i + 1}
                  </span>
                  <span className="relative flex size-4 items-center justify-center">
                    <span
                      className={cn(
                        'size-1.5 rounded-full transition-colors duration-300',
                        isActive ? 'bg-signal' : isDone ? 'bg-foreground/70' : 'bg-muted-foreground/40',
                      )}
                    />
                    {isActive && (
                      <motion.span
                        layoutId="pipeline-ring"
                        className="absolute inset-0 rounded-full border border-signal/60"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </span>
                  <span
                    className={cn(
                      'flex-1 text-sm font-medium tracking-tight transition-colors',
                      isActive ? 'text-foreground' : isDone ? 'text-foreground/70' : 'text-muted-foreground',
                    )}
                  >
                    {stage}
                  </span>
                  <span
                    className={cn(
                      'hidden font-mono text-[10px] tracking-wide transition-opacity sm:block',
                      isActive ? 'text-muted-foreground opacity-100' : 'opacity-0',
                    )}
                  >
                    {detail[stage]}
                  </span>
                </button>
                {i < pipeline.length - 1 && (
                  <span
                    className="pointer-events-none absolute top-[38px] left-[52px] h-[calc(100%-26px)] w-px bg-line"
                    aria-hidden
                  />
                )}
              </li>
            )
          })}
        </ol>

        <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-[10px] text-muted-foreground">
          <span>stage {String(current + 1).padStart(2, '0')} / 06</span>
          <div className="flex h-1 w-28 overflow-hidden rounded-full bg-line" aria-hidden>
            <motion.span
              className="h-full bg-signal"
              animate={{ width: `${((current + 1) / pipeline.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>

      {/* Corner ticks */}
      <span className="absolute -top-2 -left-2 size-4 border-t border-l border-foreground/30" aria-hidden />
      <span className="absolute -right-2 -bottom-2 size-4 border-r border-b border-foreground/30" aria-hidden />
    </motion.div>
  )
}
