import { categories } from "@/constants/data";
import { ClockIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AdList from "./AdList";
import Button from "@/ui/Button";
import Link from "next/link";



const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState("سراسری");

  return (
    <div className="flex-row justify-center w-full pt-4 md:pt-0">
      <div className="mx-auto p-0">
        <div className="py-6 px-24">
        <h2 className="text-base font-bold text-secondary-500 mb-8">
          دسته‌بندی تبلیغات
        </h2>
      

        {/* قسمت تیپ‌ها */}
        <div className="border-t border-secondary-300">
          <nav className="-mb-px flex justify-center gap-32" aria-label="Tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.name)}
                className={`shrink-1 border-t-2 px-4 py-2 text-xs font-medium cursor-pointer hover:text-secondary-700 hover:border-secondary-300 ${
                  activeCategory === category.name
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-secondary-500"
                }`}
              >
                <span className="text-sm font-bold">
                  {category.icon} {category.name}
                </span>
                <span className="flex text-right mt-8 ">
                  {category.description}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* قسمت محتوای هر تیپ */}
        <div className="mt-8 p-4">
          {categories.map((category) => (
            <div
              className="flex flex-row justify-center items-center mb-8"
              key={category.id}
              style={{
                display: activeCategory === category.name ? "block" : "none",
              }}
            >
             
              <AdList adType={category.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CategoriesSection;
