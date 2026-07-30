import ProjectNavigation from "../components/ProjectNavigation.jsx";
import SmartImage from "../components/SmartImage.jsx";

const image = (name) => `/images/miiro/${name}`;

const facts = [
  ["角色", "产品设计师 / UX 设计师 / AI 体验设计师"],
  ["工具", "Figma 原型设计 / ChatGPT 方案推演 / Codex 前端搭建 / AI 图像生成"],
  ["类型", "AI 产品设计 / UX UI / 品牌系统 / 包装设计"],
  ["重点", "面向小空间养猫生活的猫砂决策系统"],
];

const brandStory = [
  "在城市生活空间不断缩小的今天，越来越多年轻人选择与猫咪共同生活。然而，小空间养猫带来的气味、清洁、选择困难等问题，也逐渐成为人与猫共同生活中的隐形压力。MIIRO 诞生于对这一生活场景的观察，希望通过智能化的方式重新理解人与猫之间的关系。",
  "不同于传统猫砂品牌只关注产品性能，MIIRO 关注的是用户真实的生活环境。通过 AI 诊断用户空间条件、猫咪状态以及使用习惯，帮助用户找到更适合自己的猫砂解决方案，让猫砂选择从经验判断变成科学决策。",
  "MIIRO 相信，好的宠物产品不仅解决功能问题，也应该改善人与宠物共同生活的体验。通过 AI 服务、产品系统与持续改善计划，MIIRO 希望建立一种更加轻松、科学且温柔的人猫共居方式。",
];

const brandPositioning = [
  [
    "产品定位",
    "AI驱动的小空间猫砂决策系统",
    "MIIRO 不只是提供单一猫砂产品，而是通过 AI 环境分析、个性化推荐以及产品组合策略，为用户提供完整的小空间养猫解决方案。",
  ],
  [
    "人群定位",
    "城市年轻养猫用户",
    "面向22-35岁的城市养猫人群，尤其关注租房、合租、小户型生活环境的用户。他们重视生活品质，希望通过更科学、更简单的方式解决养猫过程中的实际问题。",
  ],
  [
    "形象定位",
    "理性科技 × 温柔陪伴",
    "MIIRO 将智能科技融入日常养猫体验，以简洁、安静、可靠的品牌形象，成为用户身边值得信赖的猫咪生活顾问。",
  ],
];

const brandDifferentiation = [
  [
    "①",
    "AI驱动的决策体验",
    "不再让用户依靠复杂的信息搜索选择猫砂，而是通过 AI 分析空间环境、猫咪状态与使用需求，提供可解释的推荐方案。",
  ],
  [
    "②",
    "小空间场景化设计",
    "MIIRO 聚焦真实城市居住环境，将猫砂产品与用户空间条件结合，针对租房、合租、小户型等特殊场景提供解决方案。",
  ],
  [
    "③",
    "产品与服务闭环",
    "从猫砂产品、包装结构到7天改善计划，MIIRO 建立完整体验体系，让用户购买的不只是产品，而是一套更好的养猫方式。",
  ],
];

const reviewResearch = [
  ["气味问题", "每天铲还是有味道，小房间真的很明显。", "小空间空气流通差，异味容易累积。"],
  ["空间限制", "猫砂盆只能放卫生间，没有地方通风。", "居住环境影响猫砂体验。"],
  ["清理负担", "下班回来真的不想再处理猫砂。", "用户需要更低维护成本。"],
  ["混砂试错", "买了好多种猫砂，不知道哪个适合。", "用户缺少选择依据。"],
  ["粉尘问题", "倒猫砂的时候灰特别大。", "产品使用过程影响体验。"],
  ["居住关系", "室友说房间有味道，很尴尬。", "猫砂问题影响社交关系。"],
];

const painPoints = [
  ["01", "气味干扰", "Odor Problem", "小空间环境导致味道停留。"],
  ["02", "选择困难", "Choice Anxiety", "用户面对大量猫砂类型缺少判断依据。"],
  ["03", "清理压力", "Cleaning Burden", "日常维护消耗时间和精力。"],
  ["04", "空间限制", "Small Space", "租房环境无法自由调整猫砂位置。"],
  ["05", "搬运负担", "Heavy Package", "大包装猫砂增加购买和使用压力。"],
];

