export default function ContactPage() {
  return (
    <section className="page-shell contact-page">
      <div className="container">
        <p className="mono">contact.channel</p>
        <h1 className="page-title">联系我</h1>
        <p className="section-intro">
          欢迎通过邮箱或微信联系我，讨论 AI 产品设计、AIGC 设计与 UX/UI 机会。
        </p>
        <div className="contact-list">
          <a className="button-link contact-popover" href="mailto:1812731718@qq.com">
            QQ
            <span className="contact-popover__panel contact-popover__panel--image">
              <img src="/images/contact/qq-qr.jpg" alt="QQ 二维码" />
            </span>
          </a>
          <span className="button-link contact-popover contact-popover--qr">
            微信
            <span className="contact-popover__panel">
              <img src="/images/contact/wechat-qr.jpg" alt="微信二维码" />
            </span>
          </span>
          <a className="button-link contact-popover contact-popover--resume" href="/files/shen-resume.pdf" download>
            下载简历
            <span className="contact-popover__panel">
              <iframe src="/files/shen-resume.pdf#toolbar=0&navpanes=0" title="沈梓钐简历预览" />
              <em>悬停预览，点击下载 PDF</em>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
