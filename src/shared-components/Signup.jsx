"use client"; // This page is a client-side component

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "shared-components/Button"; // Import Button component
import RHFTextField from "shared-components/RHFTextField"; // Import RHFTextField component
import RHFSelect from "shared-components/RHFSelect"; // Import RHFSelect component
import { useRouter } from "next/navigation"; // Import router for redirection
import Link from "next/link";

export default function SignUpPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); // To redirect after successful signup

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if user already exists
      const userExists = users.find(user => user.email === data.email);
      if (userExists) {
        alert("این ایمیل قبلاً ثبت‌نام شده است!");
        return;
      }

      // Add new user to users array
      users.push({
        email: data.email,
        password: data.password,
        userType: data.userType, // Save the user type (driver or advertiser)
      });

      // Save the updated users array to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      alert("ثبت‌نام موفقیت‌آمیز بود!");
      router.push("/signin"); // Redirect to the Sign In page after successful registration
    } catch (error) {
      alert("خطا در ثبت‌نام!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
          ثبت‌نام در حساب کاربری
        </h1>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          {/* Email */}
          <RHFTextField
            label="ایمیل"
            name="email"
            register={register} // Pass register here
            errors={errors}
            isRequired
          />

          {/* Password */}
          <RHFTextField
            label="رمز عبور"
            name="password"
            type="password"
            register={register} // Pass register here
            errors={errors}
            isRequired
          />

          {/* User Type Selection */}
          <RHFSelect
            label="نوع کاربر"
            name="userType"
            register={register}
            options={[
              { value: "driver", label: "راننده" },
              { value: "advertiser", label: "تبلیغ دهنده" },
            ]}
            required={true}
          />
          {errors.userType && (
            <p className="text-red-500 text-xs mt-1">لطفاً نوع کاربر را انتخاب کنید</p>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "در حال ثبت‌نام..." : "ثبت‌نام"}
          </Button>
        </form>

        {/* Link to Sign In page */}
        <div className="mt-4 text-center">
          <p className="text-sm text-secondary-600">
            حساب کاربری دارید؟{" "}
            <Link href="/sign-in" className="text-primary-500 hover:underline">
              وارد شوید
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
