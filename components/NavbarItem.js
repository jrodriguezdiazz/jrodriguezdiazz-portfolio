import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavbarItem({ name, href }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <p
        className={`text-base ${
          router.asPath === href
            ? 'text-gray-800 font-bold dark:text-white'
            : 'text-gray-600 dark:text-gray-300 font-normal'
        }`}
      >
        {name}
        {router.asPath === href && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down inline-block h-3 w-3"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
        )}
      </p>
    </Link>
  );
}
