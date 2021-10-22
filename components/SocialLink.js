export default function SocialLink({ link, name }) {
  return (
    <div className="flex flex-row justify-start items-center">
      <a href={link} className="flex flex-row items-center space-x-4 group">
        <div className="my-4">&rarr;</div>
        <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
          <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300" />
          {name}
        </p>
      </a>
    </div>
  );
}
