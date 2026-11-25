import ScrollReveal from "../components/ScrollReveal";
import VisionMissionSection from "../components/VisionMissionSection";
import SiteImage from "../components/SiteImage";
import CTASection from "../components/CTASection";
import PageIntro from "../components/PageIntro";
import { aboutPageContent } from "../data/aboutPage";
import {
  CertificationsSection,
  CoreValuesSection,
  EstablishmentSection,
  FounderSection,
  WhyChooseUsSection,
} from "../components/AboutPageSections";
import { Building2, Droplets, Route } from "lucide-react";

export default function About() {
  return (
    <div className="interior-page about-page">
      <PageIntro
        eyebrow="Our Story"
        title="Engineering With Purpose"
        subtitle="A civil infrastructure partner focused on responsible execution and dependable project delivery."
      />

      <section className="page-intro-content section-surface section-pad">
        <div className="site-container relative z-10 grid items-center gap-5 lg:grid-cols-2 lg:gap-6">
          <ScrollReveal direction="right">
            <div className="media-box media-ratio">
              <SiteImage
                src={aboutPageContent.overview.image}
                alt={aboutPageContent.overview.imageAlt}
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="min-w-0">
              <span className="eyebrow">Company Overview</span>
              <h2 className="mt-4 font-heading text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#17232D]">
                Infrastructure with purpose and care
              </h2>
              <span className="gold-line mt-4" />
              <p className="mt-5 text-sm leading-7 text-[#343C43] sm:text-base">
                {aboutPageContent.overview.description}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#4A4F55] sm:text-base">
                {aboutPageContent.overview.approach}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { icon: Route, label: "Roads & Highways" },
                  { icon: Droplets, label: "Water Systems" },
                  { icon: Building2, label: "Civil Construction" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-[#EAE6DC] bg-white px-3 py-2 text-xs font-semibold text-[#343C43]"
                  >
                    <Icon size={15} className="text-[#9A6B14]" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FounderSection />
      <EstablishmentSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <CertificationsSection />
      <WhyChooseUsSection />

      <CTASection
        heading="Ready to Build With Us?"
        text="Share your project scope with our engineering team and get a clear, practical delivery plan."
      />
    </div>
  );
}
