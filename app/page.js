export const revalidate = 0;

async function getPrices() {
  const SHEET_URL = process.env.SHEET_URL;
  const res = await fetch(SHEET_URL, { cache: 'no-store' });
  const text = await res.text();
  const rows = text.split('\n').slice(1);
  return rows.map(row => {
    const [item, price] = row.split(',');
    return { item, price };
  }).filter(p => p.item);
}

export default async function Home() {
  const prices = await getPrices();
  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">🔥 مرحبا بيك في اسعار</h2>
      <div className="space-y-3">
        {prices.map((p, i) => (
          <div key={i} className="bg-white/10 p-4 rounded-lg flex justify-between text-lg backdrop-blur-sm">
            <span>{p.item}</span>
            <span className="font-bold text-yellow-400">{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
          }
