import { skillGroups, softSkills } from "../data";

export default function Skills() {
  return (
    <div className="tech-toolkit mx-auto mt-16 max-w-[1480px] border-t border-white/10 pt-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="section-heading font-display text-4xl leading-none tracking-[-.05em] md:text-5xl"><span className="section-heading__index">02</span><span className="section-heading__label">ทักษะด้านเทคนิค</span></h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-white/60">ทักษะที่ได้จากการเรียนในมหาวิทยาลัย การทำงานเป็นทีม การทำโปรเจกต์ด้วยตัวเอง และประสบการณ์จากการเป็นผู้ช่วยสอน</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <section key={group.label} className="rounded-2xl border border-cyan-200/15 bg-blue-400/[0.05] p-5">
            <h3 className="font-mono text-[12px] uppercase tracking-[.17em] text-cyan-200/70">{group.label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => <span key={item} className="rounded-full border border-cyan-200/15 bg-blue-950/50 px-3 py-1.5 text-base text-blue-50/85">{item}</span>)}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-5 font-display text-2xl tracking-[-.035em] text-white md:text-3xl">ทักษะด้านการทำงาน</h3>
        <div className="flex flex-wrap gap-3 border-t border-cyan-200/15 pt-5">{softSkills.map((skill) => <span key={skill} className="rounded-full border border-cyan-200/25 bg-cyan-200/[0.06] px-4 py-2 text-base text-blue-50/90">{skill}</span>)}</div>
      </div>
    </div>
  );
}
