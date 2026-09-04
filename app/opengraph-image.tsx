import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

export const alt = `${site.name} — ${site.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: '#131315',
        color: '#F4F3EF',
        fontFamily: 'sans-serif',
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 22, letterSpacing: 4, textTransform: 'uppercase', color: '#9A9A9F' }}>
        <div style={{ width: 12, height: 12, borderRadius: 999, background: '#F5D33A' }} />
        {site.title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -4, lineHeight: 1.02, maxWidth: 1000 }}>
          I build digital products that turn ideas into real experiences.
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 32, fontWeight: 500 }}>{site.name}</div>
          <div style={{ fontSize: 20, letterSpacing: 3, color: '#9A9A9F' }}>WEB · SAAS · AI · AUTOMATION</div>
        </div>
      </div>
    </div>,
    size,
  )
}
