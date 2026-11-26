import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function" ||
      typeof IntersectionObserver === "undefined"
    ) {
      return true;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    if (media?.matches || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsVisible(true);
        observer.disconnect();
      }
    };

    if (media && typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
    } else if (media) {
      media.addListener(onChange);
    }

    return () => {
      observer.disconnect();
      if (media && typeof media.removeEventListener === "function") {
        media.removeEventListener("change", onChange);
      } else if (media) {
        media.removeListener(onChange);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}
