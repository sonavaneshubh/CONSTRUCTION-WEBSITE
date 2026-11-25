import ScrollReveal from "./ScrollReveal";

interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageBanner({ tag, title, subtitle, image }: Props) {
  return (
    <section className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#FAFAF8] py-20 pt-28 text-[#242620] sm:min-h-[360px] lg:min-h-[420px]">
      <img
        src={image || "/images/hero/tower-cranes.jpg"}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        onError={(event) => {
          (event.target as HTMLImageElement).src = "/images/hero/construction.jpg";
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/96 via-white/84 to-white/48" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/90 via-transparent to-white/55" />
      <div
        className="hero-beam absolute -left-1/4 top-[-20%] z-10 h-[140%] w-1/2 bg-gradient-to-r from-transparent via-[#FFB800]/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <ScrollReveal>
          <div className="max-w-3xl">
            {tag && (
              <span
                className="hero-stagger inline-flex items-center rounded-full bg-[#FFB800] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#242620] sm:text-[11px]"
                style={{ animationDelay: "80ms" }}
              >
                {tag}
              </span>
            )}
            <h1 className="mt-5 font-heading text-[clamp(2.2rem,4.8vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.04em]">
              <span className="line-mask">
                <span className="text-line" style={{ animationDelay: "200ms" }}>
                  {title}
                </span>
              </span>
            </h1>
            {subtitle && (
              <p
                className="hero-stagger mt-5 max-w-2xl text-base leading-7 text-[#4A4F55] sm:text-lg"
                style={{ animationDelay: "380ms" }}
              >
                {subtitle}
              </p>
            )}
            <div
              className="hero-stagger mt-6 h-[3px] w-16 rounded-full bg-[#B37F00] shadow-[0_0_12px_rgba(179,127,0,0.25)]"
              style={{ animationDelay: "520ms" }}
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
