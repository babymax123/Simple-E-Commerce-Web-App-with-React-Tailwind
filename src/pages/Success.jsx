import Card from "../components/ui/Card";
import { STORE } from "../data/store";
import { rupiah } from "../utils/rupiah";

export default function Success({ customer, setCustomer, pay, setPay, total, cartItems, clear, setStep }) {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-10 pt-10">
      <Card>
        <div className="p-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-800">
            ✅ Pesanan berhasil dibuat
          </div>

          <h2 className="mt-4 text-2xl font-semibold text-black">Terima kasih, {customer.name || "Pelanggan"}!</h2>
          <p className="mt-2 text-black/70">
            Metode pembayaran: <span className="font-semibold">{pay}</span>. Total:{" "}
            <span className="font-semibold">{rupiah(total)}</span>
          </p>

          <div className="mt-6 rounded-2xl bg-slate-400 p-4 ring-1 ring-black/5">
            <div className="text-sm font-semibold">Detail Pengiriman</div>
            <div className="mt-1 text-sm text-black/70">{customer.address}</div>
            <div className="mt-2 text-xs text-black/50">Kontak: {customer.phone}</div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => {
                clear();
                setCustomer({ name: "", phone: "", address: "" });
                setPay("COD");
                setStep("shop");
              }}
              className="rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Belanja lagi
            </button>

            <button
              onClick={() => {
                const text =
                  `Pesanan baru - ${STORE.name}\n` +
                  `Nama: ${customer.name}\n` +
                  `HP: ${customer.phone}\n` +
                  `Alamat: ${customer.address}\n` +
                  `Metode bayar: ${pay}\n` +
                  `Total: ${rupiah(total)}\n` +
                  `Item:\n` +
                  cartItems.map((it) => `- ${it.name} x${it.qty} (${rupiah(it.price * it.qty)})`).join("\n");

                navigator.clipboard?.writeText(text);
                alert("Ringkasan pesanan disalin. Kamu bisa paste ke WhatsApp.");
              }}
              className="rounded-2xl bg-slate-400 px-4 py-3 text-sm font-semibold text-brand-700 ring-1 ring-black/10 hover:bg-black/2"
            >
              Salin ringkasan (untuk WA)
            </button>
          </div>

          <div className="mt-6 text-xs text-black/50">
            Catatan: Ini masih versi sederhana (payment gateway belum otomatis).
          </div>
        </div>
      </Card>
    </main>
  );
}
