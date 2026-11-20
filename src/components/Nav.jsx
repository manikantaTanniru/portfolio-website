import React, { useEffect, useRef, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import resumePdf from "../Assets/Manikanta_Resume.pdf";

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "systems", label: "Systems" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function initialTheme() {
  const explicit = document.documentElement.getAttribute("data-theme");
  if (explicit) return explicit;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function Nav() {
  const [theme, setTheme] = useState(initialTheme);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
      setStuck(y > 40);
      setHidden(y > 300 && y > lastY + 2);
      if (y < lastY - 2) setHidden(false);
      lastY = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
    setTheme(next);
  };

  const close = () => setOpen(false);

  return (
    <>
      <div className="progress" ref={barRef} aria-hidden="true" />
      <header className={`nav${stuck ? " stuck" : ""}${hidden ? " hidden" : ""}${open ? " open" : ""}`}>
        <a href="#top" className="nav-mark" onClick={close}>
          manikanta<span>.</span>
        </a>
        <div className="nav-right">
          <nav className="nav-links" aria-label="Primary">
            {SECTIONS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={close}>
                {label}
              </a>
            ))}
            <a href={resumePdf} target="_blank" rel="noreferrer" onClick={close}>
              Resume ↗
            </a>
          </nav>
          <button
            type="button"
            role="switch"
            aria-checked={theme === "dark"}
            aria-label="Dark mode"
            className="theme-switch"
            onClick={toggleTheme}
          >
            <span className="knob" aria-hidden="true" />
            <span className="ico sun" aria-hidden="true">
              <FiSun />
            </span>
            <span className="ico moon" aria-hidden="true">
              <FiMoon />
            </span>
          </button>
          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>
    </>
  );
}

export default Nav;
