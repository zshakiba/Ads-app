import {
    HomeIcon,
    MegaphoneIcon,
    ClipboardDocumentIcon,
    TruckIcon,
    MapIcon,
    CreditCardIcon,
    UsersIcon,
    CogIcon,
  } from "@heroicons/react/24/outline";
  
  // پنل تبلیغ‌دهنده
  export const advertiserNavItems = [
    {
      id: 1,
      title: "داشبورد",
      icon: <HomeIcon className="w-5 h-5" />,
      href: "/profile/advertiser",
      description: "نمایش خلاصه‌ای از آمار تبلیغات، وانت‌های فعال، و درآمد.",
    },
    {
      id: 2,
      title: "ثبت سفارش",
      icon: <MegaphoneIcon className="w-5 h-5" />,
      href: "/profile/advertiser/create-ad",
      description: "فرم ایجاد تبلیغ جدید.",
    },
    {
      id: 3,
      title: "آگهی‌های من",
      icon: <ClipboardDocumentIcon className="w-5 h-5" />,
      href: "/profile/advertiser/my-ads",
      description: "لیست تبلیغات ایجاد شده توسط تبلیغ‌دهنده.",
    },
    {
      id: 4,
      title: "آمار وانت‌های دریافتی",
      icon: <TruckIcon className="w-5 h-5" />,
      href: "/profile/advertiser/van-stats",
      description: "نمایش تعداد وانت‌هایی که تبلیغات را قبول کرده‌اند.",
    },
    {
      id: 5,
      title: "تبلیغات منتشر شده",
      icon: <MapIcon className="w-5 h-5" />,
      href: "/profile/advertiser/published-ads",
      description:
        "لیست تبلیغات فعال و اطلاعات وانت‌های حمل‌کننده (شامل نقشه لحظه‌ای وانت‌ها).",
    },
    {
      id: 6,
      title: "پرداخت‌ها",
      icon: <CreditCardIcon className="w-5 h-5" />,
      href: "/profile/advertiser/payments",
      description: "تاریخچه پرداخت‌ها و وضعیت مالی.",
    },
  ];
  
  // پنل راننده
  export const driverNavItems = [
    {
      id: 1,
      title: "داشبورد",
      icon: <HomeIcon className="w-5 h-5" />,
      href: "/profile/driver",
      description: "نمایش خلاصه‌ای از تبلیغات قبول‌شده، درآمد، و وضعیت وانت.",
    },
    {
      id: 2,
      title: "ثبت وانت",
      icon: <TruckIcon className="w-5 h-5" />,
      href: "/profile/driver/register-van",
      description:
        "فرم ثبت اطلاعات وانت و انتخاب نوع تبلیغات (ساکن، منطقه‌ای، سراسری، جهشی).",
    },
    {
      id: 3,
      title: "تبلیغات گرفته شده",
      icon: <ClipboardDocumentIcon className="w-5 h-5" />,
      href: "/profile/driver/accepted-ads",
      description: "لیست تبلیغاتی که راننده قبول کرده است.",
    },
    {
      id: 4,
      title: "تبلیغات تایید شده",
      icon: <MegaphoneIcon className="w-5 h-5" />,
      href: "/profile/driver/confirmed-ads",
      description: "لیست تبلیغاتی که توسط مشتری تایید شده‌اند.",
    },
    {
      id: 5,
      title: "نقشه وانت‌ها",
      icon: <MapIcon className="w-5 h-5" />,
      href: "/profile/driver/van-map",
      description: "نمایش نقشه لحظه‌ای وانت‌های فعال.",
    },
    {
      id: 6,
      title: "پرداخت‌ها",
      icon: <CreditCardIcon className="w-5 h-5" />,
      href: "/profile/driver/payments",
      description: "تاریخچه پرداخت‌ها و وضعیت مالی.",
    },
  ];
  
  // پنل ادمین
  export const adminNavItems = [
    {
      id: 1,
      title: "داشبورد",
      icon: <HomeIcon className="w-5 h-5" />,
      href: "/profile/admin",
      description: "نمایش خلاصه‌ای از آمار کل سیستم (تعداد تبلیغات، وانت‌ها، درآمد کل).",
    },
    {
      id: 2,
      title: "مدیریت تبلیغ‌دهندگان",
      icon: <UsersIcon className="w-5 h-5" />,
      href: "/profile/admin/advertisers",
      description: "لیست تبلیغ‌دهندگان و ویرایش اطلاعات آن‌ها.",
    },
    {
      id: 3,
      title: "مدیریت رانندگان",
      icon: <TruckIcon className="w-5 h-5" />,
      href: "/profile/admin/drivers",
      description: "لیست رانندگان و بررسی درخواست‌های ثبت وانت.",
    },
    {
      id: 4,
      title: "مدیریت تبلیغات",
      icon: <MegaphoneIcon className="w-5 h-5" />,
      href: "/profile/admin/ads",
      description: "لیست تبلیغات ایجاد شده و وضعیت آن‌ها.",
    },
    {
      id: 5,
      title: "مدیریت پرداخت‌ها",
      icon: <CreditCardIcon className="w-5 h-5" />,
      href: "/profile/admin/payments",
      description: "بررسی و تایید پرداخت‌ها به رانندگان و تبلیغ‌دهندگان.",
    },
    {
      id: 6,
      title: "تنظیمات سیستم",
      icon: <CogIcon className="w-5 h-5" />,
      href: "/profile/admin/settings",
      description: "مدیریت تنظیمات کلی سیستم.",
    },
  ];