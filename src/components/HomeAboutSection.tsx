import { Link } from "react-router-dom";
import { ArrowRight, Building2, Droplets, Route } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SiteImage from "./SiteImage";

const focusAreas = [
  { icon: Building2, title: "Civil & Structures", text: "Foundations, RCC frames and bridges" },
  { icon: Route, title: "Roads & Highways", text: "Asphalt, concrete and urban corridors" },
  { icon: Droplets, title: "Water & Utilities", text: "Pipelines, reservoirs and pump houses" },
];

export default function HomeAboutSection() {
  return (
    <section
      id="about"
      className="section-surface scroll-mt-24 bg-[#F5F3EE] py-10 sm:py-12 lg:py-14"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] lg:gap-10">
          <ScrollReveal direction="right">
            <div className="min-w-0">
              <span className="eyebrow">About Us</span>
              <h2 className="mt-3 max-w-xl font-heading text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.025em] text-[#17232D]">
                Create. Innovate. <span className="text-[#A67417]">Build.</span>
              </h2>
              <div className="gold-line mt-3" />

              <div className="mt-4 max-w-2xl space-y-3 text-sm leading-6 text-[#343C43] lg:text-base">
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

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {focusAreas.map(({ icon: Icon, title, text }, index) => (
                  <ScrollReveal key={title} delay={index * 90}>
                    <div className="h-full rounded-xl border border-[#EAE6DC] bg-white p-3 shadow-[0_10px_28px_rgba(30,27,22,0.06)]">
                      <div className="mb-2 grid h-8 w-8 place-items-center rounded-lg bg-[#D6A12B]/15 text-[#17232D]">
                        <Icon size={16} aria-hidden="true" />
                      </div>
                      <h3 className="text-[13px] font-bold leading-snug text-[#17232D]">
                        {title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-relaxed text-[#747D85]">{text}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={280}>
                <Link
                  to="/about"
                  className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#D6A12B] px-5 text-[13px] font-semibold text-[#17232D] shadow-[0_12px_26px_rgba(23,35,45,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E2B344] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17232D]"
                >
                  Read More
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="relative min-w-0 overflow-hidden rounded-2xl bg-[#F5F3EE] shadow-[0_22px_55px_rgba(23,35,45,0.12)] ring-1 ring-[#E1DED5]">
              <SiteImage
                src="/images/hero/bridge-construction.jpg"
                alt="G A Palve and Company bridge and civil infrastructure construction site"
                className="aspect-[16/10] h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17232D]/85 via-[#17232D]/35 to-transparent p-4 pt-12">
                <div className="inline-flex items-center gap-3 rounded-lg bg-white px-4 py-2.5 shadow-lg ring-1 ring-white/70">
                  <span className="font-heading text-2xl font-extrabold leading-none text-[#A67417]">
                    10+
                  </span>
                  <span className="text-[10px] font-semibold uppercase leading-snug tracking-wider text-[#17232D]">
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
