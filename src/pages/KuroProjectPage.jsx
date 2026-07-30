import ProjectNavigation from "../components/ProjectNavigation.jsx";
import SmartImage from "../components/SmartImage.jsx";

const image = (name) => `/images/kuro/${name}`;
const video = (name) => `/videos/kuro/${name}`;

const overviewFacts = [
  ["项目名称", "KURO 个人 IP 视觉系统探索项目"],
  ["项目属性", "个人作品集项目"],
  ["项目类型", "个人 IP 设计 / 视觉探索 / AI 工作流 / 动态叙事"],
  ["我的角色", "IP 角色设定、视觉系统梳理、AI 提示词设计、场景与周边概念延展"],
  ["使用工具", "ChatGPT / Codex / 即梦 / AI 图像生成工具 / 图像后期整理工具"],
  ["关键词", "IP 设计、个人 IP、视觉系统、3D 毛绒质感、概念设计、故事板"],
];

const identityRules = [
  "黑色短绒身体",
  "单侧折耳方向固定",
  "琥珀金大眼与小虎牙",
  "奶油色领巾",
  "铁锈红咖啡师围裙",
  "粗短问号形尾巴",
];

const workflowSteps = [
  {
    title: "角色设定",
    text: "先锁定 KURO 的身份、性格、比例、材质和不可变元素，让 AI 生成有明确边界。",
  },
  {
    title: "关键词拆解",
    text: "把小黑猫、咖啡助手、短绒材质、折耳、围裙和问号尾巴拆成可复用的提示词模块。",
  },
  {
    title: "多轮出图",
    text: "围绕同一组识别规则生成不同角度、表情、动作和应用语境，保留一致性更高的结果。",
  },
  {
    title: "一致性筛选",
    text: "重点检查耳朵方向、尾巴弧度、服装颜色、头身比例和眼睛质感，删除跑偏画面。",
  },
  {
    title: "系统归档",
    text: "把稳定结果整理成角色档案、视觉规范、表情动作、延展概念和故事板资料。",
  },
];

const storyboardFrames = [
  "清晨开店",
  "偷吃咖啡豆",
  "闯祸打翻",
  "追赶杯子",
  "努力补救",
  "重新出杯",
  "完成任务",
  "疲惫收尾",
  "角色记忆点",
];

const kuroPersonality = ["好奇", "调皮", "傲娇", "倔强", "温暖"];

const constructionDetails = [
  ["FOLDED EAR", "折耳特征"],
  ["AMBER EYES", "琥珀色眼睛"],
  ["CREAM SCARF", "奶油色领巾"],
  ["QUESTION TAIL", "问号尾巴"],
  ["RED APRON", "咖啡围裙"],
];

const expressionMoods = [
  { key: "curious", label: "CURIOUS", text: "观察新事物" },
  { key: "playful", label: "PLAYFUL", text: "偷偷捣蛋" },
  { key: "proud", label: "PROUD", text: "完成任务后的得意" },
  { key: "shy", label: "SHY", text: "被夸奖后的害羞" },
  { key: "warm", label: "WARM", text: "分享咖啡时的温柔" },
];

const coffeeScenes = [
  ["01", "MORNING COFFEE", "清晨营业", "06:30 AM", "KURO 开始一天的准备工作。"],
  ["02", "BUSY BARISTA", "忙碌时刻", "10:00 AM", "KURO 参与咖啡店日常运营。"],
  ["03", "NIGHT SHIFT", "深夜守店", "22:00 PM", "KURO 守护结束营业后的咖啡店。"],
];

const brandTouchpoints = [
  "咖啡杯系统",
  "杯套设计",
  "纸袋包装",
  "菜单设计",
  "门店招牌",
  "会员卡",
  "桌牌",
  "贴纸系统",
];

