'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react'

/**
 * Subtle desktop-only cursor ring. Grows over interactive elements.
 * Native cursor stays visible; this is purely additive and hidden on touch devices.
 */
export function Cursor() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (reduce) return
    const fine = window.matchMedia('(pointer: fine)')
    if (!fine.matches) return
    setEnabled(true)

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement | null
      setActive(Boolean(target?.closest('a, button, [role="button"], input, textarea, select, [data-cursor]')))
    }
    const leave = () => {
      x.set(-100)
      y.set(-100)
    }
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [reduce, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden rounded-full border border-signal mix-blend-difference md:block"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: active ? 44 : 14, height: active ? 44 : 14, opacity: active ? 0.9 : 0.6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    />
  )
}
