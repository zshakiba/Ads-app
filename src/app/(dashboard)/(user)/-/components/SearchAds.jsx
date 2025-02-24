// components/SearchAds.js
import { useForm } from "react-hook-form";
import RHFSelect from "@/ui/RHFSelect";
import {
  MagnifyingGlassIcon,
  ArrowLeftCircleIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import Button from "@/ui/Button";
import Link from "next/link";
import Search from "@/ui/Search";
import { adTypes } from "@/constants/data";

export default function SearchAds() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      adType: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="w-full mx-auto p-4 bg-gradient-to-t from-secondary-700 to-secondary-300 py-12">
      {/* <section className=" flex flex-row justify-center w-full h-52 md:h-72 2xl:h-[400px] border-b border-b-secondary-200"> */}

      <div className="flex flex-col items-center justify-center gap-4 pt-10">
        <p className="text-2xl font-bold text-secondary-600">
          سامانه آنلاین تبلیغات
        </p>
        <h2 className="text-xl font-bold text-secondary-700">
          ۲۲,۰۲۷ آگهی فعال
        </h2>

        <div className="flex flex-row items-center justify-center gap-4">
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
            type="button"
            variant="primary"
            className="p-2 bg-primary-500 text-secondary-100 hover:bg-primary-600 rounded-lg  transition-colors"
            aria-label="جستجو"
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex justify-center items-center gap-2 mt-4">
          <Link href="/" className="flex flex-row items-center gap-2">
            <p className="text-sm font-bold text-primary-600">
              مشاهده همه آگهی ها
            </p>
            <ChevronLeftIcon className="w-6 h-6 stroke-primary-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
