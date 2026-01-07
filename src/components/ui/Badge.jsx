export default function Badge({ children }) {
  return (
    <span className="inline-flex bg-slate-100 text-black items-center rounded-full bg-brand-100 px-2.5 py-1 text-xs font-medium text-brand-800">
      {children}
    </span>
  );
}
