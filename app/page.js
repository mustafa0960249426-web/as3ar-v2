export const revalidate = 60;
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWM57Ljz7S2NUxvbGjco1sacdqEz1vs2GmI5vueeG4k48ASO2k3gT7XUyWs1KRIDanqyZFXY9TTaUR/pub?output=csv";
async function getPrices(){const r=await fetch(SHEET_URL,{cache:'no-store'});const t=await r.text();return t.split('\n').slice(1).filter(Boolean).map(x=>{const [a,b]=x.split(',');return{item:a?.trim(),price:b?.trim()}})}
export default async function Home(){const d=await getPrices();return(<><h1 className="title">اسعار التصميم</h1><div className="grid">{d.map((s,i)=>(<div key={i} className="card"><span>{s.item}</span><span className="price">{s.price}</span></div>))}</div></>)}
