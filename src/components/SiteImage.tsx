import type { ImgHTMLAttributes, SyntheticEvent } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  mobileSrc?: string;
  fallback?: string;
};

const DEFAULT_FALLBACK = "/images/hero/construction.jpg";

export default function SiteImage({ src, mobileSrc, fallback = DEFAULT_FALLBACK, onError, ...props }: Props) {
  const webpSrc = src.replace(/\.(jpe?g|png)$/i, ".webp");

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    if (image.dataset.fallbackApplied !== "true") {
      image.dataset.fallbackApplied = "true";
      image.parentElement?.querySelectorAll("source").forEach((source) => source.remove());
      image.removeAttribute("srcset");
      if (!image.src.endsWith(fallback)) image.src = fallback;
    }
    onError?.(event);
  };

  return (
    <picture className="site-image">
      {mobileSrc && <source media="(max-width: 768px)" srcSet={mobileSrc} />}
      <source srcSet={webpSrc} type="image/webp" />
      <img decoding="async" {...props} src={src} onError={handleError} />
    </picture>
  );
}
