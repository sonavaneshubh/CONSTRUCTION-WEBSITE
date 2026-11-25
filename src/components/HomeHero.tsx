import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Handshake,
  Landmark,
  Map,
  Route,
  ShieldCheck,
  Shovel,
  Sun,
  Waves,
} from "lucide-react";
import { stats } from "../data/company";
import SiteImage from "./SiteImage";

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    id: "water-supply-pipeline",
    image: "/images/hero/water-supply-pipeline.jpg",
    alt: "Underground water supply pipeline installation for a municipal network",
  },
  {
    id: "road-construction",
    image: "/images/hero/road-construction.jpg",
    alt: "Road construction with asphalt paving machinery and rollers on a highway project",
  },
  {
    id: "jcb-earthmoving",
    image: "/images/hero/jcb-earthmoving.jpg",
    alt: "JCB excavator carrying out bulk earthmoving and land leveling",
  },
  {
    id: "well-excavation",
    image: "/images/hero/well-excavation.jpg",
    alt: "Well construction and rural water resource development excavation",
  },
  {
    id: "bridge-construction",
    image: "/images/hero/bridge-construction.jpg",
    alt: "Reinforced concrete bridge construction for highway infrastructure",
  },
  {
    id: "solar-land",
    image: "/images/hero/solar-farm.jpg",
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

const COUNT_UP_DURATION = 2000;

const parseSnapshotNumber = (value: string) => {
  const parsed = Number.parseInt(value.replace(/\s*km/i, ""), 10);
  return Number.isFinite(parsed) ? parsed : 0;
};

const snapshotStats = [
  {
    target: parseSnapshotNumber(
      stats.find((item) => item.label === "Projects Completed")?.value ?? "50+"
    ),
    label: "Projects Delivered",
  },
  {
    target: parseSnapshotNumber(
      stats.find((item) => item.label === "Infrastructure Delivered")?.value ?? "120+ km"
    ),
    label: "KM Infrastructure",
  },
];

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ProjectSnapshot = memo(function ProjectSnapshot() {
  const cardRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || hasStartedRef.current) return;

    const setValues = (progress: number) => {
      const eased = easeOutCubic(progress);
      snapshotStats.forEach((stat, index) => {
        const node = numberRefs.current[index];
        if (node) node.textContent = `${Math.floor(stat.target * eased)}+`;
      });
    };

    if (prefersReducedMotion()) {
      hasStartedRef.current = true;
      setValues(1);
      return;
    }

    let frame = 0;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / COUNT_UP_DURATION, 1);
      setValues(progress);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || hasStartedRef.current) return;
        hasStartedRef.current = true;
        observer.disconnect();
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.25 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="hero-stagger home-hero__snapshot w-full max-w-[19rem] rounded-xl border border-white/70 bg-[#F5F3EE]/95 px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-sm"
      style={{ animationDelay: "980ms" }}
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#E4E0D7] pb-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#17232D]">
          Project Snapshot
        </span>
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9A6B16]" aria-hidden="true" />
      </div>
      <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#343C43]">
        <Handshake size={13} className="shrink-0 text-[#9A6B16]" aria-hidden="true" />
        Ganesh Palve and Group
      </p>
      <div className="mt-3 grid grid-cols-2 divide-x divide-[#E4E0D7]">
        {snapshotStats.map((item, index) => (
          <div key={item.label} className={`min-w-0 ${index === 1 ? "pl-4" : "pr-4"}`}>
            <p
              ref={(node) => {
                numberRefs.current[index] = node;
              }}
              className="font-heading text-[1.65rem] font-extrabold leading-none text-[#17232D]"
            >
              {prefersReducedMotion() ? `${item.target}+` : "0+"}
            </p>
            <p className="mt-1 text-[10px] font-semibold leading-snug text-[#7A5010]">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 border-t border-[#E4E0D7] pt-2.5">
        <div className="grid grid-cols-3 gap-2">
          {COMPANY_GSTIN.trim() && (
            <div className="flex min-w-0 items-start gap-1 text-[9px] font-semibold leading-tight text-[#4A4F55]">
              <span className="mt-px shrink-0 text-[#9A6B16]">GSTIN</span>
              <span className="break-all">{COMPANY_GSTIN.trim()}</span>
            </div>
          )}
          {trustItems.map(({ label, icon: Icon }) => (
            <div key={label} className="flex min-w-0 items-start gap-1.5 text-[9px] font-semibold leading-tight text-[#4A4F55]">
              <Icon size={13} className="mt-px shrink-0 text-[#9A6B16]" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

type Phase = "idle" | "prepare" | "animate";

export default function HomeHero() {
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [phase, setPhase] = useState<Phase>("idle");
  const [documentHidden, setDocumentHidden] = useState(false);
  const [introZoom, setIntroZoom] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const currentRef = useRef(0);
  const animatingRef = useRef(false);
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
      setDirection(nextDirection);
      setIncoming(index);
      setPhase("prepare");

      const first = requestAnimationFrame(() => {
        const second = requestAnimationFrame(() => setPhase("animate"));
        timers.frames.push(second);
      });
      timers.frames.push(first);

      timers.timeout = setTimeout(() => {
        currentRef.current = index;
        setCurrent(index);
        setIncoming(null);
        setPhase("idle");
        animatingRef.current = false;
      }, 820);
    },
    [prefersReducedMotion],
  );

  useEffect(() => {
    if (prefersReducedMotion || documentHidden || incoming !== null) return;
    const id = setTimeout(() => {
      changeTo((currentRef.current + 1) % slides.length);
    }, 5500);
    return () => clearTimeout(id);
  }, [changeTo, current, documentHidden, incoming, prefersReducedMotion]);

  const next = () => changeTo((currentRef.current + 1) % slides.length, 1);
  const previous = () =>
    changeTo((currentRef.current - 1 + slides.length) % slides.length, -1);

  return (
    <section
      id="home"
      className="home-hero relative isolate min-h-[100svh] overflow-hidden bg-[#17232D] text-white"
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
              <SiteImage
                src={slide.image}
                alt={slide.alt}
                className={`home-hero__image home-hero__image--${slide.id} h-full w-full object-cover object-center`}
                style={{
                  transform: isIncoming
                    ? phase === "animate"
                      ? "scale(1.1)"
                      : "scale(1.02)"
                    : isActive
                      ? isTransitioning
                        ? "scale(1.12)"
                        : index === 0 && !introZoom
                          ? "scale(1.02)"
                          : "scale(1.1)"
                      : "scale(1.02)",
                }}
                loading="eager"
                fetchPriority={index === 0 ? "high" : undefined}
              />
            </div>
          );
        })}
      </div>

      <div className="home-hero__overlay absolute inset-0 z-10" aria-hidden="true" />

      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-[1500px] box-border flex-col justify-center px-5 pb-10 pt-[6.75rem] lg:justify-between lg:px-12 lg:pb-10 lg:pt-[5.75rem] xl:px-16">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:items-center lg:gap-8">
          <div className="min-w-0">
            <div
              className="hero-stagger inline-flex max-w-full items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-[10px]"
              style={{ animationDelay: "80ms" }}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A12B]" aria-hidden="true" />
              <span className="truncate">Civil Infrastructure <span className="text-[#D6A12B]">|</span> Government Contracting</span>
            </div>

            <h1 className="home-hero__heading mt-5 max-w-[18ch] font-heading text-[clamp(2.35rem,4.6vw,4.4rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-white">
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
              className="hero-stagger mt-5 max-w-xl text-base leading-7 text-[#F5F3EE] sm:text-[17px] lg:text-lg"
              style={{ animationDelay: "660ms" }}
            >
              G.A. Palve &amp; Company delivers reliable civil infrastructure, road
              development, water supply systems, government contracting and
              engineering solutions with a commitment to quality and trusted execution.
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

          </div>

          <div className="mt-10 flex min-w-0 flex-col items-center gap-3 lg:mt-20 lg:items-end lg:pr-4 xl:pr-10">
            <ProjectSnapshot />
          </div>
        </div>

        <div className="mt-8 border-t border-white/25 pt-5 lg:mt-6">
          <ul className="grid grid-cols-2 gap-y-3 sm:grid-cols-4 xl:grid-cols-7 xl:gap-y-0">
            {serviceCategories.map(({ label, icon: Icon }, index) => (
              <li
                key={label}
                className={`flex min-w-0 items-center gap-2 whitespace-nowrap text-[10px] font-semibold leading-tight text-white/90 sm:text-[11px] xl:justify-center xl:px-2 ${
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
        className="pointer-events-none absolute inset-x-0 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between"
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
          className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-[#17232D]/15 text-white/40 opacity-60 backdrop-blur-[1px] transition-all hover:border-white/60 hover:bg-[#17232D]/40 hover:text-white hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A12B] sm:h-10 sm:w-10"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-[#17232D]/15 text-white/40 opacity-60 backdrop-blur-[1px] transition-all hover:border-white/60 hover:bg-[#17232D]/40 hover:text-white hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A12B] sm:h-10 sm:w-10"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
