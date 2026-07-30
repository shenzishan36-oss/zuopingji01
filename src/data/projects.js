export const projects = [
  {
    slug: "miiro",
    projectNumber: "01",
    title: "MIIRO",
    chineseTitle: "小空间养猫用砂系统设计",
    year: "2026",
    categories: ["产品设计", "用户研究", "品牌系统"],
    summary:
      "面向小户型养猫人群的用砂系统设计，从空间限制、清洁路径与日常维护出发，建立产品结构、使用流程与品牌表达。",
    role: "产品研究 / 体验流程 / 视觉系统",
    duration: "8 周",
    tools: ["Figma", "Midjourney", "Rhino", "KeyShot"],
    coverImage: "/images/miiro/cover.webp",
    gallery: [
      "/images/miiro/research.webp",
      "/images/miiro/system.webp",
      "/images/miiro/prototype.webp",
    ],
    challenge:
      "小空间家庭需要更低占地、更易清洁、更能融入家居环境的猫砂解决方案。",
    insight:
      "用户真正焦虑的不是单次清理，而是异味、动线、收纳和视觉暴露在日常空间中持续叠加。",
    strategy:
      "将猫砂盆视为一个空间系统，围绕入口、过滤、储砂、清洁和视觉遮挡建立模块化体验。",
    outcome:
      "形成产品结构、使用路径、品牌关键词和展示视觉，适合作为 AI 产品设计与 UX 研究方向案例。",
    reflection:
      "这个项目帮助我从造型设计转向系统设计，重点不只是物体，而是人、空间和维护行为之间的关系。",
  },
  {
    slug: "jiye",
    projectNumber: "02",
    title: "JIYE 霁野",
    chineseTitle: "东方植物气泡茶品牌设计",
    year: "2026",
    categories: ["品牌策略", "包装设计", "AIGC"],
    summary:
      "以东方植物、轻养生和气泡口感为核心的饮品品牌，从品牌定位、包装系统到 AIGC 商业视觉完成统一表达。",
    role: "品牌策略 / 包装设计 / AIGC 视觉",
    duration: "6 周",
    tools: ["Figma", "Photoshop", "Midjourney", "Illustrator"],
    coverImage: "/images/jiye/20-jiye-three-can-botanical-hero.png",
    gallery: [
      "/images/jiye/22-jiye-brand-positioning-board.png",
      "/images/jiye/16-jiye-primary-logo.png",
      "/images/jiye/10-jiye-botanical-rain-moodboard.png",
      "/images/jiye/09-jiye-color-system-board.png",
      "/images/jiye/05-jiye-six-flavor-can-lineup-scene.png",
      "/images/jiye/07-jiye-open-giftbox-six-can-set.png",
      "/images/jiye/23-jiye-750ml-glass-bottle-qingyu-wanfeng.png",
    ],
    flavors: ["青雨", "白露", "晚风", "薄雾", "山醒", "月汐"],
    challenge:
      "在气泡饮竞争中建立既有东方植物气质、又不显沉重的品牌识别。",
    insight:
      "年轻用户期待低负担饮品，但视觉上更接受清透、自然、轻仪式感的表达。",
    strategy:
      "用植物档案、留白包装和柔和色彩建立品牌秩序，并用 AIGC 扩展场景视觉。",
    outcome:
      "完成品牌语气、包装系统、主视觉方向和多场景商业图像。",
    reflection:
      "这个项目训练了我将文化意象转译为当代消费品牌系统的能力。",
  },
  {
    slug: "kuro",
    projectNumber: "03",
    title: "KURO",
    chineseTitle: "个人 IP 视觉系统探索项目",
    year: "2026",
    categories: ["IP 设计", "视觉探索", "AI 工作流", "动态叙事"],
    summary:
      "以小黑猫咖啡助手为核心的个人 IP 概念设计，从角色设定、视觉规范、AI 生成一致性到周边与故事板延展，建立可复用的视觉系统。",
    role: "IP 角色设定 / 视觉系统梳理 / AI 提示词设计",
    duration: "5 周",
    tools: ["ChatGPT", "Codex", "即梦", "AI 图像生成工具"],
    coverImage: "/images/kuro/01-kuro-cover.webp",
    gallery: [
      "/images/kuro/04-kuro-character-profile.webp",
      "/images/kuro/05-kuro-feature-description.webp",
      "/images/kuro/16-kuro-storyboard.webp",
    ],
    challenge:
      "AIGC 可以快速生成角色图，但更难的是让角色在多轮生成、多种角度和不同载体中保持稳定。",
    insight:
      "个人 IP 的价值不只是角色可爱，而是能否建立固定识别元素、动作逻辑和可复用的视觉延展规则。",
    strategy:
      "围绕折耳、尾巴、围裙、眼睛和毛绒材质建立限制条件，再扩展到表情动作、包装概念、周边概念和故事板。",
    outcome:
      "形成角色档案、五视图、视觉规范、AI 工作流、表情动作系统、周边概念和动态故事板的完整展示链路。",
    reflection:
      "这个项目让我理解 IP 设计不能只停留在好看角色上，关键是建立可持续复用的视觉规则。",
  },
];


export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const experiments = [
  {
    title: "AIGC 商业视觉实验",
    label: "AIGC Visual Studies",
    image: "/images/experiments/aigc-visual.webp",
  },
  {
    title: "Figma 组件与设计系统笔记",
    label: "Figma Component Notes",
    image: "/images/experiments/figma-system.webp",
  },
  {
    title: "Vibe Coding 界面原型",
    label: "Vibe Coding Interfaces",
    image: "/images/experiments/vibe-coding.webp",
  },
];
