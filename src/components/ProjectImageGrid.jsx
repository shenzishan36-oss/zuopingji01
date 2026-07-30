import ProjectImage from "./ProjectImage.jsx";

export default function ProjectImageGrid({ project }) {
  return (
    <section className="archive-section">
      <div className="container project-image-grid">
        {project.gallery.map((src, index) => (
          <ProjectImage key={src} src={src} title={`${project.title} ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
