import { Link } from "react-router-dom";
import SmartImage from "./SmartImage.jsx";

const projectCardImages = {
  miiro: "/images/miiro/miiro-logo-wide.jpg",
  jiye: "/images/jiye/jiye-logo-square.jpg",
  kuro: "/images/kuro/kuro-logo-wide.jpg",
};

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? "project-card--featured" : ""}`}>
      <Link
        to={`/work/${project.slug}`}
        className="project-media-link"
        aria-label={`查看 ${project.title} 项目`}
      >
        <SmartImage
          className={`project-card__image project-card__image--${project.slug}`}
          src={projectCardImages[project.slug] || project.coverImage}
          alt={`${project.title} 项目封面`}
          label={project.title}
        />
      </Link>
      <div className="project-card__body">
        <div className="project-card__meta mono">
          <span>{project.projectNumber}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-card__zh">{project.chineseTitle}</p>
        <p className="project-card__cats">{project.categories.join(" / ")}</p>
        <Link className="text-link" to={`/work/${project.slug}`}>
          查看项目 →
        </Link>
      </div>
    </article>
  );
}
