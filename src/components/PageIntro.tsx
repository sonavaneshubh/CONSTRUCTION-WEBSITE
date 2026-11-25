interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageIntro({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="page-intro section-pad">
      <div className="site-container">
        <div className="section-head mx-auto max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="section-title [text-wrap:balance]">{title}</h1>
          {subtitle && <p className="section-copy">{subtitle}</p>}
          <div className="gold-line mx-auto" />
        </div>
      </div>
    </section>
  );
}
