import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section home-immersive-hero">
      <div className="home-hero__media" aria-hidden="true">
        <video
          className="home-hero__image home-hero__image--base"
          src="/videos/home/portfolio-logo-animation.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="home-hero__veil" />
      </div>

      <div className="home-hero__mark" aria-hidden="true">
        <span>SHEN</span>
      </div>

      <div className="container home-hero__content">
        <div className="home-hero__left hero-reveal">
          <span className="home-hero__index">portfolio.index / 2026</span>
          <p>
            AI 产品设计
            <br />
            AIGC 品牌系统
            <br />
            体验原型
          </p>
        </div>

        <div className="hero-copy home-hero__copy">
          <span className="heading-en hero-reveal">SHEN DESIGN ARCHIVE</span>
          <p className="hero-intro hero-reveal">
            面向转型 AI 产品设计师的作品集：用用户研究、产品判断、Figma 原型和 AIGC
            视觉系统，展示我如何把抽象需求整理成可落地的产品体验。
          </p>
          <div className="hero-tags hero-reveal" aria-label="能力标签">
            <span>AI 产品设计</span>
            <span>UX 研究</span>
            <span>Figma 原型</span>
            <span>AIGC 工作流</span>
          </div>
          <div className="hero-actions hero-reveal">
            <Link className="button-link" to="/work">
              查看精选作品
            </Link>
            <Link className="button-link" to="/about">
              关于我
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
