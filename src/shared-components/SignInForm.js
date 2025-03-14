"use client"; // This page is a client-side component

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "shared-components/Button"; // Import Button component
import RHFTextField from "shared-components/RHFTextField"; // Import RHFTextField component
import RHFSelect from "shared-components/RHFSelect"; // Import RHFSelect component
import { useRouter } from "next/navigation"; // Import router for redirection
import Link from "next/link";
import Modal from "shared-components/Modal";
import SignUpForm from "./SignUpForm";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const router = useRouter(); // To redirect after successful signup

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if user already exists
      const userExists = users.find((user) => user.email === data.email);
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

  // Watch the password field to compare with confirmPassword
  const password = watch("password");

  return (
    <div className=" flex items-center justify-center ">
      <div className=" w-full max-w-md">
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
            <button
              onClick={() => setIsSignUpModalOpen(true)} // Open the sign-up modal
              className="text-primary-500 hover:underline"
            >
              ثبت‌نام کنید
            </button>
          </p>
        </div>
      </div>

      <Modal
        open={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)} // Close the modal
        title="ثبت‌نام"
      >
        <SignUpForm onSuccess={() => setIsSignUpModalOpen(false)} />{" "}
        {/* Pass a callback to close the modal after successful signup */}
      </Modal>
    </div>
  );
}
