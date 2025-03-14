// components/HeroSection.js
import Button from "shared-components/Button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 my-10">
      {/* بخش متن */}
      <div className="text-center lg:text-right max-w-lg">
        <h1 className="text-4xl font-bold text-secondary-700 mb-6">
          تبلیغات هوشمند
        </h1>
        <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
          با استفاده از وانت‌های خود درآمدزایی کنید یا کسب‌وکار خود را با
          تبلیغات هوشمند توسعه دهید.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
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
      {/* بخش تصویر */}
      <div className="relative w-full lg:w-1/3 h-80 hidden lg:block">
        <Image
          src="/images/vanet.png"
          alt="تبلیغات هوشمند روی وانت‌ها"
          fill
          priority
          quality={90}
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
