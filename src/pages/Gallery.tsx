import { useState } from "react";
import PageIntro from "../components/PageIntro";
import ScrollReveal from "../components/ScrollReveal";
import SiteImage from "../components/SiteImage";
import CTASection from "../components/CTASection";
import GalleryLightbox from "../components/GalleryLightbox";
import { galleryGroups, galleryImages } from "../data/gallery";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Gallery() {
  usePageMeta({
    title: "Project Gallery",
    description:
      "See roads, water systems, bridges, buildings, machinery and solar work captured across G A Palve and Company project sites.",
    path: "/gallery",
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
                {group.images.map((image, imageIndex) => {
                  const flatIndex = galleryImages.findIndex((item) => item.src === image.src);
                  return (
                    <ScrollReveal key={image.src} delay={(imageIndex % 3) * 70}>
                      <figure className="group h-full overflow-hidden rounded-xl border border-[#EAE6DC] bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                        <button
                          type="button"
                          onClick={() => setActiveIndex(flatIndex)}
                          aria-label={`View ${image.label} in image viewer`}
                          className="block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A5010]"
                        >
                          <SiteImage
                            src={image.src}
                            alt={`${image.label} by G A Palve and Company`}
                            loading="lazy"
                            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </button>
                        <figcaption className="px-4 py-3 text-sm font-semibold text-[#4A4F55]">
                          {image.label}
                        </figcaption>
                      </figure>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <GalleryLightbox
          items={galleryImages}
          initialIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}

      <CTASection />
    </div>
  );
}