const merchTiers = [
  ["01", "Plush Figure", "毛绒公仔"],
  ["02", "Vinyl Toy", "搪胶玩具"],
  ["03", "Pins", "徽章"],
  ["04", "Sticker Set", "贴纸"],
  ["05", "Keychain", "钥匙扣"],
  ["06", "Coffee Mug", "咖啡杯"],
  ["07", "Canvas Bag", "帆布袋"],
  ["08", "Notebook", "笔记本"],
  ["09", "Phone Case", "手机壳"],
  ["10", "Thermo Cup", "保温杯"],
];

const digitalItems = [
  "社交头像",
  "表情包",
  "手机壁纸",
  "GIF 动画",
  "会员图标",
  "节日贺卡",
  "APP 启动页",
  "社交媒体内容",
];

const finalKeywords = [
  ["Character Design", "角色设计"],
  ["Brand Extension", "品牌延展"],
  ["3D Illustration", "三维视觉"],
  ["Merchandise", "周边开发"],
  ["Digital Content", "数字内容"],
];

function KuroSection({
  number,
  label,
  title,
  children,
  tone = "light",
  className = "",
}) {
  return (
    <section className={`kuro-section kuro-section--${tone} ${className}`}>
      <div className="container">
        <div className="kuro-section__grid">
          <div className="kuro-section__label">
            <span>{number}</span>
            <small>{label}</small>
          </div>
          <div>
            <h2>{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function KuroImage({ src, alt, label, className = "", caption }) {
  return (
    <figure className={`kuro-figure ${className}`}>
      <SmartImage className="kuro-media" src={src} alt={alt} label={label} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function KuroVideo({ src, title, caption }) {
  return (
    <figure className="kuro-video-frame">
      <video controls preload="metadata" playsInline>
        <source src={src} type="video/mp4" />
        你的浏览器暂不支持视频播放。
      </video>
      <figcaption>
        <span>{title}</span>
        {caption}
      </figcaption>
    </figure>
  );
}

export default function KuroProjectPage({ project }) {
  return (
    <article className="kuro-page">
      <section className="kuro-plate kuro-cover" aria-label="01 Cover">
        <div className="kuro-plate__grid">
          <div className="kuro-cover__topbar">
            <div>
              <strong>KURO</strong>
              <span>咖啡品牌 IP 系统</span>
            </div>
            <div>
              <strong>角色设计</strong>
              <span>2026</span>
            </div>
          </div>
          <figure className="kuro-cover__visual kuro-cover__video-frame" aria-label="KURO 项目封面动态主视觉">
            <video
              src="/videos/kuro-cover-motion.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </figure>
          <div className="kuro-cover__footer">
            <div>
              <p>咖啡品牌 IP 视觉系统</p>
              <span>角色设计 / 品牌延展 / 三维视觉 / 周边开发</span>
            </div>
            <div>
              <p>个人 IP 创作项目</p>
              <span>2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="kuro-plate kuro-meet" aria-label="02 Meet KURO">
        <div className="kuro-plate__grid">
          <div className="kuro-plate__label">
            <span>02</span>
            <small>MEET KURO</small>
          </div>
          <KuroImage
            className="kuro-meet__visual"
            src={image("04-kuro-character-profile.webp")}
            alt="KURO 角色档案视觉"
            label="KURO"
          />
          <div className="kuro-meet__copy">
            <p className="kuro-eyebrow">Character Poster</p>
            <h2>认识 KURO</h2>
            <p className="kuro-meet__body">
              以“小黑猫咖啡助手”为核心设定，KURO 是一个围绕咖啡店日常展开的品牌角色。
              <br />
              <br />
              它有一点调皮，有一点倔强，也有一点小傲娇，但在关键时刻总会认真守护每一杯咖啡。
              <br />
              <br />
              这一页作为角色形象的首次亮相，重点建立 KURO 的气质与记忆点，为后续的表情、动作、场景与品牌延展做视觉铺垫。
            </p>
            <div className="kuro-meet__rule" aria-hidden="true" />
            <div className="kuro-keywords kuro-meet__keywords" aria-label="KURO 性格关键词">
              {kuroPersonality.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="kuro-plate kuro-construction" aria-label="03 Character Construction">
        <div className="kuro-plate__grid">
          <div className="kuro-plate__label">
            <span>03</span>
            <small>CHARACTER CONSTRUCTION</small>
          </div>
          <div className="kuro-construction__headline">
            <h2>角色结构</h2>
            <p>
              KURO 通过独特的外形比例与视觉符号，建立具有识别度的角色语言。
              <br />
              <br />
              从折耳、琥珀色眼睛，到奶油色领巾与问号尾巴，每一个细节共同构成 KURO 的角色记忆点。
            </p>
          </div>
          <KuroImage
            className="kuro-construction__main"
            src={image("06-kuro-five-view.webp")}
            alt="KURO 五视图展示页"
            label="Five View"
          />
          <div className="kuro-detail-list">
            {constructionDetails.map(([label, text]) => (
              <div key={label}>
                <span>{label}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kuro-plate kuro-expression-system" aria-label="04 Expression System">
        <div className="kuro-plate__grid">
          <div className="kuro-plate__label">
            <span>04</span>
            <small>EXPRESSION SYSTEM</small>
          </div>
          <div className="kuro-expression-system__copy">
            <h2>表情系统</h2>
            <p>
              KURO 的表情系统围绕“好奇、调皮与温暖”展开。
              <br />
              <br />
              通过眼睛、耳朵、嘴角和身体姿态的细微变化，建立具有识别度的角色情绪语言。
            </p>
          </div>
          <div className="kuro-expression-stage" aria-label="KURO 表情集合">
            {expressionMoods.map((mood) => (
              <figure className={`kuro-emotion kuro-emotion--${mood.key}`} key={mood.key}>
                <div className="kuro-emotion__crop">
                  <img src={image("08-kuro-emotions-transparent.png")} alt={`${mood.label} KURO 表情`} />
                </div>
                <figcaption>
                  <span>{mood.label}</span>
                  {mood.text}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="kuro-plate kuro-motion-personality" aria-label="05 Motion & Personality">
        <div className="kuro-plate__grid">
          <div className="kuro-plate__label">
            <span>05</span>
            <small>MOTION &amp; PERSONALITY</small>
          </div>
          <div className="kuro-motion-personality__copy">
            <h2>动作与性格</h2>
            <p>
              KURO 的动作系统围绕角色性格展开。
              <br />
              <br />
              每一个姿态都对应一种情绪表达，
              <br />
              让角色从静态形象延伸为
              <br />
              具有行为逻辑的品牌 IP。
            </p>
          </div>
          <div className="kuro-motion-stage" aria-label="KURO 动作系统">
            <figure className="kuro-motion-main kuro-motion-main--action">
              <img src={image("09-kuro-action-system.webp")} alt="KURO 动作系统展示" />
              <figcaption>
                <span>Action Library</span>
                动作系统
              </figcaption>
            </figure>
            <figure className="kuro-motion-main kuro-motion-main--expression">
              <img src={image("07-kuro-expression-system.webp")} alt="KURO 表情系统展示" />
              <figcaption>
                <span>Expression System</span>
                表情系统
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="kuro-plate kuro-coffee-world" aria-label="06 Coffee World">
        <div className="kuro-plate__grid">
          <div className="kuro-plate__label">
            <span>06</span>
            <small>COFFEE WORLD</small>
          </div>
          <div className="kuro-system-copy kuro-coffee-world__copy">
            <h2>咖啡世界</h2>
            <p>
              KURO 的故事发生在一家温暖的小型咖啡店。
              <br />
              <br />
              从清晨营业到夜晚打烊，咖啡、空间与角色共同构成属于 KURO 的日常世界。
            </p>
          </div>
          <div className="kuro-world-board">
            <figure className="kuro-world-main">
              <img src={image("33-kuro-cafe-storefront.png")} alt="KURO 咖啡店夜晚外立面主视觉" />
              <figcaption>
                <span>03</span>
                <strong>NIGHT SHIFT</strong>
                <small>22:00 PM</small>
              </figcaption>
            </figure>
            <div className="kuro-world-notes" aria-label="KURO 咖啡世界场景说明">
              {coffeeScenes.map(([no, title, label, time, text]) => (
                <article key={title}>
                  <span>{no}</span>
                  <div>
                    <strong>{title}</strong>
                    <small>{label} / {time}</small>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="kuro-plate kuro-brand-extension" aria-label="07 Brand Extension">
        <div className="kuro-plate__grid">
          <div className="kuro-plate__label">
            <span>07</span>
            <small>BRAND EXTENSION</small>
          </div>
          <div className="kuro-system-copy kuro-brand-extension__copy">
            <h2>品牌延展</h2>
            <p>
              围绕 KURO 的角色特征，建立统一的咖啡品牌视觉系统。
              <br />
              <br />
              从空间、包装到日常触点，让角色融入品牌体验。
            </p>
          </div>
          <div className="kuro-brand-board">
            <figure className="kuro-brand-board__showcase">
              <img src={image("26-kuro-final-showcase.webp")} alt="KURO 周边延展最终展示" />
            </figure>
            <figure className="kuro-brand-board__packaging">
              <img src={image("19-kuro-packaging-system.webp")} alt="KURO 咖啡包装与基础延展系统" />
            </figure>
          </div>
        </div>
      </section>

      <section className="kuro-plate kuro-merch-system" aria-label="08 Merchandise System">
        <div className="kuro-plate__grid">
          <figure className="kuro-merch-feature">
            <img src={image("05-kuro-feature-description.webp")} alt="KURO 角色特征说明" />
          </figure>
        </div>
      </section>

      <section className="kuro-plate kuro-storyboard-page" aria-label="09 Storyboard">
        <div className="kuro-plate__grid">
          <div className="kuro-plate__label">
            <span>09</span>
            <small>STORYBOARD</small>
          </div>
          <figure className="kuro-storyboard-page__image">
            <img src={image("16-kuro-storyboard.webp")} alt="KURO 咖啡日常故事板" />
          </figure>
        </div>
      </section>

      <section className="kuro-plate kuro-storyboard-motion-page" aria-label="10 Story Motion">
        <div className="kuro-plate__grid">
          <div className="kuro-plate__label">
            <span>10</span>
            <small>STORY MOTION</small>
          </div>
          <figure className="kuro-storyboard-motion-page__frame" aria-label="KURO 故事动态视频">
            <video
              src="/videos/kuro-storyboard-motion-page.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </figure>
        </div>
      </section>

      <section className="kuro-plate kuro-digital-content" aria-label="11 Digital Content">
        <div className="kuro-plate__grid">
          <figure className="kuro-digital-sticker-sheet">
            <img src={image("21-kuro-sticker-sheet.webp")} alt="KURO sticker club 贴纸系统" />
          </figure>
          <figure className="kuro-digital-sticker-video" aria-label="KURO 数字贴纸动态展示">
            <video
              src="/videos/kuro-digital-sticker-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </figure>
        </div>
      </section>

      <section className="kuro-plate kuro-night-video-page" aria-label="10 Night Motion Video">
        <div className="kuro-plate__grid">
          <div className="kuro-plate__label">
            <span>12</span>
            <small>NIGHT MOTION</small>
          </div>
          <figure className="kuro-night-video-page__frame" aria-label="KURO 夜间场景动态展示">
            <video
              src="/videos/kuro-night-video-page.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </figure>
        </div>
      </section>

      <section className="kuro-plate kuro-final-showcase-system" aria-label="13 Final Showcase">
        <div className="kuro-plate__grid">
          <figure className="kuro-final-thank-you">
            <img src={image("40-kuro-thank-you.png")} alt="KURO Coffee thank you 最终展示页" />
          </figure>
        </div>
      </section>

      <div className="container">
        <ProjectNavigation currentSlug={project.slug} />
      </div>
    </article>
  );
}
