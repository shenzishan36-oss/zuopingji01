import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function WorkPage() {
  return (
    <section className="page-shell">
      <div className="container">
        <h1 className="page-title">作品档案</h1>
        <p className="section-intro">
          核心项目覆盖 AI 产品设计、用户研究、品牌策略、包装设计、IP 设计与 AIGC 商业视觉。
        </p>
        <div className="project-list page-project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
