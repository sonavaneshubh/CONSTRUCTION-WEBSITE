import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import PageIntro from "../components/PageIntro";
import { projects, projectCategories } from "../data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.categorySlug === activeFilter);

  return (
    <div className="interior-page">
      <PageIntro
        eyebrow="Selected Portfolio"
        title="Work That Speaks"
        subtitle="Explore infrastructure project work across roads, water systems, civil works and renewable energy."
      />

      <section className="page-intro-content section-surface section-pad">
        <div className="site-container relative z-10">
          <ScrollReveal>
            <div className="mb-5 flex flex-col items-center gap-4">
              <p className="text-sm text-[#666C73]">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            </div>

            <div className="filter-scroll -mx-1 mb-5 flex gap-2 overflow-x-auto px-1 pb-2 sm:justify-center">
              {projectCategories.map((category) => (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => setActiveFilter(category.slug)}
                  aria-pressed={activeFilter === category.slug}
                  className={`shrink-0 rounded-lg px-4 py-2.5 text-xs font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17232D] ${
                    activeFilter === category.slug
                      ? "border border-[#B37F00] bg-[#FFB800] text-[#242620] shadow-sm shadow-[#FFB800]/20"
                      : "border border-[#FFB800]/35 bg-white text-[#4A4F55] hover:border-[#FFB800] hover:text-[#7A5010]"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={(index % 3) * 70}>
                  <ProjectCard project={project} index={index} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="panel p-5 text-center">
              <p className="text-[#4A4F55]">No projects found in this category.</p>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className="btn btn-primary mt-4"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
