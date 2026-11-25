import ScrollReveal from "../components/ScrollReveal";
import VisionMissionSection from "../components/VisionMissionSection";
import SiteImage from "../components/SiteImage";
import CTASection from "../components/CTASection";
import PageIntro from "../components/PageIntro";
import { strengths } from "../data/company";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="interior-page">
      <PageIntro
        eyebrow="Our Story"
        title="Engineering With Purpose"
        subtitle="G A Palve and Company delivers turnkey civil construction across highways, bridges, buildings, water supply systems and government infrastructure projects. Every assignment is executed with technical discipline and complete accountability."
      />

      <section className="page-intro-content section-surface section-pad">
        <div className="site-container relative z-10 grid items-center gap-5 lg:grid-cols-2 lg:gap-6">
          <ScrollReveal direction="right">
            <div className="media-box media-ratio">
              <SiteImage
                src="/images/hero/jcb-earthmoving.jpg"
                alt="G A Palve and Company earthmoving and site development work"
                loading="lazy"
              />
              <div className="panel absolute bottom-0 left-0 z-10 m-3 max-w-[15rem] p-4 sm:max-w-[17rem]">
                <p className="font-heading text-3xl font-extrabold text-[#7A5010]">Since 2014</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#4A4F55]">
                  Building Infrastructure That Lasts
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="max-w-2xl">
              <p className="text-sm leading-7 text-[#343C43] sm:text-base">
                From tender evaluation and site planning to final commissioning,
                our engineers, supervisors and machinery teams work as one to
                achieve durable outcomes, on schedule and within budget.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: "ISO 9001:2015", text: "Certified quality management" },
                { icon: Award, title: "PWD Registered", text: "Approved government contractor" },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="panel panel-hover card-body flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#FFB800]/10 text-[#7A5010]">
                    <Icon size={19} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-bold text-[#242620]">{title}</span>
                    <span className="block text-sm text-[#666C73]">{text}</span>
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <VisionMissionSection />

      <section className="section-surface section-pad bg-white">
        <div className="site-container relative z-10">
          <ScrollReveal>
            <div className="section-head mx-auto max-w-3xl">
              <span className="eyebrow hero-stagger" style={{ animationDelay: "60ms" }}>
                <CheckCircle2 size={13} />
                Our Strengths
              </span>
              <h2 className="section-title [text-wrap:balance]">
                <span className="line-mask">
                  <span className="text-line" style={{ animationDelay: "180ms" }}>
                    What Makes Us <span className="gradient-text">Different</span>
                  </span>
                </span>
              </h2>
              <div className="gold-line mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength, index) => (
              <ScrollReveal key={strength.title} delay={index * 60}>
                <div className="panel panel-hover card-body h-full">
                  <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-[#FFB800]/10 text-[#7A5010]">
                    <CheckCircle2 size={19} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#242620]">{strength.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#666C73]">{strength.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Build With Us?"
        text="Share your project scope with our engineering team and get a clear, practical delivery plan."
      />
    </div>
  );
}
