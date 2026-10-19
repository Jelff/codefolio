import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/context";

const items = ["about", "work", "experience", "contact"] as const;

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
      { rootMargin: "-10% 0px -55% 0px", threshold: 0 },
    );
    for (const item of items) {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [pathname]);
  return items.map((item) => {
    const id = item.toLowerCase();
    const current = pathname.startsWith("/work/")
      ? id === "work"
      : active === id;
    return (
      <Link
        key={id}
        to={`/#${id}`}
        onClick={onNavigate}
        aria-current={current ? "location" : undefined}
        className="nav-link"
      >
        {ui[item]}
      </Link>
    );
  });
}

export function Navigation() {
  const { personal, ui } = useLanguage();
  const [open, setOpen] = useState(false);
  return (
    <header className="sidebar entrance">
      <Link
        to="/"
        className="identity"
        onClick={() => setOpen(false)}
        aria-label={`${personal.name} — ${ui.home}`}
      >
        Jefferson B.
        <br />
        Mendonça
      </Link>
      <nav
        aria-label={ui.mainNavigation}
        className="hidden md:flex md:flex-col"
      >
        <NavigationLinks />
      </nav>
      <div
        className="mobile-navigation md:hidden"
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
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? ui.close : ui.menu}
        </button>
        <nav id="mobile-menu" aria-label={ui.mobileNavigation} hidden={!open}>
          <NavigationLinks onNavigate={() => setOpen(false)} />
        </nav>
      </div>
    </header>
  );
}
