import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarItem({ name, href }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`text-base ${
        router.asPath === href
          ? "text-gray-800 font-bold dark:text-white"
          : "text-gray-600 dark:text-gray-300 font-normal"
      }`}
    >
      {name}
    </Link>
  );
}
