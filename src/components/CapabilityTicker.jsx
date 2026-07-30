const capabilities = [
  "AI 产品设计",
  "用户研究",
  "Figma 系统",
  "品牌策略",
  "包装设计",
  "IP 设计",
  "AIGC 商业视觉",
  "Vibe Coding",
];

export default function CapabilityTicker() {
  const text = [...capabilities, ...capabilities];

  return (
    <div className="capability-ticker" aria-label="能力关键词">
      <div className="ticker-track">
        {text.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
