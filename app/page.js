export const revalidate = 0;

async function getPrices() {
  const SHEET_URL = process.env.SHEET_URL;
  if (!SHEET_URL) return [];
  
  const res = await fetch(SHEET_URL, { cache: 'no-store' });
  const text = await res.text();
  const rows = text.split('\n').slice(1); // نتخطى سطر العناوين
  
  return rows.map(row => {
    const cols = row.split(',');
    const item = cols[1]?.trim(); // العمود B = الاسم
    const price = cols[2]?.trim(); // العمود C = السعر
    return { item, price };
  }).filter(p => p.item && p.price); // نتأكد مافي سطور فاضية
}

export default async function Home() {
  const prices = await getPrices();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <div className="w-full max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">🔥 اسعار العملات اليوم</h2>
        
        {prices.length === 0? (
          <p className="text-center text-gray-400">جاري تحميل الاسعار...</p>
        ) : (
          <div className="space-y-3">
            {prices.map((p, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-xl flex justify-between text-lg backdrop-blur-sm border-white/20">
                <span>{p.item}</span>
                <span className="font-bold text-yellow-400">{p.price} جنيه</span>
              </div>
            ))}
          </div>
        )}
        
        <p className="text-center text-xs text-gray-500 mt-6">تاريخ: 26/06/2026</p>
      </div>
    </main>
  );
}
