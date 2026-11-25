import { Compass, Target } from "lucide-react";
import { visionMission } from "../data/company";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import SiteImage from "./SiteImage";

export default function VisionMissionSection() {
  const items = [
    {
      key: "vision" as const,
      icon: Compass,
      image: "/images/hero/road-construction.jpg",
      label: "Where We Are Going",
    },
    {
      key: "mission" as const,
      icon: Target,
      image: "/images/hero/water-supply-pipeline.jpg",
      label: "How We Get There",
    },
  ];

  return (
    <section id="vision-mission" className="section-surface section-pad scroll-mt-24 bg-white">
      <div className="site-container relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Direction"
            title="Vision & Mission"
            highlight="Mission"
            subtitle="Clear principles guide every decision, every site and every handover."
          />
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {items.map(({ key, icon: Icon, image, label }, index) => {
            const item = visionMission[key];
            return (
              <ScrollReveal
                key={key}
                direction={index === 0 ? "right" : "left"}
                delay={index * 80}
                className="h-full"
              >
                <article className="panel panel-hover flex h-full flex-col">
                  <div className="media-box media-clean media-top aspect-[16/7]">
                    <SiteImage src={image} alt={item.title} loading="lazy" />
                    <span className="absolute left-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#FFE08A] via-[#FFB800] to-[#E09500] text-[#242620] shadow-[0_10px_24px_rgba(30,27,22,0.14)]">
                      <Icon size={21} />
                    </span>
                  </div>
                  <div className="card-body flex flex-1 flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A5010]">
                      {label}
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-bold text-[#242620]">
                      {item.title}
                    </h3>
                    <p className="mt-2 border-l-2 border-[#B37F00] pl-4 text-base font-semibold leading-relaxed text-[#4A4F55]">
                      {item.statement}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#666C73]">
                      {item.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
