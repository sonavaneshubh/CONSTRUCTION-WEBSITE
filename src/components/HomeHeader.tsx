import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { company } from "../data/company";
import { useFocusTrap } from "../hooks/useFocusTrap";

const HOME_LOGO_SRC = "/images/Logo/logo.jpeg";
const telHref = (number: string) => `tel:${number.replace(/\s/g, "")}`;

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const serviceMenu = [
  { label: "Road Construction", id: "road-construction" },
  { label: "JCB & Earthwork", id: "land-development" },
  { label: "Well Construction", id: "well-construction" },
  { label: "Water Supply Systems", id: "water-supply-systems" },
  { label: "Bridges & Civil Works", id: "civil-construction" },
  { label: "PWD Contracting", id: "pwd-government-contracting" },
  { label: "Solar Solutions", id: "solar-energy-solutions" },
  { label: "Building Construction", id: "building-construction" },
  { label: "Interior Design", id: "interior-design" },
];

export default function HomeHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useFocusTrap<HTMLDivElement>(mobileOpen);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, [isHome]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;

    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", handleChange);
      return () => media.removeEventListener("change", handleChange);
    }
    media.addListener(handleChange);
    return () => media.removeListener(handleChange);
  }, []);

  const isActiveLink = (isActive: boolean) => isActive;

  const closeMenu = () => setMobileOpen(false);

  const desktopLinkClass = (isActive: boolean) =>
    `relative whitespace-nowrap px-2 py-2 text-[11px] font-bold transition-colors xl:px-2.5 xl:text-xs 2xl:text-sm ${
      isActiveLink(isActive)
        ? "text-[#FFD166]"
        : "text-[#E8E5DC] hover:text-[#FFD166]"
    }`;

  const mobileLinkClass = (isActive: boolean) =>
    `relative flex min-h-12 items-center px-4 py-3 font-heading text-base font-bold transition-colors ${
      isActiveLink(isActive)
        ? "text-[#7A5010]"
        : "text-[#4A4F55] hover:text-[#7A5010]"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 rounded-b-2xl border-b border-[#5A6154] bg-header transition-[box-shadow] duration-300 ${
          isHome && isScrolled
            ? "shadow-[0_6px_24px_rgba(0,0,0,0.16)]"
            : "shadow-[0_10px_35px_rgba(0,0,0,0.12)]"
        }`}
      >
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex h-16 items-center justify-between gap-2 lg:h-[4.25rem]">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex min-w-0 items-center gap-2 sm:gap-2.5"
              aria-label="G.A. Palve & Company Home"
            >
              {!logoFailed && (
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white p-1 shadow-sm ring-1 ring-[#EAE6DC] sm:h-11 sm:w-11 lg:h-12 lg:w-12">
                  <img
                    src={HOME_LOGO_SRC}
                    alt=""
                    className="h-full w-full max-w-[10rem] object-contain"
                    onError={() => setLogoFailed(true)}
                  />
                </span>
              )}
              <span className="flex min-w-0 flex-col">
                <span className="truncate font-heading text-[18px] font-extrabold leading-none tracking-[-0.03em] text-white sm:text-[22px] lg:text-[26px]">
                  G.A. Palve &amp; Company
                </span>
                <span className="mt-0.5 block whitespace-nowrap font-body text-[7.5px] font-extrabold uppercase leading-tight tracking-[0.01em] text-[#FFD166] sm:mt-1 sm:text-[9px] sm:tracking-[0.16em]">
                  Quality Construction, Trusted Service
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
              {navLinks.slice(0, 2).map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) => desktopLinkClass(isActive)}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActiveLink(isActive) && (
                        <span
                          className="absolute inset-x-2 -bottom-0.5 h-[3px] rounded-full bg-[#FFB800]"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              <div className="group relative">
                <div className="flex items-center">
                  <NavLink
                    to="/services"
                    className={({ isActive }) => desktopLinkClass(isActive)}
                  >
                    {({ isActive }) => (
                      <>
                        Services
                        {isActiveLink(isActive) && (
                          <span
                            className="absolute inset-x-2 -bottom-0.5 h-[3px] rounded-full bg-[#FFB800]"
                            aria-hidden="true"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                  <ChevronDown
                    size={14}
                    className="ml-0.5 shrink-0 text-[#CBC8BE] transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden="true"
                  />
                </div>
                <div className="pointer-events-none absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 translate-y-1 rounded-xl border border-[#EAE6DC] bg-white p-2 opacity-0 shadow-[0_20px_45px_rgba(30,27,22,0.12)] transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {serviceMenu.map((item) => (
                    <Link
                      key={item.id}
                      to={`/services#${item.id}`}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold text-[#4A4F55] transition-colors hover:bg-[#F6F5F1] hover:text-[#7A5010]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(3).map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => desktopLinkClass(isActive)}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActiveLink(isActive) && (
                        <span
                          className="absolute inset-x-2 -bottom-0.5 h-[3px] rounded-full bg-[#FFB800]"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href={telHref(company.phone)}
                aria-label={`Call ${company.name} at ${company.phone}`}
                className="hidden h-11 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 text-[11px] font-bold text-[#E8E5DC] transition-colors hover:border-[#FFD166] hover:text-[#FFD166] lg:inline-flex xl:px-4"
              >
                <Phone size={15} className="shrink-0 text-[#FFD166]" aria-hidden="true" />
                <span className="hidden xl:inline">{company.phone}</span>
              </a>
              <Link
                to="/contact"
                className="hidden h-11 items-center gap-2 rounded-full border border-[#B37F00] bg-[#FFB800] px-5 text-xs font-bold text-[#242620] shadow-[0_10px_24px_rgba(30,27,22,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFD166] lg:inline-flex"
              >
                Get a Quote
                <ArrowUpRight size={16} className="text-[#242620]" aria-hidden="true" />
              </Link>
              <a
                href={telHref(company.phone)}
                aria-label={`Call ${company.name} at ${company.phone}`}
                className="hidden h-10 w-10 place-items-center rounded-lg border border-white/20 bg-white/10 text-[#FFD166] transition-colors hover:border-[#FFD166] sm:grid lg:hidden"
              >
                <Phone size={18} aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:border-[#FFD166] hover:text-[#FFD166] lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="home-mobile-navigation"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        id="home-mobile-navigation"
        hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto rounded-b-2xl border-t border-[#EAE6DC] bg-white px-5 pb-8 pt-4 shadow-[0_20px_45px_rgba(30,27,22,0.14)] lg:hidden"
      >
        <nav className="flex flex-col divide-y divide-[#EAE6DC]" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <div
              key={link.path}
              className="mobile-nav-item"
              style={{ animationDelay: `${index * 35}ms` }}
            >
              <NavLink
                to={link.path}
                end={link.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) => mobileLinkClass(isActive)}
              >
                {({ isActive }) => (
                  <>
                    {isActiveLink(isActive) && (
                      <span
                        className="absolute bottom-3 left-0 top-3 w-[3px] rounded-full bg-[#FFB800]"
                        aria-hidden="true"
                      />
                    )}
                    {link.label}
                  </>
                )}
              </NavLink>
              {link.path === "/services" && (
                <div className="mb-3 ml-4 grid gap-1 border-l border-[#FFB800]/40 pl-4">
                  {serviceMenu.map((item) => (
                    <Link
                      key={item.id}
                      to={`/services#${item.id}`}
                      onClick={closeMenu}
                      className="flex min-h-11 items-center text-sm font-semibold text-[#4A4F55] transition-colors hover:text-[#7A5010]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mobile-nav-item mt-5 rounded-xl border border-[#EAE6DC] bg-[#FAF8F3] p-2" style={{ animationDelay: "210ms" }}>
          <p className="px-2 pb-1 pt-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#7A5010]">
            Call us
          </p>
          {[company.phone, company.phoneAlternate].map((number) => (
            <a
              key={number}
              href={telHref(number)}
              onClick={closeMenu}
              className="flex min-h-11 items-center gap-2.5 rounded-lg px-2 text-sm font-bold text-[#242620] transition-colors hover:bg-white hover:text-[#7A5010]"
            >
              <Phone size={16} className="shrink-0 text-[#7A5010]" aria-hidden="true" />
              <span>{number}</span>
            </a>
          ))}
        </div>

        <Link
          to="/contact"
          onClick={closeMenu}
          className="mobile-nav-item mt-3 flex h-12 items-center justify-center gap-2 rounded-full border border-[#B37F00] bg-[#FFB800] px-5 text-sm font-bold text-[#242620] shadow-[0_12px_28px_rgba(30,27,22,0.12)]"
          style={{ animationDelay: "245ms" }}
        >
          Get a Quote
          <ArrowUpRight size={17} className="text-[#242620]" aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
