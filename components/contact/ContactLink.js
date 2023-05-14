import Link from "next/link";

export default function ContactLink({ href, name, svgPath }) {
  return (
    <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4 mt-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-envelope-fill h-4 w-4 text-blue-500"
        viewBox="0 0 16 16"
      >
        <path d={svgPath} />
      </svg>
      <p className="text-gray-50 font-light text-sm">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
      </p>
    </div>
  );
}
