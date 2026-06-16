// app/contact-us/page.tsx
"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با من | سالن آرایش دائم فاطمه درویشی",
  description: "راه‌های ارتباطی، آدرس، شماره تلفن و لوکیشن مرکز تخصصی میکروبلیدینگ و فیبروز فاطمه درویشی. جهت مشاوره و رزرو وقت پیام دهید.",
};

export default function ContactUsPage() {
  return (
    <div className="w-full bg-gray-50/50 min-h-screen py-16 md:py-24 font-sans" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 mb-4">ارتباط با من</h1>
          <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
            مشتاقانه آماده پاسخگویی به سوالات شما، ارائه مشاوره قبل از کار و هماهنگی نوبت‌های شما هستم.
          </p>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* کارت راه‌های ارتباطی */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-xs">
              <h3 className="font-bold text-gray-950 text-lg mb-4 border-r-4 border-emerald-600 pr-2">راه‌های مستقیم</h3>
              
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex flex-col gap-1 pb-3 border-b border-gray-100">
                  <span className="text-gray-400 text-xs">پیج اینستاگرام نمونه‌کارها:</span>
                  <a href="https://www.instagram.com/fatemedarvish.ir" target="_blank" className="text-emerald-700 font-bold hover:underline">
                    fatemedarvish.ir@
                  </a>
                </div>

                <div className="flex flex-col gap-1 pb-3 border-b border-gray-100">
                  <span className="text-gray-400 text-xs">مشاوره در تلگرام:</span>
                  <a href="https://t.me/fatemehdarvishpour2020" target="_blank" className="text-emerald-700 font-bold hover:underline" dir="ltr">
                    @fatemehdarvishpour2020
                  </a>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 text-xs">ساعات پاسخگویی:</span>
                  <span className="text-gray-800 font-medium">همه روزه از ساعت ۱۰:۰۰ الی ۲۰:۰۰</span>
                </div>
              </div>
            </div>
          </div>

          {/* کادر نقشه گوگل یا اطلاعات لوکیشن */}
          <div className="md:col-span-7 bg-white p-6 rounded-2xl border border-gray-150 shadow-xs">
            <h3 className="font-bold text-gray-950 text-lg mb-4 border-r-4 border-emerald-600 pr-2">موقعیت و لوکیشن مرکز</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              جهت هماهنگی حضور و دریافت آدرس دقیق شعبه مشهد، لطفا پیش از مراجعه حتماً از طریق اینستاگرام یا تلگرام نوبت خود را فیکس فرمایید.
            </p>
            <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden border border-gray-200 relative">
              <iframe
                src="https://maps.google.com/maps?q=Mashhad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}