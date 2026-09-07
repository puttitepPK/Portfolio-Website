import { useEffect, useRef, useState } from "react";
import { experience } from "../data";

const images = ["/TA1.jpg", "/TA2.jpg", "/TA3.jpg"];

export default function Experience() {
  const panelRef = useRef(null);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(0);
  const item = experience[0];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.32 },
    );
    if (panelRef.current) observer.observe(panelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience-showcase">
      <div className="experience-showcase__intro">
        <p className="project-showcase__kicker">
          <span /> 04 / FIELD EXPERIENCE / 2025—2026
        </p>
        <h2>
          ประสบการณ์
          <br />
          <em>การทำงาน</em>
        </h2>
      </div>
      <article
        ref={panelRef}
        className={`experience-stage ${active ? "is-active" : ""}`}
      >
        <div className="experience-stage__topline">
          <span>EXPERIENCE / 01</span>
          <span>{item.period}</span>
        </div>
        <div className="experience-stage__grid">
          <div className="experience-stage__copy">
            <p className="experience-stage__signal">
              FRONTEND + BACKEND MENTORING
            </p>
            <h3>{item.role}</h3>
            <p className="experience-stage__org">{item.org}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="experience-stage__stats">
              {/* <span>
                <b>02</b> รายวิชา
              </span>
              <span>
                <b>03</b> ภาพกิจกรรม
              </span>
              <span>
                <b>01</b> บทบาทหน้าที่
              </span> */}
            </div>
          </div>
          <div className="experience-stage__media">
            <div className="experience-stage__screen">
              <img
                src={images[selected]}
                alt={`ภาพประสบการณ์ Teaching Assistant ${selected + 1}`}
              />
              <span>TA ARCHIVE / {String(selected + 1).padStart(2, "0")}</span>
            </div>
            <div className="experience-stage__thumbs">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={index === selected ? "is-selected" : ""}
                  onClick={() => setSelected(index)}
                  aria-label={`ดูภาพกิจกรรมที่ ${index + 1}`}
                >
                  <img src={image} alt="" />
                  <i>{String(index + 1).padStart(2, "0")}</i>
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
