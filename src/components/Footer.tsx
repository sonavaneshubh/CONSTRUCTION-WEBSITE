import { Link } from "react-router-dom";
import {
  ArrowUp,
  AtSign,
  BriefcaseBusiness,
  Camera,
  Clock,
  Mail,
  MapPin,
  Phone,
  UsersRound,
} from "lucide-react";
import { company } from "../data/company";

const HOME_LOGO_SRC = "/images/Logo/logo.jpeg";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Vision & Mission", path: "/about#vision-mission" },
  { label: "Contact", path: "/contact" },
];

const footerServices = [
  { label: "Civil Construction", path: "/services#civil-construction" },
  { label: "Road Development", path: "/services#road-construction" },
  { label: "Water Supply", path: "/services#water-supply-systems" },
  { label: "Government Contracting", path: "/services#pwd-government-contracting" },
  { label: "Solar Solutions", path: "/services#solar-energy-solutions" },
  { label: "Land Development", path: "/services#land-development" },
  { label: "Interior Design", path: "/services#interior-design" },
];

const socialLinks = [
  { label: "Facebook", href: company.social.facebook, icon: UsersRound },
  { label: "Instagram", href: company.social.instagram, icon: Camera },
  { label: "LinkedIn", href: company.social.linkedin, icon: BriefcaseBusiness },
  { label: "Twitter", href: company.social.twitter, icon: AtSign },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-[#EAE6DC] bg-[#F6F5F1] text-[#4A4F55]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-[#F6F5F1]/80 to-[#F0EEE7]/90" />
      <div
        className="hero-beam absolute -left-1/3 top-[-40%] h-[180%] w-2/3 bg-gradient-to-r from-transparent via-[#FFB800]/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12 lg:py-10 xl:px-16">
        <div className="grid grid-cols-1 gap-6 border-b border-[#EAE6DC] pb-6 md:grid-cols-2 lg:grid-cols-4">
          <section aria-labelledby="footer-company" className="hero-stagger" style={{ animationDelay: "60ms" }}>
            <h2
              id="footer-company"
              className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#7A5010]"
            >
              Company
            </h2>
            <Link to="/" className="flex items-center gap-3" aria-label={`${company.name} Home`}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-[#EAE6DC]">
                <img src={HOME_LOGO_SRC} alt="" className="h-full w-full object-contain" />
              </span>
              <span className="min-w-0">
                <span
                  className="block truncate font-heading text-lg font-extrabold uppercase leading-tight tracking-[-0.03em] text-[#242620]"
                  style={{
                    fontFamily: '"Bahnschrift", "Segoe UI Variable Display", "Segoe UI", Arial, sans-serif',
                  }}
                >
                  G.A. Palve &amp; Company
                </span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#7A5010]">
                  Quality Construction, Trusted Service
                </span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-[#666C73]">
              Delivering dependable construction and infrastructure solutions with
              quality workmanship and accountable delivery.
            </p>
            <div className="mt-3 flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-8 w-8 place-items-center rounded-full border border-[#EAE6DC] bg-white text-[#7A5010] transition duration-300 hover:-translate-y-0.5 hover:border-[#B37F00] hover:bg-[#FFB800] hover:text-[#242620]"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>

          <section aria-labelledby="footer-links" className="hero-stagger" style={{ animationDelay: "140ms" }}>
            <h2
              id="footer-links"
              className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#7A5010]"
            >
              Quick Links
            </h2>
            <ul className="space-y-2 text-[13px]">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="transition-colors hover:text-[#7A5010]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-services" className="hero-stagger" style={{ animationDelay: "220ms" }}>
            <h2
              id="footer-services"
              className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#7A5010]"
            >
              Our Services
            </h2>
            <ul className="space-y-2 text-[13px]">
              {footerServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="block transition-colors hover:text-[#7A5010]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-contact" className="hero-stagger" style={{ animationDelay: "300ms" }}>
            <h2
              id="footer-contact"
              className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#7A5010]"
            >
              Contact Information
            </h2>
            <address className="not-italic">
              <ul className="space-y-2 text-[13px] leading-snug text-[#666C73]">
                <li className="flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#7A5010]" aria-hidden="true" />
                  <a
                    href={company.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words transition-colors hover:text-[#242620]"
                  >
                    {company.address}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={15} className="mt-0.5 shrink-0 text-[#7A5010]" aria-hidden="true" />
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="break-words transition-colors hover:text-[#242620]"
                  >
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={15} className="mt-0.5 shrink-0 text-[#7A5010]" aria-hidden="true" />
                  <a
                    href={`mailto:${company.email}`}
                    className="break-all transition-colors hover:text-[#242620]"
                  >
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={15} className="mt-0.5 shrink-0 text-[#7A5010]" aria-hidden="true" />
                  <span>{company.businessHours}</span>
                </li>
              </ul>
            </address>
          </section>
        </div>

        <div className="relative z-20 flex justify-center">
          <button
            type="button"
            onClick={scrollToTop}
            className="-mt-6 inline-flex items-center gap-2 rounded-full border border-[#B37F00]/40 bg-white px-4 py-1.5 text-xs font-bold text-[#7A5010] shadow-[0_8px_20px_rgba(30,27,22,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#B37F00] hover:bg-[#FFB800] hover:text-[#242620] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B37F00]"
            aria-label="Back to top"
          >
            <ArrowUp size={14} aria-hidden="true" />
            Back to Top
          </button>
        </div>

        <div className="flex flex-col gap-3 pt-3 text-xs text-[#666C73] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {company.name}. All rights reserved.</p>
            <nav className="flex flex-wrap items-center gap-x-3 gap-y-1" aria-label="Legal navigation">
            <Link to="/privacy-policy" className="transition-colors hover:text-[#7A5010]">
              Privacy Policy
            </Link>
            <span className="text-[#D8D2C6]" aria-hidden="true">
              |
            </span>
            <Link to="/terms-conditions" className="transition-colors hover:text-[#7A5010]">
              Terms &amp; Conditions
            </Link>
          </nav>
          <button
            type="button"
            onClick={scrollToTop}
            className="btn-shine inline-flex items-center gap-2 self-start rounded-lg border border-[#B37F00]/40 bg-white px-4 py-1.5 font-bold text-[#7A5010] transition-colors hover:bg-[#FFB800] hover:text-[#242620] sm:self-auto"
            aria-label="Back to top"
          >
            <ArrowUp size={14} aria-hidden="true" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