const journeySteps = [
  ["发现问题", "房间最近有味道。", "困扰"],
  ["搜索方案", "什么猫砂除臭最好？", "信息过载"],
  ["购买尝试", "买不同品牌。", "不确定"],
  ["使用反馈", "发现还是不适合。", "失望"],
  ["MIIRO介入", "AI分析空间、猫咪与使用习惯。", "得到个性化方案"],
];

const engine = [
  {
    title: "输入",
    zh: "输入层",
    items: ["居住环境", "猫咪情况", "用户问题"],
  },
  {
    title: "推理层",
    zh: "推理层",
    items: ["问题分析", "原因识别", "产品匹配"],
  },
  {
    title: "输出",
    zh: "输出层",
    items: ["个性化方案", "7 天优化计划"],
  },
];

const diagnosisSteps = [
  ["01", "空间环境", "识别居住面积、猫砂摆放位置、通风、湿度和是否合租。"],
  ["02", "猫咪情况", "记录猫咪数量、年龄、如厕习惯、敏感程度和当前猫砂组合。"],
  ["03", "问题解释", "AI 解释问题产生原因，而不是直接给出单一推荐。"],
  ["04", "方案生成", "输出产品组合、使用比例、改善目标和观察周期。"],
];

const uiScreens = [
  ["首页", "01-home.png"],
  ["AI 诊断", "02-ai-diagnosis.png"],
  ["AI 分析", "03-ai-analysis.png"],
  ["诊断结果", "04-diagnosis-result.png"],
  ["改善方案", "05-solution-plan.png"],
  ["7 天计划", "06-seven-day-plan.png"],
];

const sevenDays = [
  ["第 1 天", "调整猫砂组合", "建立新的使用比例"],
  ["第 3 天", "观察气味变化", "记录通风、湿度与残留情况"],
  ["第 7 天", "完成环境优化", "复盘清理负担和环境改善结果"],
];

const products = [
  ["MIIRO Air", "日常气味管理", "适合通风差与气味残留明显的小空间。", "product-air.png"],
  ["MIIRO Clump", "增强结团效率", "作为铺底或组合使用的辅助产品。", "product-clump.png"],
  ["MIIRO Light", "轻量低尘", "适合搬运负担和粉尘敏感场景。", "product-light.png"],
];

const ecommerceImages = [
  ["01", "品牌首图", "ecommerce-01-daily-hero.png"],
  ["02", "气味管理", "ecommerce-02-odor-control.png"],
  ["03", "成分说明", "ecommerce-03-no-additives.png"],
  ["04", "场景选择", "ecommerce-04-scenario-selection.png"],
  ["05", "配方展示", "ecommerce-05-chicken-recipe.png"],
  ["06", "清洁系统", "ecommerce-06-clean-system.png"],
  ["07", "包装细节", "ecommerce-07-package-detail.png"],
  ["08", "7 天计划", "ecommerce-08-seven-day-plan.png"],
  ["09", "数据证明", "ecommerce-09-odor-reduction.png"],
  ["10", "收尾转化", "ecommerce-10-daily-closing.png"],
];

