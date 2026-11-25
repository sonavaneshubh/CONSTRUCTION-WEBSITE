import { useState } from "react";
import PageBanner from "../components/PageBanner";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import { projects, projectCategories } from "../data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.categorySlug === activeFilter);

  return (
    <div className="bg-[#FAFAF8] text-[#4A4F55]">
      <PageBanner
        tag="Our Portfolio"
        title="Infrastructure Projects"
        subtitle="Explore our delivered highways, bridges, buildings, water systems and renewable energy infrastructure."
        image="/images/hero/water-infrastructure.jpg"
      />

      <section className="section-surface section-pad">
        <div className="site-container relative z-10">
          <ScrollReveal>
            <div className="mb-5 flex flex-col items-center gap-4">
              <div className="section-head max-w-3xl">
                <span className="eyebrow hero-stagger" style={{ animationDelay: "60ms" }}>Selected Portfolio</span>
                <h2 className="section-title [text-wrap:balance]">
                  <span className="line-mask">
                    <span className="text-line" style={{ animationDelay: "180ms" }}>
                      Work That <span className="gradient-text">Speaks</span>
                    </span>
                  </span>
                </h2>
                <div className="gold-line mx-auto" />
              </div>
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
                  className={`shrink-0 rounded-lg px-4 py-2.5 text-xs font-bold transition-all ${
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
