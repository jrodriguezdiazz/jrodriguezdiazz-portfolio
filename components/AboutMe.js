import userData from '@constants/data';
import Title from '@components/Title';
import Tech from '@components/Tech';
import SocialLink from '@components/SocialLink';

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
            {userData.about.title}
            {/*Currently working on{' '}*/}
            {/*<a*/}
            {/*  className="bg-black rounded-md px-2 py-1 text-white"*/}
            {/*  href={userData.about.currentProjectUrl}*/}
            {/*  target="_blank"*/}
            {/*  rel="noopener noreferrer"*/}
            {/*>*/}
            {/*  {userData.about.currentProject} ✈️*/}
            {/*</a>*/}
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{' '}
                and I'd love to work with you 👨🏾‍💻.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              {userData.socialLinks.map((data, idx) => (
                <SocialLink {...data} key={idx} />
              ))}
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

            <h1
              id="tech-stack"
              className="bg-black text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50"
            >
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              {userData.tech.map((data, idx) => (
                <Tech {...data} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
