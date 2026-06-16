// app/blog/page.tsx

import Link from "next/link";

export default function BlogPage() {
  
  // آرایه کامل تمامی ۱۶ مقاله قدیمی شما به همراه کارت به زودی
  const blogPosts = [
    {
      id: 1,
      slug: "post1",
      img: "/2.jpg",
      alt: "تصویر مراقبت بعد از فیبروز ابرو",
      author: "م .اشرفی",
      date: "۱ تیر ۱۴۰۴",
      title: "مراقبت‌های ضروری بعد از فیبروز ابرو",
      desc: "نتیجه نهایی فیبروز، ۵۰٪ به مهارت پیگمنتر و ۵۰٪ به مراقبت شما بستگی دارد..."
    },
    {
      id: 2,
      slug: "post2",
      img: "/4.jpg",
      alt: "مقایسه میکروبلیدینگ و میکروپیگمنتیشن",
      author: "م .اشرفی",
      date: "۸ تیر ۱۴۰۴",
      title: "تفاوت میکروبلیدینگ و میکروپیگمنتیشن",
      desc: "کدام تکنیک برای نوع پوست و مدل ابروی شما مناسب‌تر است؟ در این مقاله تفاوت‌ها را بررسی می‌کنیم..."
    },
    {
      id: 3,
      slug: "post3",
      img: "/5.jpg",
      alt: "درد خط چشم دائم",
      author: "م .اشرفی",
      date: "۱۵ تیر ۱۴۰۴",
      title: "آیا خط چشم دائم درد دارد؟",
      desc: '"درد" اصلی‌ترین مانع ذهنی مشتریان است. این مقاله به آن‌ها اطمینان خاطر می‌دهد...'
    },
    {
      id: 4,
      slug: "post4",
      img: "/111.jpg",
      alt: "راهنمای کامل آرایش دائم",
      author: "م .اشرفی",
      date: "۲۰ تیر ۱۴۰۴",
      title: "راهنمای کامل آرایش دائم: هرآنچه باید بدانید",
      desc: "پاسخ تمام سوالات شما از چیستی آرایش دائم گرفته تا ماندگاری, عوارض و انتخاب بهترین متخصص..."
    },
    {
      id: 5,
      slug: "post5",
      img: "/141.jpg",
      alt: "مقایسه کاشت ابرو و میکروبلیدینگ",
      author: "م. اشرفی",
      date: "۲۵ تیر ۱۴۰۴",
      title: "کاشت ابرو بهتر است یا میکروبلیدینگ؟",
      desc: "مقایسه کامل دو روش از نظر هزینه، ماندگاری، درد و ظاهر نهایی. یک بار برای همیشه بهترین انتخاب را برای خودتان انجام دهید..."
    },
    {
      id: 6,
      slug: "post6",
      img: "/137.jpg",
      alt: "انتخاب بهترین مرکز میکروبلیدینگ در مشهد",
      author: "م. اشرفی",
      date: "۳۰ تیر ۱۴۰۴",
      title: "چطور بهترین مرکز میکروبلیدینگ در مشهد را انتخاب کنیم؟",
      desc: "با بررسی این ۵ نکته کلیدی، بهترین پیگمنتر را برای زیبایی خود پیدا کنید و با اطمینان کامل تصمیم بگیرید..."
    },
    {
      id: 7,
      slug: "post7",
      img: "/138.jpg",
      alt: "بررسی هزینه و قیمت میکروبلیدینگ در مشهد",
      author: "م. اشرفی",
      date: "۵ مرداد ۱۴۰۴",
      title: "هزینه و قیمت میکروبلیدینگ در مشهد (سال ۱۴۰۴)",
      desc: "قیمت میکروبلیدینگ به چه عواملی بستگی دارد؟ بررسی کامل تعرفه‌ها و نکاتی برای یک انتخاب هوشمندانه..."
    },
    {
      id: 8,
      slug: "post8",
      img: "/140.jpg",
      alt: "بررسی عوارض میکروبلیدینگ و راه‌های پیشگیری",
      author: "م. اشرفی",
      date: "۱۰ مرداد ۱۴۰۴",
      title: "عوارض میکروبلیدینگ و راه‌های پیشگیری از آن",
      desc: "نگاهی واقع‌بینانه به خطرات و عوارض احتمالی فیبروز ابرو و روش‌های انجام یک کار کاملاً ایمن و بهداشتی..."
    },
    {
      id: 9,
      slug: "post9",
      img: "/126.jpg",
      alt: "مراقبت‌های قبل از انجام میکروبلیدینگ",
      author: "م. اشرفی",
      date: "۱۵ مرداد ۱۴۰۴",
      title: "مراقبت‌های قبل از میکروبلیدینگ که باید بدانید",
      desc: "با رعایت این نکات ساده قبل از جلسه، به ماندگاری بیشتر و نتیجه بهتر ابروهای جدیدتان کمک کنید..."
    },
    {
      id: 10,
      slug: "post10",
      img: "/152.jpg",
      alt: "راهنمای کامل تینت لب دائم",
      author: "م. اشرفی",
      date: "۱ مرداد ۱۴۰۴",
      title: "تینت لب دائم چیست؟ راهنمای کامل جدیدترین ترند زیبایی",
      desc: "راهنمای کامل جدیدترین تکنیک آرایش دائم لب، مقایسه با رژ لب دائم، و هرآنچه باید بدانید..."
    },
    {
      id: 11,
      slug: "post11",
      img: "/abroo-1000.jpg",
      alt: "ماندگاری میکروبلیدینگ و فیبروز ابرو",
      author: "م. اشرفی",
      date: "۲۰ مرداد ۱۴۰۴",
      title: "ماندگاری میکروبلیدینگ چقدر است؟ (عوامل موثر)",
      desc: "بررسی کامل عوامل موثر بر دوام آرایش دائم، از جمله نوع پوست، مراقبت‌ها و زمان ترمیم..."
    },
    {
      id: 12,
      slug: "post12",
      img: "/137.jpg",
      alt: "راهنمای کامل میکروبلیدینگ در مشهد",
      author: "م. اشرفی",
      date: "۱۰ مرداد ۱۴۰۴",
      title: "میکروبلیدینگ در مشهد: راهنمای کامل (قیمت و بهترین مراکز)",
      desc: "هرآنچه درباره قیمت، ماندگاری، بهترین مراکز، مراقبت‌ها و عوارض فیبروز ابرو در سال ۱۴۰۴ باید بدانید..."
    },
    {
      id: 13,
      slug: "post13",
      img: "/152.jpeg",
      alt: "دوران نقاهت میکروبلیدینگ روز به روز",
      author: "م. اشرفی",
      date: "۲۰ مرداد ۱۴۰۴",
      title: "دوران نقاهت میکروبلیدینگ روز به روز",
      desc: "سفر بهبودی و مراحل خوب شدن ابرو بعد از فیبروز، از تیرگی اولیه تا تثبیت کامل رنگ..."
    },
    {
      id: 14,
      slug: "post14",
      img: "/rimove.jpg",
      alt: "اصلاح تاتوی قدیمی ابرو",
      author: "م. اشرفی",
      date: "۲۵ مرداد ۱۴۰۴",
      title: "آیا می‌توان تاتوی قدیمی ابرو را اصلاح کرد؟",
      desc: "راهنمای کامل برای پاک کردن (ریموو) یا پوشاندن (کاورآپ) تاتوهای قدیمی و رسیدن به ابروهایی جدید و زیبا..."
    },
    {
      id: 15,
      slug: "post15",
      img: "/139.jpg",
      alt: "بن مژه چیست؟",
      author: "م. اشرفی",
      date: "۳۰ مرداد ۱۴۰۴",
      title: "بن مژه چیست؟ راز داشتن چشمانی گیرا",
      desc: "آشنایی با تکنیک ظریف بن مژه، تفاوت آن با خط چشم دائم و تاثیر آن در پرپشت نشان دادن مژه‌ها..."
    },
    {
      id: 16,
      slug: "post16",
      img: "/abroo-1003.jpg",
      alt: "جدیدترین مدل‌های میکروبلیدینگ و فیبروز ابرو (گالری کامل ۱۴۰۴)",
      author: "م. اشرفی",
      date: "۱۰ شهریور ۱۴۰۴",
      title: "جدیدترین مدل‌های میکروبلیدینگ و فیبروز ابرو (گالری کامل ۱۴۰۴)ترند زیبایی",
      desc: "آشنایی با هنر سایه چشم دائم، تفاوت آن با خط چشم، ماندگاری، قیمت و هرآنچه باید بدانید..."
    }
  ];

  return (
    <div className="w-full bg-gray-50/50 min-h-screen">
      <main className="container mx-auto px-4 py-12 md:py-20 font-sans">
        
        {/* هدر بالایی صفحه وبلاگ[cite: 2] */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-950">
            وبلاگ و مقالات آموزشی
          </h1>
          <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            جدیدترین نکات و اطلاعات تخصصی در زمینه آرایش دائم و زیبایی را اینجا بخوانید.
          </p>
        </div>

        {/* گرید نمایش پویای کارت‌های مقالات[cite: 2] */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden flex flex-col transform hover:-translate-y-1.5 hover:shadow-md transition duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <img 
                  src={post.img} 
                  alt={post.alt} 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                  <span>نویسنده: {post.author}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-lg font-bold mb-3 text-gray-950 flex-grow leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-emerald-800 no-underline transition">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 text-justify">
                  {post.desc}
                </p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="font-bold text-emerald-700 hover:text-emerald-800 hover:underline mt-auto text-sm no-underline inline-flex items-center gap-1"
                >
                  ادامه مطلب ←
                </Link>
              </div>
            </div>
          ))}

          {/* کارت مقاله نمونه (به زودی)[cite: 2] */}
          <div className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden flex flex-col opacity-65">
            <div className="w-full h-48 bg-emerald-50/50 flex items-center justify-center border-b border-gray-100">
              <span className="text-emerald-800 font-extrabold text-sm tracking-wide">Coming Soon</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
                <span>نویسنده: م .اشرفی</span>
                <span>به زودی...</span>
              </div>
              <h2 className="text-lg font-bold mb-3 text-gray-400 flex-grow leading-snug">
                عوارض آرایش دائم: آیا واقعا خطرناک است؟
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                بررسی واقع‌بینانه عوارض احتمالی و راه‌های پیشگیری از آن‌ها برای یک تجربه کاملاً ایمن.
              </p>
              <span className="font-bold text-gray-400 text-sm mt-auto cursor-not-allowed">
                ادامه مطلب ←
              </span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}