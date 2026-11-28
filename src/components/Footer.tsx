import { useEffect, useState } from "react";
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
].filter(({ href }) => href && href !== "#");

const currentYear = new Date().getFullYear();

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const atBottom =
          window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        setShowBackToTop(atBottom);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-[#59685D] bg-[linear-gradient(110deg,#405248_0%,#344238_58%,#2F3933_100%)] text-[#E8E5DC]">
      <div
        className="hero-beam absolute -left-1/3 top-[-40%] h-[180%] w-2/3 bg-gradient-to-r from-transparent via-[#FFB800]/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-5 pt-7 sm:px-8 lg:px-12 lg:pb-6 lg:pt-7 xl:px-16">
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-b border-white/15 pb-3 sm:gap-x-5 sm:gap-y-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-3">
          <section aria-labelledby="footer-company" className="hero-stagger col-span-2 lg:col-span-1" style={{ animationDelay: "60ms" }}>
            <h2
              id="footer-company"
              className="mb-2 text-[11px] font-extrabold uppercase leading-[1.3] tracking-[0.22em] text-[#FFD166]"
            >
              Company
            </h2>
            <Link to="/" className="flex items-center gap-2.5" aria-label={`${company.name} Home`}>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-white/20">
                <img src={HOME_LOGO_SRC} alt="" className="h-full w-full object-contain" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-heading text-lg font-extrabold uppercase leading-[1.2] tracking-[-0.03em] text-white">
                  G.A. Palve &amp; Company
                </span>
                <span className="mt-1 block font-body text-[9px] font-bold uppercase leading-[1.3] tracking-[0.18em] text-[#FFD166]">
                  Quality Construction, Trusted Service
                </span>
              </span>
            </Link>
            <p className="mt-2 max-w-xs text-[12px] leading-[1.5] text-[#CBC8BE] sm:text-[13px] sm:leading-[1.5] lg:line-clamp-3">
              Delivering dependable construction and infrastructure solutions with
              quality workmanship and accountable delivery.
            </p>
            {socialLinks.length > 0 && (
              <div className="mt-1.5 flex items-center gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/15 text-[#FFD166] transition duration-300 hover:-translate-y-0.5 hover:border-[#FFB800] hover:bg-[#FFB800] hover:text-[#1B1E1A]"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </section>

          <section aria-labelledby="footer-links" className="hero-stagger" style={{ animationDelay: "140ms" }}>
            <h2
              id="footer-links"
              className="mb-1.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#FFD166]"
            >
              Quick Links
            </h2>
            <ul className="flex flex-col gap-3 text-[12px] leading-tight sm:text-[13px]">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="relative inline-flex min-h-5 items-center leading-tight transition-colors hover:text-[#FFD166] after:absolute after:inset-x-0 after:-inset-y-1 after:content-['']"
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
              className="mb-1.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#FFD166]"
            >
              Our Services
            </h2>
            <ul className="flex flex-col gap-3 text-[12px] leading-tight sm:text-[13px]">
              {footerServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="relative flex min-h-5 items-center leading-tight transition-colors hover:text-[#FFD166] after:absolute after:inset-x-0 after:-inset-y-1 after:content-['']"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-contact" className="hero-stagger col-span-2 lg:col-span-1" style={{ animationDelay: "300ms" }}>
            <h2
              id="footer-contact"
              className="mb-1.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#FFD166]"
            >
              Contact Information
            </h2>
            <address className="not-italic">
              <ul className="flex flex-col gap-4 text-[12px] leading-tight text-[#CBC8BE] sm:text-[13px]">
                <li className="flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#FFD166]" aria-hidden="true" />
                  <a
                    href={company.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex min-h-5 items-center break-words leading-tight transition-colors hover:text-[#FFD166] after:absolute after:inset-x-0 after:-inset-y-1 after:content-['']"
                  >
                    {company.address}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={15} className="mt-0.5 shrink-0 text-[#FFD166]" aria-hidden="true" />
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="relative inline-flex min-h-5 items-center break-words leading-tight transition-colors hover:text-[#FFD166] after:absolute after:inset-x-0 after:-inset-y-1 after:content-['']"
                  >
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={15} className="mt-0.5 shrink-0 text-[#FFD166]" aria-hidden="true" />
                  <a
                    href={`mailto:${company.email}`}
                    className="relative inline-flex min-h-5 items-center break-all leading-tight transition-colors hover:text-[#FFD166] after:absolute after:inset-x-0 after:-inset-y-1 after:content-['']"
                  >
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={15} className="mt-0.5 shrink-0 text-[#FFD166]" aria-hidden="true" />
                  <span>{company.businessHours}</span>
                </li>
              </ul>
            </address>
          </section>
        </div>

        <div
          className={`relative z-20 flex justify-center transition-all duration-300 motion-reduce:transition-none ${
            showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={scrollToTop}
            className="-mt-6 grid h-9 w-9 place-items-center rounded-full border border-[#FFB800]/60 bg-[#3A4036] text-[#FFD166] shadow-[0_8px_20px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-[#FFB800] hover:bg-[#FFB800] hover:text-[#2A2E28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD166]"
            aria-label="Back to top"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-1 pt-1 text-xs leading-tight text-[#C4C1B8] sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <p>© {currentYear} {company.name}. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-1" aria-label="Legal navigation">
            <Link to="/privacy-policy" className="relative inline-flex min-h-5 items-center leading-tight transition-colors hover:text-[#FFD166] after:absolute after:inset-x-0 after:-inset-y-1 after:content-['']">
              Privacy Policy
            </Link>
            <span className="text-white/35" aria-hidden="true">
              |
            </span>
              <Link to="/terms-conditions" className="relative inline-flex min-h-5 items-center leading-tight transition-colors hover:text-[#FFD166] after:absolute after:inset-x-0 after:-inset-y-1 after:content-['']">
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
