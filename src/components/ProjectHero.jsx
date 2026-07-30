import SmartImage from "./SmartImage.jsx";

export default function ProjectHero({ project }) {
  return (
    <section className="project-hero">
      <div className="container">
        <div className="project-hero__meta mono">
          <span>{project.projectNumber}</span>
          <span>{project.year}</span>
          <span>{project.categories.join(" / ")}</span>
        </div>
        <h1>{project.title}</h1>
        <p>{project.chineseTitle}</p>
        <SmartImage src={project.coverImage} alt={`${project.title} cover`} label={project.title} />
      </div>
    </section>
  );
}
