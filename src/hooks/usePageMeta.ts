import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  path?: string;
  image?: string;
  robots?: string;
}

const SITE_URL = "https://www.ganeshcompany.com";
const DEFAULT_IMAGE = "/images/hero/road-construction.webp";

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function usePageMeta({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  robots = "index, follow",
}: PageMeta) {
  useEffect(() => {
    const pageTitle = title.startsWith("G A Palve") ? title : `${title} | G A Palve and Company`;
    const url = `${SITE_URL}${path}`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = pageTitle;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", robots);
    setMeta('meta[property="og:title"]', "property", "og:title", pageTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", pageTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:url"]', "name", "twitter:url", url);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path, image, robots]);
}
