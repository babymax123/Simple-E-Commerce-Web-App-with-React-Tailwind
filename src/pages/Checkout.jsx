import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Row from "../components/ui/Row";
import { STORE } from "../data/store";
import { rupiah } from "../utils/rupiah";

export default function Checkout({
  cartItems,
  subtotal,
  fee,
  total,
  customer,
  setCustomer,
  pay,
  setPay,
  setStep,
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-10 pt-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl text-black font-semibold">Checkout</h2>
        <button
          className="rounded-xl px-3 py-2 text-sm font-medium text-brand-700 hover:bg-black/60"
          onClick={() => setStep("shop")}
        >
          ← Kembali belanja
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="p-5">
            <h3 className="text-black text-base font-semibold">Data Pembeli</h3>
            <p className="mt-1 text-sm text-black/60">Isi untuk pengantaran / konfirmasi pesanan.</p>

            <div className="mt-4 grid gap-3 text-black">
              <Input label="Nama" value={customer.name} onChange={(v) => setCustomer({ ...customer, name: v })} />
              <Input
                label="No. HP/WhatsApp"
                value={customer.phone}
                onChange={(v) => setCustomer({ ...customer, phone: v })}
              />
              <Input
                label="Alamat Pengiriman"
                value={customer.address}
                onChange={(v) => setCustomer({ ...customer, address: v })}
              />
            </div>

            <div className="mt-6 text-black">
              <h3 className="text-base font-semibold">Metode Pembayaran</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {["COD", "Transfer Bank", "E-Wallet"].map((m) => (
                  <button
                    key={m}
                    onClick={() => setPay(m)}
                    className={[
                      "rounded-2xl bg-red-200 border px-4 py-3 text-left text-sm",
                      pay === m ? "border-brand-600 bg-brand-50" : "border-black/10 bg-white hover:bg-black/2",
                    ].join(" ")}
                  >
                    <div className="font-semibold">{m}</div>
                    <div className="mt-1 text-xs text-black/60">
                      {m === "COD"
                        ? "Bayar saat barang tiba"
                        : m === "Transfer Bank"
                        ? "Konfirmasi manual sementara"
                        : "Konfirmasi manual sementara"}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-black/5">
                <div className="text-sm font-semibold">Info pembayaran</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-black/70">
                  {STORE.paymentInfo.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-black/50">* Ini versi sederhana: belum terhubung payment gateway otomatis.</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-5">
            <h3 className="text-base text-black font-semibold">Ringkasan Pesanan</h3>

            <div className="mt-4 space-y-3 text-black">
              {cartItems.length === 0 ? (
                <div className="rounded-2xl bg-white p-4 text-sm text-black/60 ring-1 ring-black/5">
                  Keranjang kamu kosong.
                </div>
              ) : (
                cartItems.map((it) => (
                  <div key={it.id} className="flex p-2 rounded-2xl bg-red-200 items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold">{it.name}</div>
                      <div className="text-xs text-black/60">
                        {rupiah(it.price)} / {it.unit} • qty {it.qty}
                      </div>
                    </div>
                    <div className="text-sm font-semibold">{rupiah(it.price * it.qty)}</div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-5 space-y-2 rounded-2xl bg-white p-4 ring-1 ring-black/5">
              <Row label="Subtotal" value={rupiah(subtotal)} />
              <Row label="Biaya layanan" value={rupiah(fee)} />
              <div className="h-px bg-black/5" />
              <Row label="Total" value={rupiah(total)} strong />
            </div>

            <button
              disabled={cartItems.length === 0 || !customer.name || !customer.phone || !customer.address}
              onClick={() => setStep("success")}
              className="mt-4 w-full rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Buat Pesanan
            </button>

            <p className="mt-3 text-xs text-black/50">
              Setelah klik “Buat Pesanan”, kamu bisa hubungi toko untuk konfirmasi pembayaran & pengiriman.
            </p>

            <div className="mt-5 rounded-2xl bg-rose-50 p-4 text-sm ring-1 ring-black/5">
              <div className="font-semibold text-brand-800">Alamat Toko</div>
              <div className="mt-1 text-black/70">{STORE.address}</div>
              <div className="mt-2 text-xs text-black/50">Kontak: {STORE.phone}</div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
