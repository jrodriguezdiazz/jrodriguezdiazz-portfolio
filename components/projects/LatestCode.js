import { useState } from "react";
import userData from "@constants/data";
import GithubRepoCard from "@components/projects/GithubRepoCard";
import CustomButton from "@components/commons/CustomButton";
import Link from "next/link";

export default function LatestCode() {
  const [repos] = useState([]);

  return (
    <section className="bg-[#F1F1F1] dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-black my-20 dark:text-white">
            Latest Code
          </h1>
          <Link
            href={`https://github.com/${userData.githubUsername}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton text={"View all"} />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, id) => (
            <GithubRepoCard latestRepo={latestRepo} key={id} />
          ))}
      </div>
    </section>
  );
}
