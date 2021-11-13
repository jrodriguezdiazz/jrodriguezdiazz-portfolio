import userData from '@constants/data';
import ProjectCard from '@components/ProjectCard';
import Title from '@components/Title';
import NotProjects from '@components/NotProjects';

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <Title title={'Projects'} />
      {/* Grid starts here */}

      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        {userData.projects.length ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
            {userData.projects.map((proj, id) => (
              <ProjectCard
                key={id}
                title={proj.title}
                link={proj.link}
                imgUrl={proj.imgUrl}
                number={`${id + 1}`}
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
