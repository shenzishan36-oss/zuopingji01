import { Link } from "react-router-dom";
import SectionLabel from "./SectionLabel.jsx";

export default function AboutPreview() {
  return (
    <section className="archive-section about-preview home-origin-band">
      <div className="container home-origin-band__grid">
        <div>
          <SectionLabel number="06" label="关于我">
            About Preview
          </SectionLabel>
          <h2 className="section-heading js-section-title">
            从空间设计，
            <br />
            走向产品与系统。
          </h2>
        </div>
        <div className="about-copy">
          <p>
            我从室内设计背景出发，正在转向 AI 产品设计。空间专业让我关注真实使用场景、动线与细节秩序，现在我把这些能力延伸到用户研究、界面结构、视觉系统与 AI 工作流之中。
          </p>
          <Link className="text-link" to="/about">
            关于我 →
          </Link>
        </div>
        <figure className="home-origin-band__image">
          <img src="/images/jiye/22-jiye-brand-positioning-board.png" alt="JIYE 品牌定位板" />
        </figure>
      </div>
    </section>
  );
}
