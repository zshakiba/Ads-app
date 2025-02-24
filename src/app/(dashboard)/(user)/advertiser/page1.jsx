"use client"; // این صفحه یک کامپوننت سمت کلاینت است

export default function AdvertiserDashboardPage() {
  return (
    <div className="space-y-6">
      {/* بخش خوش‌آمدگویی */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">خوش آمدید، تبلیغ‌دهنده عزیز!</h1>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید تبلیغات خود را مدیریت کنید، آمار آن‌ها را مشاهده کنید و وضعیت پرداخت‌ها را پیگیری نمایید.
        </p>
      </section>

      {/* بخش تبلیغات من */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">تبلیغات من</h2>
        <p className="text-gray-600 mt-2">
          در اینجا تبلیغاتی که ایجاد کرده‌اید و وضعیت آن‌ها نمایش داده می‌شود.
        </p>
        {/* لیست تبلیغات */}
        <div className="mt-4 space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-900">تبلیغ #۱: فروش تابستانه</h3>
            <p className="text-sm text-gray-600">وضعیت: فعال</p>
            <p className="text-sm text-gray-600">تعداد نمایش: ۱,۲۰۰</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-900">تبلیغ #۲: راه‌اندازی محصول جدید</h3>
            <p className="text-sm text-gray-600">وضعیت: در انتظار تایید</p>
            <p className="text-sm text-gray-600">تعداد نمایش: ۰</p>
          </div>
        </div>
      </section>

      {/* بخش آمار تبلیغات */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">آمار تبلیغات</h2>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید عملکرد تبلیغات خود را بررسی کنید.
        </p>
        {/* نمودار یا جدول آمار */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">نمودار یا جدول آمار در اینجا نمایش داده می‌شود.</p>
        </div>
      </section>

      {/* بخش تاریخچه پرداخت‌ها */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">تاریخچه پرداخت‌ها</h2>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید تاریخچه پرداخت‌ها و فاکتورهای خود را مشاهده کنید.
        </p>
        {/* جدول پرداخت‌ها */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">جدول پرداخت‌ها در اینجا نمایش داده می‌شود.</p>
        </div>
      </section>

      {/* بخش ایجاد تبلیغ جدید */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">ایجاد تبلیغ جدید</h2>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید یک کمپین تبلیغاتی جدید ایجاد کنید.
        </p>
        {/* دکمه ایجاد تبلیغ */}
        <div className="mt-4">
          <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-all">
            ایجاد تبلیغ جدید
          </button>
        </div>
      </section>
    </div>
  );
}