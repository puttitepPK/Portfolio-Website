import { useEffect, useRef, useState } from "react";
import { featuredProject, projects } from "../data";

const caseStudies = [
  { ...projects[0], code: "01", accent: "cyan", images: ["/App SmartMain.png", "/App Smart1.png", "/App Smart2.png", "/App Smart3.png"] },
  { ...projects[1], code: "02", accent: "violet", images: ["/HomeyPets Main.png", "/HomeyPets Presentation (1).jpg", "/HomeyPets Presentation (2).jpg", "/HomeyPets Presentation (3).jpg", "/HomeyPets Presentation (4).jpg", "/HomeyPets Presentation (5).jpg", "/HomeyPets Presentation (6).jpg", "/HomeyPets Presentation (7).jpg"] },
  { ...featuredProject, code: "03", accent: "lime", images: ["/HomeyChatBot (1).jpg", "/HomeyChatBot (2).jpg", "/HomeyChatBot (3).jpg", "/HomeyChatBot App (1).png", "/HomeyChatBot App (2).png", "/HomeyChatBot App (3).png"] },
  { ...projects[2], code: "04", accent: "amber", images: ["/GameProMax1.png", "/GamePromax Presentation.jpg", "/GameProMax2.png", "/GameProMax3.png", "/GameProMax4.png", "/GameProMax5.png", "/GameProMax6.png", "/GameProMax7.png"] },
  { ...projects[3], code: "05", accent: "rose", images: ["/Khositniwat Main.png", "/Khositniwat App.png"] },
];

function ProjectStage({ project }) {
  const stageRef = useRef(null);
  const [active, setActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [englishName, thaiName] = project.name.split(/\s+—\s+/);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.38 });
    const stage = stageRef.current;
    if (stage) observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={stageRef} className={`project-stage project-stage--${project.accent} ${active ? "is-active" : ""}`} aria-label={project.name}>
      <div className="project-stage__card">
        <div className="project-stage__rail" aria-hidden="true"><span /></div>
        <header className="project-stage__head"><p className="project-stage__eyebrow">PROJECT / {project.code}</p><p className="project-stage__period">{project.period}</p></header>
        <div className="project-stage__grid">
          <div className="project-stage__copy">
            <div><p className="project-stage__tag">{project.tag}</p><h3><span className="project-stage__name-en">{englishName}</span>{thaiName && <span className="project-stage__name-th">{thaiName}</span>}</h3><p className="project-stage__team">{project.team}</p></div>
            <div className="project-stage__summary">
              <p><span>ปัญหา</span>{project.problem}</p>
              <p><span>วิธีแก้ปัญหา</span>{project.solution}</p>
              <p><span>หน้าที่ในโปรเจค</span>{project.role}</p>
              <p><span>ผลลัพธ์</span>{project.outcome}</p>
            </div>
            <div className="project-stage__tech" aria-label="Technologies used">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
          </div>
          <div className="project-stage__media">
            <div className="project-stage__screen"><img src={project.images[selectedImage]} alt={`${project.name} — ภาพที่ ${selectedImage + 1}`} /><span className="project-stage__scan" aria-hidden="true" /><span className="project-stage__screen-label">SYSTEM PREVIEW / {String(selectedImage + 1).padStart(2, "0")}</span></div>
            <div className="project-stage__thumbs" aria-label={`ภาพทั้งหมดของ ${project.name}`}>
              {project.images.map((image, index) => <button key={image} type="button" onClick={() => setSelectedImage(index)} className={selectedImage === index ? "is-selected" : ""} aria-label={`ดูภาพที่ ${index + 1}`} aria-pressed={selectedImage === index}><img src={image} alt="" /><i>{String(index + 1).padStart(2, "0")}</i></button>)}
            </div>
          </div>
        </div>
        <footer className="project-stage__footer"><p><span>ภาพประกอบโปรเจกต์</span>เลือกดูภาพตัวอย่างหน้าจอของระบบจากรายการภาพด้านบน</p><span className="project-stage__count">{String(project.images.length).padStart(2, "0")} ภาพ</span></footer>
      </div>
    </article>
  );
}

export default function Projects() {
  return <section className="project-showcase">
    <div className="project-showcase__intro"><p className="project-showcase__kicker"><span /> 03 / SELECTED WORK / 2024—2026</p><h2 className="project-title"><span>ผลงาน /</span><em>โปรเจคต์</em></h2><p>โปรเจกต์แต่ละงานทำให้ผมได้เรียนรู้จากปัญหาที่แตกต่างกัน ทั้งการออกแบบระบบ การพัฒนา Frontend และ Backend รวมถึงการทำงานร่วมกับทีม ผมพยายามนำความรู้ที่เรียนมาใช้แก้ปัญหาและพัฒนาระบบให้สามารถใช้งานได้จริง</p></div>
    <div className="project-showcase__marquee" aria-hidden="true"><div>BUILD · TEST · ITERATE · DEPLOY · BUILD · TEST · ITERATE · DEPLOY ·</div></div>
    <div className="project-showcase__stages">{caseStudies.map((project) => <ProjectStage key={project.code} project={project} />)}</div>
  </section>;
}
