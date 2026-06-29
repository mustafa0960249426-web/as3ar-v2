import { Cairo } from 'next/font/google'
import Link from 'next/link'

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '700', '900'] })

export const metadata = {
  title: 'اسعار',
  description: 'موقع اسعار بتصميم فخم',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script src='//wheatyhumble.com/tag.min.js' data-zone='9580781' async data-cfasync='false'></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={`${cairo.className} bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white min-h-screen`}>
        <nav className="bg-black/30 backdrop-blur-lg border-b border-white/20 p-4 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-3xl font-black bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              اسعار
            </Link>
            <div className="flex gap-4 text-lg font-bold">
              <Link href="/" className="hover:text-yellow-400 transition">الرئيسية</Link>
              <Link href="/about" className="hover:text-yellow-400 transition">من نحن</Link>
              <Link href="/privacy" className="hover:text-yellow-400 transition">الخصوصية</Link>
            </div>
          </div>
        </nav>
        
        <div className="max-w-6xl mx-auto p-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-white/20 mt-6">
            {children}
          </div>
          <footer className="text-center mt-8 text-white/60 text-sm">
            جميع الحقوق محفوظة © 2026 اسعار
          </footer>
        </div>
      </body>
    </html>
  );
  }
