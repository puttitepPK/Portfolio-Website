import { featuredProject, projects } from "../data";

function Field({ label, children }) {
  return (
    <div className="rounded-2xl border border-cyan-200/15 bg-blue-400/[0.05] p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-cyan-200/60">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-blue-50/75">{children}</p>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-cyan-200/15 bg-blue-400/[0.05]">
      <div className="h-52 w-full bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(3,7,24,0.6)),url('https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-white">{project.name}</h3>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
              {project.team} · {project.period}
            </p>
          </div>
          <span className="rounded-full border border-white/15 bg-black/20 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/70">
            {project.tag}
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="ปัญหา">{project.problem}</Field>
          <Field label="วิธีแก้ปัญหา">{project.solution}</Field>
          <Field label="หน้าที่ในโปรเจกต์">{project.role}</Field>
          <Field label="ผลลัพธ์">{project.outcome}</Field>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 pt-3">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/60">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="tech-section relative min-h-screen border-b border-cyan-200/10 bg-[#050d20] px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-36">
      <div className="page-body mx-auto max-w-[1480px]">
        <div className="mb-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <h2 className="section-heading font-display text-[2.5rem] leading-[0.9] tracking-[-0.05em] text-white md:text-[4rem]">
              <span className="section-heading__index">03</span>
              <span className="section-heading__label">ผลงาน / โปรเจคต์</span>
            </h2>
          </div>

          <p className="max-w-[760px] text-lg leading-relaxed text-white/70">
            โปรเจกต์แต่ละงานทำให้ผมได้เรียนรู้จากปัญหาที่แตกต่างกัน 
            ทั้งการออกแบบระบบ การพัฒนา Frontend และ Backend รวมถึงการทำงานร่วมกับทีม 
            ผมพยายามนำความรู้ที่เรียนมาใช้แก้ปัญหาและพัฒนาระบบให้สามารถใช้งานได้จริง
          </p>
        </div>

        <div className="mb-10 rounded-[2rem] border border-cyan-200/15 bg-blue-400/[0.05] p-5 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70">
              Featured
            </span>
            <span className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/60">
              {featuredProject.tag}
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="h-[280px] w-full overflow-hidden rounded-[1.5rem] border border-cyan-200/15 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(3,7,24,0.62)),url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />

            <div>
              <h3 className="font-display text-3xl text-white">{featuredProject.name}</h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                {featuredProject.team} · {featuredProject.period}
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="ปัญหา">{featuredProject.problem}</Field>
                <Field label="วิธีแก้ปัญหา">{featuredProject.solution}</Field>
                <Field label="หน้าที่ในโปรเจกต์">{featuredProject.role}</Field>
                <Field label="ผลลัพธ์">{featuredProject.outcome}</Field>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.tech.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[.14em] text-white/60">{tech}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
