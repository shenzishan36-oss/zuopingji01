import { Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects.js";
import ProjectHero from "../components/ProjectHero.jsx";
import ProjectOverview from "../components/ProjectOverview.jsx";
import ProjectSection from "../components/ProjectSection.jsx";
import ProjectImageGrid from "../components/ProjectImageGrid.jsx";
import ProjectNavigation from "../components/ProjectNavigation.jsx";
import KuroProjectPage from "./KuroProjectPage.jsx";
import MiiroProjectPage from "./MiiroProjectPage.jsx";
import JiyeProjectPage from "./JiyeProjectPage.jsx";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/work" replace />;

  if (project.slug === "miiro") {
    return <MiiroProjectPage project={project} />;
  }

  if (project.slug === "jiye") {
    return <JiyeProjectPage project={project} />;
  }

  if (project.slug === "kuro") {
    return <KuroProjectPage project={project} />;
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectSection eyebrow="Challenge" title="问题与限制">
        {project.challenge}
      </ProjectSection>
      <ProjectSection eyebrow="Insight" title="关键洞察">
        {project.insight}
      </ProjectSection>
      <ProjectImageGrid project={project} />
      <ProjectSection eyebrow="Strategy" title="设计策略">
        {project.strategy}
      </ProjectSection>
      <ProjectSection eyebrow="Outcome" title="设计结果">
        {project.outcome}
      </ProjectSection>
      <ProjectSection eyebrow="Reflection" title="项目复盘">
        {project.reflection}
      </ProjectSection>
      <ProjectNavigation currentSlug={project.slug} />
    </>
  );
}
