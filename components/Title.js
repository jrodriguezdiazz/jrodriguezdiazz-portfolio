export default function Title({ title }) {
  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800">
      <h1 id={title.toLowerCase()} className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        {title}
      </h1>
    </div>
  );
}
