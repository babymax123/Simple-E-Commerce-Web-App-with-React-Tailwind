import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Row from "../components/ui/Row";
import { STORE } from "../data/store";
import { rupiah } from "../utils/rupiah";

export default function Shop({
  q,
  setQ,
  cat,
  setCat,
  categories,
  filtered,
  cartItems,
  subtotal,
  fee,
  total,
  add,
  dec,
  clear,
  setStep,
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-10 pt-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr]">
        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-black text-xl font-semibold">Katalog Barang</h2>
              <p className="mt-1 text-sm text-black/60">Cari barang rumah tangga & kebutuhan harian.</p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="relative text-black">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Cari: sapu, ember, detergen..."
                  className="w-full rounded-2xl bg-red-200 px-4 py-2.5 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-brand-300 sm:w-72"
                />
              </div>

              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="rounded-2xl bg-black px-4 py-2.5 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-brand-300"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Card key={p.id}>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-base font-semibold text-gray-800">{p.name}</div>
                      <div className="mt-1">
                        <Badge>{p.category}</Badge>
                      </div>
                    </div>
                    <div className="text-black text-sm font-semibold text-brand-700">{rupiah(p.price)}</div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-black/50">per {p.unit}</div>
                    <button
                      onClick={() => add(p.id)}
                      className="rounded-2xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
                    >
                      + Keranjang
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <aside className="lg:sticky lg:top-6 lg:h-fit">
          <Card>
            <div className="text-black p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">Keranjang</h3>
                <button onClick={clear} className="text-white text-sm font-medium text-brand-700 hover:underline">
                  Kosongkan
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {cartItems.length === 0 ? (
                  <div className="rounded-2xl bg-white p-4 text-sm text-black/60 ring-1 ring-black/5">
                    Belum ada barang. Klik “+ Keranjang”.
                  </div>
                ) : (
                  cartItems.map((it) => (
                    <div
                      key={it.id}
                      className="flex items-center justify-between gap-2 rounded-2xl bg-white p-3 ring-1 ring-black/5"
                    >
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold">{it.name}</div>
                        <div className="text-xs text-black/60">
                          {rupiah(it.price)} / {it.unit}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dec(it.id)}
                          className="h-8 w-8 rounded-xl bg-rose-50 text-brand-700 ring-1 ring-black/5 hover:bg-rose-100"
                        >
                          −
                        </button>
                        <div className="w-6 text-center text-sm font-semibold">{it.qty}</div>
                        <button
                          onClick={() => add(it.id)}
                          
                          className="h-8 w-8 rounded-xl bg-brand-600 text-white hover:bg-brand-700"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-5 space-y-2 rounded-2xl bg-red-200 p-4 ring-1 ring-black/5">
                <Row label="Subtotal" value={rupiah(subtotal)} />
                <Row label="Biaya layanan" value={rupiah(fee)} />
                <div className="h-px bg-black/5" />
                <Row label="Total" value={rupiah(total)} strong />
              </div>

              <button
                disabled={cartItems.length === 0}
                onClick={() => setStep("checkout")}
                className="mt-4 w-full rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Checkout
              </button>

              <div className="mt-5 rounded-2xl bg-rose-50 p-4 text-sm ring-1 ring-black/5">
                <div className="font-semibold text-brand-800">{STORE.name}</div>
                <div className="mt-1 text-black/70">{STORE.tagline}</div>
                <div className="mt-3 text-xs text-black/50">Alamat toko: {STORE.address}</div>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </main>
  );
}
