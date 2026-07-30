import SectionLabel from "./SectionLabel.jsx";

const steps = [
  ["01", "用户研究", "从真实场景、用户行为和限制条件中定义问题。"],
  ["02", "产品策略", "将洞察转化为产品结构、品牌定位与体验路径。"],
  ["03", "视觉系统", "建立可识别、可延展、可落地的视觉语言。"],
  ["04", "原型验证", "通过界面、原型与测试不断验证设计方向。"],
];

export default function DesignProcess() {
  return (
    <section className="archive-section design-process home-ritual-process">
      <div className="container">
        <div className="home-ritual-process__header">
          <SectionLabel number="03" label="设计方法">
            Design Approach
          </SectionLabel>
          <h2 className="section-heading js-section-title">
            从研究出发，
            <br />
            建立可见的设计系统。
          </h2>
          <p className="section-intro">
            像参考站把产品分成不同口味一样，我把作品集里的设计过程拆成四个可判断、可展示、可复用的环节。
          </p>
        </div>

        <div className="home-ritual-process__stage" aria-hidden="true">
          <img src="/images/miiro/system.webp" alt="" />
        </div>

        <div className="process-list">
          {steps.map(([num, title, copy]) => (
            <article key={title} className="process-item">
              <span className="mono">{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
