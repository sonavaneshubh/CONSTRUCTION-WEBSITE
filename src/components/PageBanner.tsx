import ScrollReveal from "./ScrollReveal";
import SiteImage from "./SiteImage";

interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageBanner({ tag, title, subtitle, image }: Props) {
  return (
    <section className="page-banner relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#17232D] py-20 pt-28 text-white sm:min-h-[360px] lg:min-h-[420px]">
      <SiteImage
        src={image || "/images/hero/road-construction.jpg"}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="page-banner__overlay absolute inset-0 z-10" aria-hidden="true" />

      <div className="relative z-20 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <ScrollReveal>
          <div className="max-w-3xl">
            {tag && (
              <span
                className="hero-stagger inline-flex items-center rounded-full bg-[#D6A12B] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#17232D] sm:text-[11px]"
                style={{ animationDelay: "80ms" }}
              >
                {tag}
              </span>
            )}
            <h1 className="page-banner__title mt-5 font-heading text-[clamp(2.2rem,4.8vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.04em]">
              <span className="line-mask">
                <span className="text-line" style={{ animationDelay: "200ms" }}>
                  {title}
                </span>
              </span>
            </h1>
            {subtitle && (
              <p
                className="hero-stagger mt-5 max-w-2xl text-base leading-7 text-[#F5F3EE]/90 sm:text-lg"
                style={{ animationDelay: "380ms" }}
              >
                {subtitle}
              </p>
            )}
            <div
              className="hero-stagger mt-6 h-[3px] w-16 rounded-full bg-[#D6A12B]"
              style={{ animationDelay: "520ms" }}
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
