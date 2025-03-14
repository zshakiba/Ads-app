"use client";
import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    id: 1,
    title: "به ما بپیوندید",
    subTitle: [
      { id: 1, text: "ثبت‌نام رایگان", href: "/signup" },
      { id: 2, text: "ورود به سیستم", href: "/login" },
    ],
  },
  {
    id: 2,
    title: "لینک‌های مفید",
    subTitle: [
      { id: 1, text: "درباره ما", href: "/about" },
      { id: 2, text: "تماس با ما", href: "/contact" },
      { id: 3, text: "قوانین و مقررات", href: "/privacy" },
    ],
  },
  {
    id: 3,
    title: "ارتباط با ما",
    subTitle: [
      {
        id: 1,
        text: "ایمیل: support@example.com",
        href: "mailto:support@example.com",
      },
      { id: 2, text: "تلفن: ۰۲۱-۱۲۳۴۵۶۷۸", href: "tel:02112345678" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary-800 border-t border-t-secondary-300 pt-16 md:pt-10 lg:pt-10">
      <div className="container xl:max-w-screen-xl 2xl:max-w-screen-2xl px-8">
        <div className="flex flex-wrap justify-between">
          {/* ستون لوگو و توضیحات */}
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 lg:w-4/12 xl:w-5/12 ">
            <Link href="/" className="mb-8 inline-block ">
              <Image
                src="/images/vanet.png"
                alt="logo"
                className="w-full dark:hidden rounded-xl"
                width={80}
                height={80}
                priority
              />
              <Image
                src="/images/vanet.png"
                alt="logo"
                className="hidden w-full dark:block rounded-xl"
                width={80}
                height={80}
                priority
              />
            </Link>
            <p className="mb-9 text-secondary-400 leading-relaxed w-2/3">
              اپلیکیشن ما به شما کمک می‌کند تا با استفاده از وانت‌های خود
              درآمدزایی کنید یا کسب‌وکار خود را با تبلیغات هوشمند توسعه دهید.
            </p>
          </div>

          {/* ستون‌های لینک‌ها */}
          {footerColumns.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12  lg:mb-8"
            >
              <div>
                <h2 className="mb-10 text-xl font-bold text-secondary-300">
                  {item.title}
                </h2>
                <ul>
                  {item.subTitle.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.href}
                        className="mb-4 inline-block text-base text-secondary-400 duration-300 hover:text-primary-500"
                      >
                        {subItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* خط جداکننده */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

        {/* کپی‌رایت */}
        <div className="py-8 text-center">
          <p className="text-secondary-200">
            تمامی حقوق محفوظ است. © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
