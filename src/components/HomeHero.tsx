import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Landmark,
  Map,
  Route,
  ShieldCheck,
  Shovel,
  Sun,
  Waves,
} from "lucide-react";
import SiteImage from "./SiteImage";

interface HeroSlide {
  id: string;
  image: string;
  mobileImage: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    id: "road-construction",
    image: "/images/hero/road-construction.jpg",
    mobileImage: "/images/hero/hero-mobile-road-construction-sm.jpg",
    alt: "Road construction with asphalt paving machinery and rollers on a highway project",
  },
  {
    id: "water-supply-pipeline",
    image: "/images/hero/water-supply-pipeline.jpg",
    mobileImage: "/images/hero/hero-mobile-water-pipeline-sm.jpg",
    alt: "Underground water supply pipeline installation for a municipal network",
  },
  {
    id: "jcb-earthmoving",
    image: "/images/hero/jcb-earthmoving.jpg",
    mobileImage: "/images/hero/hero-mobile-excavator-sm.jpg",
    alt: "JCB excavator carrying out bulk earthmoving and land leveling",
  },
  {
    id: "well-excavation",
    image: "/images/hero/well-excavation.jpg",
    mobileImage: "/images/hero/hero-mobile-well-excavation-sm.jpg",
    alt: "Well construction and rural water resource development excavation",
  },
  {
    id: "bridge-construction",
    image: "/images/hero/bridge-construction.jpg",
    mobileImage: "/images/hero/hero-mobile-bridge-construction-sm.jpg",
    alt: "Reinforced concrete bridge construction for highway infrastructure",
  },
  {
    id: "solar-land",
    image: "/images/hero/solar-farm.jpg",
    mobileImage: "/images/hero/hero-mobile-solar-farm-sm.jpg",
    alt: "Ground-mounted solar farm developed on prepared land",
  },
];

const trustItems = [
  { label: "ISO 9001:2015 Standards", icon: ShieldCheck },
  { label: "PWD Registered Contractor", icon: Award },
];

const COMPANY_GSTIN = "27BXOPP0257Q1ZM";

const serviceCategories = [
  { label: "Highways", icon: Route },
  { label: "Water Supply", icon: Droplets },
  { label: "Bridges", icon: Landmark },
  { label: "Well Construction", icon: Waves },
  { label: "JCB & Excavation", icon: Shovel },
  { label: "Solar Infrastructure", icon: Sun },
  { label: "Land Development", icon: Map },
];

type Phase = "idle" | "prepare" | "animate";

