export default function Title({ title }) {
  return (
    <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
      <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        {title}
      </h1>
    </div>
  );
}
