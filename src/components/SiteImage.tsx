import type { ImgHTMLAttributes, SyntheticEvent } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  fallback?: string;
};

const DEFAULT_FALLBACK = "/images/hero/construction.jpg";

export default function SiteImage({ src, fallback = DEFAULT_FALLBACK, ...props }: Props) {
  const webpSrc = src.replace(/\.(jpe?g|png)$/i, ".webp");

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    if (image.dataset.fallbackApplied === "true") return;

    image.dataset.fallbackApplied = "true";
    image.parentElement?.querySelector("source")?.remove();

    if (!image.src.endsWith(fallback)) image.src = fallback;
  };

  return (
    <picture className="site-image">
      <source srcSet={webpSrc} type="image/webp" />
      <img {...props} src={src} onError={handleError} />
    </picture>
  );
}
