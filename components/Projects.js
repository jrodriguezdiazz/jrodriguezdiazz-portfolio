import userData from "@constants/data";
import ProjectCard from "@components/ProjectCard";
import Title from "@components/Title";
import NotProjects from "@components/NotProjects";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <Title title={"Projects"} />
      {/* Grid starts here */}

      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        {userData.projects.length ? (
          <div className="max-w-6xl mx-auto py-20 pb-40">
            {userData.projects.map((proj, id) => (
              <ProjectCard
                description={proj.description}
                imgUrl={proj.imgUrl}
                key={id}
                link={proj.link}
                number={`${id + 1}`}
                repo={proj.repo}
                stack={proj.stack}
                title={proj.title}
              />
            ))}
          </div>
        ) : (
          <NotProjects />
        )}
      </div>
    </section>
  );
}
