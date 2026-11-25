import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
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
  "contact-control w-full rounded-xl border border-[#7A5010]/30 bg-[#F6F5F1] text-[#242620] placeholder:text-[#7C8288] transition focus:border-[#7A5010] focus:ring-2 focus:ring-[#7A5010]/20 focus:outline-none";

export default function ContactForm() {
  const id = useId();
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState("");

  const update = (field: keyof FormData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
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
    return Object.keys(nextErrors).length === 0;
  };

  const whatsappMessage = [
    "Hello G A Palve and Company, I would like to discuss a project.",
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
    whatsappMessage
  )}`;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setLoading(false);
    setSubmittedUrl(whatsappUrl);
    setSubmitted(true);
    setData(initialData);
  };

  if (submitted) {
    return (
      <div className="panel p-5 text-center sm:p-6">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#FFB800]/10">
          <CheckCircle2 size={34} className="text-[#7A5010]" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-[#242620] sm:text-3xl">
          Inquiry Ready
        </h3>
        <p className="section-copy mx-auto mt-3 max-w-md">
          Thank you for sharing your project details. For immediate assistance,
          continue the conversation on WhatsApp.
        </p>
        <a
          href={submittedUrl || whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-7"
        >
          <MessageCircle size={17} />
          Continue on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 block w-full text-center text-sm font-semibold text-[#666C73] transition-colors hover:text-[#7A5010]"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="panel contact-form p-5 sm:p-6">
      <span className="eyebrow mb-2">Project Inquiry</span>
      <h3 className="font-heading text-2xl font-bold text-[#242620] sm:text-3xl">
        Send Us the Details
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-[#666C73] sm:text-base">
        Fill in the basics and our team will get back to you with the next steps.
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
            value={data.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            className={`${controlClass} ${errors.name ? "!border-red-500" : ""}`}
            placeholder="Your full name"
          />
          {errors.name && <p className="contact-error mt-1 text-red-600">{errors.name}</p>}
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
            value={data.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            className={`${controlClass} ${errors.phone ? "!border-red-500" : ""}`}
            placeholder="+91 9577743777"
          />
          {errors.phone && <p className="contact-error mt-1 text-red-600">{errors.phone}</p>}
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
            value={data.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={`${controlClass} ${errors.email ? "!border-red-500" : ""}`}
            placeholder="you@company.com"
          />
          {errors.email && <p className="contact-error mt-1 text-red-600">{errors.email}</p>}
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
            value={data.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            className={`${controlClass} resize-none ${errors.message ? "!border-red-500" : ""}`}
            placeholder="Tell us about scope, tender deadlines or structural requirements..."
          />
          {errors.message && <p className="contact-error mt-1 text-red-600">{errors.message}</p>}
        </div>
      </div>

      <div className="mt-7">
        <button
          type="submit"
          disabled={loading}
          className="btn btn-submit btn-shine w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 size={17} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send size={17} />
              Submit Project Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
