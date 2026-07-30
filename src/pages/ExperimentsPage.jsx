import { experiments } from "../data/projects.js";
import SmartImage from "../components/SmartImage.jsx";

export default function ExperimentsPage() {
  return (
    <section className="page-shell">
      <div className="container">
        <p className="mono">experiments.index</p>
        <h1 className="page-title">实验记录</h1>
        <p className="section-intro">
          AIGC 商业视觉、Figma 组件练习与 Vibe Coding 前端原型会集中放在这里。
        </p>
        <div className="experiment-grid page-experiment-grid">
          {experiments.map((item) => (
            <article key={item.title}>
              <SmartImage src={item.image} alt={item.title} label={item.title} />
              <p className="mono">{item.label}</p>
              <h2>{item.title}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
