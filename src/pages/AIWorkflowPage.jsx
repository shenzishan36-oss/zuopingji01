const workflow = [
  {
    title: "User Research",
    titleCn: "用户研究",
    text: "从用户场景、市场反馈与真实需求中发现问题，建立设计方向。",
    keywords: ["User Scenario", "Market Research", "Pain Point"],
  },
  {
    title: "AI Insight",
    titleCn: "AI洞察",
    text: "使用 AI 辅助整理信息、提炼用户洞察，并探索潜在设计机会。",
    keywords: ["Information Analysis", "AI Assisted Research", "Opportunity Discovery"],
  },
  {
    title: "Concept Development",
    titleCn: "概念发展",
    text: "将研究结果转化为产品定位、设计策略与体验方向。",
    keywords: ["Strategy", "Product Positioning", "Experience Direction"],
  },
  {
    title: "Visual Exploration",
    titleCn: "视觉探索",
    text: "利用 AIGC 快速探索视觉方向，并建立可执行的设计语言。",
    keywords: ["AIGC Generation", "Visual Direction", "Design System"],
  },
  {
    title: "Prototype",
    titleCn: "原型设计",
    text: "在 Figma 中构建界面流程、交互原型与产品体验。",
    keywords: ["Figma", "UI Design", "Interaction"],
  },
  {
    title: "Product Experience",
    titleCn: "产品体验",
    text: "将品牌视觉、数字体验与商业场景结合，形成完整设计方案。",
    keywords: ["Brand System", "Digital Product", "Final Experience"],
  },
];

export default function AIWorkflowPage() {
  return (
    <section className="workflow-page">
      <div className="workflow-page__container">
        <header className="workflow-page__hero">
          <p>AI WORKFLOW</p>
          <h1>AI辅助设计流程</h1>
          <strong>From Insight to Experience</strong>
          <span>
            从用户洞察，到概念策略，再到视觉与产品体验，
            我使用 AI 加速设计探索，同时保持设计判断。
          </span>
        </header>

        <div className="workflow-page__flow">
          {workflow.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{item.title}</h2>
                <h3>{item.titleCn}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.keywords.map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <footer className="workflow-page__closing">
          <p>
            用AI拓展可能，
            <br />
            用设计保持判断。
          </p>
          <span>AI 是工具，判断来自设计师。</span>
        </footer>
      </div>
    </section>
  );
}
