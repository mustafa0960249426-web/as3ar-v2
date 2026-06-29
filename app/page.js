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
  return (
    <div>
      <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        اسعار التصميم
      </h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {الاسعار.map((s, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-md border-white/10 p-5 rounded-2xl flex justify-between items-center hover:scale-105 hover:bg-white/10 transition-all duration-300 shadow-lg">
            <span className="text-lg font-medium">{s.item}</span>
            <span className="font-bold text-2xl text-blue-400">{s.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
