export const revalidate = 60;
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWM57Ljz7S2NUxvbGjco1sacdqEz1vs2GmI5vueeG4k48ASO2k3gT7XUyWs1KRIDanqyZFXY9TTaUR/pub?output=csv";

async function getPrices() {
  const res = await fetch(SHEET_URL, { cache: 'no-store' });
  const text = await res.text();
  return text.split('\n').slice(1).filter(Boolean).map(r => {
    const [item, price] = r.split(',');
    return { item: item?.trim(), price: price?.trim() };
  });
}

export default async function Home() {
  const الاسعار = await getPrices();
  if (الاسعار.length === 0) return <p className="text-center">ضيف اسعار في الشيت اول سطر: item,price</p>
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">اسعار التصميم</h1>
      <div className="grid gap-3">
        {الاسعار.map((s, i) => (
          <div key={i} className="bg-white/10 p-4 rounded-xl flex justify-between">
            <span>{s.item}</span><span className="font-bold text-blue-400">{s.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
