import { useState } from "react";
import { profile } from "../data";

const links = [
  { path: "/", label: "หน้าแรก" },
  { path: "/about", label: "แนะนำตัว" },
  { path: "/projects", label: "ผลงาน" },
  { path: "/experience", label: "ประสบการณ์" },
];

export default function Nav({ path, navigate }) {
  const [open, setOpen] = useState(false);

  const handleClick = (nextPath) => {
    setOpen(false);
    navigate(nextPath);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="pointer-events-auto mx-auto hidden max-w-[1400px] items-center justify-between px-4 pt-4 md:flex md:px-8 md:pt-6">
        <button
          onClick={() => handleClick("/")}
          className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/25 bg-blue-950/50 text-sm font-semibold text-cyan-50 backdrop-blur-sm transition hover:border-cyan-200/70"
        >
          {profile.name.split(" ").map((name) => name[0]).join("").slice(0, 2)}
        </button>

        <nav className="pointer-events-auto hidden items-center gap-2 rounded-full border border-cyan-200/15 bg-blue-950/55 px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md md:flex">
          {links.map((item) => (
            <button
              key={item.path}
              onClick={() => handleClick(item.path)}
              className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition ${
                path === item.path ? "bg-cyan-300 text-[#04101f]" : "text-blue-100/65 hover:text-cyan-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleClick("/contact")}
          className="pointer-events-auto hidden rounded-full border border-cyan-200/25 bg-blue-950/55 px-5 py-2.5 text-sm font-medium text-cyan-50 backdrop-blur-sm transition hover:border-cyan-200/70 md:inline-flex"
        >
          ข้อมูลติดต่อ
        </button>
      </div>

      <div className="pointer-events-auto relative mx-4 mt-4 md:hidden">
        <div className="flex h-12 items-center justify-between rounded-full border border-cyan-200/20 bg-blue-950/85 px-4 shadow-lg shadow-black/30 backdrop-blur-md">
          <button onClick={() => handleClick("/")} className="grid h-8 w-8 place-items-center rounded-full border border-cyan-200/20 text-[11px] font-semibold text-cyan-50" aria-label="Go to home">
            {profile.name.split(" ").map((name) => name[0]).join("").slice(0, 2)}
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-8 w-8 place-items-center rounded-full border border-cyan-200/20"
          >
            <span className={`absolute h-px w-4 bg-cyan-50 transition ${open ? "rotate-45" : "-translate-y-1"}`} />
            <span className={`absolute h-px w-4 bg-cyan-50 transition ${open ? "-rotate-45" : "translate-y-1"}`} />
          </button>
        </div>

        {open && (
          <nav className="absolute inset-x-0 top-[3.5rem] rounded-2xl border border-cyan-200/20 bg-[#07142f]/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl" aria-label="Mobile navigation">
            {[...links, { path: "/contact", label: "Contact" }].map((item) => (
              <button
                key={item.path}
                onClick={() => handleClick(item.path)}
                className={`block w-full rounded-xl px-3 py-2 text-left text-sm ${
                  path === item.path ? "bg-cyan-300 text-[#04101f]" : "text-blue-100/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