export default function HomeHero() {
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [phase, setPhase] = useState<Phase>("idle");
  const [documentHidden, setDocumentHidden] = useState(false);
  const [paused, setPaused] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [introZoom, setIntroZoom] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const currentRef = useRef(0);
  const incomingRef = useRef<number | null>(null);
  const animatingRef = useRef(false);
  const transitionStartedRef = useRef(false);
  const transitionCountRef = useRef(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const timersRef = useRef<{
    timeout: ReturnType<typeof setTimeout> | null;
    frames: number[];
  }>({ timeout: null, frames: [] });

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReducedMotion(media.matches);
    sync();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", sync);
      return () => media.removeEventListener("change", sync);
    }
    media.addListener(sync);
    return () => media.removeListener(sync);
  }, []);

  useEffect(() => {
    const sync = () => setDocumentHidden(document.visibilityState === "hidden");
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setShowScrollHint(window.scrollY < 72);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const frame = requestAnimationFrame(() => setIntroZoom(true));
    return () => cancelAnimationFrame(frame);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      if (timers.timeout) clearTimeout(timers.timeout);
      timers.frames.forEach((frame) => cancelAnimationFrame(frame));
    };
  }, []);

  const startTransition = useCallback((index: number) => {
    if (incomingRef.current !== index || transitionStartedRef.current) return;
    transitionStartedRef.current = true;

    const timers = timersRef.current;
    const first = requestAnimationFrame(() => {
      const second = requestAnimationFrame(() => setPhase("animate"));
      timers.frames.push(second);
    });
    timers.frames.push(first);

    timers.timeout = setTimeout(() => {
      currentRef.current = index;
      incomingRef.current = null;
      setCurrent(index);
      setIncoming(null);
      setPhase("idle");
      animatingRef.current = false;
      transitionStartedRef.current = false;
    }, 820);
  }, []);

  const changeTo = useCallback(
    (index: number, forcedDirection?: 1 | -1) => {
      if (animatingRef.current || index === currentRef.current) return;

      const timers = timersRef.current;
      if (timers.timeout) clearTimeout(timers.timeout);
      timers.frames.forEach((frame) => cancelAnimationFrame(frame));
      timers.frames = [];

      const nextDirection =
        forcedDirection ?? (transitionCountRef.current % 2 === 0 ? 1 : -1);
      transitionCountRef.current += 1;

      if (prefersReducedMotion) {
        currentRef.current = index;
        setCurrent(index);
        return;
      }

      animatingRef.current = true;
      incomingRef.current = index;
      transitionStartedRef.current = false;
      setDirection(nextDirection);
      setIncoming(index);
      setPhase("prepare");
    },
    [prefersReducedMotion],
  );

  useEffect(() => {
    if (prefersReducedMotion || documentHidden || paused || incoming !== null) return;
    const id = setTimeout(() => {
      changeTo((currentRef.current + 1) % slides.length);
    }, 5500);
    return () => clearTimeout(id);
  }, [changeTo, current, documentHidden, incoming, paused, prefersReducedMotion]);

  const announceSlide = (index: number) => {
    setAnnouncement(`Slide ${index + 1} of ${slides.length}: ${slides[index].alt}`);
  };

  const next = () => {
    const index = (currentRef.current + 1) % slides.length;
    announceSlide(index);
    changeTo(index, 1);
  };

  const previous = () => {
    const index = (currentRef.current - 1 + slides.length) % slides.length;
    announceSlide(index);
    changeTo(index, -1);
  };

  const scrollToContent = () => {
    const target = document.getElementById("about");
    if (!target) return;
    setShowScrollHint(false);
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="home-hero group/hero relative isolate min-h-[100svh] overflow-hidden bg-[#17232D] text-white"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      onTouchStart={(event) => {
        const touch = event.changedTouches[0];
        if (touch) touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchEnd={(event) => {
        const start = touchStartRef.current;
        const touch = event.changedTouches[0];
        touchStartRef.current = null;
        if (!start || !touch) return;
        const deltaX = touch.clientX - start.x;
        const deltaY = touch.clientY - start.y;
        if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
        if (deltaX < 0) next();
        else previous();
      }}
      aria-label="Construction infrastructure slideshow"
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>

      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {slides.map((slide, index) => {
          const isActive = index === current;
          const isIncoming = index === incoming;
          const isTransitioning = phase === "animate" && incoming !== null;

          return (
            <div
              key={slide.id}
              className="home-hero__slide absolute inset-0 overflow-hidden will-change-transform"
              style={{
                transform:
                  isActive && isTransitioning
                    ? `translate3d(${-direction * 2.5}%, 0, 0)`
                    : isIncoming
                      ? phase === "animate"
                        ? "translate3d(0, 0, 0)"
                        : `translate3d(${direction * 2.5}%, 0, 0)`
                      : "translate3d(0, 0, 0)",
                opacity: isIncoming
                  ? phase === "animate"
                    ? 1
                    : 0
                  : isActive
                    ? isTransitioning
                      ? 0
                      : 1
                    : 0,
                transition:
                  phase === "animate"
                    ? "transform 820ms cubic-bezier(0.22, 1, 0.36, 1), opacity 720ms ease"
                    : "none",
                zIndex: isIncoming ? 20 : isActive ? 10 : 0,
              }}
            >
              {(isActive || isIncoming) && (
                <SiteImage
                  src={slide.image}
                  mobileSrc={slide.mobileImage}
                  alt={slide.alt}
                  className={`home-hero__image home-hero__image--${slide.id} h-full w-full object-cover object-center`}
                  style={{
                    transform: isIncoming
                      ? phase === "animate"
                        ? "scale(1.1)"
                        : "scale(1.02)"
                      : isTransitioning
                        ? "scale(1.12)"
                        : index === 0 && !introZoom
                          ? "scale(1.02)"
                          : "scale(1.1)",
                  }}
                  loading="eager"
                  fetchPriority={isActive ? "high" : undefined}
                  onLoad={() => startTransition(index)}
                  onError={() => startTransition(index)}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="home-hero__overlay absolute inset-0 z-10" aria-hidden="true" />

      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-[1500px] box-border flex-col px-5 pb-8 pt-[6.25rem] lg:px-12 lg:pb-10 lg:pt-[5.75rem] xl:px-16">
        <div className="flex flex-1 items-center justify-center py-4 lg:justify-start lg:py-0">
          <div className="w-full max-w-3xl text-left">
            <div
              className="hero-stagger inline-flex max-w-full items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sm:text-[10px]"
              style={{ animationDelay: "80ms" }}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A12B]" aria-hidden="true" />
              <span className="truncate">Civil Infrastructure <span className="text-[#D6A12B]">|</span> Government Contracting</span>
            </div>

            <h1 className="home-hero__heading mt-6 max-w-[16ch] font-heading text-[clamp(2.5rem,5vw,4.8rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-white">
              <span className="line-mask">
                <span className="text-line text-white" style={{ animationDelay: "320ms" }}>
                  Building Infrastructure.
                </span>
              </span>
              <span className="line-mask">
                <span className="text-line text-white" style={{ animationDelay: "500ms" }}>
                  <span className="text-[#D6A12B]">Developing Tomorrow.</span>
                </span>
              </span>
            </h1>

            <p
              className="hero-stagger mt-6 max-w-2xl text-base leading-7 text-[#F5F3EE] sm:text-[17px] lg:text-lg lg:leading-8"
              style={{ animationDelay: "660ms" }}
            >
              From highways and bridges to water systems and government projects,
              G.A. Palve &amp; Company delivers dependable civil infrastructure
              with quality workmanship and accountable execution.
            </p>

            <div
              className="hero-stagger mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "800ms" }}
            >
              <Link
                to="/projects"
                className="home-hero__button inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#D6A12B] bg-[#D6A12B] px-6 text-sm font-semibold text-[#17232D] shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E2B344] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F3EE]"
              >
                Explore Our Projects
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="home-hero__button inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/65 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6A12B]"
              >
                Get a Quote
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div
              className="hero-stagger mt-6 grid w-full max-w-lg grid-cols-2 items-stretch gap-1 sm:mt-8 sm:flex sm:max-w-3xl sm:flex-wrap sm:items-center sm:gap-3"
              style={{ animationDelay: "980ms" }}
              role="group"
              aria-label="Company credentials"
            >
              <div className="col-span-2 inline-flex min-h-8 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[9px] font-semibold text-white/95 backdrop-blur-sm sm:min-h-10 sm:px-4 sm:py-2 sm:text-xs">
                <span className="shrink-0 font-bold uppercase tracking-[0.12em] text-[#D6A12B]">GSTIN</span>
                <span>{COMPANY_GSTIN}</span>
              </div>
              {trustItems.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="inline-flex min-h-8 items-center justify-center gap-1 rounded-full border border-white/30 bg-white/10 px-1.5 py-1 text-center text-[9px] font-semibold leading-tight text-white/95 backdrop-blur-sm sm:min-h-10 sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
                >
                  <Icon size={13} className="shrink-0 text-[#D6A12B] sm:h-[15px] sm:w-[15px]" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 hidden border-t border-white/25 pt-5 min-[769px]:block lg:mt-8">
          <ul className="grid grid-cols-2 gap-y-3 sm:grid-cols-4 xl:grid-cols-7 xl:justify-start xl:gap-x-4 xl:gap-y-0">
            {serviceCategories.map(({ label, icon: Icon }, index) => (
              <li
                key={label}
                className={`flex min-w-0 min-h-10 items-center gap-2 text-[10px] font-semibold leading-tight text-white/95 sm:text-[11px] ${
                  index > 0 ? "xl:border-l xl:border-white/20" : ""
                }`}
              >
                <Icon size={16} className="shrink-0 text-[#D6A12B]" strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`absolute bottom-1 left-1/2 z-20 -translate-x-1/2 transition-all duration-500 motion-reduce:transition-none min-[769px]:bottom-[7.5rem] lg:bottom-[7.75rem] xl:bottom-[4.5rem] ${
          showScrollHint ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
        aria-hidden={!showScrollHint}
      >
        <button
          type="button"
          onClick={scrollToContent}
          tabIndex={showScrollHint ? 0 : -1}
          aria-label="Scroll to the About section"
          className="group flex flex-col items-center gap-1 rounded-md px-2 py-0.5 text-white/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6A12B] sm:px-3 sm:py-1.5"
        >
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] sm:text-[10px] lg:text-[11px]">
            Scroll to Explore
          </span>
          <ChevronDown
            className="hero-scroll-arrow h-3.5 w-3.5 text-[#F1C453] sm:h-4 sm:w-4"
            strokeWidth={2.2}
            aria-hidden="true"
          />
          <span
            className="hero-scroll-line hidden h-3 w-px origin-top bg-gradient-to-b from-white/70 to-transparent sm:block"
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 z-30 hidden -translate-y-1/2 items-center justify-between opacity-0 transition-opacity duration-300 group-hover/hero:opacity-100 focus-within:opacity-100 lg:flex"
        role="group"
        aria-label="Hero slideshow controls"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            next();
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            previous();
          }
        }}
      >
        <button
          type="button"
          onClick={previous}
          aria-label="Previous slide"
          className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-[#17232D]/55 text-white/95 opacity-90 backdrop-blur-[2px] transition-all hover:border-white hover:bg-[#17232D]/80 hover:text-white hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A12B]"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-[#17232D]/55 text-white/95 opacity-90 backdrop-blur-[2px] transition-all hover:border-white hover:bg-[#17232D]/80 hover:text-white hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A12B]"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
