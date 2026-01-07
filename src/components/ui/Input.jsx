export default function Input({ label, value, onChange }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-black text-sm font-medium">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-2xl bg-red-200 px-4 py-2.5 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-brand-300"
        placeholder={label}
      />
    </label>
  );
}
