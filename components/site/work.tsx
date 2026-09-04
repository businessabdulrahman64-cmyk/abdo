import { featuredProjects } from '@/data/projects'
import { SectionHeader } from '@/components/site/section-header'
import { ProjectCard } from '@/components/site/project-card'

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-line" aria-labelledby="work-heading">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-16 px-5 py-20 md:px-8 md:py-28 lg:gap-24 lg:py-36">
        <SectionHeader
          index="01"
          label="Selected Work"
          id="work-heading"
          title="Selected Work"
          subtitle="A selection of digital products and experiences I've designed and built."
        />
        <div className="flex flex-col gap-20 lg:gap-32">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
