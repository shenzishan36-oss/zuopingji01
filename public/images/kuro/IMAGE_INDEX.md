# KURO Image Index

用途：记录 `public/images/kuro/` 中 KURO 项目图片的语义命名、尺寸比例和推荐使用位置，避免后续网站排版时误用随机文件名或错误比例。

## 命名规则

- 使用两位序号开头，保持页面叙事顺序：`01-`、`02-`、`03-`。
- 使用 `kuro` 作为项目标识。
- 文件名后半段写清图片内容，不使用随机哈希名。
- 普通展示图优先保留 `.webp`，透明素材保留 `.png`。
- 新增补充图从 `27-` 往后编号，避免影响当前页面已引用的 `01-26`。

## 当前页面主图

| 文件名 | 内容 | 尺寸 | 比例 | 推荐位置 |
|---|---|---:|---:|---|
| `01-kuro-cover.webp` | 项目封面主视觉 | 5016x2823 | 16:9 | Hero |
| `02-kuro-hero.webp` | KURO 主视觉 | 5016x2823 | 16:9 | Project Overview |
| `03-kuro-ip-story.webp` | IP 故事页 | 5016x2823 | 16:9 | Background |
| `04-kuro-character-profile.webp` | 角色档案页 | 5016x2823 | 16:9 | Character System |
| `05-kuro-feature-description.webp` | 角色特征说明页 | 5016x2823 | 16:9 | Visual Guidelines |
| `06-kuro-five-view.webp` | 五视图展示页 | 5016x2823 | 16:9 | Character System |
| `07-kuro-expression-system.webp` | 表情系统页 | 5016x2823 | 16:9 | Expression & Motion |
| `08-kuro-emotions-transparent.png` | 透明底表情素材 | 1254x1254 | 1:1 | Expression & Motion |
| `09-kuro-action-system.webp` | 动作系统页 | 5016x2823 | 16:9 | Expression & Motion |
| `16-kuro-storyboard.webp` | 九宫格故事板 | 1920x1080 | 16:9 | Storyboard |
| `19-kuro-packaging-system.webp` | 包装系统综合图 | 5016x2823 | 16:9 | Brand Extension |
| `20-kuro-merchandise.webp` | 周边延展综合展示 | 5016x2823 | 16:9 | Merchandise |
| `21-kuro-sticker-sheet.webp` | 贴纸平面图 | 5016x2823 | 16:9 | Merchandise |
| `22-kuro-keychain.webp` | 当前目录缺失，请勿直接引用 | - | - | 待补图或待替换 |
| `23-kuro-poster-01.webp` | 视觉海报 01 | 5016x2823 | 16:9 | Final Showcase |
| `24-kuro-poster-02.webp` | 视觉海报 02 | 5016x2823 | 16:9 | Final Showcase |
| `25-kuro-poster-03.webp` | 视觉海报 03 | 5016x2823 | 16:9 | Final Showcase |
| `26-kuro-final-showcase.webp` | 最终综合展示 | 5016x2823 | 16:9 | Final Showcase |

## 新增备用图片

| 文件名 | 内容判断 | 尺寸 | 比例 | 推荐用途 |
|---|---|---:|---:|---|
| `27-kuro-cafe-night-crew.png` | 夜晚咖啡店门口角色合影 | 1672x941 | 16:9 | 场景氛围图、视频生成补充图、项目延展方向 |
| `28-kuro-road-trip-concept.png` | KURO 与角色乘坐红色小车的旅行概念图 | 1448x1086 | 4:3 | IP 世界观延展、额外概念探索；不建议和 16:9 主图强行并列 |
| `29-kuro-color-system.png` | KURO 主题色彩色卡 / 材质色规范 | 5016x2823 | 16:9 | Visual Guidelines 色彩规范补充图 |
| `30-kuro-coffee-beans-cutout.png` | KURO 抱咖啡豆 / 咖啡豆溢出透明素材 | 1122x1402 | 4:5 | 角色透明素材、局部点缀、周边延展说明 |
| `31-kuro-mobile-ui-assets.png` | 手机 / 平板界面与数字内容素材板 | 1024x1536 | 2:3 | 数字触点、品牌延展、AI 工作流补充 |
| `32-kuro-barista-scene.png` | KURO 在咖啡机前制作咖啡的室内场景 | 1672x941 | 16:9 | Brand Extension、Final Showcase、视频生成前后文 |
| `33-kuro-cafe-storefront.png` | KURO 咖啡店外立面与门头场景 | 1672x941 | 16:9 | Brand Extension、Final Showcase、场景延展 |
| `34-kuro-transparent-assets-preview.jpg` | 透明素材在深色背景上的预览合集 | 1440x960 | 3:2 | 内部检查 / 素材预览；不建议作为正式大图 |

## 排版注意

- 当前页面所有作品图继续使用 `object-fit: contain`，不要裁切。
- `22-kuro-keychain.webp` 当前不在 `public/images/kuro/` 目录中，但页面仍有引用；如果后续不补回这张图，需要在 `KuroProjectPage.jsx` 中替换为其他已存在图片。
- 16:9 图片可以作为大幅展示图或双列图统一排版。
- `28-kuro-road-trip-concept.png`、`30-kuro-coffee-beans-cutout.png`、`31-kuro-mobile-ui-assets.png`、`34-kuro-transparent-assets-preview.jpg` 不是 16:9，排版时应单独处理，避免和 16:9 图片强行等高并列。
- 透明 PNG 不要转 WebP，保留 alpha 通道，后续可用于深色主题页面的局部装饰或素材展示。
- 新增图片如要进入页面，先确认所属 Section，再更新 `KuroProjectPage.jsx`，不要直接替换当前已确认图片。
