import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'نمونه کارها | فاطمه درویشی - آرایش دائم و فیبروز ابرو در مشهد',
  description:
    'نمونه کارهای تخصصی فاطمه درویشی: میکروبلیدینگ، فیبروز ابرو، خط چشم و رژ لب دائم در مشهد. صدها مشتری راضی و ابروهای فوق‌العاده طبیعی.',
  keywords: [
    'نمونه کار میکروبلیدینگ',
    'نمونه کار فیبروز ابرو',
    'آرایش دائم نمونه کار',
    'خط چشم دائم',
    'رژ لب دائم',
    'مرکز زیبایی مشهد',
  ],
  openGraph: {
    title: 'نمونه کارهای بی‌نظیر آرایش دائم | فاطمه درویشی',
    description:
      'دیدن نمونه کارهای واقعی و تبدیل‌های شگفت‌انگیز با تکنیک میکروبلیدینگ و فیبروز ابرو.',
    type: 'website',
    url: 'https://fatemedarvishi.ir/services',
    images: [
      {
        url: 'https://fatemedarvishi.ir/optimized/abroo-1000.webp',
        alt: 'نمونه کار میکروبلیدینگ ابرو توسط فاطمه درویشی',
      },
    ],
  },
}

const portfolioImages = [
  // ابرو نمونه‌ها
  {
    src: '/optimized/abroo-1000.webp',
    alt: 'نمونه کار میکروبلیدینگ ابرو نچرال - روش فیبروز',
    category: 'میکروبلیدینگ ابرو',
  },
  {
    src: '/optimized/abroo-1001.webp',
    alt: 'نمونه کار فیبروز ابرو ظریف - بدون کادر سنتی',
    category: 'میکروبلیدینگ ابرو',
  },
  {
    src: '/optimized/abroo-1002.webp',
    alt: 'آرایش دائم ابرو - خطوط موی طبیعی',
    category: 'میکروبلیدینگ ابرو',
  },
  {
    src: '/optimized/abroo-1003.webp',
    alt: 'نمونه کار کانتور ابرو نچرال - ریمیکس ابرو',
    category: 'میکروبلیدینگ ابرو',
  },

  // گالری قبل و بعد
  {
    src: '/optimized/nemooneh.webp',
    alt: 'مقایسه قبل و بعد فیبروز ابرو - تبدیل شگفت‌انگیز',
    category: 'قبل و بعد',
  },
  {
    src: '/optimized/1004.webp',
    alt: 'نتیجهٔ میکروبلیدینگ - ابروهای کامل و متقارن',
    category: 'نتایج',
  },
  {
    src: '/optimized/1005.webp',
    alt: 'نمونه کار خط چشم دائم - چشمان گیرا',
    category: 'خط چشم دائم',
  },
  {
    src: '/optimized/1006.webp',
    alt: 'نمونه کار رژ لب دائم - لب‌های خوش‌رنگ',
    category: 'رژ لب دائم',
  },
  {
    src: '/optimized/1007.webp',
    alt: 'آرایش دائم کامل - ابرو، چشم و لب',
    category: 'کامل',
  },
  {
    src: '/optimized/1008.webp',
    alt: 'نمونه کار میکروپیگمنتیشن - سایه‌روشن لب',
    category: 'رژ لب دائم',
  },
  {
    src: '/optimized/1009.webp',
    alt: 'فیبروز ابرو طبیعی - خطوط ظریف',
    category: 'میکروبلیدینگ ابرو',
  },
  {
    src: '/optimized/1010.webp',
    alt: 'ریموو و اصلاح تاتو ابرو قدیمی',
    category: 'اصلاح',
  },
  {
    src: '/optimized/1011.webp',
    alt: 'نمونه کار بن مژه - بن مژه دائم',
    category: 'خط چشم دائم',
  },
  {
    src: '/optimized/1012.webp',
    alt: 'شیدینگ لب دائم - لب‌های مخملی',
    category: 'رژ لب دائم',
  },
  {
    src: '/optimized/1013.webp',
    alt: 'نمونه کار کاملی از میکروپیگمنتیشن',
    category: 'کامل',
  },
  {
    src: '/optimized/1014.webp',
    alt: 'ابرو‌های پر و نچرال - فیبروز ابرو',
    category: 'میکروبلیدینگ ابرو',
  },
  {
    src: '/optimized/1015.webp',
    alt: 'خط چشم دائم ظریف و خوش‌حال',
    category: 'خط چشم دائم',
  },
  {
    src: '/optimized/1016.webp',
    alt: 'رژ لب دائم در رنگ‌های طبیعی',
    category: 'رژ لب دائم',
  },

  // نمونه‌های اضافی
  {
    src: '/optimized/137.webp',
    alt: 'نمونه کار میکروبلیدینگ - ابروهای متقارن',
    category: 'میکروبلیدینگ ابرو',
  },
  {
    src: '/optimized/138.webp',
    alt: 'فیبروز ابرو - حالت‌دهی طبیعی',
    category: 'میکروبلیدینگ ابرو',
  },
  {
    src: '/optimized/139.webp',
    alt: 'بن مژه دائم - چشم‌های درخشان',
    category: 'خط چشم دائم',
  },
  {
    src: '/optimized/140.webp',
    alt: 'نمونه کار آرایش دائم کامل',
    category: 'کامل',
  },
  {
    src: '/optimized/141.webp',
    alt: 'ابرو‌های پر و برجسته - فیبروز ابرو',
    category: 'میکروبلیدینگ ابرو',
  },
]

