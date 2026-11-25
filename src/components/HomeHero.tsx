import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Handshake,
  HardHat,
  ShieldCheck,
} from "lucide-react";
import { stats } from "../data/company";

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    id: "tower-cranes",
    image: "/images/hero/tower-cranes.jpg",
    alt: "Tower cranes at a large construction site",
  },
  {
    id: "commercial-building",
    image: "/images/hero/commercial-building.jpg",
    alt: "Modern commercial building under construction",
  },
  {
    id: "highway",
    image: "/images/hero/highway.jpg",
    alt: "Highway and road infrastructure development",
  },
  {
    id: "water",
    image: "/images/hero/water-infrastructure.jpg",
    alt: "Large water treatment and engineering infrastructure",
  },
];

const trustItems = [
  { label: "ISO 9001:2015 Standards", icon: ShieldCheck },
  { label: "PWD Registered Contractor", icon: Award },
  { label: "Zero-Harm Safety Policy", icon: HardHat },
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
    tone: "text-[#242620]",
  },
  {
    target: parseSnapshotNumber(
      stats.find((item) => item.label === "Infrastructure Delivered")?.value ?? "120+ km"
    ),
    label: "KM Infrastructure",
    tone: "text-[#7A5010]",
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
      className="hero-stagger w-full max-w-sm rounded-[22px] bg-white p-6 shadow-[0_28px_70px_rgba(30,27,22,0.12)] ring-1 ring-[#EAE6DC]"
      style={{ animationDelay: "980ms" }}
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#EAE6DC] pb-4">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#242620]">
          Project Snapshot
        </span>
        <span
          className="animate-gold-pulse h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.7)]"
          aria-hidden="true"
        />
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm font-bold text-[#7A5010]">
        <Handshake size={16} className="shrink-0 text-[#7A5010]" aria-hidden="true" />
        Ganesh Palve and Group
      </p>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {snapshotStats.map((item, index) => (
          <div
            key={item.label}
            className="min-w-0 rounded-xl bg-[#F6F5F1] px-4 py-4 ring-1 ring-[#EAE6DC]"
          >
            <p
              ref={(node) => {
                numberRefs.current[index] = node;
              }}
              className={`font-heading text-3xl font-extrabold leading-none ${item.tone}`}
            >
              {prefersReducedMotion() ? `${item.target}+` : "0+"}
            </p>
            <p className="mt-2 text-xs font-semibold leading-snug text-[#666C73]">{item.label}</p>
          </div>
        ))}
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
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const currentRef = useRef(0);
  const animatingRef = useRef(false);
  const transitionCountRef = useRef(0);
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
    const timers = timersRef.current;
    return () => {
      if (timers.timeout) clearTimeout(timers.timeout);
      timers.frames.forEach((frame) => cancelAnimationFrame(frame));
    };
  }, []);

  const changeTo = useCallback(
    (index: number, forcedDirection?: 1 | -1) => {
      if (animatingRef.current || index === currentRef.current) return;

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
        timersRef.current.frames.push(second);
      });
      timersRef.current.frames.push(first);

      timersRef.current.timeout = setTimeout(() => {
        currentRef.current = index;
        setCurrent(index);
        setIncoming(null);
        setPhase("idle");
        animatingRef.current = false;
      }, 1250);
    },
    [prefersReducedMotion],
  );

  useEffect(() => {
    if (prefersReducedMotion || paused || incoming !== null) return;
    const id = setTimeout(() => {
      changeTo((currentRef.current + 1) % slides.length);
    }, 5600);
    return () => clearTimeout(id);
  }, [changeTo, current, incoming, paused, prefersReducedMotion]);

  const layerTransform = (index: number) => {
    if (index === current) {
      return phase === "animate" && incoming !== null
        ? `translate3d(${-direction * 100}%, 0, 0)`
        : "translate3d(0, 0, 0)";
    }
    if (index === incoming) {
      return phase === "animate"
        ? "translate3d(0, 0, 0)"
        : `translate3d(${direction * 100}%, 0, 0)`;
    }
    return "translate3d(100%, 0, 0)";
  };

  const next = () => changeTo((currentRef.current + 1) % slides.length, 1);
  const previous = () =>
    changeTo((currentRef.current - 1 + slides.length) % slides.length, -1);

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#FAFAF8] text-[#242620] lg:min-h-[650px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Construction infrastructure slideshow"
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 overflow-hidden will-change-transform"
            style={{
              transform: layerTransform(index),
              transition:
                phase === "animate"
                  ? "transform 1200ms cubic-bezier(0.77, 0, 0.175, 1)"
                  : "none",
              zIndex: index === incoming ? 20 : index === current ? 10 : 0,
            }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover object-center"
              loading="eager"
              fetchPriority={index === 0 ? "high" : undefined}
              onError={(event) => {
                const image = event.currentTarget;
                if (image.src.includes("construction.jpg")) return;
                image.src = "/images/hero/construction.jpg";
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/95 via-white/82 to-white/45" aria-hidden="true" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/90 via-transparent to-white/55" aria-hidden="true" />
      <div
        className="hero-beam absolute -left-1/4 top-[-20%] z-10 h-[140%] w-1/2 bg-gradient-to-r from-transparent via-[#FFB800]/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col justify-center px-5 pb-24 pt-[6.75rem] lg:min-h-[650px] lg:px-12 lg:pb-24 lg:pt-[7.5rem] xl:px-16">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:items-center lg:gap-8">
          <div className="min-w-0">
            <div
              className="hero-stagger flex items-center gap-3"
              style={{ animationDelay: "80ms" }}
              aria-hidden="true"
            >
              <span className="h-px w-8 bg-[#D8D2C6]" />
              <span className="h-[3px] w-12 rounded-full bg-[#B37F00] shadow-[0_0_12px_rgba(179,127,0,0.28)]" />
              <span className="h-px w-8 bg-[#D8D2C6]" />
            </div>

            <h1 className="mt-5 max-w-[14ch] font-heading text-[clamp(2.7rem,5.4vw,5rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#242620] drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)]">
              <span className="line-mask">
                <span className="text-line" style={{ animationDelay: "320ms" }}>
                  Shaping Modern
                </span>
              </span>
              <span className="line-mask">
                <span className="text-line" style={{ animationDelay: "500ms" }}>
                  <span className="animated-gradient bg-gradient-to-r from-[#704700] via-[#A85E12] to-[#704700] bg-clip-text text-transparent contrast-[1.12] saturate-[1.08] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                    Cities &amp; Utilities
                  </span>
                </span>
              </span>
            </h1>

            <p
              className="hero-stagger mt-5 max-w-xl text-base leading-7 text-[#4A4F55] lg:text-lg xl:text-xl"
              style={{ animationDelay: "660ms" }}
            >
              Commercial towers, water networks and solar infrastructure built for
              government bodies, municipalities and private developers.
            </p>

            <div
              className="hero-stagger mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "800ms" }}
            >
              <Link
                to="/projects"
                className="btn-shine inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#B37F00] bg-[#FFB800] px-6 text-sm font-bold text-[#242620] shadow-[0_14px_30px_rgba(30,27,22,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFD166]"
              >
                Explore Our Projects
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#D8D2C6] bg-white px-6 text-sm font-bold text-[#242620] transition duration-300 hover:-translate-y-0.5 hover:border-[#B37F00] hover:text-[#7A5010]"
              >
                Discuss a Project
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div
              className="hero-stagger mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#666C73]"
              style={{ animationDelay: "920ms" }}
            >
              <span>Highways</span>
              <span className="text-[#7A5010]">•</span>
              <span>Water Supply</span>
              <span className="text-[#7A5010]">•</span>
              <span>Buildings</span>
              <span className="text-[#7A5010]">•</span>
              <span>Solar Infrastructure</span>
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-center gap-5 lg:items-end lg:pr-4 xl:pr-10">
            <ProjectSnapshot />

            <div
              className="hero-stagger flex w-full max-w-sm items-center justify-between gap-4"
              role="group"
              aria-label="Hero slideshow controls"
              style={{ animationDelay: "1100ms" }}
            >
              <div className="flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => changeTo(index)}
                    aria-label={`Go to slide ${index + 1}: ${slide.alt}`}
                    aria-current={index === current ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current
                        ? "w-10 bg-[#FFB800] shadow-[0_0_12px_rgba(255,184,0,0.7)]"
                        : "w-2.5 bg-[#D8D2C6] hover:bg-[#B37F00]/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous slide"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-[#EAE6DC] bg-white text-[#242620] transition-colors hover:border-[#B37F00] hover:text-[#7A5010]"
                >
                  <ChevronLeft size={19} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next slide"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-[#EAE6DC] bg-white text-[#242620] transition-colors hover:border-[#B37F00] hover:text-[#7A5010]"
                >
                  <ChevronRight size={19} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#D8D2C6] pt-6">
          {trustItems.map(({ label, icon: Icon }, index) => (
            <span
              key={label}
              className="hero-stagger flex items-center gap-2.5 text-xs font-bold text-[#4A4F55] sm:text-sm"
              style={{ animationDelay: `${1220 + index * 120}ms` }}
            >
              {index > 0 && (
                <span className="mr-4 hidden h-4 w-px bg-[#D8D2C6] sm:block" aria-hidden="true" />
              )}
              <Icon size={17} className="shrink-0 text-[#7A5010]" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="group absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1 text-[#4A4F55] transition-colors hover:text-[#7A5010]"
        aria-label="Scroll to About Us"
      >
        <span className="grid h-8 w-5 place-items-start justify-center rounded-full border border-[#D8D2C6] pt-1.5">
          <span className="h-1.5 w-1.5 animate-float rounded-full bg-[#FFB800]" />
        </span>
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown
          size={14}
          className="animate-float transition-transform group-hover:translate-y-0.5"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
