import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Droplets,
  Home,
  Landmark,
  Palette,
  Route,
  Shovel,
  Sun,
  Waves,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SiteImage from "../components/SiteImage";
import CTASection from "../components/CTASection";
import PageIntro from "../components/PageIntro";
import { services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";

const iconMap: Record<string, React.ElementType> = {
  "building-2": Building2,
  route: Route,
  droplets: Droplets,
  waves: Waves,
  landmark: Landmark,
  home: Home,
  sun: Sun,
  shovel: Shovel,
  palette: Palette,
};

export default function Services() {
  usePageMeta({
    title: "Our Services",
    description:
      "Explore civil construction, roads and highways, water supply systems, government contracting, building works, land development and solar infrastructure services.",
    path: "/services",
  });

  return (
    <div className="interior-page">
      <PageIntro
        eyebrow="What We Deliver"
        title="One Partner for Every Stage"
        subtitle="Explore our core disciplines. Each service is backed by experienced engineers, controlled site processes and a commitment to measurable quality."
      />

      <section className="page-intro-content section-surface section-pad">
        <div className="site-container relative z-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Building2;
              return (
                <ScrollReveal key={service.id} delay={(index % 3) * 70}>
                  <article id={service.id} className="panel panel-hover flex h-full scroll-mt-28 flex-col">
                    <div className="media-box media-clean media-top media-ratio-wide rounded-none">
                      <SiteImage
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                      />
                    </div>

                    <div className="card-body flex flex-1 flex-col">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#FFE08A] via-[#FFB800] to-[#E09500] text-[#242620] shadow-lg shadow-[#FFB800]/20">
                          <Icon size={21} />
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#666C73]">
                          0{index + 1}
                        </span>
                      </div>

                      <h2 className="font-heading text-lg font-bold leading-snug text-[#242620]">
                        {service.title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-[#666C73]">
                        {service.shortDescription}
                      </p>

                      <ul className="mt-2 space-y-2 border-t border-[#FFB800]/25 pt-4">
                        {service.capabilities.slice(0, 3).map((capability) => (
                          <li key={capability} className="flex items-start gap-2 text-sm text-[#4A4F55]">
                            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#7A5010]" />
                            {capability}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A5010] transition-colors hover:text-[#242620]"
                      >
                        Discuss This Service
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need a Civil Infrastructure Partner?"
        text="Tell us about your tender, site or development plan. Our engineering team will prepare a practical next step."
      />
    </div>
  );
}