function MiiroSection({ id, number, eyebrow, title, en, children, tone = "paper" }) {
  const titleLevel = ["03", "06", "07", "08", "09", "10", "11", "12", "13"].includes(number)
    ? "b"
    : "a";

  return (
    <section id={id} className={`miiro-section miiro-section--${tone} miiro-section--title-${titleLevel}`}>
      <div className="container miiro-section__grid">
        <aside className="miiro-section__aside">
          <span>{number}</span>
          <small>{eyebrow}</small>
        </aside>
        <div className="miiro-section__content">
          <p className="miiro-eyebrow">{en}</p>
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function BrandVisualMark() {
  return (
    <div className="miiro-brand-visual" aria-label="预留品牌故事图片位置" />
  );
}

function BrandStrategyPage() {
  return (
    <section className="miiro-brand-page" id="brand-story" aria-label="MIIRO Brand Strategy">
      <div className="container">
        <section className="miiro-brand-story">
          <div>
            <h2>品牌故事</h2>
            <p>BRAND STORY</p>
            <BrandVisualMark />
          </div>
          <ol>
            {brandStory.map((paragraph, index) => (
              <li key={paragraph}>
                <span>{index + 1}</span>
                <p>{paragraph}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="miiro-brand-positioning">
          <div className="miiro-brand-heading">
            <h2>品牌定位</h2>
            <p>BRAND POSITIONING</p>
          </div>
          <div className="miiro-positioning-list">
            {brandPositioning.map(([label, title, text]) => (
              <article key={label}>
                <div>
                  <span aria-hidden="true" />
                  <h3>{label}</h3>
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="miiro-overall-brand">
          <h2>品牌整体定位</h2>
          <p>OVERALL BRAND</p>
          <strong>MIIRO</strong>
          <div>
            <p>MIIRO 是一个面向城市年轻养猫用户的 AI 宠物生活品牌。</p>
            <p>通过智能诊断系统与产品解决方案，帮助用户理解自身空间需求，找到更适合人与猫共同生活的方式。</p>
            <p>品牌结合人工智能、用户体验设计与宠物生活美学，将传统猫砂产品升级为更加科学、轻松、个性化的生活服务体验。</p>
          </div>
        </section>

        <section className="miiro-differentiation">
          <div className="miiro-brand-heading">
            <h2>品牌差异点</h2>
            <p>DIFFERENTIATION</p>
          </div>
          <div className="miiro-difference-chain">
            {brandDifferentiation.map(([number, title, text], index) => (
              <article key={title}>
                <div>
                  <small>{number}</small>
                  <h3>{title}</h3>
                </div>
                <p>{text}</p>
                {index < brandDifferentiation.length - 1 ? <span aria-hidden="true">×</span> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="miiro-brand-statement">
          <div className="miiro-brand-heading">
            <h2>品牌主张</h2>
            <p>BRAND STATEMENT</p>
          </div>
          <div>
            <h3>
              <span>让每一次选择，</span>
              <span>都更适合你的生活。</span>
            </h3>
            <p className="miiro-brand-statement__en">Find the right balance between cats and spaces.</p>
            <p>MIIRO 通过 AI 理解用户空间，用更科学的方法帮助人与猫建立舒适、平衡的共同生活关系。</p>
          </div>
        </section>
      </div>
    </section>
  );
}

function PersonaSketch() {
  return (
    <SmartImage
      className="miiro-persona-sketch miiro-persona-sketch--image"
      src={image("persona-linxia.jpg")}
      alt="MIIRO 用户画像生活场景"
      label="Persona"
    />
  );
}

function UserResearchPage() {
  return (
    <section className="miiro-user-research" id="user-research" aria-label="MIIRO User Research">
      <div className="container">
        <header className="miiro-research-title">
          <h2>用户研究</h2>
          <p>USER RESEARCH</p>
        </header>

        <section className="miiro-research-background">
          <div className="miiro-research-heading">
            <h3>研究背景</h3>
            <p>RESEARCH BACKGROUND</p>
          </div>
          <p>
            随着城市居住空间不断缩小，越来越多年轻用户开始在有限空间内养猫；传统猫砂产品更多关注吸水、结团、除臭等功能，却忽略了居住环境、使用习惯和猫咪状态差异；MIIRO 希望通过用户研究探索小空间养猫用户的真实痛点，并建立更个性化的猫砂解决方案。
          </p>
        </section>

        <section className="miiro-review-research">
          <div className="miiro-research-heading">
            <h3>用户评论研究</h3>
            <p>USER REVIEW RESEARCH</p>
          </div>
          <div className="miiro-review-grid">
            {reviewResearch.map(([label, quote, insight]) => (
              <article key={label}>
                <strong>“</strong>
                <h4>{quote}</h4>
                <p><span>洞察：</span>{insight}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="miiro-pain-summary">
          <div className="miiro-research-heading">
            <h3>用户痛点总结</h3>
            <p>USER PAIN POINTS</p>
          </div>
          <div className="miiro-pain-list">
            {painPoints.map(([number, title, en, text]) => (
              <article key={title}>
                <div><span>{number}</span></div>
                <h4>{title}</h4>
                <p>{en}</p>
                <small>{text}</small>
              </article>
            ))}
          </div>
          <p className="miiro-pain-summary__note">这些痛点相互交织，共同揭示了小空间养猫生活的复杂性与多重挑战。</p>
        </section>

        <section className="miiro-persona">
          <div className="miiro-research-heading">
            <h3>用户画像</h3>
            <p>PERSONA</p>
          </div>
          <article className="miiro-persona-card">
            <PersonaSketch />
            <div>
              <h4>林夏</h4>
              <dl>
                <div><dt>年龄</dt><dd>27岁</dd></div>
                <div><dt>职业</dt><dd>互联网内容运营</dd></div>
                <div><dt>城市</dt><dd>上海</dd></div>
                <div><dt>居住</dt><dd>合租小户型</dd></div>
                <div><dt>养猫</dt><dd>1只成年猫</dd></div>
              </dl>
              <p>早上赶着上班，晚上回家后最在意房间气味、清洁负担，以及是否影响室友。希望猫咪舒服、空间干净、选择更省心。</p>
            </div>
          </article>
        </section>

        <section className="miiro-user-journey">
          <div className="miiro-research-heading">
            <h3>用户旅程 / 关键洞察</h3>
            <p>USER JOURNEY</p>
          </div>
          <div className="miiro-journey-line">
            {journeySteps.map(([title, action, emotion], index) => (
              <article key={title}>
                <div><span>{index + 1}</span></div>
                <h4>{title}</h4>
                <p>{action}</p>
                <small>{emotion}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="miiro-key-insight">
          <div className="miiro-research-heading">
            <h3>核心洞察</h3>
            <p>KEY INSIGHT</p>
          </div>
          <div>
            <h3>用户需要的不是“更好的猫砂”，而是“更适合自己生活环境的解决方案”。</h3>
            <p>传统模式：产品 → 用户　/　MIIRO 模式：用户环境 → AI分析 → 产品方案。</p>
          </div>
        </section>
      </div>
    </section>
  );
}

function CompetitiveAnalysisPage() {
  return (
    <section className="miiro-competitive-page" id="competitive-analysis" aria-label="MIIRO Competitive Analysis">
      <SmartImage
        className="miiro-competitive-image"
        src={image("competitive-analysis.png")}
        alt="MIIRO 竞品分析页面"
        label="Competitive Analysis"
      />
    </section>
  );
}

function ColorSystemPage() {
  return (
    <section className="miiro-competitive-page" id="color-system" aria-label="MIIRO Color System">
      <SmartImage
        className="miiro-competitive-image"
        src={image("color-system.png")}
        alt="MIIRO 颜色规范页面"
        label="Color System"
      />
    </section>
  );
}

function HomeScreenBreakdownPage() {
  return (
    <section className="miiro-competitive-page" id="home-screen-breakdown" aria-label="MIIRO Home Screen Breakdown">
      <SmartImage
        className="miiro-competitive-image"
        src={image("home-screen-breakdown.png")}
        alt="MIIRO Home 界面解析页面"
        label="Home Screen Breakdown"
      />
    </section>
  );
}

function KeyUiFlowPage() {
  return (
    <section className="miiro-competitive-page" id="key-ui-flow" aria-label="MIIRO Key UI Flow">
      <SmartImage
        className="miiro-competitive-image"
        src={image("key-ui-flow.png")}
        alt="MIIRO 核心界面流程页面"
        label="Key UI Flow"
      />
    </section>
  );
}

function PackageClumpDetailPage() {
  return (
    <section className="miiro-competitive-page" id="package-clump-detail" aria-label="MIIRO Clump Package Detail">
      <SmartImage
        className="miiro-competitive-image"
        src={image("package-clump-detail.png")}
        alt="MIIRO Clump 包装正反面展示"
        label="Package Detail"
      />
    </section>
  );
}

function PackageFlatPlanPage() {
  return (
    <section className="miiro-competitive-page" id="package-flat-plan" aria-label="MIIRO Packaging Flat Plan">
      <SmartImage
        className="miiro-competitive-image"
        src={image("package-flat-plan.png")}
        alt="MIIRO packaging flat plan"
        label="Packaging Flat Plan"
      />
    </section>
  );
}

function PackageAirOdorControlPage() {
  return (
    <section className="miiro-competitive-page" id="package-air-odor-control" aria-label="MIIRO Air Daily Odor Control Cat Litter">
      <SmartImage
        className="miiro-competitive-image"
        src={image("package-air-odor-control.png")}
        alt="MIIRO Air daily odor control cat litter"
        label="AIR Daily Odor Control"
      />
    </section>
  );
}

function ProductMixVisual() {
  return (
    <PhoneScreen name="改善方案" src="05-solution-plan.png" featured />
  );
}

function PhoneScreen({ name, src, featured = false }) {
  return (
    <article className={`miiro-phone-card${featured ? " miiro-phone-card--featured" : ""}`}>
      <SmartImage
        className="miiro-phone-card__media"
        src={image(src)}
        alt={`MIIRO ${name}界面`}
        label={name}
      />
      <p>{name}</p>
    </article>
  );
}

function PackageVisual({ name, index, src }) {
  return (
    <article className={`miiro-package miiro-package--${index}`}>
      <SmartImage
        className="miiro-package__media"
        src={image(src)}
        alt={`MIIRO ${name} 猫砂包装正面`}
        label={name}
      />
    </article>
  );
}

function EcommerceModule({ number, title, src }) {
  return (
    <article className="miiro-ecommerce-card">
      <SmartImage
        className="miiro-ecommerce-card__image"
        src={image(src)}
        alt={`MIIRO 电商详情页模块：${title}`}
        label={title}
      />
      <p>
        <span>{number}</span>
        {title}
      </p>
    </article>
  );
}

export default function MiiroProjectPage({ project }) {
  return (
    <article className="miiro-page miiro-project">
      <section className="miiro-hero">
        <div className="miiro-hero__bg" aria-hidden="true" />
        <div className="container miiro-hero__grid">
          <div className="miiro-hero__copy">
            <p className="miiro-kicker">AI 产品设计案例研究</p>
            <h1>MIIRO</h1>
            <p className="miiro-hero__claim">
              <span>面向小空间养猫</span>
              <span>生活的</span>
              <span>AI 猫砂决策系统</span>
            </p>
            <p className="miiro-hero__intro">
              面向城市年轻养猫用户，找到更适合自己的猫砂解决方案。
              <span>通过可解释的 AI 诊断，帮助用户理解问题原因并选择合适方案。</span>
            </p>
            <dl className="miiro-facts">
              {facts.map(([term, detail]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <BrandStrategyPage />

      <UserResearchPage />

      <CompetitiveAnalysisPage />

      <ColorSystemPage />

      <HomeScreenBreakdownPage />

      <KeyUiFlowPage />

      <PackageClumpDetailPage />

      <PackageFlatPlanPage />

      <PackageAirOdorControlPage />

      <MiiroSection
        id="product"
        number="10"
        eyebrow="Product System"
        en="Digital experience connects physical products."
        title="AI 推荐连接数字体验、实体产品与日常习惯。"
        tone="mist"
      >
        <div className="miiro-products">
          {products.map(([name, position, text, src], index) => (
            <article key={name}>
              <PackageVisual name={name.replace("MIIRO ", "")} index={index + 1} src={src} />
              <h3>{name}</h3>
              <strong>{position}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </MiiroSection>

      <MiiroSection
        id="packaging"
        number="11"
        eyebrow="Packaging Design"
        en="Minimal, clean, small-space friendly."
        title="包装系统延续干净、轻量和小空间友好的品牌感。"
      >
        <div className="miiro-packaging-grid">
          {[
            ["Air", "product-air.png"],
            ["Clump", "product-clump.png"],
            ["Light", "product-light.png"],
          ].map(([name, src], index) => (
            <PackageVisual key={name} name={name} index={index + 1} src={src} />
          ))}
        </div>
      </MiiroSection>

      <MiiroSection
        id="ecommerce"
        number="12"
        eyebrow="E-commerce Visual System"
        en="Brand information translated into product-detail modules."
        title="将包装、成分、场景和 AI 改善逻辑延展为电商详情页视觉。"
        tone="blue"
      >
        <div className="miiro-ecommerce-grid">
          {ecommerceImages.map(([number, title, src]) => (
            <EcommerceModule key={src} number={number} title={title} src={src} />
          ))}
        </div>
      </MiiroSection>

      <MiiroSection
        id="reflection"
        number="13"
        eyebrow="Reflection"
        en="From experience-based choice to scientific decision."
        title="通过 AI 诊断，将用户购买猫砂从经验选择转变为科学决策。"
      >
        <div className="miiro-reflection-grid">
          <article>
            <span>01 What I Learned</span>
            <p>AI 产品不能只输出推荐，还要解释原因。</p>
          </article>
          <article>
            <span>02 Design Value</span>
            <p>数字体验需要连接实体产品与日常行为。</p>
          </article>
          <article>
            <span>03 Next Step</span>
            <p>继续完善真实 App 界面、包装原型与可用性验证。</p>
          </article>
        </div>
      </MiiroSection>

      <div className="container">
        <ProjectNavigation currentSlug={project.slug} />
      </div>
    </article>
  );
}
