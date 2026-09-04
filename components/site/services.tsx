import { services } from '@/data/site'
import { SectionHeader } from '@/components/site/section-header'
import { Stagger, StaggerItem } from '@/components/motion/reveal'

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-line" aria-labelledby="services-heading">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-16 px-5 py-20 md:px-8 md:py-28 lg:py-36">
        <SectionHeader
          index="02"
          label="Services"
          id="services-heading"
          title="From idea to production."
          subtitle="Each engagement is scoped around what your business actually needs to ship, from a single high-performance website to a full SaaS product with AI built in."
        />

        <Stagger className="grid grid-cols-1 border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem
              key={service.index}
              className="group relative flex flex-col gap-8 border-r border-b border-line p-6 transition-colors hover:bg-foreground/[0.02] md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-[0.16em] text-signal">{service.index}</span>
                <span className="h-px w-8 bg-line transition-[width,background-color] duration-500 group-hover:w-14 group-hover:bg-signal" aria-hidden />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium tracking-tight md:text-2xl">{service.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>

              <dl className="mt-auto flex flex-col gap-5 border-t border-line pt-5">
                <div className="flex flex-col gap-2">
                  <dt className="eyebrow">Deliverables</dt>
                  <dd>
                    <ul className="flex flex-col gap-1.5">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-foreground/85">
                          <span className="size-1 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="flex flex-col gap-2">
                  <dt className="eyebrow">Good fit for</dt>
                  <dd className="text-pretty text-sm leading-relaxed text-muted-foreground">{service.clientType}</dd>
                </div>
              </dl>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
