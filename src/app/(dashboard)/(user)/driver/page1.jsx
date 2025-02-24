"use client"; // این صفحه یک کامپوننت سمت کلاینت است

export default function DriverDashboardPage() {
  return (
    <div className="space-y-6">
      {/* بخش خوش‌آمدگویی */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">خوش آمدید، راننده عزیز!</h1>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید وانت خود را مدیریت کنید، تبلیغات پذیرفته شده را مشاهده کنید و درآمد خود را پیگیری نمایید.
        </p>
      </section>

      {/* بخش تبلیغات پذیرفته شده */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">تبلیغات پذیرفته شده</h2>
        <p className="text-gray-600 mt-2">
          در اینجا تبلیغاتی که پذیرفته‌اید و وضعیت آن‌ها نمایش داده می‌شود.
        </p>
        {/* لیست تبلیغات */}
        <div className="mt-4 space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-900">تبلیغ #۱: فروش تابستانه</h3>
            <p className="text-sm text-gray-600">وضعیت: در حال انجام</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-900">تبلیغ #۲: راه‌اندازی محصول جدید</h3>
            <p className="text-sm text-gray-600">وضعیت: تکمیل شده</p>
          </div>
        </div>
      </section>

      {/* بخش درآمد */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">وضعیت درآمد</h2>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید درآمد خود را مشاهده و پیگیری کنید.
        </p>
        {/* نمودار یا جدول درآمد */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">نمودار یا جدول درآمد در اینجا نمایش داده می‌شود.</p>
        </div>
      </section>

      {/* بخش وضعیت وانت */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">وضعیت وانت</h2>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید وضعیت وانت خود و موقعیت آن را بررسی کنید.
        </p>
        {/* وضعیت وانت */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">وانت شما در حال حاضر فعال و در مسیر است.</p>
        </div>
      </section>
    </div>
  );
}