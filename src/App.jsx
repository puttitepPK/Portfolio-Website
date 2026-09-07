import { useEffect, useLayoutEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const pages = {
  "/": Hero,
  "/about": About,
  "/projects": Projects,
  "/experience": Experience,
  "/contact": Contact,
};

function currentPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return pages[path] ? path : "/";
}

export default function App() {
  const [path, setPath] = useState(currentPath);
  const [displayedPath, setDisplayedPath] = useState(currentPath);
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const Page = pages[displayedPath];

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setLoading(false), 1450);
    const onPopState = () => {
      const nextPath = currentPath();
      setPath(nextPath);
      setDisplayedPath(nextPath);
    };
    window.addEventListener("popstate", onPopState);
    return () => {
      window.clearTimeout(loadingTimer);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  // Run after the replacement page has been committed to the DOM. Doing this
  // inside navigate could scroll the outgoing page for one rendered frame.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [displayedPath]);

  const navigate = (nextPath) => {
    if (nextPath === path || transitioning) return window.scrollTo({ top: 0, behavior: "smooth" });
    setTransitioning(true);
    window.setTimeout(() => {
      window.history.pushState({}, "", nextPath);
      setPath(nextPath);
      setDisplayedPath(nextPath);
    }, 260);
    window.setTimeout(() => setTransitioning(false), 720);
  };

  return (
    <div className="app-shell min-h-screen bg-[#04081a] text-white">
      <Nav path={path} navigate={navigate} />
      <div className={`route-transition ${transitioning ? "is-active" : ""}`} onWheel={(event) => transitioning && event.preventDefault()} aria-hidden="true"><span /><span /><i /></div>
      <main key={displayedPath} className="page-enter"><Page navigate={navigate} /></main>
      <div className={`tech-loader ${loading ? "is-visible" : ""}`} aria-hidden={!loading}>
        <div className="tech-loader__grid" />
        <div className="tech-loader__content">
          <span className="tech-loader__mark">PK</span>
          {/* <p className="tech-loader__label">Initializing portfolio</p> */}
          <p className="tech-loader__label">เริ่มต้นพอร์ตโฟลิโอ</p>
          <div className="tech-loader__track"><i /></div>
          <p className="tech-loader__status">ระบบพร้อมใช้งาน <span>01.00</span></p>
          {/* <p className="tech-loader__status">SYSTEM READY <span>01.00</span></p> */}
        </div>
      </div>
    </div>
  );
}
