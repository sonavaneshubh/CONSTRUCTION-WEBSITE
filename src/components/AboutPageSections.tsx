import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Handshake,
  Landmark,
  Route,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { aboutPageContent } from "../data/aboutPage";

const strengthIcons: Record<string, LucideIcon> = {
  building: Building2,
  landmark: Landmark,
  shield: ShieldCheck,
  workflow: Workflow,
  route: Route,
  handshake: Handshake,
};

export function FounderSection() {
  const { founder } = aboutPageContent;

  return (
    <section className="section-surface section-pad bg-white">
      <div className="site-container relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <ScrollReveal direction="right">
          <div className="relative mx-auto w-full max-w-[16rem] overflow-hidden rounded-2xl bg-[#F5F3EE] shadow-[0_22px_55px_rgba(23,35,45,0.12)] ring-1 ring-[#EAE6DC] lg:max-w-[19rem]">
            <img
              src={founder.image}
              alt={founder.imageAlt}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <span className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full border border-white/80 bg-white/95 px-2.5 py-1 text-[8px] font-extrabold uppercase leading-tight tracking-[0.08em] text-[#7A5010] shadow-sm sm:bottom-4 sm:left-4 sm:px-3 sm:text-[9px]">
              {founder.designation}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="max-w-2xl">
            <span className="eyebrow">Founder &amp; Leadership</span>
            <h2 className="mt-4 font-heading text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#17232D]">
              Meet Our Founder
            </h2>
            <span className="gold-line mt-4" />
            <div className="mt-6">
              <p className="font-heading text-2xl font-extrabold text-[#17232D]">
                {founder.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#7A5010]">
                {founder.designation}
              </p>
              <p className="mt-1 text-sm text-[#747D85]">
                {founder.company}
              </p>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#343C43] sm:text-base">
              {founder.biography}
            </p>
            <blockquote className="mt-5 rounded-xl border-l-4 border-[#D6A12B] bg-[#F5F3EE] px-4 py-4 text-sm font-medium leading-6 text-[#343C43] sm:px-5">
              “{founder.message}”
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function EstablishmentSection() {
  const { establishment } = aboutPageContent;

  return (
    <section className="about-establishment section-surface overflow-hidden bg-[#17232D] py-12 text-white sm:py-14 lg:py-16">
        <div className="site-container relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-[#D6A12B]/40 bg-white/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F0C45B]">
                Verified registration
              </span>
              <h2 className="about-establishment__title mt-4 font-heading text-[clamp(1.8rem,3.8vw,3rem)] font-extrabold leading-tight tracking-[-0.035em] text-white">
                Registered. Accountable. Ready.
              </h2>
              <div className="mt-7 font-heading text-[clamp(4rem,10vw,7.5rem)] font-extrabold leading-none tracking-[-0.06em] text-[#D6A12B]">
                {establishment.year}
              </div>
              <p className="mt-3 text-lg font-bold text-white">
                {establishment.company}
              </p>
              <p className="mt-1 text-sm font-medium text-white/70">
                {establishment.focus}
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
                {establishment.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
    </section>
  );
}

export function CoreValuesSection() {
  return (
    <section className="section-surface section-pad bg-[#F5F3EE]">
      <div className="site-container relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What Guides Us"
            title="Our Core Values"
            subtitle="Principles that shape how we approach infrastructure work and working relationships."
          />
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {aboutPageContent.coreValues.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 50}>
              <article className="panel panel-hover h-full p-5">
                <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[#D6A12B]/15 text-[#7A5010]">
                  <ShieldCheck size={19} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-bold text-[#17232D]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4A4F55]">
                  {value.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificatePreview({
  certificate,
  onClose,
}: {
  certificate: (typeof aboutPageContent.certificates)[number];
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousActiveElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.getClientRects().length > 0);
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (!first || !last) {
        event.preventDefault();
        dialog.focus();
      } else if (
        event.shiftKey &&
        (document.activeElement === first || !dialog.contains(document.activeElement))
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === last || !dialog.contains(document.activeElement))
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousActiveElement?.isConnected) previousActiveElement.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#17232D]/75 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-preview-title"
        tabIndex={-1}
        className="relative max-h-[90svh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close certificate preview"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-[#EAE6DC] bg-white text-[#17232D] shadow-sm transition hover:bg-[#F5F3EE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A12B]"
        >
          <X size={20} aria-hidden="true" />
        </button>
        <h2
          id="certificate-preview-title"
          className="pr-12 font-heading text-xl font-extrabold text-[#17232D] sm:text-2xl"
        >
          {certificate.title}
        </h2>
        <p className="mt-1 text-sm text-[#747D85]">
          Document supplied for the company website.
        </p>
        {certificate.fileType === "pdf" ? (
          <iframe
            src={certificate.document}
            title={`${certificate.title} PDF preview`}
            className="mt-5 h-[65svh] min-h-[20rem] w-full rounded-lg border border-[#EAE6DC] bg-[#F5F3EE]"
          />
        ) : (
          <img
            src={certificate.image}
            alt={certificate.imageAlt}
            className="mt-5 max-h-[65svh] w-full rounded-lg border border-[#EAE6DC] bg-[#F5F3EE] object-contain"
          />
        )}
        {certificate.fileType === "pdf" && (
          <a
            href={certificate.document}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#B37F00]/40 px-4 py-2 text-sm font-bold text-[#7A5010] transition hover:bg-[#F5F3EE]"
          >
            Open PDF in new tab
          </a>
        )}
        {(certificate.authority || certificate.number || certificate.validity) && (
          <div className="mt-4 grid gap-2 text-sm text-[#343C43] sm:grid-cols-2">
            {certificate.authority && (
              <p>
                <strong>Issuing Authority:</strong> {certificate.authority}
              </p>
            )}
            {certificate.number && (
              <p>
                <strong>Certificate Number:</strong> {certificate.number}
              </p>
            )}
            {certificate.validity && (
              <p className="sm:col-span-2">
                <strong>Validity:</strong> {certificate.validity}
              </p>
            )}
            {certificate.workCapacity && (
              <p className="sm:col-span-2">
                <strong>Work Capacity:</strong> {certificate.workCapacity}
              </p>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof aboutPageContent.certificates)[number] | null
  >(null);

  return (
    <section className="section-surface section-pad bg-white">
      <div className="site-container relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications & Registrations"
            subtitle="Our commitment to professional standards, quality and regulatory compliance."
          />
        </ScrollReveal>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPageContent.certificates.map((certificate, index) => (
            <ScrollReveal key={certificate.title} delay={index * 50}>
              <article className="panel flex h-full flex-col">
                <div className="aspect-[4/3] overflow-hidden border-b border-[#EAE6DC] bg-[#F5F3EE]">
                  {certificate.image ? (
                    <img
                      src={certificate.image}
                      alt={certificate.imageAlt}
                      className="h-full w-full object-contain p-2"
                      loading="lazy"
                    />
                  ) : (
                    <div className="grid h-full place-items-center text-sm font-semibold text-[#747D85]">
                      Preview unavailable
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#9A5B00]">
                    {certificate.fileType === "pdf" ? "Provided PDF" : "Provided image"}
                  </span>
                  <h3 className="mt-1 font-heading text-base font-bold text-[#17232D]">
                    {certificate.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#747D85]">
                    {certificate.category}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-[#B37F00]/40 px-3 py-2 text-sm font-bold text-[#7A5010] transition hover:border-[#B37F00] hover:bg-[#F5F3EE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A12B]"
                  >
                    View Document
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
      {selectedCertificate && (
        <CertificatePreview
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="section-surface section-pad bg-[#F5F3EE]">
      <div className="site-container relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Approach"
            title="Why Choose Us"
            subtitle="A practical, infrastructure-focused approach built around responsible delivery and collaboration."
          />
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPageContent.strengths.map((strength, index) => {
            const Icon = strengthIcons[strength.icon];
            return (
              <ScrollReveal key={strength.title} delay={index * 50}>
                <article className="panel panel-hover flex h-full items-start gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#D6A12B]/15 text-[#7A5010]">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-bold text-[#17232D]">
                      {strength.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#4A4F55]">
                      {strength.description}
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
