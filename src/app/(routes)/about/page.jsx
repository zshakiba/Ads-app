import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/about" },
          {
            label: "درباره ما",
            href: `/about`,
            active: true,
          },
        ]}
      /> */}
      <div className="relative h-screen">
        <Image
          src="/images/hero/shape-02.svg"
          alt="ئئئ"
          fill
          priority
          quality={90}
          className="object-cover object-center  opacity-30 "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-20">
          <div className="grid grid-cols-3">
            <div className="col-span-1 flex flex-col space-x-2">
              <span className="text-secondary-800 text-5xl font-bold">
                درباره
              </span>
              <br />
              <span className="text-primary-600 text-5xl font-bold">
                {" "}
                ToppTeamm
              </span>
              <br />
              <span className="text-secondary-600 text-xl">
                تاپ تیم پلی برای رسیدن به بهترین راه‌حل‌های برنامه‌نویسی وب است.
                با تیم متخصص ما، شما پروژه‌های وب‌سایت خود را با کیفیت و دقت
                بالا به نتیجه خواهید رساند. از طراحی تا پشتیبانی، تاپ تیم همواره
                همراه شماست.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
