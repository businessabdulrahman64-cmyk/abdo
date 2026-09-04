'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

type RevealProps<T extends ElementType> = {
  as?: T
  delay?: number
  /** Distance in px the element travels upward */
  distance?: number
  once?: boolean
  amount?: number
} & Omit<ComponentPropsWithoutRef<typeof motion.div>, 'as'>

/**
 * Fades + lifts a block into view once it enters the viewport.
 * Automatically disables translation when the user prefers reduced motion.
 */
export function Reveal<T extends ElementType = 'div'>({
  as,
  delay = 0,
  distance = 24,
  once = true,
  amount = 0.25,
  children,
  ...rest
}: RevealProps<T>) {
  const reduce = useReducedMotion()
  const Component = (as ? motion.create(as as ElementType) : motion.div) as typeof motion.div

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : distance },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } },
  }

  return (
    <Component initial="hidden" whileInView="visible" viewport={{ once, amount }} variants={variants} {...rest}>
      {children}
    </Component>
  )
}

type StaggerProps = ComponentPropsWithoutRef<typeof motion.div> & {
  stagger?: number
  delay?: number
  amount?: number
}

/** Parent container that staggers `StaggerItem` children. */
export function Stagger({ stagger = 0.08, delay = 0, amount = 0.2, children, ...rest }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, ...rest }: ComponentPropsWithoutRef<typeof motion.div>) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Word-by-word headline reveal. Keeps the full sentence in one accessible string. */
export function SplitWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.045, delayChildren: delay } } }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em]" aria-hidden>
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: reduce ? 0 : '110%', opacity: reduce ? 0 : 1 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
