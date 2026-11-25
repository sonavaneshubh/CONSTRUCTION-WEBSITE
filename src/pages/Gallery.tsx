import PageIntro from "../components/PageIntro";
import ScrollReveal from "../components/ScrollReveal";
import SiteImage from "../components/SiteImage";
import CTASection from "../components/CTASection";

const galleryGroups = [
  {
    title: "Roads & Highways",
    images: [
      { src: "/images/hero/road-construction.jpg", label: "Road Construction" },
      { src: "/images/hero/highway.jpg", label: "Highway Corridor" },
      { src: "/images/hero/land-development.jpg", label: "Land Development" },
    ],
  },
  {
    title: "Water & Utilities",
    images: [
      { src: "/images/hero/water-supply-pipeline.jpg", label: "Water Supply Pipeline" },
      { src: "/images/hero/water-infrastructure.jpg", label: "Water Infrastructure" },
      { src: "/images/hero/well-excavation.jpg", label: "Well Excavation" },
    ],
  },
  {
    title: "Bridges & Buildings",
    images: [
      { src: "/images/hero/bridge-construction.jpg", label: "Bridge Construction" },
      { src: "/images/hero/tower-cranes.jpg", label: "Tower Cranes" },
      { src: "/images/hero/commercial-building.jpg", label: "Commercial Building" },
      { src: "/images/hero/construction.jpg", label: "Civil Construction" },
    ],
  },
  {
    title: "Machinery, Solar & Interiors",
    images: [
      { src: "/images/hero/jcb-earthmoving.jpg", label: "JCB & Earthmoving" },
      { src: "/images/hero/solar-farm.jpg", label: "Solar Farm" },
      { src: "/images/hero/interior-office.jpg", label: "Interior Fit-out" },
    ],
  },
];

export default function Gallery() {
  return (
    <div className="interior-page">
      <PageIntro
        eyebrow="Project Gallery"
        title="Built Work, Captured"
        subtitle="A visual snapshot of our roads, water systems, bridges, buildings, machinery and solar projects."
      />

      <section className="section-surface section-pad pt-0">
        <div className="site-container relative z-10 space-y-12">
          {galleryGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-heading text-xl font-extrabold text-[#17232D] sm:text-2xl">
                {group.title}
              </h2>
              <span className="gold-line mt-3" aria-hidden="true" />

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.images.map((image, imageIndex) => (
                  <ScrollReveal key={image.src} delay={(imageIndex % 3) * 70}>
                    <figure className="group h-full overflow-hidden rounded-xl border border-[#EAE6DC] bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                      <SiteImage
                        src={image.src}
                        alt={`${image.label} by G A Palve and Company`}
                        loading="lazy"
                        className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <figcaption className="px-4 py-3 text-sm font-semibold text-[#4A4F55]">
                        {image.label}
                      </figcaption>
                    </figure>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
