export const revalidate = 60;
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWM57Ljz7S2NUxvbGjco1sacdqEz1vs2GmI5vueeG4k48ASO2k3gT7XUyWs1KRIDanqyZFXY9TTaUR/pub?output=csv";

async function getPrices(){
  const r=await fetch(SHEET_URL,{cache:'no-store'});
  const t=await r.text();
  return t.split('\n').slice(1).filter(Boolean).map(x=>{const[a,b]=x.split(',');return{item:a?.trim(),price:b?.trim()}})
}

export default async function Home(){
  const d=await getPrices();
  return(
    <>
      <style>{`.title{font-size:32px;font-weight:800;text-align:center;margin:0 0 24px;display:flex;align-items:center;justify-content:center;gap:8px}
      .grid{display:grid;gap:14px}
      .card{background:rgba(17,24,39,.6);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.08);padding:18px;border-radius:16px;display:flex;justify-content:space-between;align-items:center;transition:.3s}
      .card:hover{transform:translateY(-2px);border-color:rgba(251,191,36,.4)}
      .name{font-size:17px;font-weight:600}
      .val{font-size:22px;font-weight:800;color:#fbbf24;text-align:left}
      .unit{font-size:14px;color:#fbbf24;display:block}`}</style>
      <h1 className="title">اسعار 🔥<br/>التصميم اليوم</h1>
      <div className="grid">
        {d.map((s,i)=>(
          <div key={i} className="card">
            <span className="name">{s.item}</span>
            <div className="val">{s.price}<span className="unit">دولار</span></div>
          </div>
        ))}
      </div>
    </>
  );
}
