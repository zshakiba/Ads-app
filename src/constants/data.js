export const comments = [
  {
    id: 1,
    name: "علی محمدی",
    role: "راننده",
    comment:
      "با استفاده از این اپلیکیشن، توانستم به راحتی به مسافران دسترسی پیدا کنم و درآمد خوبی کسب کنم. پشتیبانی اپلیکیشن نیز بسیار عالی است. کار با آن بسیار ساده و سریع است.",
    avatar: "/images/testimonials/auth-04.jpg",
  },
  {
    id: 2,
    name: "فاطمه احمدی",
    role: "تبلیغ‌دهنده",
    comment:
      "تبلیغات من در این پلتفرم به سرعت به دست کاربران رسید. بازخوردی که از مشتریان دریافت کردم، فوق‌العاده بود. امکانات اپلیکیشن برای انتخاب نوع تبلیغ و نظارت بر عملکرد، بسیار کاربردی است.",
    avatar: "/images/testimonials/auth-04.jpg",
  },
  {
    id: 3,
    name: "محمد حسینی",
    role: "ادمین",
    comment:
      "مدیریت سیستم بسیار آسان و کاربرپسند است. با استفاده از ابزارهای موجود، قادر به پیگیری فعالیت‌های رانندگان و تبلیغ‌دهندگان به صورت آنلاین هستم. گزارشات دقیق و جامعی از عملکرد سیستم به دست می‌آورم.",
    avatar: "/images/testimonials/auth-04.jpg",
  },
  {
    id: 4,
    name: "محمد حسینی",
    role: "ادمین",
    comment:
      "مدیریت سیستم بسیار آسان و کاربرپسند است. ابزارهای موجود به من امکان پیگیری فعالیت‌ها را به صورت آنلاین می‌دهند. گزارشات دقیق و جامعی از عملکرد سیستم به دست می‌آورم.",
    avatar: "/images/testimonials/auth-04.jpg",
  },
  {
    id: 5,
    name: "محمد حسینی",
    role: "ادمین",
    comment:
      "مدیریت سیستم بسیار آسان و کاربرپسند است. ابزارهای موجود به من امکان پیگیری فعالیت‌ها را به صورت آنلاین می‌دهند. گزارشات دقیق و جامعی از عملکرد سیستم به دست می‌آورم.",
    avatar: "/images/testimonials/auth-04.jpg",
  },
  {
    id: 6,
    name: "محمد حسینی",
    role: "ادمین",
    comment:
      "مدیریت سیستم بسیار آسان و کاربرپسند است. ابزارهای موجود به من امکان پیگیری فعالیت‌ها را به صورت آنلاین می‌دهند. گزارشات دقیق و جامعی از عملکرد سیستم به دست می‌آورم.",
    avatar: "/images/testimonials/auth-04.jpg",
  },
];

