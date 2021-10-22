import userData from '@constants/data';
import Title from '@components/Title';
import ExperienceCard from '@components/ExperienceCard';

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <Title title={'Experience'} />
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <div key={idx}>
              <ExperienceCard {...exp} />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping" />
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
