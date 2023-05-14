import Link from 'next/link';

export default function DetailsExperience({ detailName, href, name }) {
  return (
    <p className="text-gray-500 dark:text-gray-300">
      <span className="font-semibold">{detailName}: </span>
      <span className="italic">
        <Link target="_blank" rel="noopener noreferrer" href={href}>
          {name}
        </Link>
      </span>
    </p>
  );
}
