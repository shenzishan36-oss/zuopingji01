const highlights = ["用户分析", "产品方案", "项目管理", "视觉设计", "AI 辅助设计流程"];

export default function ResumePage() {
  return (
    <section className="resume-page">
      <div className="resume-page__container">
        <header className="resume-page__hero">
          <p>Resume</p>
          <h1>
            沈梓钐
            <span>AI Product Designer</span>
          </h1>
        </header>

        <section className="resume-page__path">
          <article>
            <span>01</span>
            <h2>艺术设计专业</h2>
            <p>建立视觉审美、空间理解、版式组织和设计表达基础。</p>
          </article>
          <article>
            <span>02</span>
            <h2>商业项目经验</h2>
            <p>在真实业务中理解用户需求、沟通成本、购买决策和品牌价值。</p>
          </article>
          <article>
            <span>03</span>
            <h2>AI 设计转型</h2>
            <p>将 AI 工具、UX 方法、Figma 原型和视觉系统整合为产品设计能力。</p>
          </article>
        </section>

        <section className="resume-page__highlights">
          <h2>重点能力</h2>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
