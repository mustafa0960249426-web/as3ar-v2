export const revalidate = 60;

async function getPrices() {
  const SHEET_URL = process.env.SHEET_URL;
  if (!SHEET_URL) return [{item: "اربط SHEET_URL في Vercel", price: ""}];
  
  try {
    const res = await fetch(SHEET_URL, { cache: 'no-store' });
    if (!res.ok) throw new Error("فشل تحميل الشيت");
    const text = await res.text();
    const rows = text.split('\n').slice(1).filter(Boolean); // نتخطى اول سطر item,price
    return rows.map(r => {
      const [item, price] = r.split(',');
      return { item: item?.trim(), price: price?.trim() };
    });
  } catch (e) {
    return [{item: "خطأ: اتأكد من رابط الشيت", price: ""}];
  }
}

export default async function Home() {
  const الاسعار = await getPrices();

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">اسعار جد</h1>
      <div className="grid gap-3">
        {الاسعار.map((سعر, i) => (
          <div key={i} className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
            <span className="text-lg">{سعر.item}</span>
            <span className="font-bold text-xl text-blue-400">{سعر.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
