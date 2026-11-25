interface Props {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  id?: string;
}

function TitleContent({ title, highlight }: { title: string; highlight?: string }) {
  if (!highlight) {
    return <>{title}</>;
  }

  const index = title.indexOf(highlight);
  if (index === -1) {
    return <>{title}</>;
  }

  return (
    <>
      {title.slice(0, index)}
      <span className="text-[#634000]">
        {highlight}
      </span>
      {title.slice(index + highlight.length)}
    </>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  id,
}: Props) {
  return (
    <div id={id} className="section-head mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="hero-stagger eyebrow" style={{ animationDelay: "60ms" }}>
          {eyebrow}
        </span>
      )}
      <h2 className="section-title [text-wrap:balance]">
        <span className="line-mask">
          <span className="text-line" style={{ animationDelay: "180ms" }}>
            <TitleContent title={title} highlight={highlight} />
          </span>
        </span>
      </h2>
      {subtitle && (
        <p className="section-copy [text-wrap:balance] hero-stagger" style={{ animationDelay: "340ms" }}>
          {subtitle}
        </p>
      )}
      <span className="gold-line mx-auto" />
    </div>
  );
}
