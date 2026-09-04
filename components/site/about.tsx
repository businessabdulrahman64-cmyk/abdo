import { SectionHeader } from '@/components/site/section-header'
import { Reveal } from '@/components/motion/reveal'

const principles = [
  { label: 'Product thinking', text: 'Decisions start from the user and the business goal, not the framework.' },
  { label: 'Design + engineering', text: 'One person owning UI/UX and implementation removes the hand-off gap.' },
  { label: 'AI with human review', text: 'AI accelerates the work; code, design, content, security, and performance are reviewed by me.' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line" aria-labelledby="about-heading">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-16 px-5 py-20 md:px-8 md:py-28 lg:py-36">
        <SectionHeader index="05" label="About" id="about-heading" title="I care about the product, not just the code." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="flex flex-col gap-6 text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl lg:col-span-7 lg:col-start-4">
            <p>
              I combine product thinking, UI/UX design, frontend engineering, backend development, and AI to create
              digital experiences that are both visually strong and technically solid.
            </p>
            <p className="text-muted-foreground">
              I use AI to accelerate research, development, debugging, and repetitive workflows — while maintaining
              human review across code, design, content, security, and performance.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-9 lg:col-start-4">
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-line md:grid-cols-3">
              {principles.map((p) => (
                <div key={p.label} className="flex flex-col gap-3 bg-background p-6">
                  <dt className="flex items-center gap-2 text-sm font-medium">
                    <span className="size-1.5 rounded-full bg-signal" aria-hidden />
                    {p.label}
                  </dt>
                  <dd className="text-pretty text-sm leading-relaxed text-muted-foreground">{p.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
