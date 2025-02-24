import { useState } from "react";
import { drivers } from "@/constants/data";
import DriverCard from "./DriverCard";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const ActiveDriversSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex-row justify-center w-full pt-4 md:pt-0">
      <div className="mx-auto p-0">
        <div className="py-6 px-24">
          <div className="flex justify-between border-b border-secondary-300">
            <p className="text-base font-bold p-2 text-secondary-500">
              رانندگان فعال
            </p>
            <div className="flex justify-center items-center">
              <p className="text-sm p-2 text-primary-500">مشاهده همه</p>
              <ChevronLeftIcon className="w-4 h-4 text-secondary-500" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-10">
            {drivers.map((driver, index) => (
              <DriverCard
                key={driver.id}
                {...driver}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveDriversSection;
