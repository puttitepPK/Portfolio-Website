import { profile } from "../data";

const links = [
  { label: "FACEBOOK", value: "Puttitep Kaewket", href: profile.facebook }, { label: "INSTAGRAM", value: "pk_puttitep", href: profile.instagram },
  { label: "EMAIL", value: profile.email, href: `mailto:${profile.email}` }, { label: "GITHUB", value: profile.github.replace("https://", ""), href: profile.github },
  { label: "LINKEDIN", value: "linkedin.com/in/puttitepkaewket", href: profile.linkedin }, { label: "PHONE", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
];

export default function Contact() {
  return <section className="contact-terminal"><div className="contact-terminal__noise" aria-hidden="true" /><div className="contact-terminal__content">
    <p className="project-showcase__kicker"><span /> 05 / OPEN CHANNEL / LET'S CONNECT</p><h2>ข้อมูล<em>ติดต่อ</em></h2>
    <div className="contact-terminal__lead"><p>หากสนใจผลงาน หรือต้องการพูดคุยเกี่ยวกับโอกาสในการทำงานและ<br />สหกิจศึกษา สามารถติดต่อได้ตามช่องทางด้านล่าง</p><span><i /> กำลังมองหาโอกาสสหกิจศึกษา</span></div>
    <div className="contact-terminal__links">{links.map((link, index) => <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><span>0{index + 1} / {link.label}</span><strong>{link.value}</strong><b>↗</b></a>)}</div>
    <footer><span>{profile.name} · {profile.nameTh}</span><span>Designed & built by Puttitep Kaewket</span></footer>
  </div></section>;
}
