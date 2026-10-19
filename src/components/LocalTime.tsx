import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/context";

export function LocalTime() {
  const { language, ui } = useLanguage();
  const formatter = new Intl.DateTimeFormat(
    language === "pt" ? "pt-BR" : "en-US",
    {
      timeZone: "America/Fortaleza",
      hour: "numeric",
      minute: "2-digit",
      hour12: language === "en",
    },
  );
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(interval);
  }, []);
  return (
    <time dateTime={now.toISOString()}>
      {formatter.format(now)} <span className="ml-2">{ui.localTime}</span>
    </time>
  );
}
