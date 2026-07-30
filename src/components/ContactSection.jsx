import { Link } from "react-router-dom";
import SectionLabel from "./SectionLabel.jsx";

export default function ContactSection() {
  return (
    <section className="archive-section dark-section contact-section home-contact-poster">
      <img
        className="home-contact-poster__image"
        src="/images/jiye/07-jiye-open-giftbox-six-can-set.png"
        alt=""
        aria-hidden="true"
      />
      <div className="container">
        <SectionLabel number="07" label="联系">
          Contact
        </SectionLabel>
        <h2 className="section-heading js-section-title">
          期待与你讨论
          <br />
          新的设计机会。
        </h2>
        <p className="section-intro">
          欢迎与我交流 AI 产品设计、UI/UX、品牌视觉、AIGC 商业视觉与前端原型相关机会。
        </p>
        <div className="contact-actions">
          <a className="button-link" href="mailto:hello@example.com">
            hello@example.com
          </a>
          <Link className="button-link" to="/contact">
            联系我
          </Link>
        </div>
      </div>
    </section>
  );
}
