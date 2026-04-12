import githubData from "@/lib/github-data.json";
import type { GitHubProject } from "@/lib/types";
import { ProjectCard } from "@/components/sub/project-card";
import { orbitron } from "@/lib/fonts";

export const Projects = () => {
  const projects = githubData as GitHubProject[];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center pb-20 relative"
    >
      <div className="flex flex-col items-center gap-3 py-20">
        <h2 className={`text-[40px] font-900 text-white tracking-wide ${orbitron.className}`}>
          My Projects
        </h2>
        <div className="w-24 h-[2px] bg-gradient-to-r from-[#7dd3fc] to-[#bae6fd] rounded-full opacity-70" />
      </div>
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
