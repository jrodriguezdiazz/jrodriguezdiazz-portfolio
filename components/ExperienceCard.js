import { Fragment } from 'react';
import DetailsExperience from '@components/DetailsExperience';
import Responsibilities from '@components/Responsibilities';

export default function ExperienceCard({
  title,
  year,
  company,
  companyLink,
  client,
  clientLink,
  responsibilities,
}) {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10">
      <h1 className="font-semibold text-xl">{title}</h1>
      <DetailsExperience
        detailName={'Company'}
        href={companyLink}
        name={company}
      />
      <DetailsExperience
        detailName={'Client'}
        href={clientLink}
        name={client}
      />
      <DetailsExperience detailName={'Time Lapse'} name={year} />
      {!!responsibilities.length && (
        <Fragment>
          {' '}
          <h3 className="font-semibold text-gray-500 dark:text-gray-300">
            Responsibilities:
          </h3>
          <Responsibilities responsibilities={responsibilities} />
        </Fragment>
      )}
    </div>
  );
}
