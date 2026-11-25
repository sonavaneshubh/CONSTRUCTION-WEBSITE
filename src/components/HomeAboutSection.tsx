import { Link } from "react-router-dom";
import { ArrowRight, Building2, Droplets, Route } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const focusAreas = [
  { icon: Building2, title: "Civil & Structures", text: "Foundations, RCC frames and bridges" },
  { icon: Route, title: "Roads & Highways", text: "Asphalt, concrete and urban corridors" },
  { icon: Droplets, title: "Water & Utilities", text: "Pipelines, reservoirs and pump houses" },
];

export default function HomeAboutSection() {
  return (
    <section
      id="about"
      className="section-surface scroll-mt-24 bg-[#FAFAF8] py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] lg:gap-16">
          <ScrollReveal direction="right">
            <div className="min-w-0">
              <span className="eyebrow">About Us</span>
              <h2 className="mt-4 max-w-xl font-heading text-[clamp(2.1rem,3.7vw,3.4rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#242620]">
                Create. Innovate. <span className="text-[#7A5010]">Build.</span>
              </h2>
              <div className="gold-line mt-5" />

              <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-[#4A4F55] lg:text-lg">
                <p>
                  G A Palve and Company is a civil construction and infrastructure
                  contracting enterprise delivering transportation corridors, public
                  utilities and modern buildings across Maharashtra and beyond.
                </p>
                <p>
                  Our teams combine proven engineering methods, certified materials,
                  modern machinery and strict site safety to create infrastructure that
                  performs for decades.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {focusAreas.map(({ icon: Icon, title, text }, index) => (
                  <ScrollReveal key={title} delay={index * 90}>
                    <div className="h-full rounded-xl border border-[#EAE6DC] bg-white p-4 shadow-[0_10px_28px_rgba(30,27,22,0.06)]">
                      <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-[#FFB800]/12 text-[#7A5010]">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <h3 className="text-sm font-extrabold leading-snug text-[#242620]">
                        {title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#666C73]">{text}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={280}>
                <Link
                  to="/about"
                  className="btn-shine mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#FFB800] px-6 text-sm font-bold text-[#242620] shadow-[0_14px_30px_rgba(30,27,22,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFD166]"
                >
                  Read More
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="relative min-w-0 overflow-hidden rounded-2xl bg-[#F6F5F1] shadow-[0_24px_60px_rgba(30,27,22,0.1)] ring-1 ring-[#EAE6DC]">
              <img
                src="/images/hero/construction.jpg"
                alt="G A Palve and Company infrastructure construction site"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
                onError={(event) => {
                  const image = event.currentTarget;
                  if (image.src.includes("tower-cranes.jpg")) return;
                  image.src = "/images/hero/tower-cranes.jpg";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/75 to-transparent p-6 pt-16">
                <div className="animate-float inline-flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-lg ring-1 ring-[#EAE6DC]">
                  <span className="font-heading text-3xl font-extrabold leading-none text-[#7A5010]">
                    10+
                  </span>
                  <span className="text-xs font-bold uppercase leading-snug tracking-wider text-[#242620]">
                    Years of Civil &amp; Infrastructure Expertise
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
