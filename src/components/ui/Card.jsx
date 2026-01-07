export default function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl bg-white shadow-sm ring-1 ring-black/10",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
