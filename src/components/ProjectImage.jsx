import SmartImage from "./SmartImage.jsx";

export default function ProjectImage({ src, title }) {
  return <SmartImage className="project-image" src={src} alt={`${title} project image`} label={title} />;
}
