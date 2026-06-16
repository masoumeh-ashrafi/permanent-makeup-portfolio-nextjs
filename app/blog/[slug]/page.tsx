// app/blog/[slug]/page.tsx

import { Article, TextBlock, articlesData } from "./articles";

import Link from "next/link";
import { notFound } from "next/navigation";

function renderTextWithLinks(block: TextBlock) {
  if (!block.links || block.links.length === 0) return block.text;

  let styledText: React.ReactNode[] = [block.text];

  block.links.forEach((link) => {
    styledText = styledText.flatMap((node) => {
      if (typeof node !== "string") return node;

      const parts = node.split(link.word);
      if (parts.length === 1) return node;

      const elements: React.ReactNode[] = [];
      parts.forEach((part, index) => {
        elements.push(part);
        if (index < parts.length - 1) {
          elements.push(
            <Link
              key={`${link.word}-${index}`}
              href={link.href}
              className="text-emerald-700 font-extrabold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:text-emerald-900 transition-all duration-200"
            >
              {link.word}
            </Link>
          );
        }
      });
      return elements;
    });
  });

  return styledText;
}

// حل مشکل اصلی: تعریف تایپ هیبریدی برای پشتیبانی از تمام نسخه‌های Next.js و تایپ اسکریپت
interface PageProps {
  params: any; 
}

export default async function PostPage({ params }: PageProps) {
  // برطرف کردن ناهماهنگی پرامیس با استفاده از بررسی ساختار دیتا در ران تایم
  const resolvedParams = typeof (params as any).then === 'function' ? await params : params;
  const slug = resolvedParams?.slug || "";
  
  // دسترسی کاملاً ایمن به کلیدهای دیتابیس بدون هیچ اروری
  const article: Article | undefined = articlesData[slug as keyof typeof articlesData] || articlesData[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full bg-gray-50/50 min-h-screen py-12 md:py-16 font-sans" dir="rtl">
      <article className="container mx-auto px-4 max-w-3xl bg-white rounded-2xl shadow-xs border border-gray-150 overflow-hidden">
        
        <div className="w-full h-64 md:h-96 relative bg-gray-100">
          <img 
            src={article.img} 
            alt={article.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="p-6 md:p-10">
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 border-b border-gray-100 pb-4">
            <span>نویسنده: {article.author}</span>
            <span>تاریخ: {article.date}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-gray-950 mb-8 leading-snug">
            {article.title}
          </h1>

          <div className="space-y-6 text-justify leading-loose text-gray-800 text-base md:text-lg">
            {article.sections.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2 key={index} className="text-xl md:text-2xl font-black text-gray-950 mt-12 mb-4 border-r-4 border-emerald-700 pr-3 pb-1">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <div key={index} className="bg-emerald-50/70 border-r-4 border-emerald-600 p-5 rounded-l-xl my-8 text-emerald-950 font-semibold text-sm md:text-base leading-relaxed">
                    {block.text}
                  </div>
                );
              }
              if (block.type === "li") {
                return (
                  <li key={index} className="list-disc pr-6 text-gray-800 font-medium my-3 leading-relaxed">
                    {renderTextWithLinks(block)}
                  </li>
                );
              }
              return <p key={index} className="m-0">{renderTextWithLinks(block)}</p>;
            })}

            {/* بخش جدول هوشمند و متناسب با دیتابیس */}
            {article.hasTable && (slug === "post2" || slug === "post5") && (
              <div className="overflow-x-auto my-10 rounded-xl border border-gray-200 shadow-xs">
                <table className="w-full text-center border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-50 text-gray-950 border-b border-gray-200">
                      <th className="p-4 font-bold">ویژگی معیار</th>
                      <th className="p-4 font-bold text-emerald-800">میکروبلیدینگ (فیبروز)</th>
                      <th className="p-4 font-bold text-emerald-800">میکروپیگمنتیشن / کاشت</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    <tr>
                      <td className="p-4 font-bold bg-gray-50/30 text-gray-900">نحوه اجرا</td>
                      <td className="p-4">قلم دستی مینیاتوری بدون موتور</td>
                      <td className="p-4">دستگاه هوشمند دیجیتال / پیوند فولیکول</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold bg-gray-50/30 text-gray-900">نوع پوست و کادر</td>
                      <td className="p-4">پوست‌های نرمال و خشک (ظاهر مویی)</td>
                      <td className="p-4">انواع پوست (پودری یا تراکم بالا)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="mt-14 pt-6 border-t border-gray-100 flex justify-end">
            <Link 
              href="/blog" 
              className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-sm px-6 py-3 rounded-xl transition duration-200 no-underline"
            >
              ← بازگشت به لیست مقالات وبلاگ
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}