import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const HOME_LOGO_SRC = "/images/Logo/logo.jpeg";

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
    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const isActiveLink = (isActive: boolean) => isActive;

  const closeMenu = () => setMobileOpen(false);

  const desktopLinkClass = (isActive: boolean) =>
    `relative whitespace-nowrap px-2 py-2 text-[11px] font-bold transition-colors xl:px-2.5 xl:text-xs 2xl:text-sm ${
      isActiveLink(isActive)
        ? "text-[#7A5010]"
        : "text-[#4A4F55] hover:text-[#7A5010]"
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
        className={`fixed inset-x-0 top-0 z-50 rounded-b-2xl border-b border-[#EAE6DC] transition-[background-color,box-shadow] duration-300 ${
          isHome && isScrolled
            ? "bg-white/95 shadow-[0_6px_24px_rgba(23,35,45,0.12)] backdrop-blur-md"
            : "bg-white shadow-[0_10px_35px_rgba(30,27,22,0.08)]"
        }`}
      >
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex h-16 items-center justify-between gap-2.5 lg:h-[4.25rem]">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex min-w-0 items-center gap-2.5"
              aria-label="G.A. Palve & Company Home"
            >
              {!logoFailed && (
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white p-1 shadow-sm ring-1 ring-[#EAE6DC] lg:h-12 lg:w-12">
                  <img
                    src={HOME_LOGO_SRC}
                    alt=""
                    className="h-full w-full max-w-[10rem] object-contain"
                    onError={() => setLogoFailed(true)}
                  />
                </span>
              )}
              <span className="flex min-w-0 flex-col">
                <span
                  className="truncate text-[19px] font-extrabold leading-none text-[#242620] sm:text-[22px] lg:text-[26px]"
                  style={{
                    fontFamily: '"Bahnschrift", "Segoe UI Variable Display", "Segoe UI", Arial, sans-serif',
                    letterSpacing: "-0.03em",
                  }}
                >
                  G.A. Palve &amp; Company
                </span>
                <span className="mt-1 hidden text-[9px] font-extrabold uppercase leading-tight tracking-[0.16em] text-[#7A5010] sm:block">
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
                    className="ml-0.5 shrink-0 text-[#666C73] transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
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
              <Link
                to="/contact"
                className="hidden h-11 items-center gap-2 rounded-full border border-[#B37F00] bg-[#FFB800] px-5 text-xs font-bold text-[#242620] shadow-[0_10px_24px_rgba(30,27,22,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFD166] lg:inline-flex"
              >
                Get a Quote
                <ArrowUpRight size={16} className="text-[#242620]" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                className="grid h-10 w-10 place-items-center rounded-lg border border-[#EAE6DC] bg-white text-[#242620] transition-colors hover:border-[#B37F00] hover:text-[#7A5010] lg:hidden"
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
        id="home-mobile-navigation"
        hidden={!mobileOpen}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto rounded-b-2xl border-t border-[#EAE6DC] bg-white px-5 pb-8 pt-4 shadow-[0_20px_45px_rgba(30,27,22,0.14)] lg:hidden"
      >
        <nav className="flex flex-col divide-y divide-[#EAE6DC]" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <div key={link.path}>
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
                      className="py-1.5 text-sm font-semibold text-[#4A4F55] transition-colors hover:text-[#7A5010]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link
          to="/contact"
          onClick={closeMenu}
          className="mt-6 flex h-12 items-center justify-center gap-2 rounded-full border border-[#B37F00] bg-[#FFB800] px-5 text-sm font-bold text-[#242620] shadow-[0_12px_28px_rgba(30,27,22,0.12)]"
        >
          Get a Quote
          <ArrowUpRight size={17} className="text-[#242620]" aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
