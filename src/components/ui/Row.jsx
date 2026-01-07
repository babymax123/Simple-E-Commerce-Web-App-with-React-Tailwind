export default function Row({ label, value, strong }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-black/60">{label}</span>
      <span className={strong ? "text-black font-semibold" : "font-medium"}>{value}</span>
    </div>
  );
}