export const searchFields = [
  {
    name: "coverageType",
    label: "نوع پوشش تبلیغات",
    type: "select",
    options: [
      { value: "", label: "انتخاب نوع پوشش" },
      { value: "specific", label: "لوکیشن خاص" },
      { value: "regional", label: "منطقه‌ای" },
      { value: "national", label: "سراسری" },
      { value: "dynamic", label: "جهشی" },
    ],
  },
  {
    name: "mainCategory",
    label: "دسته‌بندی اصلی تبلیغات",
    type: "select",
    options: [
      { value: "", label: "انتخاب دسته‌بندی" },
      { value: "retail", label: "خرده‌فروشی" },
      { value: "food", label: "غذا و رستوران" },
      { value: "services", label: "خدمات" },
      { value: "education", label: "آموزشی" },
      { value: "health", label: "سلامت و درمان" },
      { value: "tech", label: "تکنولوژی و دیجیتال" },
      { value: "entertainment", label: "سرگرمی و تفریحی" },
      { value: "realestate", label: "املاک" },
    ],
  },
  {
    name: "subCategory",
    label: "زیر دسته تبلیغات",
    type: "select",
    options: [
      { value: "", label: "انتخاب زیر دسته" },
      // خرده‌فروشی
      { value: "supermarket", label: "سوپرمارکت" },
      { value: "clothing", label: "پوشاک" },
      { value: "electronics", label: "لوازم الکترونیکی" },
      // غذا و رستوران
      { value: "restaurant", label: "رستوران" },
      { value: "fastfood", label: "فست‌فود" },
      { value: "cafe", label: "کافه" },
      // خدمات
      { value: "insurance", label: "بیمه" },
      { value: "banking", label: "بانکداری" },
      { value: "maintenance", label: "تعمیرات" },
      // و غیره برای سایر دسته‌های اصلی
    ],
  },
  {
    name: "location",
    label: "موقعیت مکانی",
    type: "select",
    options: [
      { value: "", label: "انتخاب موقعیت" },
      { value: "tehran-all", label: "تهران - همه مناطق" },
      { value: "tehran-north", label: "تهران - شمال" },
      { value: "tehran-south", label: "تهران - جنوب" },
      { value: "tehran-east", label: "تهران - شرق" },
      { value: "tehran-west", label: "تهران - غرب" },
      { value: "tehran-center", label: "تهران - مرکز" },
      { value: "karaj", label: "کرج" },
      { value: "mashhad", label: "مشهد" },
      { value: "isfahan", label: "اصفهان" },
      { value: "shiraz", label: "شیراز" },
    ],
  },
  {
    name: "duration",
    label: "مدت زمان",
    type: "select",
    options: [
      { value: "", label: "انتخاب مدت" },
      { value: "1", label: "۱ ماه" },
      { value: "3", label: "۳ ماه" },
      { value: "6", label: "۶ ماه" },
      { value: "12", label: "۱۲ ماه" },
    ],
  },
  {
    name: "priceRange",
    label: "محدوده قیمت (تومان)",
    type: "range",
    placeholder: {
      min: "حداقل",
      max: "حداکثر",
    },
  },
];

export const driverMenuItems = [
  {
    label: "داشبورد",
    href: "/profile/driver",
  },
  {
    label: "ثبت وانت",
    href: "/profile/driver/register-van",
  },
  {
    label: "تبلیغات گرفته شده",
    href: "/profile/driver/accepted-ads",
  },
  {
    label: "تبلیغات تایید شده",
    href: "/profile/driver/confirmed-ads",
  },
  {
    label: "نقشه وانت‌ها",
    href: "/profile/driver/van-map",
  },
  {
    label: "پرداخت‌ها",
    href: "/profile/driver/payments",
  },
];

export const customerMenuItems = [
  {
    label: "داشبورد",
    href: "/profile/customer",
  },
  {
    label: "ثبت تبلیغ",
    href: "/profile/customer/register-ad",
  },
  {
    label: "پیگیری تبلیغ",
    href: "/profile/customer/track-ad",
  },
  {
    label: "صورتحساب‌ها",
    href: "/profile/customer/payments",
  },
];

export const benefits = [
  {
    title: "درآمدزایی پایدار",
    description:
      "با استفاده از وانت خود، به‌راحتی در هر زمان و هر مکان کسب درآمد کنید.",
    icon: "💰",
  },
  {
    title: "تبلیغات هوشمند و مؤثر",
    description:
      "کسب‌وکارها می‌توانند تبلیغات خود را به‌صورت هدفمند و متناسب با مخاطبان نمایش دهند.",
    icon: "📢",
  },
  {
    title: "مدیریت آسان و کارآمد",
    description:
      "با یک پنل کاربری حرفه‌ای، سفارش‌ها، پرداخت‌ها و تبلیغات خود را به سادگی مدیریت کنید.",
    icon: "⚙️",
  },
];

