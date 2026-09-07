import { profile } from "../data";

const links = [
  { label: "Facebook", value: "Puttitep Kaewket", href: profile.facebook },
  { label: "Instagram", value: "pk_puttitep", href: profile.instagram },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github },
  { label: "LinkedIn", value: "linkedin.com/in/puttitepkaewket", href: profile.linkedin },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
];

export default function Contact() {
  return (
    <section className="tech-section relative border-b border-cyan-200/10 bg-[#050d20] px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-36">
      <div className="page-lead mx-auto grid max-w-[1480px] gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
        <div>
          <h2 className="section-heading font-display text-[2.5rem] leading-[0.9] tracking-[-0.05em] text-white md:text-[4rem]">
            <span className="section-heading__index">05</span>
            <span className="section-heading__label">Contact</span>
          </h2>
        </div>

        <div>
          <p className="max-w-[700px] text-xl leading-relaxed text-white/75 md:text-2xl">
            หากสนใจผลงาน หรือต้องการพูดคุยเกี่ยวกับโอกาสในการทำงานและ <br/> สหกิจศึกษา สามารถติดต่อได้ตามช่องทางด้านล่าง
          </p>

          <div className="mt-6 inline-flex max-w-xl items-center gap-3 rounded-2xl border border-cyan-200/20 bg-blue-400/[0.06] px-4 py-3 text-sm text-blue-50/75">
            <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.9)]" />
            กำลังมองหาโอกาสสหกิจศึกษา
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="rounded-[1.5rem] border border-cyan-200/15 bg-blue-400/[0.05] p-5 transition hover:border-cyan-200/55 hover:bg-blue-400/[0.1]"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">{link.label}</p>
                <p className="mt-3 break-all text-base text-white/85">{link.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1480px] flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
        <span>{profile.name} · {profile.nameTh}</span>
        <span>Designed & built by Puttitep Kaewket</span>
      </div>
    </section>
  );
}
