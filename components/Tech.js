export default function Tech({ href, src, alt }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={src} alt={alt} className="h-20 w-20 mx-4 my-4" />
    </a>
  );
}
