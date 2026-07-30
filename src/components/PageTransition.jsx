import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PageTransition({ pathname }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    gsap.fromTo(
      ref.current,
      { yPercent: 0 },
      { yPercent: -100, duration: 0.48, ease: "power2.out" },
    );
    return undefined;
  }, [pathname]);

  return <div ref={ref} className="page-transition" aria-hidden="true" />;
}
