// app/blog/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { articlesData } from './[slug]/articles'

export const metadata: Metadata = {
  title: 'وبلاگ | مقالات آرایش دائم و مراقبت زیبایی',
  description:
    'مطالب آموزشی و تجربی درباره آرایش دائم، فیبروز ابرو، خط چشم دائم و رژ لب دائم از فاطمه درویشی.',
  keywords: [
    'وبلاگ آرایش دائم',
    'مقالات مراقبت ابرو',
    'فیبروز ابرو',
    'خط چشم دائم',
    'رژ لب دائم',
  ],
  openGraph: {
    title: 'وبلاگ آرایش دائم | فاطمه درویشی',
    description:
      'مطالب آموزشی و نکات مراقبتی برای آرایش دائم ابرو، چشم و لب در مشهد.',
    type: 'website',
    url: 'https://fatemedarvishi.ir/blog',
  },
}

function getExcerpt(text: string) {
  const excerpt = text.trim().slice(0, 120)
  return excerpt.length < text.trim().length ? `${excerpt.trim()}...` : excerpt
}

export default function BlogPage() {
  const blogPosts = Object.entries(articlesData)
    .slice(0, 16)
    .map(([slug, article], index) => ({
      id: index + 1,
      slug,
      img: article.img,
      alt: article.title,
      author: article.author,
      date: article.date,
      title: article.title,
      desc: article.sections.find(block => block.type === 'p')?.text
        ? getExcerpt(article.sections.find(block => block.type === 'p')!.text)
        : 'مقاله‌ای تخصصی و خواندنی درباره زیبایی و آرایش دائم.',
    }))

  return (
    <div className='w-full bg-gray-50/50 min-h-screen'>
      <main className='container mx-auto px-4 py-12 md:py-20 font-sans'>
        {/* هدر بالایی صفحه وبلاگ[cite: 2] */}
        <div className='text-center mb-16'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-gray-950'>
            وبلاگ و مقالات آموزشی
          </h1>
          <p className='text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto'>
            جدیدترین نکات و اطلاعات تخصصی در زمینه آرایش دائم و زیبایی را اینجا
            بخوانید.
          </p>
        </div>

        {/* گرید نمایش پویای کارت‌های مقالات[cite: 2] */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map(post => (
            <div
              key={post.id}
              className='bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden flex flex-col transform hover:-translate-y-1.5 hover:shadow-md transition duration-300'
            >
              <Link href={`/blog/${post.slug}`} className='block'>
                <img
                  src={post.img}
                  alt={post.alt}
                  className='w-full h-48 object-cover'
                  loading='lazy'
                />
              </Link>
              <div className='p-6 flex flex-col grow'>
                <div className='flex justify-between items-center text-xs text-gray-500 mb-3'>
                  <span>نویسنده: {post.author}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className='text-lg font-bold mb-3 text-gray-950 grow leading-snug'>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='hover:text-emerald-800 no-underline transition'
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className='text-gray-600 text-sm leading-relaxed mb-5 text-justify'>
                  {post.desc}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className='font-bold text-emerald-700 hover:text-emerald-800 hover:underline mt-auto text-sm no-underline inline-flex items-center gap-1'
                >
                  ادامه مطلب ←
                </Link>
              </div>
            </div>
          ))}

          {/* کارت مقاله نمونه (به زودی)[cite: 2] */}
          <div className='bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden flex flex-col opacity-65'>
            <div className='w-full h-48 bg-emerald-50/50 flex items-center justify-center border-b border-gray-100'>
              <span className='text-emerald-800 font-extrabold text-sm tracking-wide'>
                Coming Soon
              </span>
            </div>
            <div className='p-6 flex flex-col grow'>
              <div className='flex justify-between items-center text-xs text-gray-400 mb-3'>
                <span>نویسنده: م .اشرفی</span>
                <span>به زودی...</span>
              </div>
              <h2 className='text-lg font-bold mb-3 text-gray-400 grow leading-snug'>
                عوارض آرایش دائم: آیا واقعا خطرناک است؟
              </h2>
              <p className='text-gray-400 text-sm leading-relaxed mb-5'>
                بررسی واقع‌بینانه عوارض احتمالی و راه‌های پیشگیری از آن‌ها برای
                یک تجربه کاملاً ایمن.
              </p>
              <span className='font-bold text-gray-400 text-sm mt-auto cursor-not-allowed'>
                ادامه مطلب ←
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
