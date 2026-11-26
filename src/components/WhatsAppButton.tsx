import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { company } from "../data/company";

export default function WhatsAppButton() {
  const { pathname } = useLocation();
  const [snapshotVisible, setSnapshotVisible] = useState(false);
  const controlsRef = useRef<HTMLDivElement>(null);
  const updateFrameRef = useRef<number | null>(null);
  const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;
  const socialButtons = [
    {
      label: "Instagram",
      href: company.social.instagram,
      className:
        "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white shadow-pink-500/30 hover:shadow-pink-500/50",
    },
    {
      label: "Facebook",
      href: company.social.facebook,
      className: "bg-[#1877F2] text-white shadow-blue-500/30 hover:shadow-blue-500/50",
    },
  ].filter(({ href }) => href && href !== "#");

  useEffect(() => {
    if (pathname !== "/") return;

    const snapshot = document.querySelector(".home-hero__snapshot");
    const controls = controlsRef.current;
    if (!snapshot || !controls) return;

    const updateVisibility = () => {
      if (updateFrameRef.current !== null) return;

      updateFrameRef.current = window.requestAnimationFrame(() => {
        updateFrameRef.current = null;
        const cardRect = snapshot.getBoundingClientRect();
        const controlsRect = controls.getBoundingClientRect();
        const overlaps =
          cardRect.left < controlsRect.right &&
          cardRect.right > controlsRect.left &&
          cardRect.top < controlsRect.bottom &&
          cardRect.bottom > controlsRect.top;

        setSnapshotVisible((previous) => (previous === overlaps ? previous : overlaps));
      });
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(updateVisibility);
    resizeObserver?.observe(snapshot);
    resizeObserver?.observe(controls);
    updateVisibility();

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
      resizeObserver?.disconnect();
      if (updateFrameRef.current !== null) {
        window.cancelAnimationFrame(updateFrameRef.current);
        updateFrameRef.current = null;
      }
    };
  }, [pathname]);

  const shouldHide = pathname === "/" && snapshotVisible;

  return (
    <div
      ref={controlsRef}
      aria-hidden={shouldHide}
      inert={shouldHide}
      className={`fixed bottom-6 right-6 z-[var(--z-float)] flex flex-col-reverse items-center gap-2 transition-opacity duration-300 ${
        shouldHide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Inquiry with G A Palve and Company"
        tabIndex={shouldHide ? -1 : undefined}
        className="group relative grid h-12 w-12 place-items-center rounded-full border border-[#FFB800]/40 bg-[#25D366] text-white opacity-75 shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-110 hover:opacity-100 hover:shadow-green-500/50 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#168C4A]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-7 w-7"
        >
          <path d="M16 3.5a12 12 0 0 0-10.2 18.3l-1.6 6 6.2-1.6A12 12 0 1 0 16 3.5Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12.1 10.1c-.3-.6-.6-.6-.9-.6h-.7c-.2 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8 2.6 4.1 6.4 5.6c3.1 1.3 3.8 1 4.5.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-1.9-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.8Z" fill="currentColor" />
        </svg>
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-30 motion-safe:animate-ping" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg border border-[#FFB800]/35 bg-white px-3.5 py-1.5 text-xs font-bold text-[#242620] opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          Chat with Engineering Team
        </span>
      </a>
      {socialButtons.map(({ label, href, className }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit us on ${label}`}
          tabIndex={shouldHide ? -1 : undefined}
          className={`group relative grid h-11 w-11 place-items-center rounded-full opacity-75 shadow-md transition-all duration-300 hover:scale-110 hover:opacity-100 hover:shadow-lg focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242620] ${className}`}
        >
          {label === "Instagram" ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
              <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
            </svg>
          )}
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-[#242620] opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
