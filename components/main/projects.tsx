import githubData from "@/lib/github-data.json";
import type { GitHubProject } from "@/lib/types";
import { ProjectCard } from "@/components/sub/project-card";

export const Projects = () => {
  const projects = githubData as GitHubProject[];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-cyan-400 py-20">
        My Projects
      </h1>
      {projects.length === 0 ? (
        <p className="text-gray-400">No projects found. Run the fetch script to populate data.</p>
      ) : (
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};
