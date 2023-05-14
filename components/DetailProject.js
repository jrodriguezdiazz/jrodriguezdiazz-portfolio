import Link from "next/link";
import { listFormat } from "@lib/utils";

const Item = ({ link, text, children }) => (
  <p className="mt-3 text-base font-semibold text-gray-700 dark:text-gray-200">
    {text}:{" "}
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-base light font-normal italic"
    >
      {link} {children}
    </Link>
  </p>
);

export default function DetailProject(props) {
  const { title, description, link, repo, stack, isPrivate } = props;
  return (
    <div className="ml-10 mt-5 hidden sm:block">
      <h1 className="text-5xl font-bold text-gray-700 dark:text-gray-200">
        {title}
      </h1>
      <p className="text-base text-justify light text-gray-700 dark:text-gray-200 mr-10 mt-5">
        {description}
      </p>
      <Item link={link} text="WebSite" />
      <Item link={repo} text="Repo">
        {isPrivate && "(This project is private)"}
      </Item>
      <p className="text-base font-semibold text-gray-700 dark:text-gray-200 mr-10 mt-5">
        Stack:{" "}
        <span className="text-base light font-normal italic">
          {listFormat.format(stack.sort())}{" "}
        </span>
      </p>
    </div>
  );
}
