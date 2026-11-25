import ScrollReveal from "../components/ScrollReveal";
import SiteImage from "../components/SiteImage";
import ContactForm from "../components/ContactForm";
import PageIntro from "../components/PageIntro";
import { company } from "../data/company";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  type LucideIcon,
} from "lucide-react";

interface PhoneDetail {
  label: string;
  value: string;
  href: string;
}

interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value?: string;
  href?: string;
  phones?: PhoneDetail[];
}

const telHref = (number: string) => `tel:${number.replace(/\s/g, "")}`;

export default function Contact() {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  const details: ContactDetail[] = [
    { icon: MapPin, label: "Office", value: company.address },
    {
      icon: Phone,
      label: "Phone",
      phones: [
        { label: "Primary", value: company.phone, href: telHref(company.phone) },
        {
          label: "Alternate",
          value: company.phoneAlternate,
          href: telHref(company.phoneAlternate),
        },
      ],
    },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, label: "Working Hours", value: company.businessHours },
  ];

  return (
    <div className="interior-page">
      <PageIntro
        eyebrow="Direct Contact"
        title="Let's Discuss Your Next Project"
        subtitle="Whether it is a highway package, municipal water network, commercial building or PWD tender, our team is ready to evaluate your scope."
      />

      <section className="page-intro-content section-surface section-pad">
        <div className="site-container relative z-10 grid gap-4 lg:grid-cols-12 lg:items-start lg:gap-5">
          <div className="min-w-0 lg:col-span-5">
            <ScrollReveal direction="right">
              <div className="media-box media-ratio mb-4">
                <SiteImage
                  src="/images/hero/land-development.jpg"
                  alt="Land development and infrastructure site preparation"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 z-10 m-0 max-w-[12rem] rounded-xl border border-[#EAE6DC] bg-[#FFFDF8] px-3 py-2.5 shadow-[0_8px_20px_rgba(30,27,22,0.12)] sm:bottom-4 sm:left-4 sm:max-w-[13rem]">
                  <p className="font-heading text-base font-extrabold leading-tight text-[#7A5010]">
                    Quick Response
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-[#4A4F55]">
                    We review every project inquiry carefully.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {details.map(({ icon: Icon, label, value, href, phones }) => {
                  const valueClass =
                    "mt-0.5 block break-words text-sm font-semibold leading-snug text-[#242620]";
                  const content = (
                    <>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#FFB800]/10 text-[#7A5010]">
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#666C73]">
                          {label}
                        </span>
                        {phones ? (
                          <span className="mt-1 block space-y-1.5">
                            {phones.map((phone) => (
                              <a
                                key={phone.href}
                                href={phone.href}
                                className={`${valueClass} transition-colors hover:text-[#7A5010]`}
                              >
                                <span className="font-medium text-[#666C73]">
                                  {phone.label}:{" "}
                                </span>
                                {phone.value}
                              </a>
                            ))}
                          </span>
                        ) : (
                          <span className={valueClass}>{value}</span>
                        )}
                      </span>
                    </>
                  );

                  const classes = "panel panel-hover card-body flex items-start gap-3";

                  return href ? (
                    <a key={label} href={href} className={classes}>
                      {content}
                    </a>
                  ) : (
                    <div key={label} className={classes}>
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex-1 bg-[#25D366] text-[#242620] hover:bg-green-500"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
                <a
                  href={company.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex-1"
                >
                  <Navigation size={17} className="text-[#7A5010]" />
                  Get Directions
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <ScrollReveal direction="left">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-surface section-pad bg-white">
        <div className="site-container relative z-10">
          <div className="panel overflow-hidden">
            <div className="grid lg:grid-cols-3">
              <div className="card-body sm:p-6">
                <div className="section-head max-w-none items-start text-left">
                  <span className="eyebrow hero-stagger" style={{ animationDelay: "60ms" }}>Find Us</span>
                  <h2 className="section-title [text-wrap:balance] text-2xl sm:text-3xl">
                    <span className="line-mask">
                      <span className="text-line" style={{ animationDelay: "180ms" }}>
                        Our Corporate Office
                      </span>
                    </span>
                  </h2>
                  <p className="section-copy">
                    Visit our consultation desk for tender meetings, structural
                    reviews and project planning.
                  </p>
                  <div className="gold-line" />
                </div>
                <div className="mt-5 flex min-w-0 items-start gap-2 text-sm text-[#242620]">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-[#7A5010]" />
                  <span className="break-words">{company.address}</span>
                </div>
                <a
                  href={company.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A5010] transition-colors hover:text-[#242620]"
                >
                  Get Directions
                  <Navigation size={14} />
                </a>
              </div>

              <div className="media-box media-clean min-h-[220px] sm:min-h-[280px] lg:col-span-2 lg:h-full lg:min-h-[280px]">
                <iframe
                  src={company.maps.embedUrl}
                  title="G A Palve and Company location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0 grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
