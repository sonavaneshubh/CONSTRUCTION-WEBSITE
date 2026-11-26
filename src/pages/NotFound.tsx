import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({
    title: "Page Not Found",
    description: "The requested page could not be found on the G A Palve and Company website.",
    path: "/404",
    robots: "noindex, nofollow",
  });

  return (
    <section className="interior-page flex min-h-[65vh] items-center justify-center py-12">
      <div className="site-container">
        <div className="panel mx-auto max-w-lg p-6 text-center sm:p-8">
          <span className="mb-2 block font-heading text-6xl font-extrabold text-[#7A5010]">
            404
          </span>
          <h1 className="section-title text-2xl sm:text-3xl">Page Not Found</h1>
          <p className="mt-3 text-sm leading-relaxed text-[#666C73]">
            This page may have moved or the address may be incorrect.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn btn-primary">
              <ArrowLeft size={18} aria-hidden="true" />
              Go to Home
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
