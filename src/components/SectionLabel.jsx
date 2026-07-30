export default function SectionLabel({ number, label, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{label}</span>
      {children ? <span>{children}</span> : null}
    </div>
  );
}
