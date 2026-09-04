import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  src: string
  alt: string
  url?: string
  priority?: boolean
  sizes?: string
  className?: string
  imageClassName?: string
}

/** Minimal browser chrome around a project screenshot. */
export function BrowserFrame({ src, alt, url, priority, sizes = '100vw', className, imageClassName }: Props) {
  const host = url ? new URL(url).host : undefined
  return (
    <figure className={cn('overflow-hidden rounded-md border border-border bg-surface', className)}>
      <div className="flex items-center gap-3 border-b border-line px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
        </div>
        {host && (
          <div className="mx-auto flex h-6 w-full max-w-xs items-center justify-center rounded-sm bg-background/70 px-3 font-mono text-[10px] tracking-wide text-muted-foreground">
            <span className="truncate">{host}</span>
          </div>
        )}
        <span className="w-10" aria-hidden />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          quality={85}
          className={cn('object-cover object-top', imageClassName)}
        />
      </div>
    </figure>
  )
}
