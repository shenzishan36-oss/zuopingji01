import SectionLabel from "./SectionLabel.jsx";
import CapabilityTicker from "./CapabilityTicker.jsx";

const groups = [
  ["产品设计", "AI 产品设计 / 信息架构 / 交互原型"],
  ["用户研究", "用户访谈 / 场景洞察 / 问题定义"],
  ["视觉设计", "品牌系统 / 包装设计 / 商业视觉"],
  ["AI 工作流", "AIGC 生成 / Figma 系统 / Vibe Coding"],
];

export default function CapabilityIndex() {
  return (
    <section className="archive-section dark-section capability-index home-capability-brand">
      <CapabilityTicker />
      <div className="container">
        <div className="home-capability-brand__intro">
          <SectionLabel number="04" label="能力索引">
            Capability Index
          </SectionLabel>
          <h2 className="section-heading js-section-title">
            能力不是工具清单，
            <br />
            而是一套设计系统。
          </h2>
        </div>
        <div className="capability-grid">
          {groups.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
