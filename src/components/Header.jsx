export default function Header() {
  return (
    <header className="border-b border-black/5 bg-red-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-600 text-white font-black">
            TB
          </div>
          <div>
            <div className="text-base font-semibold text-black">Toko BayMax Jaya</div>
            <div className="text-xs text-black/60">Alat Merancang</div>
          </div>
        </div>
        {/* <div className="hidden sm:flex items-center gap-2">
          <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
            Katalog
          </span>
          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-black/60">
            Checkout
          </span>
        </div> */}
      </div>
    </header>
  );
}
