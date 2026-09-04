'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { nav, site } from '@/data/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { scrollY } = useScroll()
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => setCompact(v > 40))

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'border-b transition-[background-color,border-color,padding] duration-300',
          compact || open ? 'border-line bg-background/85 backdrop-blur-md' : 'border-transparent bg-transparent',
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            'mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 transition-[padding] duration-300 md:px-8',
            compact ? 'py-3' : 'py-5',
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 font-medium tracking-tight text-foreground"
            onClick={() => setOpen(false)}
          >
            <span className="size-2 rounded-full bg-signal" aria-hidden />
            {site.name}
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className={cn(
                'hidden items-center gap-2 rounded-sm bg-primary font-medium text-primary-foreground transition-[background-color,padding] hover:bg-signal hover:text-signal-foreground md:inline-flex',
                compact ? 'px-3.5 py-2 text-[13px]' : 'px-4 py-2.5 text-sm',
              )}
            >
              Let&apos;s Work Together
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>

            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
              className="relative flex size-11 items-center justify-center rounded-sm border border-border md:hidden"
            >
              <span
                className={cn(
                  'absolute h-px w-5 bg-foreground transition-transform duration-300',
                  open ? 'rotate-45' : '-translate-y-1.5',
                )}
              />
              <span
                className={cn('absolute h-px w-5 bg-foreground transition-opacity duration-200', open && 'opacity-0')}
              />
              <span
                className={cn(
                  'absolute h-px w-5 bg-foreground transition-transform duration-300',
                  open ? '-rotate-45' : 'translate-y-1.5',
                )}
              />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] bottom-0 flex flex-col justify-between bg-background px-5 pt-8 pb-10 md:hidden"
          >
            <ul className="flex flex-col">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-line"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 text-3xl font-medium tracking-tight"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <p className="eyebrow">{site.title}</p>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-signal px-5 py-4 font-medium text-signal-foreground"
              >
                Let&apos;s Work Together
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
