import Link from 'next/link';

export default function SocialLink({ href, name }) {
  return (
    <div className="flex flex-row justify-start items-center">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="flex flex-row items-center space-x-4 group"
      >
        <div className="my-4">&rarr;</div>
        <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
          <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300" />
          {name}
        </p>
      </Link>
    </div>
  );
}
