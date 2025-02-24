"use client"; // این صفحه یک کامپوننت سمت کلاینت است

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* بخش خوش‌آمدگویی */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">خوش آمدید، ادمین عزیز!</h1>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید سیستم، کاربران، تبلیغات و پرداخت‌ها را مدیریت کنید.
        </p>
      </section>

      {/* بخش آمار سیستم */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">آمار سیستم</h2>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید آمار کلی سیستم را مشاهده کنید.
        </p>
        {/* آمار کلی */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900">تعداد کاربران</h3>
            <p className="text-2xl font-bold text-primary-500">۱,۲۳۴</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900">تعداد تبلیغات</h3>
            <p className="text-2xl font-bold text-primary-500">۵۶۷</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900">درآمد کل</h3>
            <p className="text-2xl font-bold text-primary-500">۱۲,۳۴۵ دلار</p>
          </div>
        </div>
      </section>

      {/* بخش مدیریت کاربران */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">مدیریت کاربران</h2>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید کاربران سیستم (تبلیغ‌دهندگان و رانندگان) را مدیریت کنید.
        </p>
        {/* جدول کاربران */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">جدول کاربران در اینجا نمایش داده می‌شود.</p>
        </div>
      </section>

      {/* بخش مدیریت تبلیغات */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">مدیریت تبلیغات</h2>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید تبلیغات ایجاد شده توسط تبلیغ‌دهندگان را مدیریت کنید.
        </p>
        {/* جدول تبلیغات */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">جدول تبلیغات در اینجا نمایش داده می‌شود.</p>
        </div>
      </section>

      {/* بخش مدیریت پرداخت‌ها */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">مدیریت پرداخت‌ها</h2>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید پرداخت‌ها به رانندگان و تبلیغ‌دهندگان را بررسی و تایید کنید.
        </p>
        {/* جدول پرداخت‌ها */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">جدول پرداخت‌ها در اینجا نمایش داده می‌شود.</p>
        </div>
      </section>

      {/* بخش تنظیمات سیستم */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">تنظیمات سیستم</h2>
        <p className="text-gray-600 mt-2">
          در این بخش می‌توانید تنظیمات کلی سیستم را مدیریت کنید.
        </p>
        {/* تنظیمات */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">فرم یا گزینه‌های تنظیمات در اینجا نمایش داده می‌شود.</p>
        </div>
      </section>
    </div>
  );
}