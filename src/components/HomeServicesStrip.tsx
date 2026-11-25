import { Link } from "react-router-dom";
import { Building2, Droplets, Palette, Route, Shovel, Sun } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { label: "Road Construction", icon: Route, id: "road-construction" },
  { label: "Water Supply Systems", icon: Droplets, id: "water-supply-systems" },
  { label: "Solar Solutions", icon: Sun, id: "solar-energy-solutions" },
  { label: "Building Construction", icon: Building2, id: "building-construction" },
  { label: "Land Development", icon: Shovel, id: "land-development" },
  { label: "Interior Design", icon: Palette, id: "interior-design" },
];

export default function HomeServicesStrip() {
  return (
    <section id="services" className="relative bg-white text-[#242620]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="h-full w-full"
          focusable="false"
        >
          <path d="M0,64 C360,0 1080,0 1440,64 L1440,0 L0,0 Z" fill="#F6F5F1" />
          <path d="M0,64 C360,6 1080,6 1440,64 L1440,64 L0,64 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-10 pt-16 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14 xl:px-16">
        <nav aria-label="Our services">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {services.map(({ label, icon: Icon, id }, index) => (
              <li key={id} className="relative min-w-0">
                {index > 0 && (
                  <span
                    className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-[#EAE6DC] lg:block"
                    aria-hidden="true"
                  />
                )}
                <ScrollReveal delay={index * 70} className="h-full">
                  <Link
                    to={`/services#${id}`}
                    className="group flex h-full min-w-0 flex-col items-center justify-center gap-3 px-3 py-5 text-center transition-colors duration-300 hover:text-[#7A5010] focus-visible:text-[#7A5010]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#F6F5F1] text-[#7A5010] ring-1 ring-[#EAE6DC] transition-colors duration-300 group-hover:bg-[#FFB800] group-hover:text-[#242620] group-focus-visible:bg-[#FFB800] group-focus-visible:text-[#242620]">
                      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="text-[13px] font-semibold leading-snug [text-wrap:balance]">
                      {label}
                    </span>
                  </Link>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
