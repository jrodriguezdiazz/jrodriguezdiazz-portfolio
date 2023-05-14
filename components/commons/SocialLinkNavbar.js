import Link from "next/link";

export default function SocialLinkNavbar({ href, svgPath }) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="text-base font-normal text-gray-600 dark:text-gray-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-instagram h-5 w-5"
        viewBox="0 0 16 16"
      >
        <path d={svgPath} />
      </svg>
    </Link>
  );
}
