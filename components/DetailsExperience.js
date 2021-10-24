export default function DetailsExperience({ href, name }) {
  return (
    <div className="text-gray-500">
      <a target="_blank" rel="noopener noreferrer" href={href}>
        <i>{name}</i>
      </a>
    </div>
  );
}
