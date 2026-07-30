import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <p>SHEN 设计档案</p>
        <nav aria-label="页脚导航">
          <Link to="/work">作品</Link>
          <Link to="/experiments">实验</Link>
          <Link to="/ai-workflow">AI流程</Link>
          <Link to="/about">关于</Link>
          <Link to="/resume">简历</Link>
          <Link to="/contact">联系</Link>
        </nav>
        <p className="mono">© 2026 / SHEN DESIGN ARCHIVE</p>
      </div>
    </footer>
  );
}
