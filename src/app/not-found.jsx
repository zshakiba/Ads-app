"use client";
import useMoveBack from "@/hooks/useMoveBack";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
// import NotFoundImg from "@/public/images/404.svg";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    // <div className="container xl:max-w-screen-xl">
    <div className="w-full h-full flex items-center justify-center flex-col gap-5 p-5">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="relative w-[402px] h-[206px]">
            <Image
              src="/images/404.svg"
              alt="ئئئ"
              fill
              quality={90}
              priority
              className="object-cover object-center "
            />
          </div>
          <h1 className="text-xl font-bold text-secondary-700 mb-8">
            صفحه ای که دنبالش بودید، پیدا نشد
          </h1>
          <button
            onClick={moveBack}
            className="flex items-center  gap-x-2 text-secondary-500"
          >
            <ArrowRightIcon className="w-6 h-6 text-primary-900" />
            <span> برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
