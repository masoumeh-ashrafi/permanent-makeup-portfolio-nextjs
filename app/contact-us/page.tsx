import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تماس با من | فاطمه درویشی - رزرو وقت در مشهد',
  description:
    'فرم تماس و آدرس مرکز زیبایی فاطمه درویشی. رزرو وقت، مشاوره و سوالات خود را سریع ارسال کنید.',
  keywords: [
    'تماس با ما',
    'رزرو وقت',
    'مرکز زیبایی مشهد',
    'مشاوره آرایش دائم',
    'آدرس سالن مشهد',
  ],
  openGraph: {
    title: 'تماس با مرکز زیبایی فاطمه درویشی | رزرو وقت و مشاوره',
    description:
      'برای رزرو وقت یا دریافت مشاوره در زمینه آرایش دائم، فیبروز و میکروبلیدینگ از طریق فرم تماس اقدام کنید.',
    type: 'website',
    url: 'https://fatemedarvishi.ir/contact-us',
  },
}

export default function ContactPage() {
  return (
    <div className='w-full' dir='rtl'>
      <div className='animated-background' aria-hidden />

      <section
        className='hero-contact-bg text-white py-20 md:py-32 text-center shadow-lg mx-4 mt-4 rounded-b-lg'
        style={{ backgroundImage: "url('/header-bg.webp')" }}
      >
        <div className='container mx-auto px-4 relative z-10'>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-4 leading-tight'>
            با ما در تماس باشید
          </h2>
          <p className='text-lg md:text-xl max-w-3xl mx-auto opacity-90'>
            مشاوره رایگان بگیرید، سوالات خود را بپرسید یا وقت رزرو کنید.
          </p>
        </div>
      </section>

      <main className='flex-grow container mx-auto px-4 py-16 md:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='bg-white p-10 rounded-xl shadow-lg border border-gray-100'>
            <h3 className='text-3xl font-bold text-gray-900 mb-8 text-center lg:text-right'>
              اطلاعات تماس
            </h3>

            <div className='space-y-8'>
              <div className='flex items-start text-gray-700'>
                <svg
                  className='w-8 h-8 text-emerald-700 flex-shrink-0 mt-1 ml-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  ></path>
                </svg>
                <div>
                  <p className='font-semibold text-xl'>آدرس:</p>
                  <p className='text-lg'>
                    مشهد، بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱ ،توس ۱۶۰ ،مرکز
                    زیبایی فاطمه درویشی
                  </p>
                </div>
              </div>

              <div className='flex items-start text-gray-700'>
                <svg
                  className='w-8 h-8 text-emerald-700 flex-shrink-0 mt-1 ml-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  ></path>
                </svg>
                <div>
                  <p className='font-semibold text-xl'>تلفن:</p>
                  <p className='text-lg' dir='ltr'>
                    <a
                      href='tel:09391813879'
                      className='hover:underline text-emerald-700'
                    >
                      0939 181 3879
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-start text-gray-700'>
                <svg
                  className='w-8 h-8 text-emerald-700 flex-shrink-0 mt-1 ml-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  ></path>
                </svg>
                <div>
                  <p className='font-semibold text-xl'>ایمیل:</p>
                  <p className='text-lg'>
                    <a
                      href='mailto:FatemeDarvishi71@gmail.ir'
                      className='hover:underline text-emerald-700'
                    >
                      FatemeDarvishi71@gmail.ir
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-start text-gray-700'>
                <svg
                  className='w-8 h-8 text-emerald-700 flex-shrink-0 mt-1 ml-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
                <div>
                  <p className='font-semibold text-xl'>ساعات کاری:</p>
                  <p className='text-lg'>شنبه تا پنجشنبه: ۱۰ صبح - ۷ شب</p>
                  <p className='text-lg'>جمعه‌ها: با تعیین وقت قبلی</p>
                </div>
              </div>

              <div className='flex items-center justify-center lg:justify-start pt-4'>
                <a
                  href='#'
                  target='_blank'
                  rel='noreferrer'
                  className='text-gray-600 hover:text-emerald-700 mx-2 transition duration-300'
                >
                  <svg
                    className='w-10 h-10'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.315 2.404A.75.75 0 0112 2.25c-5.343 0-9.75 4.148-9.75 9.25 0 1.604.412 3.12 1.196 4.498a10.027 10.027 0 005.158 4.792c.677.269 1.49.206 2.035-.14a6.837 6.837 0 003.542-4.045c.29-.86-.542-1.754-1.48-1.57A.75.75 0 0017.3 15c.341 0 .673-.069.983-.199.414-.176.786-.41.979-.684.288-.415.54-1.127.72-2.146.126-.692.21-1.39.21-2.062 0-3.003-2.096-5.597-4.997-6.386zM8.315 11.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z'
                      clipRule='evenodd'
                    />
                    <path
                      fillRule='evenodd'
                      d='M8.315 11.25c0-.985-.453-1.895-1.25-2.527a4.5 4.5 0 00-6.364 6.364l1.768 1.768a4.502 4.502 0 006.364 0l1.768-1.768a4.5 4.5 0 000-6.364z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className='bg-white p-10 rounded-xl shadow-lg border border-gray-100'>
            <h3 className='text-3xl font-bold text-gray-900 mb-8 text-center lg:text-right'>
              ارسال پیام
            </h3>
            <form
              className='max-w-full mx-auto'
              action='https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT_HERE'
              method='POST'
            >
              <div className='mb-6'>
                <label
                  htmlFor='name'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  نام:
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='نام کامل شما'
                  className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-transparent transition duration-200'
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='email'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  ایمیل:
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='ایمیل شما'
                  className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-transparent transition duration-200'
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='phone'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  شماره تلفن (اختیاری):
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  placeholder='شماره تلفن برای تماس'
                  className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-transparent transition duration-200'
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='subject'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  موضوع:
                </label>
                <input
                  type='text'
                  id='subject'
                  name='_subject'
                  placeholder='موضوع پیام'
                  className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-transparent transition duration-200'
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='message'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  پیام شما:
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  placeholder='پیام خود را اینجا بنویسید...'
                  className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-200 focus:border-transparent transition duration-200'
                  required
                />
              </div>
              <input type='hidden' name='_next' value='/thanks' />
              <button
                type='submit'
                className='w-full bg-emerald-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-emerald-800 transition duration-300 transform hover:scale-105'
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>

        <div className='mt-16 bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
          <h3 className='text-3xl font-bold text-center mb-8 text-gray-900'>
            موقعیت ما روی نقشه
          </h3>
          <div
            className='map-container overflow-hidden rounded-lg'
            style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4243884803513!2d59.57444311516104!3d36.25203368006275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f220de1b7e3f947%3A0xb3e1b7e3f947b3e1!2z2qnZiCDZh9uM2K_Ys9iq!5e0!3m2!1sen!2s!4v1678912345678!5m2!1sen!2s'
              width='100%'
              height='450'
              style={{
                border: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
          <p className='text-center text-gray-600 mt-4'>
            برای مشاهده دقیق موقعیت، روی نقشه بالا کلیک کنید.
          </p>
        </div>
      </main>
    </div>
  )
}
