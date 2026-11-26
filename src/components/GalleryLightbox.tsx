import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "../data/gallery";
import SiteImage from "./SiteImage";
import { useFocusTrap } from "../hooks/useFocusTrap";

interface Props {
  items: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function GalleryLightbox({ items, initialIndex, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);
  const dialogRef = useFocusTrap<HTMLDivElement>(true);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const item = items[index];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) => (current + 1) % items.length);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) => (current - 1 + items.length) % items.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [items.length]);

  const showPrevious = () => setIndex((current) => (current - 1 + items.length) % items.length);
  const showNext = () => setIndex((current) => (current + 1) % items.length);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1116]/92 p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Gallery image viewer"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="flex w-full max-w-5xl flex-col gap-3 outline-none"
      >
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Image {index + 1} of {items.length}: {item.label}
        </p>

        <div className="flex items-center justify-between gap-4 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D6A12B]">
            {item.group}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A12B]"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="relative flex min-h-0 items-center justify-center">
          <SiteImage
            src={item.src}
            alt={`${item.label} by G A Palve and Company`}
            className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
            className="absolute left-0 grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-[#17232D]/70 text-white transition hover:bg-[#17232D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A12B] sm:-left-3"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-0 grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-[#17232D]/70 text-white transition hover:bg-[#17232D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A12B] sm:-right-3"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="flex items-end justify-between gap-4 text-white">
          <div>
            <p className="font-heading text-lg font-bold sm:text-xl">{item.label}</p>
            <p className="text-xs text-white/70">G A Palve and Company</p>
          </div>
          <p className="shrink-0 text-xs font-semibold text-[#D6A12B]">
            {index + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
