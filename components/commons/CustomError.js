import Link from "next/link";

export default function CustomError({ svgPath, title, description }) {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <section className="py-8 px-4 text-center">
          <div className="max-w-auto mx-auto">
            <div className="md:max-w-lg mx-auto">
              <svg
                className="fill-current text-gray-300"
                viewBox="0 0 445 202"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={svgPath} fillRule="nonzero" />
              </svg>
            </div>
            <h2 className="mt-8 uppercase text-xl lg:text-5xl font-black dark:text-white">
              {title}
            </h2>
            <p className="mt-6 uppercase text-sm lg:text-base text-gray-900 dark:text-white">
              {description}
            </p>
            <Link
              href="/"
              className="mt-6 bg-gray-500 hover:bg-gray-700 transition duration-2000 text-white font-light py-4 px-6 rounded-full inline-block uppercase shadow-md"
            >
              Back To Homepage
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
