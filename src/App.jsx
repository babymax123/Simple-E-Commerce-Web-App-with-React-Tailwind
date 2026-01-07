import { useMemo, useState } from "react";
import Header from "./components/Header";
import { PRODUCTS } from "./data/products";

import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export default function App() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Semua");
  const [cart, setCart] = useState(() => new Map()); // id -> qty
  const [step, setStep] = useState("shop"); // shop | checkout | success
  const [pay, setPay] = useState("COD");
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "" });

  const categories = useMemo(() => ["Semua", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))], []);

  const filtered = useMemo(() => {
    const keyword = q.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const okCat = cat === "Semua" || p.category === cat;
      const okQ = !keyword || p.name.toLowerCase().includes(keyword);
      return okCat && okQ;
    });
  }, [q, cat]);

  const cartItems = useMemo(() => {
    const items = [];
    for (const [id, qty] of cart.entries()) {
      const p = PRODUCTS.find((x) => x.id === id);
      if (p) items.push({ ...p, qty });
    }
    return items;
  }, [cart]);

  const subtotal = useMemo(() => cartItems.reduce((s, it) => s + it.price * it.qty, 0), [cartItems]);
  const fee = subtotal > 0 ? Math.min(12000, Math.round(subtotal * 0.03)) : 0;
  const total = subtotal + fee;

  const add = (id) => {
    setCart((prev) => {
      const next = new Map(prev);
      next.set(id, (next.get(id) || 0) + 1);
      return next;
    });
  };

  const dec = (id) => {
    setCart((prev) => {
      const next = new Map(prev);
      const v = (next.get(id) || 0) - 1;
      if (v <= 0) next.delete(id);
      else next.set(id, v);
      return next;
    });
  };

  

  const clear = () => setCart(new Map());

  return (
    <div className="min-h-dvh bg-rose-50">
      <Header />

      {step === "shop" && (
        <Shop
          q={q}
          setQ={setQ}
          cat={cat}
          setCat={setCat}
          categories={categories}
          filtered={filtered}
          cartItems={cartItems}
          subtotal={subtotal}
          fee={fee}
          total={total}
          add={add}
          dec={dec}
          clear={clear}
          setStep={setStep}
        />
      )}

      {step === "checkout" && (
        <Checkout
          cartItems={cartItems}
          subtotal={subtotal}
          fee={fee}
          total={total}
          customer={customer}
          setCustomer={setCustomer}
          pay={pay}
          setPay={setPay}
          setStep={setStep}
        />
      )}

      {step === "success" && (
        <Success
          customer={customer}
          setCustomer={setCustomer}
          pay={pay}
          setPay={setPay}
          total={total}
          cartItems={cartItems}
          clear={clear}
          setStep={setStep}
        />
      )}

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-black/60">
          © {new Date().getFullYear()} {/* nama toko ambil dari file store kalau mau */} • Kontak: {/* phone */}
        </div>
      </footer>
    </div>
  );
}
