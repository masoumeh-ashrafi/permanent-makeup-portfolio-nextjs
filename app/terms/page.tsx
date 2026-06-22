// app/terms/page.tsx

import Link from 'next/link'
import type { Metadata } from 'next'

const siteUrl = 'https://fatemedarvishi.ir'
const phoneNumber = '09391813879'
const phoneHref = '+989391813879'
const emailAddress = 'FatemeDarvishi71@gmail.com'

export const metadata: Metadata = {
  title: 'شرایط و ضوابط خدمات | فاطمه درویشی',
  description:
    'شرایط و ضوابط رزرو، مشاوره، کنسلی، ترمیم، مراقبت بعد از کار، تصاویر نمونه‌کار و استفاده از خدمات آرایش دائم فاطمه درویشی در مشهد.',
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'شرایط و ضوابط خدمات | فاطمه درویشی',
    description:
      'قوانین و توضیحات مربوط به رزرو، مشاوره، کنسلی، ترمیم و مراقبت خدمات آرایش دائم فاطمه درویشی.',
    type: 'website',
    locale: 'fa_IR',
    url: `${siteUrl}/terms`,
    siteName: 'فاطمه درویشی',
  },
}

const termsSections = [
  {
    title: '۱. رزرو نوبت و تغییر زمان',
    text: 'برای خدمات آرایش دائم، زمان مشخصی برای مشاوره، طراحی و اجرا در نظر گرفته می‌شود. اگر نیاز به تغییر یا لغو نوبت دارید، بهتر است در اولین زمان ممکن اطلاع دهید تا امکان هماهنگی مجدد وجود داشته باشد. تأخیر طولانی یا عدم حضور بدون اطلاع قبلی ممکن است باعث تغییر زمان نوبت یا نیاز به رزرو مجدد شود.',
  },
  {
    title: '۲. مشاوره قبل از انجام خدمات',
    text: 'قبل از انجام خدماتی مانند فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم، رژ لب دائم یا اصلاح کار قبلی، نوع پوست، سابقه تاتو، حساسیت‌های احتمالی، مصرف دارو، بارداری، شیردهی یا شرایط خاص پوستی باید اعلام شود. تصمیم نهایی درباره امکان انجام خدمت بعد از بررسی شرایط فردی انجام می‌شود.',
  },
  {
    title: '۳. شرایطی که ممکن است انجام خدمت را محدود کند',
    text: 'در بعضی شرایط، انجام خدمات آرایش دائم ممکن است مناسب نباشد یا نیاز به تعویق داشته باشد؛ از جمله التهاب فعال پوست، زخم باز، حساسیت شدید، مصرف برخی داروها، بارداری، شیردهی یا سابقه واکنش پوستی. در این موارد، ممکن است پیشنهاد شود ابتدا با پزشک مشورت کنید یا انجام خدمت به زمان مناسب‌تری موکول شود.',
  },
  {
    title: '۴. جلسه ترمیم',
    text: 'بسیاری از خدمات آرایش دائم به جلسه ترمیم نیاز دارند، چون بخشی از رنگ پس از ترمیم اولیه پوست کم‌رنگ‌تر می‌شود. زمان مناسب ترمیم معمولاً بعد از بررسی وضعیت پوست و نتیجه جلسه اول مشخص می‌شود. عدم حضور در جلسه ترمیم می‌تواند روی یکنواختی، ماندگاری و کامل شدن نتیجه اثر بگذارد.',
  },
  {
    title: '۵. مراقبت قبل و بعد از کار',
    text: 'رعایت مراقبت‌های قبل و بعد از خدمات، بخشی از روند رسیدن به نتیجه بهتر است. تماس زیاد با آب، دست‌کاری ناحیه، استفاده از محصولات نامناسب، قرار گرفتن در معرض آفتاب یا رعایت نکردن توصیه‌های مراقبتی می‌تواند روی رنگ‌پذیری، ترمیم پوست و ماندگاری نتیجه اثر بگذارد.',
  },
  {
    title: '۶. نتیجه، رنگ‌پذیری و ماندگاری',
    text: 'نتیجه آرایش دائم برای همه افراد یکسان نیست. نوع پوست، رنگ‌پذیری، سبک زندگی، مراقبت بعد از کار، سابقه تاتو قبلی و انجام ترمیم، همگی روی نتیجه نهایی اثر دارند. به همین دلیل، وعده نتیجه کاملاً یکسان یا ماندگاری قطعی برای همه افراد داده نمی‌شود.',
  },
  {
    title: '۷. متریال و اصول بهداشتی',
    text: 'در انجام خدمات، رعایت اصول بهداشتی، استفاده از ابزار مناسب و توجه به ایمنی مراجعه‌کننده اهمیت دارد. هرگونه ادعا درباره نوع برند، کشور سازنده، ترکیبات یا ویژگی‌های دقیق مواد مصرفی فقط زمانی در سایت یا مشاوره اعلام می‌شود که اطلاعات آن قابل بررسی و تأیید باشد.',
  },
  {
    title: '۸. تصاویر نمونه‌کارها',
    text: 'تصاویر نمونه‌کارها برای نمایش سبک اجرا و کمک به تصمیم‌گیری مراجعین استفاده می‌شوند. انتشار تصاویر قبل و بعد یا تصاویر مربوط به خدمات، فقط در صورت دریافت رضایت لازم انجام می‌شود. در صورت انتشار، تلاش می‌شود اطلاعات هویتی غیرضروری نمایش داده نشود.',
  },
  {
    title: '۹. هزینه خدمات',
    text: 'هزینه خدمات ممکن است بر اساس نوع خدمت، میزان اصلاح مورد نیاز، سابقه تاتو قبلی، نیاز به ترمیم یا شرایط خاص هر مراجعه‌کننده متفاوت باشد. اعلام هزینه دقیق‌تر معمولاً بعد از مشاوره و بررسی وضعیت انجام می‌شود.',
  },
  {
    title: '۱۰. تغییرات در شرایط و ضوابط',
    text: 'ممکن است این صفحه در آینده بر اساس تغییر روند خدمات، فرم‌های رزرو، روش‌های ارتباطی یا نیازهای سایت به‌روزرسانی شود. نسخه منتشرشده در همین صفحه، مبنای شرایط فعلی اطلاع‌رسانی سایت است.',
  },
]

