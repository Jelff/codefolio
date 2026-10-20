import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import { LanguageSwitcher } from "./LanguageSwitcher";

const items = ["work", "about", "experience", "contact"] as const;

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  const { pathname } = useLocation();
  const { ui } = useLanguage();
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -50% 0px", threshold: 0 },
    );
    for (const item of items) {
      const section = document.getElementById(item);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [pathname]);
  return items.map((id) => (
    <Link
      key={id}
      to={`/#${id}`}
      onClick={onNavigate}
      aria-current={
        pathname.startsWith("/work/")
          ? id === "work"
            ? "location"
            : undefined
          : active === id
            ? "location"
            : undefined
      }
      className="nav-link"
    >
      {ui[id]}
    </Link>
  ));
}

export function Navigation() {
  const { personal, ui } = useLanguage();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--header-offset",
        `${header.getBoundingClientRect().height}px`,
      );
    });
    observer.observe(header);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--header-offset");
    };
  }, []);
  return (
    <header ref={headerRef} className="site-header">
      <Link
        to="/"
        className="identity"
        onClick={() => setOpen(false)}
        aria-label={`${personal.name} — ${ui.home}`}
      >
        <span className="identity-monogram" aria-hidden="true">
          jm<span>.</span>
        </span>
        <span className="identity-name hidden lg:block">
          Jefferson
          <br />
          Mendonça
        </span>
      </Link>
      <nav aria-label={ui.mainNavigation} className="hidden xl:flex xl:gap-7">
        <NavigationLinks />
      </nav>
      <div className="header-actions">
        <LanguageSwitcher />
        <div
          className="xl:hidden"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              document.getElementById("menu-toggle")?.focus();
            }
          }}
        >
          <button
            id="menu-toggle"
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? ui.close : ui.menu}
          </button>
          <nav
            id="mobile-menu"
            className="mobile-navigation"
            aria-label={ui.mobileNavigation}
            hidden={!open}
          >
            <NavigationLinks onNavigate={() => setOpen(false)} />
          </nav>
        </div>
      </div>
      <div className="reading-progress" aria-hidden="true" />
    </header>
  );
}
