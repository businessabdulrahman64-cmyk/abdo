import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

type Props = {
  index: string
  label: string
  title: string
  subtitle?: string
  id?: string
  className?: string
  align?: 'start' | 'split'
}

export function SectionHeader({ index, label, title, subtitle, id, className, align = 'split' }: Props) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-6',
        align === 'split' && 'lg:grid lg:grid-cols-12 lg:items-end lg:gap-8',
        className,
      )}
    >
      <p className={cn('eyebrow flex items-center gap-3', align === 'split' && 'lg:col-span-3')}>
        <span className="text-signal">{index}</span>
        <span className="h-px w-6 bg-line" aria-hidden />
        {label}
      </p>
      <div className={cn('flex flex-col gap-4', align === 'split' && 'lg:col-span-9')}>
        <h2
          id={id}
          className="text-balance text-3xl font-medium tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.05]"
        >
          {title}
        </h2>
        {subtitle && <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>}
      </div>
    </Reveal>
  )
}
