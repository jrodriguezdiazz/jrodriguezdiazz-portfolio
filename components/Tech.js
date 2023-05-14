import Link from "next/link";

export default function Tech({ href, src, alt }) {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <img src={src} alt={alt} className="h-20 w-20 mx-4 my-4" />
    </Link>
  );
}
