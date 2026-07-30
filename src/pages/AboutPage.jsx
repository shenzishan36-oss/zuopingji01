const transitions = [
  ["过去", "B2B 商业沟通与门店运营经验", "长期接触真实用户，理解需求表达、购买决策、服务体验和商业转化。"],
  ["转化", "从商业观察到产品判断", "把销售场景中的用户反馈、消费行为和品牌价值，转译为产品设计中的问题定义。"],
  ["现在", "AI 产品设计与 UX/UI", "通过 AI 工具、UX 方法和视觉设计，将商业洞察转化为可演示的数字产品体验。"],
];

export default function AboutPage() {
  return (
    <section className="profile-page">
      <div className="profile-page__container">
        <header className="profile-page__hero">
          <p>About Me</p>
          <h1>
            从商业经验
            <br />
            到产品设计
          </h1>
          <div>
            <span>AI Product Designer</span>
            <span>UX/UI Designer</span>
            <span>AIGC Designer</span>
          </div>
        </header>

        <section className="profile-page__statement">
          <p>
            我不是从纯视觉出发理解设计，而是从真实商业场景、用户沟通和消费决策中理解问题。
            过去的商业工作让我长期接触真实用户，理解用户需求、消费行为和产品价值。
          </p>
          <p>
            现在我通过 AI 工具、UX 方法和视觉设计，将这些商业洞察转化为产品体验：
            从用户研究、AI 洞察、概念发展、视觉探索，到可演示的原型和产品方案。
          </p>
        </section>

        <section className="profile-page__timeline" aria-label="转型路径">
          {transitions.map(([label, title, text]) => (
            <article key={label}>
              <span>{label}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