export const steps = [
  {
    title: "۱. ثبت‌نام و تکمیل اطلاعات",
    description:
      "حساب کاربری خود را در چند دقیقه ایجاد کنید و مشخصات فردی و وسیله نقلیه خود را ثبت نمایید.",
    icon: "📝",
  },
  {
    title: "۲. فعال‌سازی و دریافت تبلیغات",
    description:
      "پس از تأیید اطلاعات، وانت خود را در سامانه ثبت کرده و تبلیغات متناسب با موقعیت و مسیر خود را دریافت کنید.",
    icon: "🚛",
  },
  {
    title: "۳. شروع به کسب درآمد",
    description:
      "با نمایش تبلیغات روی وانت، به‌صورت روزانه درآمد داشته باشید و از هر مسیر به یک فرصت مالی تبدیل کنید.",
    icon: "💰",
  },
];

export const adTypes = [
  { value: "nationwide", label: "تبلیغات سراسری" },
  { value: "regional", label: "تبلیغات منطقه‌ای (مناطق تهران)" },
  { value: "location-based", label: "تبلیغات ثابت (لوکیشن خاص)" },
];

export const drivers = [
  {
    id: 1,
    name: "مهدی محمدی",
    vehicle: "وانت نیسان",
    adStatus: "فعال",
    avatar: "/images/testimonials/auth-01.jpg",
    adType: "تبلیغات منطقه‌ای",
    phone: "09123456789",
    email: "mehdi.mohammadi@example.com",
    location: { lat: 35.6895, lng: 51.389 }, // مختصات تهران
    reviews: [
      {
        user: "علی حسینی",
        comment: "راننده بسیار خوب و مسئولیت‌پذیر. توصیه می‌کنم.",
      },
      {
        user: "مریم کریمی",
        comment: "سرویس‌دهی عالی و به موقع. ممنون از زحمات شما.",
      },
    ],
  },
  {
    id: 2,
    name: "حسین بهرامی",
    vehicle: "وانت پراید",
    adStatus: "فعال",
    avatar: "/images/testimonials/auth-02.jpg",
    adType: "تبلیغات سراسری",
    phone: "09129876543",
    email: "hossein.bahrami@example.com",
    location: { lat: 36.2688, lng: 59.0636 }, // مختصات مشهد
    reviews: [
      {
        user: "رضا احمدی",
        comment: "حسین عالی رانندگی می‌کند. بسیار راضی هستم.",
      },
    ],
  },
  {
    id: 3,
    name: "آرش رضایی",
    vehicle: "وانت دوکابین",
    adStatus: "غیر فعال",
    avatar: "/images/testimonials/auth-03.jpg",
    adType: "تبلیغات ثابت",
    phone: "09121234567",
    email: "arash.rezaei@example.com",
    location: { lat: 32.6546, lng: 51.667 }, // مختصات اصفهان
    reviews: [],
  },
  {
    id: 4,
    name: "محمد علیزاده",
    vehicle: "وانت دوکابین",
    adStatus: "غیر فعال",
    avatar: "/images/testimonials/auth-01.jpg",
    adType: "تبلیغات ثابت",
    phone: "09127654321",
    email: "mohammad.alizadeh@example.com",
    location: { lat: 34.0925, lng: 49.6764 }, // مختصات اراک
    reviews: [
      {
        user: "سارا محمدی",
        comment: "محمد بسیار خوش‌برخورد و حرفه‌ای است.",
      },
    ],
  },
];

