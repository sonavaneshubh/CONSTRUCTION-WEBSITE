import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export function useFocusTrap<T extends HTMLElement>(active: boolean) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!active) return;
    const container = ref.current;
    if (!container) return;

    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const getFocusable = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (element) => element.getClientRects().length > 0 && element.tabIndex !== -1,
      );

    const first = getFocusable()[0];
    if (first) first.focus();
    else container.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const elements = getFocusable();
      if (!elements.length) {
        event.preventDefault();
        return;
      }
      const start = elements[0];
      const end = elements[elements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && (activeElement === start || !container.contains(activeElement))) {
        event.preventDefault();
        end.focus();
      } else if (!event.shiftKey && (activeElement === end || !container.contains(activeElement))) {
        event.preventDefault();
        start.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previous?.isConnected) previous.focus();
    };
  }, [active]);

  return ref;
}
