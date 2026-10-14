export default function InfoBox({ title, children }) {
  return (
    <aside className="info-box">
      <h2>{title}</h2>
      {children}
    </aside>
  );
}