import userData from "@constants/data";
import ProjectCard from "@components/projects/ProjectCard";
import Title from "@components/commons/Title";
import NotProjects from "@components/projects/NotProjects";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <Title title={"Projects"} />
      {/* Grid starts here */}

      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        {userData.projects.length ? (
          <div className="max-w-6xl mx-auto py-20 pb-40">
            {userData.projects.map((proj, id) => (
              <ProjectCard key={id} number={`${id + 1}`} {...proj} />
            ))}
          </div>
        ) : (
          <NotProjects />
        )}
      </div>
    </section>
  );
}
