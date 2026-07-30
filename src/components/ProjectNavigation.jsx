import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function ProjectNavigation({ currentSlug }) {
  const index = projects.findIndex((project) => project.slug === currentSlug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <nav className="project-nav container" aria-label="项目导航">
      <Link className="text-link" to={`/work/${prev.slug}`}>
        ← {prev.title}
      </Link>
      <Link className="text-link" to="/work">
        全部作品
      </Link>
      <Link className="text-link" to={`/work/${next.slug}`}>
        {next.title} →
      </Link>
    </nav>
  );
}
