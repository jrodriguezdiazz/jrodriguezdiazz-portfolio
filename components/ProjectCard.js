import DetailProject from "@components/DetailProject";
import ProjectImage from "@components/ProjectImage";

export default function ProjectCard(props) {
  const { description, imgUrl, link, number, repo, stack, title, isPrivate } =
    props;

  const isOdd = number % 2 !== 0;
  const projectImageComponent = (
    <ProjectImage
      link={link}
      imgUrl={imgUrl}
      description={description}
      title={title}
      number={number}
    />
  );
  const detailProjectImageComponent = (
    <DetailProject
      title={title}
      description={description}
      link={link}
      repo={repo}
      stack={stack}
      isPrivate={isPrivate}
    />
  );
  const [firstComponent, secondComponent] = isOdd
    ? [projectImageComponent, detailProjectImageComponent]
    : [detailProjectImageComponent, projectImageComponent];
  return (
    <div className="w-full block shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      {firstComponent}
      {secondComponent}
    </div>
  );
}