export const ads = [
  {
    id: 1,
    adType: "سراسری",
    title: "تبلیغ فروشگاه آنلاین",
    description: "کسب و کار شما را به مخاطبان زیادی معرفی می‌کند.",
    imageUrl: "/images/1.png",
    status: "منتشر شده",
    createdAt: "2023-10-01", // Date the ad was created
    targetAudience: "عمومی", // Target audience for the ad
    assignedAds: [
      {
        id: 101,
        title: "تبلیغ فروشگاه آنلاین - راننده ۱",
        description: "این تبلیغ به راننده ۱ اختصاص داده شده است.",
      },
      {
        id: 102,
        title: "تبلیغ فروشگاه آنلاین - راننده ۲",
        description: "این تبلیغ به راننده ۲ اختصاص داده شده است.",
      },
    ],
  },
  {
    id: 2,
    adType: "منطقه‌ای",
    title: "تبلیغ رستوران محلی",
    description: "به مردم منطقه خودتان معرفی شوید.",
    imageUrl: "/images/2.png",
    status: "منتشر شده",
    createdAt: "2023-10-05",
    targetAudience: "منطقه‌ای",
    assignedAds: [
      {
        id: 201,
        title: "تبلیغ رستوران محلی - راننده ۳",
        description: "این تبلیغ به راننده ۳ اختصاص داده شده است.",
      },
    ],
  },
  {
    id: 3,
    adType: "ثابت",
    title: "تبلیغ برند موبایل",
    description: "نمایش تبلیغ در مکان‌های خاص و دائمی.",
    imageUrl: "/images/3.png",
    status: "منتشر شده",
    createdAt: "2023-10-10",
    targetAudience: "عمومی",
    assignedAds: [], // No assigned ads for this one
  },
  {
    id: 4,
    adType: "جهشی",
    title: "تبلیغ محصول جدید",
    description: "تبلیغاتی که با حرکت وانت در شهر منتقل می‌شود.",
    imageUrl: "/images/2.png",
    status: "منتشر شده",
    createdAt: "2023-10-15",
    targetAudience: "شهری",
    assignedAds: [
      {
        id: 401,
        title: "تبلیغ محصول جدید - راننده ۴",
        description: "این تبلیغ به راننده ۴ اختصاص داده شده است.",
      },
    ],
  },
  {
    id: 5,
    adType: "جهشی",
    title: "تبلیغ محصول جدید",
    description: "تبلیغاتی که با حرکت وانت در شهر منتقل می‌شود.",
    imageUrl: "/images/2.png",
    status: "منتشر شده",
    createdAt: "2023-10-15",
    targetAudience: "شهری",
    assignedAds: [
      {
        id: 401,
        title: "تبلیغ محصول جدید - راننده ۴",
        description: "این تبلیغ به راننده ۴ اختصاص داده شده است.",
      },
    ],
  },
];

export const categories = [
  {
    id: 1,
    name: "سراسری",
    icon: "🌍",
    description:
      "تبلیغاتی که در سراسر کشور نمایش داده می‌شوند و برای تمام مناطق قابل دیدن هستند.",
  },
  {
    id: 2,
    name: "منطقه‌ای",
    icon: "📍",
    description: "تبلیغاتی که فقط در مناطق خاص و مشخصی نمایش داده می‌شوند.",
  },
  {
    id: 3,
    name: "ثابت",
    icon: "📌",
    description: "تبلیغاتی که در مکان‌های ثابت و دائمی نمایش داده می‌شوند.",
  },
  {
    id: 4,
    name: "جهشی",
    icon: "🔄",
    description:
      "تبلیغاتی که با حرکت وانت در شهر منتقل می‌شوند و به صورت پویا نمایش داده می‌شوند.",
  },
];

export const adFilterOption = [
  { id: "status-all", label: "همه تبلیغات", value: "all" },
  { id: "status-active", label: "منتشر شده", value: "منتشر شده" },
  { id: "status-inactive", label: "تبلیغات غیرفعال", value: "غیرفعال" },
];

export const driverFilterOptions = [
  { id: "status-all", label: "همه رانندگان", value: "all" },
  { id: "status-active", label: "رانندگان فعال", value: "فعال" }, // Updated value
  { id: "status-inactive", label: "رانندگان غیرفعال", value: "غیر فعال" }, // Updated value
];
