import { education1, education2, languages, profile } from "../data";
import Skills from "./Skills";

export default function About() {
  return (
    <section className="about-showcase">
      <div className="about-showcase__intro">
        <p className="project-showcase__kicker">
          <span /> 01 / PROFILE / SOFTWARE DEVELOPER
        </p>
        <h2>
          เกี่ยวกับ<em>ผม</em>
        </h2>
      </div>
      <article className="about-profile-card">
        <div className="about-profile-card__copy">
          <p className="about-profile-card__label">PROFILE / 2569</p>
          <h3 className="about-profile-card__name">
            {profile.nameTh.split(" ")[0]} <em>{profile.nameTh.split(" ").slice(1).join(" ")}</em>
          </h3>
          <div className="about-profile-card__text">
            <p>
              นักศึกษาวิทยาการคอมพิวเตอร์ชั้นปีที่ 4
              มีความสนใจด้านการพัฒนาซอฟต์แวร์และเว็บไซต์
              มีประสบการณ์พัฒนาโปรเจกต์หลากหลายรูปแบบ ทั้ง Frontend, Backend และ
              Full Stack โดยมีโอกาสทำงานร่วมกับทีมและพัฒนาโปรเจกต์ตาม
              Requirement จากองค์กร
            </p>
            <p>
              จากการทำโปรเจกต์ ได้เรียนรู้การทำงานตั้งแต่การวางแผน พัฒนา
              และแก้ไขปัญหาของระบบ รวมถึงการทำงานร่วมกับผู้อื่น
              สนใจเรียนรู้เทคโนโลยีใหม่ ๆ
              และนำมาประยุกต์ใช้กับโปรเจกต์เพื่อพัฒนาทักษะอย่างต่อเนื่อง
              พร้อมเติบโตในสายงาน Software Developer
            </p>
          </div>
          <br />
          {/* <div className="about-profile-card__status">
            <span>
              <i /> กำลังมองหาที่ฝึกสหกิจศึกษา
            </span>
            <span>FULL-STACK WEB APPLICATION</span>
          </div> */}
        </div>
        <div className="about-profile-card__media">
          <img src="/pk3.jpg" alt="Puttitep presenting a project" />
          <span className="about-profile-card__scan" aria-hidden="true" />
          <span className="about-profile-card__caption">
            PROJECT PRESENTATION / 2569
          </span>
        </div>
      </article>
      <div className="about-showcase__data">
        <article className="about-data-card about-data-card--education">
          <p className="about-data-card__label">การศึกษา</p>
          <div>
            <h3>{education1.faculty}</h3>
            <p>{education1.school}</p>
            <span>
              {education1.period} · GPA {education1.gpa}
            </span>
          </div>
          <div>
            <h3>{education2.faculty}</h3>
            <p>{education2.major}</p>
            <p>{education2.school}</p>
            <span>
              {education2.period} · GPA {education2.gpa}
            </span>
          </div>
        </article>
        <article className="about-data-card">
          <p className="about-data-card__label">ภาษา</p>
          <ul>
            {languages.map((lang) => (
              <li key={lang.name}>
                <span>{lang.name}</span>
                <b>{lang.level}</b>
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="about-showcase__signals">
        <article>
          <span>สถานะปัจจุบัน</span>
          <p>กำลังมองหาที่ฝึกสหกิจศึกษา</p>
        </article>
        <article>
          <span>ที่อยู่</span>
          <p>เขตจตุจักร, กรุงเทพมหานคร, ประเทศไทย</p>
        </article>
        <article>
          <span>จุดที่สนใจ</span>
          <p>พัฒนาเว็บแอปพลิเคชันแบบ Full-stack</p>
        </article>
      </div>
      <div className="about-showcase__skills">
        <Skills />
      </div>
    </section>
  );
}
