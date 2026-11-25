import { MessageCircle } from "lucide-react";
import { company } from "../data/company";

export default function WhatsAppButton() {
  const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Inquiry with G A Palve and Company"
      className="fixed bottom-6 right-6 z-[var(--z-float)] group focus:outline-none"
    >
      <div className="relative grid h-14 w-14 place-items-center rounded-full border-2 border-[#FFB800]/50 bg-[#25D366] shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110 hover:shadow-green-500/60">
        <MessageCircle size={28} className="text-[#242620]" fill="white" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-30 motion-safe:animate-ping" />
      </div>
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-lg border border-[#FFB800]/35 bg-white px-3.5 py-1.5 text-xs font-bold text-[#242620] opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100">
        Chat with Engineering Team
      </span>
    </a>
  );
}
