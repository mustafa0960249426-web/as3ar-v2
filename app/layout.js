export const metadata = { title: "جد | اسعار التصميم" };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script src='//niphaumeenses.net/vignette.min.js' data-zone='9907779' async></script>
      </head>
      <body className="bg-[#0b1220] text-white">
        <header className="p-4 flex justify-between items-center max-w-3xl mx-auto">
          <a href="/" className="text-2xl font-bold text-blue-400">جد</a>
          <nav className="flex gap-4">
            <a href="/">الرئيسية</a>
            <a href="/عن">عن الموقع</a>
            <a href="/خصوصية">سياسة الخصوصية</a>
          </nav>
        </header>
        <main className="p-4 max-w-3xl mx-auto">{children}</main>
        <footer className="text-center p-6 text-gray-400">جميع الحقوق محفوظة © 2026</footer>
      </body>
    </html>
  );
}
