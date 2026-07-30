export default function ProjectOverview({ project }) {
  return (
    <section className="archive-section project-overview">
      <div className="container overview-grid">
        <div>
          <p className="mono">project.overview</p>
          <h2>{project.summary}</h2>
        </div>
        <dl>
          <div>
            <dt>我的职责</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>项目周期</dt>
            <dd>{project.duration}</dd>
          </div>
          <div>
            <dt>使用工具</dt>
            <dd>{project.tools.join(" / ")}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
