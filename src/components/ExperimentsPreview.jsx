import { Link } from "react-router-dom";
import { experiments } from "../data/projects.js";
import SectionLabel from "./SectionLabel.jsx";
import SmartImage from "./SmartImage.jsx";

const previewImages = [
  "/images/jiye/20-jiye-three-can-botanical-hero.png",
  "/images/jiye/22-jiye-brand-positioning-board.png",
  "/images/kuro/31-kuro-mobile-ui-assets.png",
];

export default function ExperimentsPreview() {
  return (
    <section className="archive-section experiments-preview home-lab-strip">
      <div className="container">
        <SectionLabel number="05" label="实验与笔记">
          Experiments Preview
        </SectionLabel>
        <div className="section-row">
          <h2 className="section-heading js-section-title">
            AIGC 实验、
            <br />
            设计笔记与代码原型。
          </h2>
          <Link className="text-link" to="/experiments">
            查看实验 →
          </Link>
        </div>
        <div className="experiment-grid">
          {experiments.map((item, index) => (
            <article key={item.title}>
              <SmartImage
                src={previewImages[index] || item.image}
                alt={item.title}
                label={item.title}
              />
              <p className="mono">{item.label}</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
        <div className="home-lab-strip__marquee" aria-hidden="true">
          <span>AIGC VISUAL STUDIES</span>
          <span>FIGMA COMPONENT NOTES</span>
          <span>VIBE CODING INTERFACES</span>
        </div>
      </div>
    </section>
  );
}
