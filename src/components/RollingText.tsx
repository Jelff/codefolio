import type { ReactNode } from "react";

export function RollingText({ children }: { children: ReactNode }) {
  return (
    <span className="rolling-text">
      <span className="rolling-text-copy rolling-text-original">
        {children}
      </span>
      <span
        className="rolling-text-copy rolling-text-repeat"
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}
