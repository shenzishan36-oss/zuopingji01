import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return undefined;
    }
    const timer = window.setTimeout(() => setVisible(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${visible ? "" : "is-hidden"}`} aria-hidden="true">
      <span className="mono">portfolio.index</span>
      <strong>SHEN DESIGN ARCHIVE</strong>
      <span className="mono">AI Product / Visual / AIGC / 2026</span>
    </div>
  );
}