export default function TermsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/terms#webpage`,
        url: `${siteUrl}/terms`,
        name: 'شرایط و ضوابط خدمات فاطمه درویشی',
        description:
          'شرایط رزرو، مشاوره، کنسلی، ترمیم، مراقبت و استفاده از خدمات آرایش دائم فاطمه درویشی.',
        inLanguage: 'fa-IR',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/terms#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'خانه',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'شرایط و ضوابط',
            item: `${siteUrl}/terms`,
          },
        ],
      },
    ],
  }

  return (
    <main className='w-full bg-gray-50 py-16 md:py-20' dir='rtl'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className='container mx-auto px-4'>
        <article className='mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-10'>
          <header className='mb-10 border-b border-gray-100 pb-6'>
            <p className='mb-4 inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700'>
              قوانین رزرو و استفاده از خدمات
            </p>

            <h1 className='mb-4 text-3xl font-black leading-tight text-gray-950 md:text-4xl'>
              شرایط و ضوابط خدمات
            </h1>

            <p className='leading-8 text-gray-600'>
              پیش از رزرو خدمات آرایش دائم، مطالعه این صفحه کمک می‌کند با روند
              مشاوره، رزرو، ترمیم، مراقبت بعد از کار و محدودیت‌های احتمالی
              آشنا شوید. این متن برای شفاف‌سازی روند خدمات است و جایگزین
              مشاوره پزشکی یا حقوقی تخصصی نیست.
            </p>
          </header>

          <div className='space-y-8'>
            {termsSections.map((section) => (
              <section key={section.title}>
                <h2 className='mb-3 text-xl font-black text-gray-950'>
                  {section.title}
                </h2>
                <p className='leading-9 text-gray-700'>{section.text}</p>
              </section>
            ))}

            <section className='rounded-2xl border border-emerald-100 bg-emerald-50 p-5'>
              <h2 className='mb-3 text-xl font-black text-gray-950'>
                راه ارتباطی برای سوال درباره شرایط خدمات
              </h2>

              <div className='space-y-3 text-sm leading-8 text-gray-700'>
                <p>
                  تلفن:{' '}
                  <a
                    href={`tel:${phoneHref}`}
                    className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
                  >
                    {phoneNumber}
                  </a>
                </p>

                <p>
                  ایمیل:{' '}
                  <a
                    href={`mailto:${emailAddress}`}
                    className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
                  >
                    {emailAddress}
                  </a>
                </p>
              </div>
            </section>
          </div>

          <footer className='mt-10 flex flex-col gap-4 border-t border-gray-100 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between'>
            <p className='m-0'>آخرین به‌روزرسانی: ۱۴۰۵</p>

            <div className='flex flex-wrap gap-4'>
              <Link
                href='/privacy'
                className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
              >
                سیاست حفظ حریم خصوصی
              </Link>

              <Link
                href='/contact-us'
                className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
              >
                تماس و رزرو
              </Link>

              <Link
                href='/services'
                className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
              >
                مشاهده خدمات
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </main>
  )
}