import { RollingText } from "./RollingText";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ToolsMarquee } from "./ToolsMarquee";
import { ThemeToggle } from "./ThemeToggle";

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
      <RollingText>{ui[id]}</RollingText>
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
    <header
      ref={headerRef}
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          document.getElementById("menu-toggle")?.focus();
        }
      }}
    >
      <Link
        to="/"
        className="identity"
        onClick={() => setOpen(false)}
        aria-label={`Jelffdev — ${personal.name} — ${ui.home}`}
      >
        <span className="identity-monogram" aria-hidden="true">
          Jelffdev.
        </span>
      </Link>
      <ToolsMarquee />
      <ThemeToggle />
      <button
        id="menu-toggle"
        type="button"
        className="menu-toggle"
        aria-label={open ? ui.close : ui.menu}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        <span className="menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav
        id="mobile-menu"
        className="mobile-navigation"
        aria-label={ui.mainNavigation}
        hidden={!open}
      >
        <NavigationLinks onNavigate={() => setOpen(false)} />
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
