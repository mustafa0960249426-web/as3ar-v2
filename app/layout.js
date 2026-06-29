import { Cairo } from 'next/font/google'
import Link from 'next/link'

const القاهرة = Cairo({ subsets: ['arabic'] })

export const البيانات_الوصفية = {
  عنوان: 'جد',
  وصف: 'موقع اسعار المصمم فخم',
};

export default function تخطيط_الجذر({ اطفال }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="monetag" content="6d85046cf1a6c02d0405353f8cbcb9e2" />
        <script src="//wheatyhumble.co/mantaire/mai..."/>
        <script src="https://cdn.tailwindcss.com"/>
      </head>
      <body className={`${القاهرة.className} bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen`}>
        <nav className="bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              جد
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/" className="hover:text-blue-400 transition">الرئيسية</Link>
              <Link href="/عن/" className="hover:text-blue-400 transition">عن الموقع</Link>
              <Link href="/خصوصية/" className="hover:text-blue-400 transition">سياسة الخصوصية</Link>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-white/20">
            {اطفال}
          </div>
          <div className="text-center text-gray-400 text-sm mt-8">
            جميع الحقوق محفوظة © 2026 مواعيد
          </div>
        </div>
      </body>
    </html>
  )
}
