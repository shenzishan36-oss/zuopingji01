import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import SectionLabel from "./SectionLabel.jsx";
import SmartImage from "./SmartImage.jsx";

const projectCopy = {
  miiro: {
    title: "MIIRO",
    label: "AI 选砂体验",
    line: "从小空间养猫问题出发，把产品结构、用户路径和电商表达整理成一套可验证的体验方案。",
    ability: "Product UX / AI Flow / E-commerce",
  },
  jiye: {
    title: "JIYE 霁野",
    label: "东方植物气泡茶",
    line: "用 AIGC 商业视觉和包装系统，把东方植物感翻译成年轻、清透、可购买的饮品品牌。",
    ability: "Brand Strategy / Packaging / AIGC",
  },
  kuro: {
    title: "KURO",
    label: "个人 IP 系统",
    line: "建立角色识别、动作表情、生成规则和周边应用，让 AI 角色从单张图变成可延展系统。",
    ability: "IP System / Prompt Rules / Motion",
  },
};

const projectPreviewImages = {
  miiro: "/images/miiro/miiro-logo-wide.jpg",
  jiye: "/images/jiye/jiye-logo-square.jpg",
  kuro: "/images/kuro/kuro-logo-wide.jpg",
};

export default function ProjectShowcase() {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug || "miiro");
  const activeProject = useMemo(
    () => projects.find((project) => project.slug === activeSlug) || projects[0],
    [activeSlug],
  );
  const copy = projectCopy[activeProject.slug] || {
    title: activeProject.title,
    label: activeProject.chineseTitle,
    line: activeProject.summary,
    ability: activeProject.categories.join(" / "),
  };

  return (
    <section className="archive-section project-showcase home-project-stage">
      <div className="container">
        <SectionLabel number="02" label="精选项目">
          Selected Projects
        </SectionLabel>

        <div className="home-project-stage__header">
          <h2 className="section-heading js-section-title">
            三个项目，
            <br />
            证明我如何从视觉
            <br />
            走向产品体验。
          </h2>
          <p className="section-intro">
            参考 Don Molinico 的产品切换节奏，但把内容换成作品集逻辑：先看项目主题，再看我负责的设计能力。
          </p>
        </div>

        <div className="home-project-viewer">
          <div className="home-project-viewer__media">
            <SmartImage
              className={`home-project-viewer__image home-project-viewer__image--${activeProject.slug}`}
              src={projectPreviewImages[activeProject.slug] || activeProject.coverImage}
              alt={`${copy.title} 项目封面`}
              label={copy.title}
            />
            <div className="home-project-viewer__badge">
              <span>{activeProject.projectNumber}</span>
              <strong>{activeProject.year}</strong>
            </div>
          </div>

          <div className="home-project-viewer__copy">
            <span>{copy.ability}</span>
            <h3>{copy.title}</h3>
            <p className="home-project-viewer__label">{copy.label}</p>
            <p>{copy.line}</p>
            <Link className="button-link" to={`/work/${activeProject.slug}`}>
              进入案例
            </Link>
          </div>
        </div>

        <div className="home-project-tabs" aria-label="项目切换">
          {projects.map((project) => {
            const item = projectCopy[project.slug] || project;
            return (
              <button
                key={project.slug}
                className={project.slug === activeSlug ? "is-active" : ""}
                type="button"
                onClick={() => setActiveSlug(project.slug)}
              >
                <span>{item.title}</span>
                <small>{item.label}</small>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
