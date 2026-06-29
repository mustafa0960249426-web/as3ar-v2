    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSWM57Ljz7S2NUxvbGjco1sacdqEz1vs2GmI5vueeG4k48ASO2k3gT7XUyWs1KRIDanqyZFXY9TTaUR/pub?output=csv'; 

    async function getPrices() {
      const res = await fetch(SHEET_URL, { cache: 'no-store' });
      const text = await res.text();
      const rows = text.split('\n').slice(1); // بيتخطى اول سطر "العناوين"
      return rows.map(row => {
        const [item, price] = row.split(',');
        return { item, price };
      });
    }

    export default async function Home() {
      const prices = await getPrices();
      return (
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center">جدول الاسعار</h2>
          <div className="space-y-3">
            {prices.map((p, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-lg flex justify-between text-lg">
                <span>{p.item}</span>
                <span className="font-bold text-yellow-400">{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      );
}
