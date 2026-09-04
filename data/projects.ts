export type CaseStudySection = {
  /** Two-digit index label, e.g. "02" */
  index: string
  title: string
  /** One or more paragraphs. Omit the section entirely if there is nothing truthful to say. */
  paragraphs: string[]
  /** Optional short bullet list rendered as a technical spec list */
  bullets?: string[]
}

export type Project = {
  slug: string
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  imageAlt: string
  liveUrl?: string
  githubUrl?: string
  year?: string
  role?: string
  challenge?: string
  solution?: string
  /** Only fill with verified outcomes. Leave undefined to hide the section. */
  results?: string[]
  featured: boolean
  /** Visual variant used by the work grid so cards do not look identical */
  layout: 'wide' | 'offset'
  /** Case-study sections in reading order */
  sections: CaseStudySection[]
}

export const projects: Project[] = [
  {
    slug: 'qevanta',
    title: 'QEVANTA',
    category: 'B2B SaaS · Business Operating System',
    description:
      'A B2B business operating-system concept bringing invoicing, procurement, pipeline, cash flow, and AI-powered business intelligence into one unified experience.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    image: '/projects/qevanta.png',
    imageAlt: 'QEVANTA landing page showing the headline "Intelligence built for B2B. By companies." next to a stepped 3D monolith.',
    liveUrl: 'https://qevanta.vercel.app/',
    year: '2026',
    role: 'Product design, UI/UX, frontend development',
    challenge:
      'Most B2B tooling splits finance, procurement, and sales across disconnected products. The concept had to present all of them as one operating system without feeling like a generic dashboard template.',
    solution:
      'A single unified narrative built around one 3D focal object, restrained monochrome typography, and a module structure that maps directly to real business functions: invoicing, procurement, pipeline, cash, and an AI layer that answers from the company\u2019s own data.',
    featured: true,
    layout: 'wide',
    sections: [
      {
        index: '01',
        title: 'Overview',
        paragraphs: [
          'QEVANTA is a concept for a B2B operating system: one product where invoicing, procurement, sales pipeline, and cash flow live together, with an AI layer that reasons over the same data instead of a bolted-on chatbot.',
          'The goal of the concept was to show how a serious, enterprise-grade product can be positioned with clarity and confidence rather than feature lists.',
        ],
      },
      {
        index: '02',
        title: 'The Challenge',
        paragraphs: [
          'B2B software is usually explained through screenshots of tables. That communicates complexity, not intelligence. The concept needed a first impression that made the product feel unified and deliberate while still speaking to operators who care about real workflows.',
        ],
      },
      {
        index: '03',
        title: 'Product Strategy',
        paragraphs: [
          'The positioning line \u201CIntelligence built for B2B. By companies.\u201D anchors the product as company-first and explicitly not consumer software. Every module is framed as a connected part of one system rather than a stand-alone feature.',
        ],
        bullets: ['Invoicing', 'Procurement', 'Pipeline', 'Cash flow', 'AI business intelligence'],
      },
      {
        index: '04',
        title: 'UX / UI',
        paragraphs: [
          'A monochrome palette, wide letter-spaced navigation, and an oversized display headline give the page an editorial rhythm. Secondary information is kept small and technical so hierarchy stays unambiguous.',
        ],
      },
      {
        index: '05',
        title: 'Development',
        paragraphs: [
          'Built with Next.js, TypeScript, and Tailwind CSS. The 3D stepped structure in the hero is rendered with Three.js and kept lightweight so it enhances the composition without hurting load performance.',
        ],
      },
      {
        index: '06',
        title: 'AI / Automation',
        paragraphs: [
          'The concept frames AI as a query layer over the company\u2019s real data: answers about cash, receivables, and pipeline come from the same source of truth as the operational modules.',
        ],
      },
      {
        index: '07',
        title: 'Technical Architecture',
        paragraphs: [
          'A component-driven Next.js frontend with a centralized content model, motion handled through Framer Motion, and a WebGL scene isolated in its own client component so the rest of the page stays server-rendered.',
        ],
      },
      {
        index: '08',
        title: 'Final Experience',
        paragraphs: [
          'A calm, confident landing experience that reads as a product rather than a template: one strong focal object, one message, and a structure that makes the scope of the system obvious within seconds.',
        ],
      },
    ],
  },
  {
    slug: 'neo-tech',
    title: 'NEO-TECH',
    category: 'Digital Product Studio · Web Design · AI',
    description:
      'A digital product studio concept focused on premium web design, development, UI/UX, AI integration, and custom digital systems.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Three Fiber', 'Framer Motion'],
    image: '/projects/neo-tech.png',
    imageAlt: 'NEO-TECH studio homepage with the headline "We build digital experiences that move businesses forward" beside a black 3D torus knot.',
    liveUrl: 'https://2026-08-26-04-37-16-480-12290e2a.vercel.app/',
    year: '2026',
    role: 'Brand direction, UI/UX, frontend development, 3D',
    challenge:
      'Studio websites tend to blur together. The concept needed a distinct voice and a visual signature that communicates craft without leaning on stock imagery or noisy effects.',
    solution:
      'A restrained black-and-white system with a single sculptural 3D object, a serif italic accent in the headline for editorial contrast, and a clear services-first structure aimed at business clients.',
    featured: true,
    layout: 'offset',
    sections: [
      {
        index: '01',
        title: 'Overview',
        paragraphs: [
          'NEO-TECH is a concept for a digital product studio offering strategy, web design, development, UI/UX, and AI integration for businesses that want digital products people remember.',
        ],
      },
      {
        index: '02',
        title: 'The Challenge',
        paragraphs: [
          'A studio site has to prove taste before it can sell services. The design had to feel premium immediately while remaining fast, readable, and clear about what the studio actually does.',
        ],
      },
      {
        index: '03',
        title: 'Product Strategy',
        paragraphs: [
          'The structure follows how a client evaluates a studio: what you do, how you work, who you are, how to start. Navigation mirrors that path with Work, Services, Process, About, and Contact.',
        ],
      },
      {
        index: '04',
        title: 'UX / UI',
        paragraphs: [
          'A pure black canvas, generous whitespace, and one italic serif word inside a grotesque headline create contrast without adding color. Buttons are pill-shaped and high-contrast so the primary action is never in doubt.',
        ],
      },
      {
        index: '05',
        title: 'Development',
        paragraphs: [
          'Built with Next.js and TypeScript. The torus-knot sculpture and wireframe halo are rendered with React Three Fiber inside a lazily loaded client boundary; everything else is static, server-rendered markup.',
        ],
      },
      {
        index: '06',
        title: 'AI / Automation',
        paragraphs: [
          'AI integration is presented as a service line: practical features embedded in client products and internal workflows rather than a standalone gimmick.',
        ],
      },
      {
        index: '07',
        title: 'Technical Architecture',
        paragraphs: [
          'Reusable section components, a shared motion configuration, and a 3D scene isolated from the document flow so layout, accessibility, and SEO are unaffected by the WebGL layer.',
        ],
      },
      {
        index: '08',
        title: 'Final Experience',
        paragraphs: [
          'A studio presence that feels sculpted rather than assembled: one object, one voice, and a services story that reads clearly on desktop and mobile.',
        ],
      },
    ],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
