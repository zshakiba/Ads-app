import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <>
      <div className="relative h-screen">
        <Image
          src="/images/contact/hero.jpg"
          alt="ئئئ"
          fill
          priority
          quality={90}
          className="object-cover object-center  opacity-30 "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start  p-20">
          <span className="text-primary-800 text-7xl">چطور</span>
          <br />
          <span className="text-secondary-600 text-7xl">
            میتونیم بهت کمک کنیم؟
          </span>
        </div>
      </div>
      <div className=" flex flex-col justify-center p-10 mt-10 ">
        <div>
          <span className="text-secondary-500 text-4xl">
            با خیال راحت با ما تماس بگیرید.
          </span>
          <br />
          <span className="text-secondary-500 text-4xl">
            خوشحال می‌شویم از شما بشنویم، دوست عزیز.{" "}
          </span>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Contact;
