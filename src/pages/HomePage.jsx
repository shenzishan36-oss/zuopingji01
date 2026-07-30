import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";

const stats = [
  ["03", "核心项目"],
  ["2年", "商业项目经验"],
  ["AI", "设计转型方向"],
];

const strengths = [
  ["用户洞察", "来自商业一线经验，理解真实用户、消费行为、沟通场景和品牌价值。"],
  ["AI 产品设计", "把用户研究、AI 辅助分析、概念发展和原型体验连接成完整流程。"],
  ["UX/UI 原型", "用 Figma 组织界面结构、关键路径、信息层级和可演示产品方案。"],
  ["AIGC 设计", "用 AI 图像与提示词工作流扩展品牌视觉、场景表达和概念验证。"],
];

const tags = ["User Insight", "AI Workflow", "UX Prototype", "Brand System"];

const homeProjectImages = {
  miiro: "/images/home/miiro-card.jpg",
  jiye: "/images/home/jiye-card.jpg",
  kuro: "/images/home/kuro-card.jpg",
};

export default function HomePage() {
  return (
    <div className="basic-home">
      <section className="basic-hero" aria-label="首页">
        <div className="basic-home__container basic-hero__inner">
          <p className="basic-hero__side-note">
            AI PRODUCT
            <br />
            DESIGNER
            <br />
            PORTFOLIO
          </p>
          <p className="basic-hero__year">
            OPEN TO
            <br />
            PRODUCT DESIGN
            <br />
            2026
          </p>
          <div className="basic-hero__content">
            <p>AI Product Designer / AIGC Designer / UX UI</p>
            <div className="basic-hero__video" aria-label="SHEN 作品集动态标识视频">
              <video autoPlay loop muted playsInline preload="metadata">
                <source src="/videos/home/portfolio-logo-animation.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="basic-hero__panel">
              <p className="basic-hero__statement">
                探索 AI × 用户体验 × 品牌系统，通过设计解决真实生活问题。
              </p>
              <div className="basic-hero__tags" aria-label="能力标签">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="basic-hero__actions">
                <a href="#projects">查看项目</a>
                <a href="mailto:1812731718@qq.com">联系我</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="basic-section basic-profile" id="profile">
        <div className="basic-home__container basic-profile__grid">
          <div className="basic-profile__portrait" aria-label="个人形象占位">
            <img src="/images/profile/shen-profile.jpg" alt="沈梓钐个人照片" loading="lazy" decoding="async" />
          </div>
          <div className="basic-profile__copy">
            <p className="basic-label">About / Positioning</p>
            <h2>从商业经验到产品设计</h2>
            <p>
              探索 AI × 用户体验 × 品牌设计，通过设计解决真实生活问题。
              我拥有艺术设计背景和 2 年商业项目经验，擅长结合用户研究、AI 工具和视觉设计，
              打造具有商业价值的数字产品体验。
            </p>
            <div className="basic-profile__contact">
              <span className="hover-card hover-card--qr">
                <button className="button-link" type="button">微信</button>
                <span className="hover-card__panel" role="presentation">
                  <img src="/images/contact/wechat-qr.jpg" alt="微信二维码" loading="lazy" decoding="async" />
                </span>
              </span>
              <span>AI 产品设计 / UX UI / Product Design / AIGC Workflow</span>
            </div>
            <div className="basic-stats">
              {stats.map(([value, label]) => (
                <article key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="basic-section basic-projects" id="projects">
        <div className="basic-home__container">
          <div className="basic-section__head">
            <p className="basic-label">Selected Work</p>
            <h2>以产品故事呈现的精选项目</h2>
          </div>
          <div className="basic-projects__grid basic-projects__grid--stable">
            {projects.map((project) => (
              <Link className="basic-project-card" key={project.slug} to={`/work/${project.slug}`}>
                <img
                  src={homeProjectImages[project.slug] || project.coverImage}
                  alt={`${project.title} 项目封面`}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <span>{project.projectNumber} / {project.year}</span>
                  <h3>{project.title}</h3>
                  <p>{project.chineseTitle}</p>
                  <small>{project.role}</small>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="basic-section basic-strengths" id="strengths">
        <div className="basic-home__container">
          <div className="basic-section__head">
            <p className="basic-label">Capability</p>
            <h2>个人优势</h2>
          </div>
          <div className="basic-strengths__grid">
            {strengths.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="basic-contact" id="contact">
        <div className="basic-home__container">
          <p className="basic-label">Contact</p>
            <h2>
              期待与你讨论
              <br />
              AI 产品设计机会。
          </h2>
          <div className="basic-contact__actions">
            <span>微信 szs20030515</span>
            <Link to="/work">查看全部作品</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
