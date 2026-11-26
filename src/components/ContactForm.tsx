import { useId, useRef, useState, type FormEvent } from "react";
import { Check, Copy, MessageCircle, Send } from "lucide-react";
import { company } from "../data/company";

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
}

const initialData: FormData = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  location: "",
  message: "",
};

const projectTypes = [
  "Civil Construction",
  "Road Construction & Development",
  "Water Supply Systems",
  "PWD & Government Contracting",
  "Residential & Commercial Building Construction",
  "Solar Energy Solutions",
  "Land Development",
  "Interior Design & Fit-Out",
  "Other Infrastructure Inquiry",
];

const labelClass =
  "contact-label mb-2 block font-bold uppercase tracking-wider text-[#4A4F55]";
const controlClass =
  "contact-control w-full min-w-0 rounded-xl border border-[#7A5010]/30 bg-[#F6F5F1] text-[#242620] placeholder:text-[#7C8288] transition focus:border-[#7A5010] focus:ring-2 focus:ring-[#7A5010]/20 focus:outline-none";

export default function ContactForm() {
  const id = useId();
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [handoffOpen, setHandoffOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const handoffRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);

  const update = (field: keyof FormData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setCopied(false);
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!data.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    else if (!/^[+\d\s()-]{7,20}$/.test(data.phone))
      nextErrors.phone = "Enter a valid phone number.";
    if (!data.email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      nextErrors.email = "Enter a valid email address.";
    if (!data.message.trim()) nextErrors.message = "Please describe your project.";

    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0] as keyof FormData | undefined;
    if (firstInvalid) {
      window.requestAnimationFrame(() => document.getElementById(`${id}-${firstInvalid}`)?.focus());
    }
    return Object.keys(nextErrors).length === 0;
  };

  const inquirySummary = [
    "Project inquiry for G A Palve and Company",
    data.name && `Name: ${data.name}`,
    data.phone && `Phone: ${data.phone}`,
    data.email && `Email: ${data.email}`,
    data.projectType && `Service: ${data.projectType}`,
    data.location && `Location: ${data.location}`,
    data.message && `Details: ${data.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setHandoffOpen(true);
    setCopied(false);
    window.requestAnimationFrame(() => handoffRef.current?.focus());
  };

  const copyDetails = async () => {
    try {
      await navigator.clipboard.writeText(inquirySummary);
      setCopied(true);
    } catch {
      detailsRef.current?.select();
      setCopied(false);
    }
  };

  return (
    <div className="w-full min-w-0 max-w-full">
      {handoffOpen && (
        <div
          ref={handoffRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className="panel mb-5 border-[#FFB800]/50 p-5 outline-none sm:p-6"
        >
          <span className="eyebrow mb-2">Next Step</span>
          <h3 className="font-heading text-xl font-bold text-[#242620] sm:text-2xl">
            Ready to continue on WhatsApp
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#666C73]">
            Your details stay in this browser until you paste them into WhatsApp. This website
            does not store or send them. We will not add your number to any list.
          </p>

          <label htmlFor={`${id}-summary`} className={`${labelClass} mt-5`}>
            Inquiry details to paste
          </label>
          <textarea
            ref={detailsRef}
            id={`${id}-summary`}
            readOnly
            rows={6}
            value={inquirySummary}
            className={`${controlClass} resize-none text-xs leading-relaxed`}
          />

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={copyDetails} className="btn btn-outline">
              {copied ? <Check size={17} /> : <Copy size={17} />}
              {copied ? "Copied" : "Copy details"}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={17} />
              Open WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setHandoffOpen(false)}
              className="min-h-11 px-4 text-sm font-semibold text-[#666C73] transition-colors hover:text-[#7A5010]"
            >
              Edit details
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="panel contact-form w-full min-w-0 max-w-full p-5 sm:p-6">
        <span className="eyebrow mb-2">Project Inquiry</span>
        <h3 className="font-heading text-2xl font-bold text-[#242620] sm:text-3xl">
          Send Us the Details
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-[#666C73] sm:text-base">
          Prepare a project inquiry, then continue on WhatsApp. Nothing is submitted to a server.
        </p>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-name`} className={labelClass}>
              Full Name <span className="text-[#7A5010]">*</span>
            </label>
            <input
              id={`${id}-name`}
              name="name"
              type="text"
              autoComplete="name"
              required
              value={data.name}
              onChange={(event) => update("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${id}-name-error` : undefined}
              className={`${controlClass} ${errors.name ? "!border-red-500" : ""}`}
              placeholder="Your full name"
            />
            {errors.name && <p id={`${id}-name-error`} role="alert" className="contact-error mt-1 text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor={`${id}-phone`} className={labelClass}>
              Phone Number <span className="text-[#7A5010]">*</span>
            </label>
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={data.phone}
              onChange={(event) => update("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
              className={`${controlClass} ${errors.phone ? "!border-red-500" : ""}`}
              placeholder="+91 9577743777"
            />
            {errors.phone && <p id={`${id}-phone-error`} role="alert" className="contact-error mt-1 text-red-600">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor={`${id}-email`} className={labelClass}>
              Email Address <span className="text-[#7A5010]">*</span>
            </label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={data.email}
              onChange={(event) => update("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${id}-email-error` : undefined}
              className={`${controlClass} ${errors.email ? "!border-red-500" : ""}`}
              placeholder="you@company.com"
            />
            {errors.email && <p id={`${id}-email-error`} role="alert" className="contact-error mt-1 text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor={`${id}-service`} className={labelClass}>
              Service / Project Domain
            </label>
            <select
              id={`${id}-service`}
              name="projectType"
              value={data.projectType}
              onChange={(event) => update("projectType", event.target.value)}
              className={controlClass}
            >
              <option value="">Select a category</option>
              {projectTypes.map((type) => (
                <option key={type} value={type} className="bg-[#F6F5F1] text-[#242620]">
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={`${id}-location`} className={labelClass}>
              Project Location
            </label>
            <input
              id={`${id}-location`}
              name="location"
              type="text"
              autoComplete="street-address"
              value={data.location}
              onChange={(event) => update("location", event.target.value)}
              className={controlClass}
              placeholder="City, district or site address"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={`${id}-message`} className={labelClass}>
              Project Details <span className="text-[#7A5010]">*</span>
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={5}
              required
              value={data.message}
              onChange={(event) => update("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? `${id}-message-error` : undefined}
              className={`${controlClass} resize-none ${errors.message ? "!border-red-500" : ""}`}
              placeholder="Tell us about scope, tender deadlines or structural requirements..."
            />
            {errors.message && <p id={`${id}-message-error`} role="alert" className="contact-error mt-1 text-red-600">{errors.message}</p>}
          </div>
        </div>

        <div className="mt-7">
          <button type="submit" className="btn btn-submit btn-shine w-full sm:w-auto">
            <Send size={17} />
            Prepare WhatsApp Inquiry
          </button>
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-[#666C73]">
            You will review and paste your details into WhatsApp yourself. No information is sent
            by this website.
          </p>
        </div>
      </form>
    </div>
  );
}
