import { experience } from "../data";

export default function Experience() {
  return (
    <section className="tech-section relative min-h-screen border-b border-cyan-200/10 bg-[#071126] px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-36">
      <div className="page-lead mx-auto grid max-w-[1480px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div>
          <h2 className="section-heading font-display text-[2.5rem] leading-[0.9] tracking-[-0.05em] text-white md:text-[4rem]">
            <span className="section-heading__index">04</span>
            <span className="section-heading__label">ประสบการณ์ <br/> การทำงาน</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((e) => (
            <div key={e.role} className="relative rounded-[1.75rem] border border-cyan-200/15 bg-blue-400/[0.05] p-6 md:p-8">
              <span className="absolute left-6 top-8 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,.9)]" />
              <div className="pl-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">{e.period}</p>
                <h3 className="mt-3 font-display text-2xl text-white">{e.role}</h3>
                <p className="mt-2 text-sm text-white/60">{e.org}</p>
                <ul className="mt-5 space-y-3 text-base leading-relaxed text-white/70">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
