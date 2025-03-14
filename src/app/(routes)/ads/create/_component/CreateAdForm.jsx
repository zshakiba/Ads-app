"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "shared-components/RHFTextField";
import { RHFSelect } from "shared-components/RHFSelect";
import SubmitButton from "shared-components/SubmitButton";
import RHFFileInput from "shared-components/RHFFileInput";
import { schema } from "../../schema";

// Custom hook for form logic
const useAdForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [totalCost, setTotalCost] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const adType = watch("adType");
  const duration = watch("duration");

  const calculateCost = (duration) => (duration === 15 ? 500000 : 900000);

  const onSubmit = (data) => {
    setTotalCost(calculateCost(data.duration));
    setSubmitted(true);
    console.log("فرم ارسال شد: ", data);
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    adType,
    duration,
    totalCost,
    submitted,
    onSubmit,
  };
};

const CreateAdForm = () => {
  const {
    register,
    handleSubmit,
    control,
    errors,
    adType,
    totalCost,
    submitted,
    onSubmit,
  } = useAdForm();

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">ثبت تبلیغ</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="عنوان تبلیغ"
          name="title"
          register={register}
          errors={errors}
        />
        <FormInput
          label="دسته بندی تبلیغ"
          name="category"
          register={register}
          errors={errors}
        />

        <FormSelect
          name="adType"
          label="نوع تبلیغ"
          options={[
            { value: "سراسری", label: "سراسری" },
            { value: "منطقه ای", label: "منطقه‌ای" },
            { value: "ساکن", label: "ساکن" },
            { value: "جغرافیایی", label: "جغرافیایی" },
          ]}
          control={control}
          errors={errors}
        />

        {(adType === "ساکن" ||
          adType === "منطقه ای" ||
          adType === "جغرافیایی") && (
          <FormInput
            label="محدوده / لوکیشن"
            name="location"
            register={register}
            errors={errors}
          />
        )}

        <FormInput
          label="کد ملی"
          name="nationalId"
          register={register}
          errors={errors}
        />

        <FormSelect
          name="duration"
          label="مدت زمان تبلیغ"
          options={[
            { value: 15, label: "15 روزه" },
            { value: 30, label: "30 روزه" },
          ]}
          control={control}
          errors={errors}
        />

        <FormFileInput
          label="آپلود تصویر تبلیغ"
          name="image"
          register={register}
          errors={errors}
        />

        <FormSelect
          name="bannerProvided"
          label="بنر تبلیغ"
          options={[
            { value: "self", label: "خودم تهیه می‌کنم" },
            { value: "agency", label: "شما تهیه کنید" },
          ]}
          control={control}
          errors={errors}
        />

        {submitted && (
          <div className="bg-blue-100 p-3 rounded-md my-3">
            <p className="font-bold">
              مبلغ کل: {totalCost.toLocaleString()} تومان
            </p>
          </div>
        )}

        <SubmitButton type="submit" className="btn-primary">
          ثبت تبلیغ
        </SubmitButton>
      </form>

      {submitted && (
        <p className="mt-4 text-green-600">در حال بررسی و تایید...</p>
      )}
    </div>
  );
};

// Form Input Component for text fields
const FormInput = ({ label, name, register, errors }) => (
  <div className="mb-3">
    <RHFTextField
      label={label}
      name={name}
      register={register}
      errors={errors}
      isRequired={true}
    />
  </div>
);

// Form Select Component
const FormSelect = ({ label, name, options, control, errors }) => (
  <div className="mb-3">
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RHFSelect
          {...field}
          label={label}
          options={options}
          required
          placeholder={label}
        />
      )}
    />
    <p className="text-red-500">{errors[name]?.message}</p>
  </div>
);

// Form File Input Component
const FormFileInput = ({ label, name, register, errors }) => (
  <div className="mb-3">
    <RHFFileInput
      label={label}
      name={name}
      register={register}
      errors={errors}
      isRequired={true}
    />
  </div>
);

export default CreateAdForm;
