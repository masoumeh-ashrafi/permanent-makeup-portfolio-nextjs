import "./globals.css";

import Link from "next/link";
// app/layout.tsx
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "فاطمه درویشی - متخصص آرایش دائم در مشهد",
  description: "ارائه خدمات تخصصی آرایش دائم، فیبروز و میکروبلیدینگ ابرو، خط چشم و بن مژه دائم در مشهد با جدیدترین متدها.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable}`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
        />
      </head>
      <body className="font-sans text-gray-800 antialiased bg-gray-50 min-h-screen flex flex-col">
        
        {/* هدر اصلاح‌شده با چینش دقیق و فونت یکپارچه */}
        <header className="bg-white/95 backdrop-blur-sm shadow-xs py-4 sticky top-0 z-50 font-sans">
          <div className="container mx-auto px-6 flex justify-between items-center flex-row-reverse">
            
            {/* بخش لوگو */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-emerald-800 flex items-center gap-2 no-underline">
                <span className="bg-emerald-50 w-9 h-9 rounded-full flex items-center justify-center text-sm text-emerald-700 font-extrabold border border-emerald-100">FD</span>
                <span className="hidden sm:inline">مرکز زیبایی فاطمه درویشی</span>
              </Link>
            </div>

            {/* منوی ناوبری افقی با فاصله‌های استاندارد */}
            <nav>
              <ul className="flex items-center space-x-1 md:space-x-4 space-x-reverse m-0 p-0 list-none">
                <li><Link href="/" className="text-gray-600 hover:text-emerald-700 transition duration-300 rounded-md py-2 px-3 font-medium text-sm md:text-base no-underline">خانه</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-emerald-700 transition duration-300 rounded-md py-2 px-3 font-medium text-sm md:text-base no-underline">خدمات</Link></li>
                <li><Link href="/#gallery" className="text-gray-600 hover:text-emerald-700 transition duration-300 rounded-md py-2 px-3 font-medium text-sm md:text-base no-underline">نمونه کارها</Link></li>
                <li><Link href="/about-us" className="text-gray-600 hover:text-emerald-700 transition duration-300 rounded-md py-2 px-3 font-medium text-sm md:text-base no-underline">درباره من</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-emerald-700 transition duration-300 rounded-md py-2 px-3 font-medium text-sm md:text-base no-underline">وبلاگ</Link></li>
                <li><Link href="/contact-us" className="text-gray-600 hover:text-emerald-700 transition duration-300 rounded-md py-2 px-3 font-medium text-sm md:text-base no-underline">تماس بامن</Link></li>



              </ul>
            </nav>

          </div>
        </header>

        {/* محتوای اصلی صفحات */}
        <main className="flex-grow w-full">{children}</main>

        {/* فوتر یکپارچه */}
        <footer className="bg-gray-950 text-white py-8 mt-auto text-center w-full font-sans">
          <div className="container mx-auto px-4">
            <p className="text-sm m-0 opacity-80">© ۲۰۲۶ فاطمه درویشی. تمامی حقوق محفوظ است.</p>
            <div className="flex justify-center space-x-6 space-x-reverse mt-4">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition duration-300 text-xs no-underline ml-4">سیاست حفظ حریم خصوصی</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition duration-300 text-xs no-underline">شرایط و ضوابط</Link>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}