import { profile } from "../data";

export default function Hero({ navigate }) {
  const codeLines = [
    ["const", " portfolio", " =", " createExperience", "({"],
    ["  designer", ":", " true", ","],
    ["  developer", ":", " true", ","],
    ["  detail", ":", " \"everything\""],
    ["});"],
    [""],
    ["const", " ideas", " =", " await", " discover", "();"],
    ["const", " outcome", " =", " ideas", ".map", "(", "makeReal", ");"],
    [""],
    ["function", " makeReal", "(", "idea", ") {"],
    ["  return", " {", " clarity", ":", " true", ","],
    ["    motion", ":", " \"intentional\"", ","],
    ["    experience", ":", " \"memorable\"", " };"],
    ["}"],
    [""],
    ["const", " stack", " =", " [", "React", ",", " TypeScript", ",", " Motion", "];"],
    ["const", " designSystem", " =", " compose", "({", " tone", ":", " \"precise\"", " });"],
    [""],
    ["export", " async", " function", " launch", "(", "project", ") {"],
    ["  const", " direction", " =", " await", " align", "(", "project", ");"],
    ["  return", " deliver", "(", "direction", ",", " {", " care", ":", " \"high\"", " });"],
    ["}"],
    [""],
    ["await", " portfolio", ".build", "(", "digital", ");"],
    ["// crafting ideas into interfaces"],
    ["export", " default", " portfolio", ";"],
  ];

  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pb-14">
      <div className="hero-code-bg absolute inset-0 -z-20" aria-hidden="true">
        <div className="hero-code-bg__glow" />
        <div className="hero-code-bg__window">
          <div className="hero-code-bg__bar"><i /><i /><i /><span>portfolio.tsx</span></div>
          <div className="hero-code-bg__editor">
            <div className="hero-code-bg__numbers">{codeLines.map((_, index) => <span key={index}>{String(index + 1).padStart(2, "0")}</span>)}</div>
            <pre>{codeLines.map((line, index) => (
              <code key={index} className="hero-code-bg__line" style={{ "--line-delay": `${.4 + index * .28}s` }}>
                {line.map((part, partIndex) => <span key={partIndex} className={`token token-${partIndex}`}>{part}</span>)}
                {index === 6 && <b className="hero-code-bg__cursor" />}
              </code>
            ))}</pre>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,8,26,.98)_0%,rgba(4,8,26,.78)_44%,rgba(4,8,26,.16)_100%),linear-gradient(0deg,rgba(4,8,26,.9)_0%,transparent_60%)]" />
      <div className="tech-grid absolute inset-0 -z-10 opacity-70" />
      <div className="noise absolute inset-0 -z-10 opacity-30" />
      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[1480px] flex-col justify-end">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[.22em] text-cyan-200/70">Portfolio · COMPUTER SCIENCE STUDENT</p>
        <div className="hero-title-layout">
          <h1 className="hero-title"><span className="hero-title__primary">เปลี่ยนไอเดีย</span><span className="hero-title__accent">ให้กลายเป็น<br />ซอฟต์แวร์ที่ใช้งานได้จริง</span></h1>
          <div className="hero-portrait-frame">
            <div className="hero-portrait" aria-hidden="true">
              <div className="hero-portrait__grid" />
              <img src="/pk2.png" alt="" />
              <span className="hero-portrait__scan" />
              <span className="hero-portrait__corner hero-portrait__corner--tl" />
              <span className="hero-portrait__corner hero-portrait__corner--br" />
              <span className="hero-portrait__tag hero-portrait__tag--top">PK / SOFTWARE DEV</span>
              <span className="hero-portrait__tag hero-portrait__tag--bottom">STATUS: OPEN TO WORK</span>
              <span className="hero-portrait__coords">13.7563° N&nbsp;&nbsp;100.5018° E</span>
            </div>
          </div>
        </div>
        <div className="mt-9 flex flex-col justify-between gap-8 border-t border-cyan-200/20 pt-5 md:flex-row md:items-end">
          <p className="max-w-md text-base leading-relaxed text-blue-100/75 md:text-lg">{profile.intro}</p>
          <div className="flex flex-wrap gap-3"><button onClick={() => navigate("/projects")} className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#04101f] transition hover:bg-cyan-200">ดูผลงานที่คัดสรร ↗</button><button onClick={() => navigate("/about")} className="rounded-full border border-cyan-200/35 px-5 py-3 text-sm font-semibold text-cyan-50 transition hover:border-cyan-200 hover:bg-cyan-300/10">เกี่ยวกับผม</button></div>
        </div>
        <div className="mt-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.2em] text-white/45"><span>{profile.role}</span></div>
      </div>
    </section>
  );
}
