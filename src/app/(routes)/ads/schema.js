import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("عنوان تبلیغ الزامی است"),
  category: yup.string().required("دسته‌بندی الزامی است"),
  adType: yup.string().required("نوع تبلیغ را انتخاب کنید"),
  location: yup.string().when("adType", {
    is: (type) => ["ساکن", "منطقه ای", "جغرافیایی"].includes(type),
    then: (schema) => schema.required("لطفاً موقعیت را مشخص کنید"),
  }),
  nationalId: yup
    .string()
    .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")
    .required("کد ملی الزامی است"),
  duration: yup
    .number()
    .oneOf([15, 30], "مدت زمان معتبر نیست")
    .required("مدت تبلیغ را انتخاب کنید"),
  image: yup.mixed().required("تصویر تبلیغ را آپلود کنید"),
  bannerProvided: yup
    .string()
    .required("مشخص کنید که بنر را چه کسی تهیه می‌کند"),
});
