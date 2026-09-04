import { capabilities } from '@/data/site'

export function Capabilities() {
  const items = [...capabilities, ...capabilities]
  return (
    <section aria-label="Capabilities" className="border-b border-line">
      <div className="mx-auto flex w-full max-w-[1400px] items-center px-5 md:px-8">
        <p className="eyebrow hidden shrink-0 border-r border-line py-5 pr-6 md:block">Capabilities</p>
        <div className="marquee-mask relative flex-1 overflow-hidden py-5">
          <ul className="flex w-max animate-marquee items-center gap-10 motion-reduce:animate-none" aria-hidden>
            {items.map((item, i) => (
              <li key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
                <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-foreground/80">{item}</span>
                <span className="size-1 rounded-full bg-signal" />
              </li>
            ))}
          </ul>
          {/* Accessible static list for screen readers */}
          <ul className="sr-only">
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
