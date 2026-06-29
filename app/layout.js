export const metadata = { title: "جد | اسعار التصميم" };
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script src='//niphaumeenses.net/vignette.min.js' data-zone='9907779' async></script>
        <style>{`body{background:#0b1220;color:#fff;font-family:sans-serif}header{backdrop-filter:blur(10px);background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.1)}.container{max-width:800px;margin:0 auto;padding:20px}.grid{display:grid;gap:15px}.card{background:rgba(255,255,255,.05);padding:20px;border-radius:20px;display:flex;justify-content:space-between;align-items:center;transition:.3s}.card:hover{transform:scale(1.03);background:rgba(255,255,255,.1)}.title{font-size:32px;font-weight:800;text-align:center;margin:30px 0;background:linear-gradient(90deg,#60a5fa,#a78bfa);-webkit-background-clip:text;color:transparent}.price{font-size:24px;font-weight:bold;color:#60a5fa}nav a{margin:0 10px;color:#fff;text-decoration:none}nav a:hover{color:#60a5fa}footer{text-align:center;padding:20px;color:#aaa;margin-top:40px}`}</style>
      </head>
      <body>
        <header><div className="container" style={{display:'flex',justifyContent:'space-between'}}><a href="/" style={{fontSize:28,fontWeight:'bold',color:'#60a5fa',textDecoration:'none'}}>جد</a><nav><a href="/">الرئيسية</a><a href="/عن">عن</a><a href="/خصوصية">خصوصية</a></nav></div></header>
        <main className="container">{children}</main>
        <footer>جميع الحقوق محفوظة © 2026 جد</footer>
      </body>
    </html>
  );
}