export default function ServicesPage() {
  return (
    <div className='w-full bg-gray-50 min-h-screen' dir='rtl'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'مرکز زیبایی فاطمه درویشی',
            image: 'https://fatemedarvishi.ir/optimized/abroo-1000.webp',
            description: 'متخصص آرایش دائم و فیبروز ابرو در مشهد',
            url: 'https://fatemedarvishi.ir/services',
            telephone: '09391813879',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱',
              addressLocality: 'مشهد',
              postalCode: 'توس ۱۶۰',
              addressCountry: 'IR',
            },
            areaServed: 'Mashhad',
            priceRange: '$$',
          }),
        }}
      />

      <section className='py-16 md:py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h1 className='text-3xl md:text-4xl font-black text-gray-950 mb-4'>
              نمونه کارهای ما
            </h1>
            <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
              صدها مشتری راضی و تبدیل‌های شگفت‌انگیز. دیدن نمونه‌ها قبل از
              تصمیم‌گیری بهترین راه است.
            </p>
          </div>
        </div>
      </section>

      {/* گالری تصاویر */}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {portfolioImages.map((img, idx) => (
              <div
                key={idx}
                className='group overflow-hidden rounded-2xl shadow-xs bg-white border border-gray-100 hover:shadow-lg transition duration-300'
              >
                <div className='relative overflow-hidden bg-gray-200'>
                  <img
                    src={img.src}
                    alt={img.alt}
                    title={img.alt}
                    className='w-full h-64 object-cover group-hover:scale-110 transition duration-500'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-end p-4'>
                    <span className='text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition duration-300'>
                      {img.category}
                    </span>
                  </div>
                </div>
                <div className='p-4'>
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* بخش CTA */}
      <section className='py-16 bg-emerald-700 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            شما نیز می‌تونی بخش از موفقیت‌های ما باشی
          </h2>
          <p className='text-base md:text-lg mb-8 opacity-90'>
            آماده‌ای تا تبدیلی شگفت‌انگیز در صورتت رخ دهد؟
          </p>
          <a
            href='/contact-us'
            className='inline-block bg-white text-emerald-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 no-underline'
          >
            رزرو وقت مشاوره
          </a>
        </div>
      </section>
    </div>
  )
}
