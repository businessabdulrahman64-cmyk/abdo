import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Capabilities } from '@/components/site/capabilities'
import { Work } from '@/components/site/work'
import { Services } from '@/components/site/services'
import { Process } from '@/components/site/process'
import { Technology } from '@/components/site/technology'
import { About } from '@/components/site/about'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { site } from '@/data/site'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.title,
    description: site.description,
    url: site.url,
    knowsAbout: ['Web Development', 'UI/UX Design', 'AI Integration', 'SaaS Development', 'Business Automation'],
  }

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Capabilities />
        <Work />
        <Services />
        <Process />
        <Technology />
        <About />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
