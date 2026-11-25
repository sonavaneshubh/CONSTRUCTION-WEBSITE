import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { company } from "../data/company";
import ScrollReveal from "./ScrollReveal";

interface Props {
  heading?: string;
  text?: string;
}

export default function CTASection({
  heading = "Let's Build Something Great Together.",
  text = "Have a project in mind? Connect with us to discuss your construction and infrastructure requirements.",
}: Props) {
  return (
    <section className="section-surface relative overflow-hidden bg-[#F6F5F1] py-16 sm:py-20 lg:py-24">
      <img
        src="/images/hero/highway.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-10"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-white/80" />
      <div
        className="hero-beam absolute -right-1/4 top-[-30%] z-10 h-[160%] w-1/2 bg-gradient-to-l from-transparent via-[#FFB800]/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#EAE6DC] bg-white p-7 shadow-[0_28px_70px_rgba(30,27,22,0.1)] sm:p-10 lg:p-12">
            <div className="flex flex-col items-center gap-7 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
              <div className="min-w-0">
                <span
                  className="hero-stagger inline-flex items-center gap-2 rounded-full border border-[#B37F00]/25 bg-[#FFB800]/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#7A5010]"
                  style={{ animationDelay: "80ms" }}
                >
                  <MessageSquare size={14} aria-hidden="true" />
                  Project Consultation
                </span>
                <h2 className="mt-4 max-w-2xl font-heading text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold leading-[1.14] tracking-[-0.035em] text-[#242620]">
                  <span className="line-mask">
                    <span className="text-line" style={{ animationDelay: "200ms" }}>
                      {heading}
                    </span>
                  </span>
                </h2>
                <p
                  className="hero-stagger mt-4 max-w-2xl text-sm leading-7 text-[#4A4F55] sm:text-base"
                  style={{ animationDelay: "360ms" }}
                >
                  {text}
                </p>
              </div>

              <div
                className="hero-stagger flex w-full shrink-0 flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
                style={{ animationDelay: "500ms" }}
              >
                <Link
                  to="/contact"
                  className="btn-shine inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#FFB800] px-6 text-sm font-bold text-[#242620] shadow-[0_14px_30px_rgba(30,27,22,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFD166]"
                >
                  Get in Touch
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#D8D2C6] bg-white px-6 text-sm font-bold text-[#242620] transition duration-300 hover:-translate-y-0.5 hover:border-[#B37F00] hover:text-[#7A5010]"
                >
                  <Phone size={17} className="text-[#7A5010]" aria-hidden="true" />
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
