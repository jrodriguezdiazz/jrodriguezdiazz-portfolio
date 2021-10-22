import userData from '@constants/data';
import Title from '@components/Title';

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <Title title={'About Me'} />
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: '3rem' }}
          >
            {userData.about.title}. Currently working on{' '}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{' '}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{' '}
                and I'll get back. I swear.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my{' '}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{' '}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300" />
                    Twitter
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300" />
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300" />
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300" />
                    Instagram
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  className="h-20 w-20 mx-4 my-4"
                />
              </a>
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  className="h-20 w-20 mx-4 my-4"
                />
              </a>
              <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  className="h-20 w-20 mx-4 my-4"
                />
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  className="h-20 w-20 mx-4 my-4"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  className="h-20 w-20 mx-4 my-4"
                />
              </a>
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  className="h-20 w-20 mx-4 my-4"
                />
              </a>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  className="h-20 w-20 mx-4 my-4"
                />
              </a>

              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                  alt="firebase"
                  className="h-20 w-20 mx-4 my-4"
                />
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  className="h-20 w-20 mx-4 my-4"
                />
              </a>
              <a
                href="https://www.postgresql.org"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgresql"
                  className="h-20 w-20 mx-4 my-4"
                />
              </a>
              <a
                href="https://www.microsoft.com/en-us/sql-server"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
                  alt="mssql"
                  className="h-20 w-20 mx-4 my-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
