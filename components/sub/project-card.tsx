"use client";

import Link from "next/link";

import type { GitHubProject } from "@/lib/types";

type ProjectCardProps = {
  project: GitHubProject;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#1e3a5f] bg-[#030014] flex flex-col p-6 gap-4 hover:border-[#7dd3fc] transition-colors duration-300 cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-center gap-2 flex-wrap">
        {project.isPinned && (
          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#7dd3fc] text-[#030014] px-2 py-0.5 rounded-full">
            Pinned
          </span>
        )}
        <h2 className="text-white font-semibold text-lg">{project.name}</h2>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        {project.description ?? "No description provided."}
      </p>

      {/* Topics */}
      {project.topics.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {project.topics.slice(0, 5).map((topic) => (
            <span
              key={topic}
              className="text-[11px] px-2 py-0.5 rounded-full border border-[#1e3a5f] text-[#93c5fd]"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer meta */}
      <div className="flex items-center gap-4 text-gray-500 text-xs">
        {project.language && (
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#7dd3fc] inline-block" />
            {project.language}
          </span>
        )}
        <span>★ {project.stars}</span>
        <span>⑂ {project.forks}</span>
        {project.homepage && (
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(project.homepage!, "_blank", "noreferrer");
            }}
            className="text-[#7dd3fc] hover:underline ml-auto"
          >
            Live site ↗
          </button>
        )}
      </div>
    </Link>
  );
};
