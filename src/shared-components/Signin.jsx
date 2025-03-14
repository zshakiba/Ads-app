"use client"; // This page is a client-side component

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Button from "shared-components/Button"; // Import Button component
import RHFTextField from "shared-components/RHFTextField"; // Import RHFTextField component

export default function SignInPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((user) => user.email === data.email && user.password === data.password);

      if (!user) {
        alert("ایمیل یا رمز عبور اشتباه است!");
        return;
      }

      alert("ورود موفقیت‌آمیز بود!");
      window.location.href = "/dashboard"; // Redirect to dashboard after successful login
    } catch (error) {
      alert("خطا در ورود!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
          ورود به حساب کاربری
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

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "در حال ورود..." : "ورود"}
          </Button>
        </form>

        {/* Link to Sign Up page */}
        <div className="mt-4 text-center">
          <p className="text-sm text-secondary-600">
            حساب کاربری ندارید؟{" "}
            <Link href="/sign-up" className="text-primary-500 hover:underline">
              ثبت‌نام کنید
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
