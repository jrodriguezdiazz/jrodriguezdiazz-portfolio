import React from "react";
import Link from "next/link";
import CustomButton from "@components/commons/CustomButton";

export default function FavoriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-black my-20 md:my-0 dark:text-white">
            Favorite Projects
          </h1>
          <Link href="/pages/projects">
            <p>
              <CustomButton text={"View all"} />
            </p>
          </Link>
        </div>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40">
          {/* Single card */}
          <Link
            href="https://tailwindmasterkit.com"
            className="w-full block col-span-3 shadow-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden">
              <img
                src="/tmk.jpg"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
                Tailwind Master Kit
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </Link>
          {/* Single card */}
          <Link
            href="https://placeholdertech.in"
            className="w-full block col-span-3  sm:col-span-2 shadow-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/placeholdertech.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
                PlaceholderTech
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                02
              </h1>
            </div>
          </Link>
          {/* Single card */}
          <Link
            href="https://manuarora.in"
            className="w-full block col-span-3 sm:col-span-1  object-cover"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/portfolio.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
                Portfolio
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                03
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
