import userData from '@constants/data';
import CustomButton from '@components/CustomButton';

export default function NotProjects() {
  return (
    <div className="pt-20 flex justify-between">
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold leading-snug mb-10 dark:text-gray-300 mx-3">
          At the moment I do not have a project that I would like to show...
          <span className="hidden lg:block">
            {' '}
            But you can see what I am preparing on GitHub
          </span>
        </h2>
        <div className="mb-5 flex justify-around">
          <a
            href={`https://github.com/${userData.githubUsername}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton text={'View Repositories'} />
          </a>
        </div>
        <div className="flex justify-around">
          <img
            className="flex-no-shrink fill-current md:w-2/6 md:h-2/6 sm:w-2/3 sm:h-2/3"
            src="./dev.svg"
            alt="Developer working"
          />
        </div>
      </div>
    </div>
  );
}
