"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "shared-components/Button";
import RHFTextField from "shared-components/RHFTextField";
import RHFSelect from "shared-components/RHFSelect";
import { useRouter } from "next/navigation";
import Modal from "shared-components/Modal";
import SignInForm from "./SignInForm";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const router = useRouter(); // To redirect after successful signup

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((user) => user.email === data.email);

      if (userExists) {
        alert("این ایمیل قبلاً ثبت‌نام کرده است!");
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
      router.push("/dashboard"); // Redirect to dashboard after successful signup
    } catch (error) {
      alert("خطا در ثبت‌نام!");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Watch the password field to compare with confirmPassword
  const password = watch("password");

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          {/* Email */}
          <RHFTextField
            label="ایمیل"
            name="email"
            register={register}
            errors={errors}
            isRequired
            validation={{
              required: "ایمیل الزامی است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل معتبر نیست",
              },
            }}
          />

          {/* Password */}
          <RHFTextField
            label="رمز عبور"
            name="password"
            type="password"
            register={register}
            errors={errors}
            isRequired
            validation={{
              required: "رمز عبور الزامی است",
              minLength: {
                value: 6,
                message: "رمز عبور باید حداقل ۶ کاراکتر باشد",
              },
            }}
          />

          {/* Confirm Password */}
          <RHFTextField
            label="تکرار رمز عبور"
            name="confirmPassword"
            type="password"
            register={register}
            errors={errors}
            isRequired
            validation={{
              required: "تکرار رمز عبور الزامی است",
              validate: (value) =>
                value === password || "رمز عبور و تکرار آن مطابقت ندارند",
            }}
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
            errors={errors}
            validation={{ required: "لطفاً نوع کاربر را انتخاب کنید" }}
          />

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
        {/* <div className="mt-4 text-center">
          <p className="text-sm text-secondary-600">
            حساب کاربری دارید؟
            <Link href="/sign-in" className="text-primary-500 hover:underline">
              وارد شوید
            </Link>
          </p>
        </div> */}

        <div className="mt-4 text-center">
          <p className="text-sm text-secondary-600">
            حساب کاربری دارید؟{" "}
            <button
              onClick={() => setIsSignInModalOpen(true)} // Open the sign-up modal
              className="text-primary-500 hover:underline"
            >
              وارد شوید
            </button>
          </p>
        </div>
      </div>

      <Modal
        open={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)} // Close the modal
        title="ثبت‌نام"
      >
        <SignInForm onSuccess={() => setIsSignInModalOpen(false)} />{" "}
        {/* Pass a callback to close the modal after successful signup */}
      </Modal>
    </div>
  );
}
