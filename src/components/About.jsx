import { education1, education2, languages } from "../data";
import Skills from "./Skills";

export default function About() {
  return (
    <section className="tech-section relative min-h-screen border-b border-cyan-200/10 bg-[#071126] px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-36">
      <div className="page-lead mx-auto grid max-w-[1480px] gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div className="max-w-[460px]">
          <h2 className="section-heading font-display text-[2.5rem] leading-[0.9] tracking-[-0.05em] text-white md:text-[4rem]">
            <span className="section-heading__index">01</span>
            <span className="section-heading__label">เกี่ยวกับผม</span>
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/75">
            <p>
              นักศึกษาวิทยาการคอมพิวเตอร์ชั้นปีที่ 4 มีความสนใจด้านการพัฒนาซอฟต์แวร์และเว็บไซต์ มีประสบการณ์พัฒนาโปรเจกต์หลากหลายรูปแบบ ทั้ง Frontend, Backend และ Full Stack โดยมีโอกาสทำงานร่วมกับทีมและพัฒนาโปรเจกต์ตาม Requirement จากองค์กร
            </p>
            <p>
              จากการทำโปรเจกต์ ได้เรียนรู้การทำงานตั้งแต่การวางแผน พัฒนา และแก้ไขปัญหาของระบบ รวมถึงการทำงานร่วมกับผู้อื่น สนใจเรียนรู้เทคโนโลยีใหม่ ๆ และนำมาประยุกต์ใช้กับโปรเจกต์เพื่อพัฒนาทักษะอย่างต่อเนื่อง พร้อมเติบโตในสายงาน Software Developer
            </p>
            {/* <p>
              I am currently looking for a cooperative-education placement where I can contribute,
              learn from an experienced team, and grow into a stronger software developer.
            </p> */}
          </div>
        </div>

        <div className="relative flex min-h-[540px] items-center justify-center">
          <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-x-1/2 -translate-y-1/2 bg-white/20" />
          <div className="about-portrait relative h-[520px] w-full overflow-hidden rounded-[2rem] border border-cyan-200/30">
            <img src="/pk3.jpg" alt="Puttitep presenting a project" />
            <div className="about-portrait__grid" />
            <div className="about-portrait__wash" />
            <span className="about-portrait__scan" /> {/*เส้นสแกน*/}
            <span className="about-portrait__corner about-portrait__corner--top" />
            <span className="about-portrait__corner about-portrait__corner--bottom" />
            <span className="about-portrait__label">PROJECT PRESENTATION / 2026</span>
          </div>

          {/* <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
            PRESENTATION
          </div> */}
        </div>
      </div>

      <div className="page-cards mx-auto mt-12 grid max-w-[1480px] gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/60">การศึกษา</p>
          <p className="mt-4 text-2xl font-semibold text-white">{education1.faculty}</p>
          {/* <p className="mt-2 text-white/70">{education1.major}</p> */}
          <p className="mt-2 text-base text-white/70">{education1.school}</p>
          <p className="mt-2 font-mono text-sm text-white/55">
            {education1.period} · GPA {education1.gpa}
          </p>
          <br />
          <p className="mt-4 text-2xl font-semibold text-white">{education2.faculty}</p>
          <p className="mt-2 text-base text-white/75">{education2.major}</p>
          <p className="mt-2 text-base text-white/70">{education2.school}</p>
          <p className="mt-2 font-mono text-sm text-white/55">
            {education2.period} · GPA {education2.gpa}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/60">ภาษา</p>
          <ul className="mt-4 space-y-3">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between border-b border-white/10 pb-2 last:border-b-0 last:pb-0">
                <span className="text-base text-white/85">{lang.name}</span>
                <span className="font-mono text-sm text-white/60">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="page-cards mx-auto mt-6 grid max-w-[1480px] gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="font-mono text-[11px] uppercase tracking-[.18em] text-white/55">สถานะปัจจุบัน</p><p className="mt-3 text-lg leading-relaxed text-white/90">กำลังมองหาที่ฝึกสหกิจศึกษา</p></div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="font-mono text-[11px] uppercase tracking-[.18em] text-white/55">ที่อยู่</p><p className="mt-3 text-lg text-white/90">เขตบางเขน, กรุงเทพมหานคร, ประเทศไทย</p></div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="font-mono text-[11px] uppercase tracking-[.18em] text-white/55">จุดที่สนใจ</p><p className="mt-3 text-lg text-white/90">พัฒนาเว็บแอปพลิเคชันแบบ Full-stack</p></div>
      </div>

      <Skills />
    </section>
  );
}
