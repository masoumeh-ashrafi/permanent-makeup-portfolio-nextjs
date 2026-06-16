// app/services/page.tsx

import Link from "next/next font inline"; // با Link استاندارد جابجا می‌شود
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدمات آرایش دائم و زیبایی | فاطمه درویشی",
  description: "آشنایی با خدمات تخصصی آرایش دائم فاطمه درویشی در مشهد، شامل میکروبلیدینگ، فیبروز ابرو، خط چشم دائم، بن مژه، رژ لب و کانتور لب.",
};

const services = [
  {
    title: "میکروبلیدینگ و فیبروز ابرو",
    desc: "طراحی تارهای فوق‌العاده ظریف و کرکی هم‌راستا با جهت موهای طبیعی ابرو برای پر کردن جاهای خالی و اصلاح فرم.",
    icon: "👁️",
    slug: "post2"
  },
  {
    title: "میکروپیگمنتیشن و سایه پودری",
    desc: "تکنیک مخملی و پیکسلی با دستگاه هوشمند برای ایجاد سایه ملایم و با دوام بسیار بالا، ایده‌آل برای پوست‌های چرب.",
    icon: "✍️",
    slug: "post2"
  },
  {
    title: "خط چشم دائم و بن مژه",
    desc: "تزریق پیگمنت‌های مشکی بین مژه‌ها جهت درشت‌تر و مشکی‌تر نشان دادن چشم‌ها بدون تغییر در فرم نچرال چهره.",
    icon: "✨",
    slug: "post3"
  },
  {
    title: "شیدینگ و میکروپیگمنتیشن لب",
    desc: "اصلاح نامتقارنی، رفع کبودی و بی‌رنگی لب‌ها با رنگ‌های شاداب، صورتی و پودری دخترانه بدون نیاز به رژ لب روزانه.",
    icon: "💋",
    slug: "post16"
  },
  {
    title: "ریموو تخصصی تاتوهای قدیمی",
    desc: "پاک کردن ایمن و بدون اسکار تاتوهای تیره، دودی یا قرمز قدیمی با مواد ارگانیک، بدون آسیب به بافت موی ابرو.",
    icon: "🧼",
    slug: "post13"
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-gray-50/50 min-h-screen py-16 md:py-24 font-sans" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 mb-4">خدمات تخصصی آرایش دائم</h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            مجموعه‌ای از نوین‌ترین متدهای آرایش نیمه‌دائم صورت با استفاده از متریال درجه یک پزشکی و منطبق بر آناتومی اختصاصی چهره شما.
          </p>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* لیست کارت‌های خدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-150 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-950 mb-3">{svc.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-loose text-justify mb-6">{svc.desc}</p>
              </div>
              <a 
                href={`/blog/${svc.slug}`}
                className="text-emerald-700 font-extrabold text-sm flex items-center gap-1 hover:text-emerald-900 transition-colors"
              >
                مطالعه جزئیات و راهنما ←
              </a>
            </div>
          ))}
        </div>

        {/* بخش دکمه اقدام سریع رزرو */}
        <div className="mt-16 bg-gradient-to-r from-emerald-800 to-teal-950 rounded-2xl p-8 md:p-12 text-center text-white shadow-lg">
          <h2 className="text-2xl md:text-3xl font-black mb-4">آماده‌اید تا زیبایی خود را ماندگار کنید؟</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            برای دریافت مشاوره کاملاً رایگان، بررسی نوع پوست و آناتومی صورت یا رزرو نوبت، همین امروز با من در ارتباط باشید.
          </p>
          <a 
            href="/contact-us"
            className="inline-block bg-white text-emerald-950 font-black px-8 py-3.5 rounded-xl shadow-xs hover:bg-emerald-50 transition-all transform hover:scale-[1.02]"
          >
            📞 تماس و مشاوره رایگان
          </a>
        </div>
      </div>
    </div>
  );
}