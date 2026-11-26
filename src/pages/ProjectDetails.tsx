import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import ScrollReveal from "../components/ScrollReveal";
import SiteImage from "../components/SiteImage";
import CTASection from "../components/CTASection";
import PageIntro from "../components/PageIntro";
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
import { usePageMeta } from "../hooks/usePageMeta";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  usePageMeta({
    title: project?.title ?? "Project Not Found",
    description: project
      ? `${project.title} in ${project.location} by G A Palve and Company.`
      : "The requested infrastructure project could not be found.",
    path: `/projects/${id ?? ""}`,
    image: project?.coverImage,
    robots: project ? "index, follow" : "noindex, nofollow",
  });

  if (!project) {
    return (
      <div className="interior-page flex min-h-[65vh] items-center justify-center py-12">
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
    <div className="interior-page min-h-screen">
      <PageIntro
        eyebrow={project.category}
        title={project.title}
        subtitle={project.location}
      />

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

      <section className="page-intro-content section-surface section-pad">
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
                <aside className="panel card-body lg:sticky lg:top-28 sm:p-6">
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
                    <SiteImage
                      src={image}
                      alt={`${project.title} - View ${index + 1}`}
                      loading="lazy"
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
