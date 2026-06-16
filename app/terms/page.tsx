// app/terms/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "شرایط و ضوابط استفاده از خدمات | فاطمه درویشی",
  description: "شرایط، قوانین رزرواسیون، کنسلی و ضوابط بهداشتی نوبت‌های سالن آرایش دائم فاطمه درویشی.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-gray-50/50 min-h-screen py-16 font-sans" dir="rtl">
      <div className="container mx-auto px-4 max-w-2xl bg-white p-8 md:p-12 rounded-2xl border border-gray-150 shadow-xs">
        <h1 className="text-2xl md:text-3xl font-black text-gray-950 mb-6 pb-2 border-b border-gray-100">
          شرایط و ضوابط خدمات
        </h1>
        
        <div className="space-y-6 text-gray-800 text-justify leading-loose text-sm md:text-base">
          <p>
            خواهشمندیم پیش از رزرو نوبت قطعی میکروبلیدینگ، میکروپیگمنتیشن یا شیدینگ، قوانین و ترتیبات زیر را مطالعه فرمایید:
          </p>

          <h3 className="font-bold text-gray-950 text-lg mt-6">۱. ترتیبات رزرواسیون و کنسلی</h3>
          <p>
            به دلیل زمان‌بر بودن خدمات آرایش دائم (بین ۱.۵ الی ۲.۵ ساعت برای هر فرد)، تغییر یا کنسلی نوبت فیکس شده فقط تا ۴۸ ساعت قبل از موعد مقرر امکان‌پذیر است تا حق مراجعین دیگر ضایع نشود.
          </p>

          <h3 className="font-bold text-gray-950 text-lg mt-6">۲. اهمیت جلسه ترمیم (Touch-up)</h3>
          <p>
            آرایش دائم فرآیندی دو مرحله‌ای است. پوست اندازی اولیه بخشی از ریزش پیگمنت را به همراه دارد؛ لذا برای گرفتن خروجی ماندگار و ایده‌آل، حضور در جلسه ترمیم (فواصل ۴ الی ۶ هفته پس از جلسه اول) الزامی است.
          </p>

          <h3 className="font-bold text-gray-950 text-lg mt-6">۳. تعهد به سلامت متریال</h3>
          <p>
            ما تضمین می‌کنیم که تمامی متریال مصرفی پکیج شما از بالاترین گرید آرایشی ارگانیک و کارتریج‌های اورجینال فیکس شده باشند. تفاوت خروجی روی پوست‌های مختلف به دلیل ساختار ترشح سبوم طبیعی پوست رخ می‌دهد.
          </p>
        </div>
      </div>
    </div>
  );
}