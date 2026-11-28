import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { company } from "../data/company";

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
}

type SubmitState = "idle" | "sending" | "success" | "error";

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

const contactFormEndpoint =
  (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined)?.trim() ||
  `https://formsubmit.co/ajax/${company.email}`;
const web3formsAccessKey =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined)?.trim();

const labelClass =
  "contact-label mb-2 block font-bold uppercase tracking-wider text-[#4A4F55]";
const controlClass =
  "contact-control w-full min-w-0 rounded-xl border border-[#7A5010]/30 bg-[#F6F5F1] text-[#242620] placeholder:text-[#7C8288] transition focus:border-[#7A5010] focus:ring-2 focus:ring-[#7A5010]/20 focus:outline-none";

export default function ContactForm() {
  const id = useId();
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitError, setSubmitError] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (submitState !== "idle") statusRef.current?.focus();
  }, [submitState]);

  const update = (field: keyof FormData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitState("idle");
    setSubmitError("");
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
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Project Name: ${data.projectType || "Not specified"}`,
    `Location: ${data.location || "Not specified"}`,
    `Details: ${data.message}`,
  ].join("\n");

  const emailUrl = `mailto:${company.email}?subject=${encodeURIComponent(
    `Project inquiry from ${data.name || "website visitor"}`
  )}&body=${encodeURIComponent(inquirySummary)}`;
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    inquirySummary
  )}`;

  const sendInquiry = async () => {
    if (contactFormEndpoint.includes("web3forms.com") && !web3formsAccessKey) {
      setSubmitError("Add VITE_WEB3FORMS_ACCESS_KEY to enable Web3Forms email delivery.");
      setSubmitState("error");
      return;
    }

    setSubmitState("sending");
    setSubmitError("");

    try {
      const subject = `New project inquiry from ${data.name}`;
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey || undefined,
          _subject: subject,
          _template: "table",
          _replyto: data.email,
          _honey: honeypotRef.current?.value ?? "",
          Name: data.name,
          Phone: data.phone,
          Email: data.email,
          "Project Name": data.projectType || "Not specified",
          Location: data.location || "Not specified",
          Details: data.message,
        }),
      });

      const result: unknown = await response.json().catch(() => null);
      const successValue = (result as { success?: unknown } | null)?.success;
      const resultMessage = (result as { message?: unknown } | null)?.message;
      const succeeded = response.ok && successValue !== false && successValue !== "false";

      if (!succeeded) {
        throw new Error(
          typeof resultMessage === "string" && resultMessage.trim()
            ? resultMessage
            : "The email service did not accept the inquiry. Please try again."
        );
      }

      setSubmitState("success");
    } catch (error) {
      setSubmitError(
        error instanceof Error && error.message.trim()
          ? error.message
          : "We could not send the inquiry. Please try again or use an email app."
      );
      setSubmitState("error");
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (submitState === "sending" || !validate()) return;
    void sendInquiry();
  };

  const resetForm = () => {
    setData(initialData);
    setErrors({});
    setSubmitState("idle");
    setSubmitError("");
    window.requestAnimationFrame(() => document.getElementById(`${id}-name`)?.focus());
  };

  return (
    <div className="w-full min-w-0 max-w-full">
      {submitState !== "idle" && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role={submitState === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`panel mb-5 p-5 outline-none sm:p-6 ${
            submitState === "error" ? "border-red-300" : "border-[#FFB800]/50"
          }`}
        >
          <span className="eyebrow mb-2">
            {submitState === "success"
              ? "Inquiry Sent"
              : submitState === "error"
                ? "Delivery Issue"
                : "Sending"}
          </span>
          <h3 className="font-heading text-xl font-bold text-[#242620] sm:text-2xl">
            {submitState === "success"
              ? "Your inquiry has been sent"
              : submitState === "error"
                ? "We could not send the email"
                : "Sending your inquiry..."}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#666C73]">
            {submitState === "success"
              ? "Our team has received your project details by email and will review them shortly."
              : submitState === "error"
                ? "Your details are still here. Try again, send them from your email app, or continue on WhatsApp."
                : "Please keep this page open while we send your details."}
          </p>

          {submitState === "error" && (
            <p className="mt-2 text-sm font-semibold text-red-700">{submitError}</p>
          )}

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            {submitState === "success" && (
              <>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MessageCircle size={17} />
                  Continue on WhatsApp
                </a>
                <button type="button" onClick={resetForm} className="btn btn-outline">
                  Send another inquiry
                </button>
              </>
            )}

            {submitState === "error" && (
              <>
                <button
                  type="button"
                  onClick={() => void sendInquiry()}
                  className="btn btn-primary"
                >
                  <Send size={17} />
                  Try again
                </button>
                <a href={emailUrl} className="btn btn-outline">
                  <Mail size={17} />
                  Send with email app
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitState("idle")}
                  className="min-h-11 px-4 text-sm font-semibold text-[#666C73] transition-colors hover:text-[#7A5010]"
                >
                  Edit details
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        aria-busy={submitState === "sending"}
        className="panel contact-form w-full min-w-0 max-w-full p-5 sm:p-6"
      >
        <input
          ref={honeypotRef}
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <span className="eyebrow mb-2">Project Inquiry</span>
        <h3 className="font-heading text-2xl font-bold text-[#242620] sm:text-3xl">
          Send Us the Details
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-[#666C73] sm:text-base">
          Send your project inquiry by email, or continue on WhatsApp after sending.
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
          <button
            type="submit"
            disabled={submitState === "sending"}
            className="btn btn-submit btn-shine w-full sm:w-auto disabled:cursor-wait disabled:opacity-70"
          >
            <Send size={17} className={submitState === "sending" ? "animate-pulse" : ""} />
            {submitState === "sending" ? "Sending Inquiry..." : "Send Project Inquiry"}
          </button>
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-[#666C73]">
            Your details are sent to our team by email. We will not add your number to any list.
          </p>
        </div>
      </form>
    </div>
  );
}
