'use client'

import { useRef, type ReactNode, type PointerEvent } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'

/**
 * Wraps a CTA so it gently follows the pointer while hovered.
 * Disabled for touch pointers and prefers-reduced-motion.
 */
export function Magnetic({ children, strength = 0.28, className }: { children: ReactNode; strength?: number; className?: string }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 })

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} onPointerMove={onMove} onPointerLeave={reset} style={{ x: sx, y: sy }} className={className}>
      {children}
    </motion.div>
  )
}
