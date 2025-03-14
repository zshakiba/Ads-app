"use client";

import { Ad } from "@/constants/data"; // Import Ad type
import Image from "next/image";

const AdDetails = ({ ad }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-row justify-between gap-8">
        <div>
          <h2 className="text-xl font-bold text-secondary-600 mt-4">
            {ad.title}
          </h2>
          <p className="text-secondary-600 mt-2">{ad.description}</p>
          <div className="mt-4">
            <span className="text-sm text-secondary-500">نوع تبلیغ:</span>
            <span className="text-sm text-secondary-600 ml-2">{ad.adType}</span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-secondary-500">وضعیت:</span>
            <span className="text-sm text-secondary-600 ml-2">{ad.status}</span>
          </div>
        </div>

        <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
          <Image
            src={ad.imageUrl}
            alt={ad.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AdDetails;
