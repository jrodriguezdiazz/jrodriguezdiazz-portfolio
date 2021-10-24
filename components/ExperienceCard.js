import DetailsExperience from '@components/DetailsExperience';

export default function ExperienceCard({
  title,
  desc,
  year,
  company,
  companyLink,
  project,
  projectLink,
}) {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="font-semibold text-xl">{title}</h1>
      <DetailsExperience name={year} />
      <u>
        {' '}
        <DetailsExperience href={companyLink} name={company} />
        <DetailsExperience href={projectLink} name={project} />
      </u>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
}
