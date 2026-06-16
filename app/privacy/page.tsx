// app/privacy/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سیاست حفظ حریم خصوصی | فاطمه درویشی",
  description: "سیاست حفظ حریم خصوصی مرکز زیبایی فاطمه درویشی. ما به حریم شخصی و اطلاعات شما احترام می‌گذاریم.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-gray-50/50 min-h-screen py-16 font-sans" dir="rtl">
      <div className="container mx-auto px-4 max-w-2xl bg-white p-8 md:p-12 rounded-2xl border border-gray-150 shadow-xs">
        <h1 className="text-2xl md:text-3xl font-black text-gray-950 mb-6 pb-2 border-b border-gray-100">
          سیاست حفظ حریم خصوصی
        </h1>
        
        <div className="space-y-6 text-gray-800 text-justify leading-loose text-sm md:text-base">
          <p>
            مرکز آرایش دائم فاطمه درویشی متعهد به حفظ کامل حریم شخصی و اطلاعات محرمانه تمامی مراجعین عزیز است. این بیانیه نحوه محافظت از اطلاعات دریافتی را شفاف‌سازی می‌کند.
          </p>

          <h3 className="font-bold text-gray-950 text-lg mt-6">۱. جمع‌آوری اطلاعات فرم‌ها و ثبت نوبت</h3>
          <p>
            اطلاعاتی که شما در جلسات مشاوره یا فرم‌های آنلاین وارد می‌کنید (شامل نام، شماره تماس و سوابق پزشکی مرتبط با پوست یا بیماری‌های خاص)، صرفاً جهت هماهنگی، ایمنی فرایند کارتریج و پرونده‌سازی شخصی آرایش دائم شما استفاده می‌شود.
          </p>

          <h3 className="font-bold text-gray-950 text-lg mt-6">۲. عکس‌ها و گالری نمونه‌کارها</h3>
          <p>
            نمایش هرگونه عکس از قبل و بعد کار (میکروبلیدینگ، خط چشم یا لب) در کانال‌ها، وب‌سایت یا پیج اینستاگرام سالن، **تنها و تنها در صورت رضایت قلبی و کتبی مشتری** انجام خواهد گرفت و هویت شما کاملاً محرمانه باقی خواهد ماند.
          </p>

          <p className="text-gray-400 text-xs pt-4 border-t border-gray-100">آخرین به‌روزرسانی: سال ۱۴۰۵</p>
        </div>
      </div>
    </div>
  );
}