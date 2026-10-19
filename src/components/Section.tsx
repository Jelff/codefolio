import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="editorial-section"
    >
      <h2 id={`${id}-title`} className="section-label">
        {title}
      </h2>
      {children}
    </section>
  );
}
