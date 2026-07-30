import ProjectNavigation from "../components/ProjectNavigation.jsx";

const jiyePages = Array.from({ length: 18 }, (_, index) => {
  const pageNumber = index + 1;

  return {
    number: pageNumber,
    src: `/images/jiye/sequence/${pageNumber}.png`,
    mobileSrc: `/images/jiye/sequence-mobile/${pageNumber}.webp`,
  };
});

const projectFacts = [
  ["项目类型", "品牌策略 / 包装设计 / AIGC 商业视觉"],
  ["我的角色", "品牌定位、包装视觉系统、AI 场景图生成与版面整合"],
  ["工具方法", "Figma / Photoshop / Illustrator / AI 图像生成"],
  ["核心产出", "品牌叙事、系列包装、情绪化商业图像、作品集长图"],
];

export default function JiyeProjectPage({ project }) {
  return (
    <article className="jiye-case-page jiye-sequence-page" aria-label="JIYE project case study">
      <section className="jiye-brief" aria-labelledby="jiye-brief-title">
        <div className="jiye-brief__eyebrow">CASE STUDY / 2026</div>
        <div className="jiye-brief__grid">
          <div className="jiye-brief__heading">
            <p>东方植物气泡茶品牌与包装设计</p>
            <h1 id="jiye-brief-title">
              <span className="jiye-brief__title-en">JIYE</span>
              <span className="jiye-brief__title-cn">霁野</span>
            </h1>
          </div>

          <div className="jiye-brief__summary">
            <p>
              霁野是一个以东方植物、自然天气与轻养生饮品体验为核心的品牌设计项目。我在项目中完成从品牌定位、
              包装系统到 AIGC 商业视觉的统一表达，让品牌从“好看的包装”进一步形成可被理解、可被延展的情绪化视觉系统。
            </p>
          </div>
        </div>

        <dl className="jiye-brief__facts">
          {projectFacts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="jiye-sequence">
        {jiyePages.map((page) => (
          <figure className="jiye-sequence__item" key={page.number}>
            <picture>
              <source media="(max-width: 768px)" srcSet={page.mobileSrc} type="image/webp" />
              <img
                src={page.src}
                alt={`JIYE project page ${page.number}`}
                loading={page.number <= 2 ? "eager" : "lazy"}
                decoding="async"
              />
            </picture>
          </figure>
        ))}
      </div>

      <ProjectNavigation currentSlug={project.slug} />
    </article>
  );
}
