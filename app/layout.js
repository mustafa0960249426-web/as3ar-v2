import "./globals.css"; // مهم جداً للالوان
export const metadata = { title: "جد | اسعار التصميم" };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script src='//niphaumeenses.net/vignette.min.js' data-zone='9907779' async></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gradient-to-br from-[#0b1220] to-[#1e293b] text-white min-h-screen">
        <header className="backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
          <div className="p-4 flex justify-between items-center max-w-4xl mx-auto">
            <a href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">جد</a>
            <nav className="flex gap-5 font-medium">
              <a href="/" className="hover:text-blue-400 transition">الرئيسية</a>
              <a href="/عن" className="hover:text-blue-400 transition">عن الموقع</a>
              <a href="/خصوصية" className="hover:text-blue-400 transition">سياسة الخصوصية</a>
            </nav>
          </div>
        </header>
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
        <footer className="text-center p-6 text-gray-400 mt-10">جميع الحقوق محفوظة © 2026 جد</footer>
      </body>
    </html>
  );
}
