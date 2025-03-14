"use client"; // Add this directive

import { useForm } from "react-hook-form";
import RHFSelect from "shared-components/RHFSelect";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Button from "shared-components/Button";
import Search from "shared-components/Search";
import { adTypes } from "@/constants/data";

const SearchForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      adType: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    // <form
    //   onSubmit={handleSubmit(onSubmit)}
    //   className="flex flex-row items-center justify-center gap-4"
    // >
    <>
      <div>
        <Search />
      </div>
      <div className="w-64">
        <RHFSelect
          name="adType"
          label=""
          register={register}
          options={adTypes}
          required={false}
          placeholder="نوع تبلیغ را انتخاب کنید"
        />
      </div>
      <div className="w-64">
        <RHFSelect
          name="adType"
          label=""
          register={register}
          options={adTypes}
          required={false}
          placeholder="همه ی استان ها"
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        className="p-2 bg-primary-500 text-secondary-100 hover:bg-primary-600 rounded-lg transition-colors"
        aria-label="جستجو"
      >
        <MagnifyingGlassIcon className="w-6 h-6" />
      </Button>
    </>
    // </form>
  );
};

export default SearchForm;
