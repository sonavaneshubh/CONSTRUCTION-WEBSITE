import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import ScrollReveal from "../components/ScrollReveal";
import CTASection from "../components/CTASection";
import {
  MapPin,
  Calendar,
  Tag,
  ArrowLeft,
  ChevronRight,
  CheckCircle,
  Building2,
  ShieldCheck,
} from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-[65vh] items-center justify-center bg-[#FAFAF8] py-12 text-[#4A4F55]">
        <div className="site-container">
          <ScrollReveal>
            <div className="panel mx-auto max-w-md p-6 text-center sm:p-6">
              <span className="mb-2 block font-heading text-6xl font-extrabold text-[#7A5010]">
                404
              </span>
              <h1 className="section-title text-2xl sm:text-3xl">Project Not Found</h1>
              <p className="mt-3 text-sm leading-relaxed text-[#666C73]">
                The infrastructure project you are looking for does not exist or may have been updated.
              </p>
              <Link to="/projects" className="btn btn-primary mt-5">
                <ArrowLeft size={18} />
                Back to Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#4A4F55]">
      <section className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#FAFAF8] py-16 pt-28 text-[#242620] sm:min-h-[360px]">
        <img
          src={project.coverImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/hero/construction.jpg";
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#FAFAF8]/95 via-[#FAFAF8]/80 to-[#FAFAF8]/55" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FAFAF8]/90 via-transparent to-[#FAFAF8]/60" />
        <div
          className="hero-beam absolute -right-1/4 top-[-30%] z-10 h-[160%] w-1/2 bg-gradient-to-l from-transparent via-[#FFB800]/10 to-transparent blur-3xl"
          aria-hidden="true"
        />

        <div className="site-container relative z-20">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <span
                className="eyebrow border-[#B37F00]/25 bg-[#FFB800]/10 text-[#7A5010] hero-stagger"
                style={{ animationDelay: "60ms" }}
              >
                <Tag size={13} />
                {project.category}
              </span>
              <h1 className="mt-5 font-heading text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold leading-[1.12] tracking-[-0.04em]">
                <span className="line-mask">
                  <span className="text-line" style={{ animationDelay: "180ms" }}>
                    {project.title}
                  </span>
                </span>
              </h1>
              <p
                className="hero-stagger mt-4 flex items-center justify-center gap-2 text-sm text-[#4A4F55] sm:text-base"
                style={{ animationDelay: "340ms" }}
              >
                <MapPin size={18} className="shrink-0 text-[#7A5010]" />
                <span>{project.location}</span>
              </p>
              <div className="hero-stagger gold-line mx-auto mt-5" style={{ animationDelay: "460ms" }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="border-y border-[#FFB800]/25 bg-white">
        <div className="site-container py-3.5">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-[#666C73] sm:text-sm">
            <li>
              <Link to="/" className="transition-colors hover:text-[#7A5010]">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center text-[#666C73]">
              <ChevronRight size={14} />
            </li>
            <li>
              <Link to="/projects" className="transition-colors hover:text-[#7A5010]">
                Projects
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center text-[#666C73]">
              <ChevronRight size={14} />
            </li>
            <li className="max-w-[200px] truncate font-semibold text-[#7A5010] sm:max-w-md">
              {project.title}
            </li>
          </ol>
        </div>
      </nav>

      <section className="section-surface section-pad">
        <div className="site-container relative z-10">
          <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-8">
              <ScrollReveal>
                <div className="space-y-12">
                  <div>
                    <div className="section-head max-w-none items-start text-left">
                      <h2 className="section-title text-2xl sm:text-3xl">Project Overview</h2>
                      <div className="gold-line" />
                    </div>
                    <p className="section-copy mt-4">{project.overview}</p>
                  </div>

                  <div>
                    <div className="section-head max-w-none items-start text-left">
                      <h2 className="section-title text-2xl sm:text-3xl">Scope of Engineering Work</h2>
                      <div className="gold-line" />
                    </div>
                    <ul className="mt-4 grid gap-4">
                      {project.scope.map((item, index) => (
                        <li key={index} className="panel card-body flex items-start gap-3">
                          <CheckCircle className="mt-0.5 shrink-0 text-[#7A5010]" size={18} />
                          <span className="text-sm font-medium leading-relaxed text-[#242620] sm:text-base">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="min-w-0 lg:col-span-4">
              <ScrollReveal direction="left">
                <aside className="panel card-body sticky top-28 sm:p-6">
                  <div className="flex min-w-0 items-center justify-between gap-3 border-b border-[#FFB800]/30 pb-4">
                    <h3 className="min-w-0 font-heading text-xl font-bold text-[#242620]">
                      Project Specifications
                    </h3>
                    <Building2 size={20} className="shrink-0 text-[#7A5010]" />
                  </div>

                  <div className="mt-4 space-y-5">
                    <div>
                      <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#666C73]">
                        Project Name
                      </span>
                      <p className="text-base font-bold text-[#242620]">{project.title}</p>
                    </div>

                    <div>
                      <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#666C73]">
                        Location
                      </span>
                      <p className="flex items-center gap-2 text-sm font-semibold text-[#242620]">
                        <MapPin size={16} className="shrink-0 text-[#7A5010]" />
                        <span className="min-w-0 break-words">{project.location}</span>
                      </p>
                    </div>

                    <div>
                      <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#666C73]">
                        Category
                      </span>
                      <p className="flex items-center gap-2 text-sm font-semibold text-[#242620]">
                        <Tag size={16} className="shrink-0 text-[#7A5010]" />
                        <span>{project.category}</span>
                      </p>
                    </div>

                    {project.year && (
                      <div>
                        <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#666C73]">
                          Completion Year
                        </span>
                        <p className="flex items-center gap-2 text-sm font-semibold text-[#242620]">
                          <Calendar size={16} className="shrink-0 text-[#7A5010]" />
                          <span>{project.year}</span>
                        </p>
                      </div>
                    )}

                    <div>
                      <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#666C73]">
                        Status
                      </span>
                      <span className="inline-block rounded-md border border-emerald-600/30 bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                        {project.status}
                      </span>
                    </div>

                    {project.metrics && project.metrics.length > 0 && (
                      <div className="space-y-3 border-t border-[#FFB800]/25 pt-4">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="flex items-center justify-between gap-3 text-xs">
                            <span className="text-[#666C73]">{m.label}:</span>
                            <span className="font-bold text-[#7A5010]">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-5 border-t border-[#FFB800]/30 pt-6">
                    <Link to="/contact" className="btn btn-primary w-full text-center">
                      Inquire About Similar Specifications
                    </Link>
                  </div>
                </aside>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="section-surface section-pad bg-white">
          <div className="site-container relative z-10">
            <ScrollReveal>
              <div className="section-head mx-auto max-w-3xl">
                <span className="eyebrow">
                  <ShieldCheck size={14} />
                  Verified Field Documentation
                </span>
                <h2 className="section-title">Project Image Gallery</h2>
                <div className="gold-line mx-auto" />
              </div>
              <div
                className={`grid gap-4 ${
                  project.gallery.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {project.gallery.map((image, index) => (
                  <div key={index} className="media-box media-clean media-ratio-wide">
                    <img
                      src={image}
                      alt={`${project.title} - View ${index + 1}`}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/images/hero/construction.jpg";
                      }}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <div className="site-container py-8">
        <ScrollReveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#242620] transition-colors duration-300 hover:text-[#7A5010]"
          >
            <ArrowLeft size={18} />
            <span>Back to All Infrastructure Projects</span>
          </Link>
        </ScrollReveal>
      </div>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
