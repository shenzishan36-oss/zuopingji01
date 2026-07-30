import { useState } from "react";
import { NavLink } from "react-router-dom";
import GooeyNav from "./GooeyNav.jsx";

const links = [
  { to: "/", label: "首页" },
  { to: "/work", label: "作品" },
  { to: "/ai-workflow", label: "AI流程" },
  { to: "/resume", label: "简历" },
  { to: "/contact", label: "联系" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-nav${isOpen ? " is-open" : ""}`}>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>
      <NavLink className="nav-brand" to="/" aria-label="SHEN 设计档案首页" onClick={closeMenu}>
        SHEN
      </NavLink>
      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? "关闭导航" : "打开导航"}
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="nav-toggle__label">菜单</span>
        <span className="nav-toggle__bar" />
        <span className="nav-toggle__bar" />
      </button>
      <GooeyNav
        items={links}
        particleCount={12}
        particleDistances={[42, 8]}
        particleR={76}
        animationTime={520}
        timeVariance={220}
        onNavigate={closeMenu}
      />
    </header>
  );
}
