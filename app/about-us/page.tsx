import AboutImage from "./AboutImage"; // ایمپورت کامپوننت عکس
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره من | فاطمه درویشی - متخصص آرایش دائم و زیبایی",
  description: "با فاطمه درویشی، متخصص آرایش دائم و زیبایی در مشهد آشنا شوید. داستان من، تخصص‌ها و تعهد من به خلق زیبایی طبیعی و ماندگار برای شما.",
  keywords: ["فاطمه درویشی", "متخصص آرایش دائم مشهد", "میکروبلیدینگ فاطمه درویشی", "درباره سالن زیبایی"],
};

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "فاطمه درویشی",
    "url": "https://fatemedarvishi.ir/about-us",
    "image": "/me.jpeg",
    "jobTitle": "متخصص آرایش دائم",
    "worksFor": {
      "@type": "BeautySalon",
      "name": "مرکز زیبایی فاطمه درویشی"
    },
    "sameAs": [
      "https://www.instagram.com/fatemedarvish.ir",
      "https://t.me/fatemehdarvishpour2020"
    ]
  };

  return (
    <div className="w-full bg-gray-50/50 min-h-screen py-16 md:py-24 font-sans" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        {/* هدر بخش درباره من */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 mb-4 tracking-tight">
            داستان من و خلق زیبایی ماندگار
          </h1>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* بخش اصلی محتوا و تصویر */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center bg-white p-6 md:p-10 rounded-2xl shadow-xs border border-gray-150">
          <div className="md:col-span-4 flex justify-center">
            <AboutImage /> {/* استفاده از کامپوننت جداگانه */}
          </div>

          <div className="md:col-span-8 text-justify leading-loose text-gray-800 text-base md:text-lg space-y-4">
            <p className="font-bold text-gray-950 text-xl">سلام، من فاطمه درویشی هستم.</p>
            <p>
              علاقه من به دنیای زیبایی و هنر مینیاتوری هاشور، مسیر حرفه‌ای مرا به سمت تخصص در آرایش دائم (Permanent Makeup) هدایت کرد. در طول سال‌های فعالیتم، همیشه بر این باور بوده‌ام که آرایش دائم نباید حالت مصنوعی به چهره ببخشد؛ بلکه باید ابزاری ظریف برای بازگرداندن نقایص طبیعی، قرینه‌سازی بی‌نقص و برجسته کردن اصالت چهره شما باشد.
            </p>
            <p>
              استفاده از به‌روزترین دستگاه‌های دیجیتال، رنگ‌های گیاهی و ارگانیک کاملاً بدون سرب و رعایت بالاترین استانداردهای بهداشتی پزشکی، اصول تغییرناپذیر مرکز زیبایی من است. تعهد من، ارائه کیفیتی است که در آینه به آن افتخار کنید.
            </p>
          </div>
        </div>

        {/* ارزش‌ها و ویژگی‌های کلیدی */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl border border-gray-150 text-center shadow-xs">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-bold text-gray-950 text-base mb-2">ظرافت و اصالت نچرال</h3>
            <p className="text-gray-600 text-sm leading-relaxed">طراحی تار به تار و مویی متناسب با خواب طبیعی ابروها بدون ایجاد کادرهای ضخیم سنتی.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-150 text-center shadow-xs">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-bold text-gray-950 text-base mb-2">ایمنی و سلامت متریال</h3>
            <p className="text-gray-600 text-sm leading-relaxed">استفاده اختصاصی از کارتریج‌های استریل یک‌بار مصرف و رنگ‌های تایید شده ارگانیک.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-150 text-center shadow-xs">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="font-bold text-gray-950 text-base mb-2">تخصص به‌روز</h3>
            <p className="text-gray-600 text-sm leading-relaxed">تسلط کامل بر مدرن‌ترین تکنیک‌های میکروپیگمنتیشن، فیبروز، شیدینگ لب و ریموو تاتو.</p>
          </div>
        </div>
      </div>
    </div>
  );
}