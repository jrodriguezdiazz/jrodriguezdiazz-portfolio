import Link from "next/link";

export default function NavbarItemMobile({ href, name }) {
  return (
    <Link href={href}>
      <p className="text-base font-normal text-gray-600 dark:text-gray-300">
        {name}
      </p>
    </Link>
  );
}
