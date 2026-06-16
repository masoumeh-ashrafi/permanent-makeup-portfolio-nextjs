import AboutCanvas from './AboutCanvas'
import AboutImage from './AboutImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'درباره من | فاطمه درویشی - متخصص آرایش دائم در مشهد',
  description:
    'با فاطمه درویشی، متخصص آرایش دائم و زیبایی در مشهد آشنا شوید. داستان کاری، تجربه و تخصص من برای ایجاد نتایج طبیعی و ماندگار.',
  keywords: [
    'درباره من',
    'فاطمه درویشی',
    'آرایش دائم مشهد',
    'فیبروز ابرو',
    'میکروبلیدینگ',
  ],
  openGraph: {
    title: 'درباره فاطمه درویشی | متخصص آرایش دائم',
    description:
      'آشنایی با تجربه، روش کاری و گواهینامه‌های فاطمه درویشی در حوزه آرایش دائم.',
    type: 'website',
    url: 'https://fatemedarvishi.ir/about-us',
    images: [
      {
        url: 'https://fatemedarvishi.ir/optimized/me.webp',
        alt: 'فاطمه درویشی متخصص آرایش دائم',
      },
    ],
  },
}

export default function AboutUsPage() {
  return (
    <div
      className='w-full bg-gray-50 min-h-screen py-12 md:py-20 font-sans'
      dir='rtl'
    >
      <AboutCanvas />

      <div className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden'>
          <div className='flex flex-col lg:flex-row'>
            {/* ستون تصویر */}
            <div className='w-full lg:w-1/3'>
              <AboutImage />
            </div>

            {/* ستون محتوا */}
            <div className='w-full lg:w-2/3 p-8 md:p-12 content-section'>
              <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-4'>
                درباره فاطمه درویشی
              </h1>
              <p className='text-lg font-medium text-emerald-700 mb-8'>
                متخصص زیبایی و آرایش دائم
              </p>

              <h2 className='text-2xl font-bold text-gray-800 mt-8 mb-4 border-r-4 border-emerald-700 pr-4'>
                داستان من
              </h2>
              <p className='text-gray-700'>
                سلام، من فاطمه درویشی هستم. از کودکی به دنیای هنر و زیبایی
                علاقه‌مند بودم و همیشه باور داشتم که زیبایی واقعی، در هماهنگی و
                طبیعی بودن اجزای چهره نهفته است. این علاقه من را به سمت دنیای
                تخصصی آرایش دائم هدایت کرد. من سال‌ها با عشق و پشتکار در این
                زمینه مطالعه و تمرین کرده‌ام تا بتوانم با استفاده از جدیدترین
                تکنیک‌ها و بهترین متریال، به شما کمک کنم تا زیبایی طبیعی خود را
                به شکلی ماندگار به نمایش بگذارید.
              </p>

              <h2 className='text-2xl font-bold text-gray-800 mt-10 mb-4 border-r-4 border-emerald-700 pr-4'>
                تخصص و فلسفه کاری من
              </h2>
              <p className='text-gray-700'>
                تخصص اصلی من در خدمات میکروپیگمنتیشن و میکروبلیدینگ ابرو، خط چشم
                و کانتور لب است. فلسفه کاری من بر سه اصل استوار است:{' '}
                <strong>دقت، هنر و سلامت</strong>. من معتقدم هر چهره‌ای منحصر به
                فرد است و طراحی باید کاملاً اختصاصی و متناسب با اجزای صورت شما
                انجام شود. استفاده از رنگ‌های ارگانیک و تجهیزات استریل، اولویت
                اصلی من برای تضمین سلامت شماست.
              </p>

              <div className='mt-12 pt-8 border-t border-gray-200'>
                <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
                  گواهینامه‌ها و مدارک
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div className='text-center'>
                    <img
                      src='/optimized/my.webp'
                      alt='عکس مدرک فنی حرفه‌ای'
                      className='rounded-lg shadow-md w-full mb-3'
                    />
                    <p className='text-sm text-gray-600 font-medium'>
                      مدرک معتبر فنی و حرفه‌ای
                    </p>
                  </div>
                  <div className='text-center'>
                    <img
                      src='/optimized/degree.webp'
                      alt='عکس مدرک بین‌المللی'
                      className='rounded-lg shadow-md w-full mb-3'
                    />
                    <p className='text-sm text-gray-600 font-medium'>
                      گواهینامه بین‌المللی آرایش دائم
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-12 pt-8 border-t border-gray-200'>
                <h3 className='text-xl font-bold text-gray-800 mb-4 text-center'>
                  راه‌های ارتباطی من
                </h3>
                <div className='text-center text-gray-700 mb-6'>
                  <p className='mb-2'>
                    📍 مشهد، بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱، توس ۱۶۰
                  </p>
                  <a href='tel:09391813879' className='hover:text-emerald-700'>
                    📞 09391813879
                  </a>
                </div>
                <div className='flex justify-center items-center gap-6'>
                  <a
                    href='https://t.me/fatemehdarvishpour2020'
                    target='_blank'
                    rel='noreferrer'
                    className='text-gray-500 hover:text-blue-500 transition-colors duration-300 text-3xl'
                  >
                    <i className='fab fa-telegram'></i>
                  </a>
                  <a
                    href='https://www.instagram.com/fatemedarvish.ir?igsh=Z3BidGZyc24zNW5r'
                    target='_blank'
                    rel='noreferrer'
                    className='text-gray-500 hover:text-pink-500 transition-colors duration-300 text-3xl'
                  >
                    <i className='fab fa-instagram'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
