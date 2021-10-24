export default function Title({ title }) {
  const id = `${title.toLowerCase().replace(' ', '_')}`;
  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800">
      <h1
        id={id}
        className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left"
      >
        <a href={`#${id}`}>{title}</a>
      </h1>
    </div>
  );
}
