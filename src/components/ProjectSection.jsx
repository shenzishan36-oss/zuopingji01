export default function ProjectSection({ eyebrow, title, children }) {
  return (
    <section className="project-section">
      <div className="container project-section__grid">
        <p className="mono">{eyebrow}</p>
        <div>
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </section>
  );
}
