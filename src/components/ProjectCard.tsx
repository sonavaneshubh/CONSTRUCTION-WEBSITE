import { Link } from "react-router-dom";
import { ArrowRight, Calendar, CheckCircle2, MapPin } from "lucide-react";
import type { Project } from "../data/projects";
import SiteImage from "./SiteImage";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link to={`/projects/${project.id}`} className="panel panel-hover group flex h-full flex-col">
      <div className="media-box media-clean media-top media-ratio">
        <SiteImage src={project.coverImage} alt={project.title} loading="lazy" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#17232D]/85 via-transparent to-[#17232D]/15" />
        <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">
            <span className="rounded-md bg-gradient-to-r from-[#FFE08A] via-[#FFB800] to-[#E09500] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#242620]">
            {project.category}
          </span>
          {project.year && (
            <span className="flex items-center gap-1 rounded-md border border-[#B37F00]/30 bg-white px-2 py-1 text-[10px] font-semibold text-[#242620] ring-1 ring-[#EAE6DC]">
              <Calendar size={11} className="text-[#7A5010]" />
              {project.year}
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center gap-2 text-xs font-semibold text-white">
          <MapPin size={14} className="shrink-0 text-[#D6A12B]" />
          <span className="truncate">{project.location}</span>
        </div>
      </div>

      <div className="card-body flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#2F7A5A]">
          <CheckCircle2 size={13} className="shrink-0" />
          <span className="break-words">{project.status}</span>
        </div>
        <h3 className="mt-1 line-clamp-2 font-heading text-lg font-bold leading-snug text-[#242620] transition-colors group-hover:text-[#7A5010]">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[#666C73]">
          {project.shortDescription}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <div
            className={`mt-2 grid gap-2 rounded-xl border border-[#B37F00]/20 bg-[#F6F5F1] p-3 ${
              project.metrics.length < 2 ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label} className="min-w-0">
                <span className="block text-[9px] uppercase tracking-wider text-[#666C73]">
                  {metric.label}
                </span>
                <span className="mt-0.5 block truncate text-xs font-bold text-[#242620]">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3 text-[11px] font-bold uppercase tracking-wider text-[#7A5010]">
          View Project
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
