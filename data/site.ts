export const site = {
  name: 'Abdulrahman',
  title: 'AI Web Developer & Digital Product Designer',
  url: 'https://abdulrahman.dev',
  description:
    'AI Web Developer and Digital Product Designer building modern websites, SaaS products, AI-powered experiences, and custom digital systems.',
  /**
   * Only real links are rendered. Leave a value empty to hide it.
   */
  links: {
    email: '',
    linkedin: '',
    github: '',
  },
}

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export const capabilities = [
  'Web Development',
  'UI/UX',
  'AI Integration',
  'Automation',
  'SaaS',
  'Dashboards',
  'API Integration',
]

export type Service = {
  index: string
  title: string
  description: string
  deliverables: string[]
  clientType: string
}

export const services: Service[] = [
  {
    index: '01',
    title: 'Web Development',
    description: 'High-performance websites and web applications built with modern technologies.',
    deliverables: ['Next.js / React frontends', 'Responsive layouts', 'CMS or headless content', 'Performance budgets'],
    clientType: 'Businesses that need a fast, credible web presence or a custom web app.',
  },
  {
    index: '02',
    title: 'UI/UX Design',
    description: 'Interfaces designed around usability, clarity, hierarchy, and conversion.',
    deliverables: ['UX flows & wireframes', 'Visual design systems', 'Component libraries', 'Interactive prototypes'],
    clientType: 'Founders and teams who need a product to look and feel intentional.',
  },
  {
    index: '03',
    title: 'AI Integration',
    description: 'Practical AI features integrated into products and business workflows.',
    deliverables: ['LLM-powered features', 'Assistants & copilots', 'Document & data pipelines', 'Evaluation & guardrails'],
    clientType: 'Products and operations teams with a concrete problem AI can solve.',
  },
  {
    index: '04',
    title: 'SaaS Development',
    description: 'Custom SaaS products, dashboards, authentication, APIs, and databases.',
    deliverables: ['Auth & multi-tenant data', 'Dashboards & admin panels', 'REST / API design', 'Postgres schemas'],
    clientType: 'Startups building a first product or replacing a fragile internal tool.',
  },
  {
    index: '05',
    title: 'Business Automation',
    description: 'Automation systems that reduce repetitive manual work.',
    deliverables: ['Workflow automation', 'Third-party integrations', 'Scheduled jobs & webhooks', 'Internal tooling'],
    clientType: 'Operations-heavy businesses losing hours to manual processes.',
  },
  {
    index: '06',
    title: 'Website + SEO',
    description: 'Fast, responsive, technically optimized websites built for search visibility.',
    deliverables: ['Technical SEO setup', 'Core Web Vitals optimization', 'Structured metadata', 'Accessible markup'],
    clientType: 'Companies whose website needs to be found and to convert.',
  },
]

export const process = [
  { index: '01', title: 'Discover', text: 'Understand the business, users, requirements, and goals.' },
  { index: '02', title: 'Plan', text: 'Define the structure, technology, UX flow, and implementation strategy.' },
  { index: '03', title: 'Design', text: 'Create the visual system and user experience.' },
  { index: '04', title: 'Build', text: 'Develop the product with clean, maintainable code.' },
  { index: '05', title: 'Integrate', text: 'Connect APIs, AI, databases, authentication, and automation where needed.' },
  { index: '06', title: 'Optimize', text: 'Test responsiveness, accessibility, performance, SEO, and reliability.' },
  { index: '07', title: 'Launch', text: 'Prepare the product for production and continued improvement.' },
]

export type TechGroup = {
  id: string
  label: string
  note: string
  items: string[]
}

export const technology: TechGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    note: 'Interfaces, rendering, and interaction.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    note: 'Services, APIs, and business logic.',
    items: ['Python', 'FastAPI', 'Node.js'],
  },
  {
    id: 'data',
    label: 'Data',
    note: 'Storage, querying, and integration.',
    items: ['PostgreSQL', 'Databases', 'APIs'],
  },
  {
    id: 'creative',
    label: 'Creative',
    note: 'Motion, 3D, and expressive interfaces.',
    items: ['Three.js', 'React Three Fiber', 'Framer Motion'],
  },
]

export const pipeline = ['Strategy', 'UX', 'Design', 'Development', 'AI', 'Launch']
