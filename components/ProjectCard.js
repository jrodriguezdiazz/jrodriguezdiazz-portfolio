export default function ProjectCard({ title, link, imgUrl, number }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="w-full block shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? '0' + number : number}
        </h1>
      </div>
    </a>
  );
}
