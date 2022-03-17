import Link from 'next/link';

const Item = ({ link, text }) => (
  <p className="mt-3 text-base font-semibold text-gray-700 dark:text-gray-200">
    {text}:{' '}
    <Link href={link}>
      <a
        target="_blank"
        rel="noreferrer"
        className="text-base light font-normal italic"
      >
        {link}
      </a>
    </Link>
  </p>
);

export default function DetailProject({
  title,
  description,
  link,
  repo,
  stack,
}) {
  const listFormat = new Intl.ListFormat('en-GB', {
    style: 'long',
    type: 'conjunction',
  });
  return (
    <div className="ml-10 mt-5 hidden sm:block">
      <h1 className="text-5xl font-bold text-gray-700 dark:text-gray-200">
        {title}
      </h1>
      <p className="text-base text-justify light text-gray-700 dark:text-gray-200 mr-10 mt-5">
        {description}
      </p>
      <Item link={link} text="WebSite" />
      <Item link={repo} text="Repo" />
      <p className="text-base font-semibold text-gray-700 dark:text-gray-200 mr-10 mt-5">
        Stack:{' '}
        <span className="text-base light font-normal italic">
          {listFormat.format(stack.sort())}{' '}
        </span>
      </p>
    </div>
  );
}
