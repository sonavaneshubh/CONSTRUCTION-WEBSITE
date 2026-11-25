import PageBanner from "../components/PageBanner";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/ContactForm";
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
    <div className="bg-[#FAFAF8] text-[#4A4F55]">
      <PageBanner
        tag="Get In Touch"
        title="Contact G A Palve and Company"
        subtitle="Share your project requirements with our engineering and tender team. We respond with clear, practical guidance."
        image="/images/hero/commercial-building.jpg"
      />

      <section className="section-surface section-pad">
        <div className="site-container relative z-10 grid gap-4 lg:grid-cols-12 lg:items-start lg:gap-5">
          <div className="min-w-0 lg:col-span-5">
            <ScrollReveal direction="right">
              <div className="media-box media-ratio mb-4">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1100&h=700&fit=crop"
                  alt="G A Palve and Company project consultation"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/hero/construction.jpg";
                  }}
                />
                <div className="panel absolute bottom-0 left-0 z-10 m-4 max-w-[15rem] p-4 sm:max-w-[17rem]">
                  <p className="font-heading text-2xl font-extrabold text-[#7A5010]">
                    Quick Response
                  </p>
                  <p className="mt-1 text-xs text-[#4A4F55]">
                    We review every project inquiry carefully.
                  </p>
                </div>
              </div>

              <div className="section-head max-w-none items-start text-left">
                <span className="eyebrow hero-stagger" style={{ animationDelay: "60ms" }}>Direct Contact</span>
                <h2 className="section-title [text-wrap:balance]">
                  <span className="line-mask">
                    <span className="text-line" style={{ animationDelay: "180ms" }}>
                      Let&apos;s Discuss Your <span className="gradient-text">Next Project</span>
                    </span>
                  </span>
                </h2>
                <p className="section-copy">
                  Whether it is a highway package, municipal water network,
                  commercial building or PWD tender, our team is ready to evaluate
                  your scope.
                </p>
                <div className="gold-line" />
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
