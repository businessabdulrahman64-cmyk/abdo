import Link from 'next/link'
import { nav, site } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 py-10 md:px-8 md:py-14">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-medium tracking-tight">
            <span className="size-2 rounded-full bg-signal" aria-hidden />
            {site.name}
          </Link>
          <p className="text-sm text-muted-foreground">{site.title}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-col gap-3 border-t border-line pt-6 font-mono text-[11px] tracking-wide text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p>Designed and built by {site.name}.</p>
      </div>
    </footer>
  )
}
