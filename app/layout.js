export const metadata = { title: "جد | اسعار التصميم" };
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="monetag" content="6d85046cf1a6c02d0405353f8cbcb9e2" />
        <script src='//niphaumeenses.net/vignette.min.js' data-zone='9907779' async></script>
        <style>{`
          body{margin:0;background:linear-gradient(135deg,#1e1b4b 0%,#0f172a 100%);color:#fff;font-family:'Segoe UI',sans-serif;min-height:100vh}
          .wrap{max-width:900px;margin:0 auto;padding:16px}
          header{position:sticky;top:0;backdrop-filter:blur(12px);background:rgba(0,0,0,.3);border-bottom:1px solid rgba(255,255,255,.1);z-index:50}
          .nav{display:flex;justify-content:space-between;align-items:center;padding:16px 0}
          .logo{font-size:28px;font-weight:800;background:linear-gradient(90deg,#fbbf24,#f59e0b);-webkit-background-clip:text;color:transparent;text-decoration:none}
          nav a{margin:0 12px;color:#e2e8f0;text-decoration:none;font-weight:500}
          nav a:hover{color:#fbbf24}
          main{padding:20px 0}
          footer{text-align:center;padding:24px;color:#94a3b8;margin-top:40px}
        `}</style>
      </head>
      <body>
        <header><div className="wrap nav"><a href="/" className="logo">اسعار</a><nav><a href="/">الرئيسية</a><a href="/عن">من نحن</a><a href="/خصوصية">الخصوصية</a></nav></div></header>
        <main className="wrap">{children}</main>
        <footer>جميع حقوق محفوظة © 2026</footer>
      </body>
    </html>
  );
    }
