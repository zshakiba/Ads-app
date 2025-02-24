// components/HeroSection.js
import Button from "@/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex-row justify-center w-full pt-4 md:pt-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl font-bold text-secondary-700 mb-6 text-center">
            تبلیغات هوشمند
          </h1>
          <p className="text-lg text-secondary-600 mb-8 leading-relaxed text-center">
            با استفاده از وانت‌های خود درآمدزایی کنید یا کسب‌وکار خود را با
            تبلیغات هوشمند توسعه دهید.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary">
              <Link href="/sign-up" aria-label="شروع کنید">
                شروع کنید
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/about" aria-label="بیشتر بدانید">
                بیشتر بدانید
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full lg:w-1/3 h-96 hidden lg:block">
          <Image
            src="/images/vanet.png"
            alt="تبلیغات هوشمند روی وانت‌ها"
            fill
            priority
            quality={90}
            className="object-cover opacity-80 rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
