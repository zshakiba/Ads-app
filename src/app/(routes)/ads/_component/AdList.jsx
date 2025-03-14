"use client";

import Image from "next/image";

const AdList = ({ data, selectedStatus, onSelectStatus }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">تبلیغات</h2>
      <ul className="space-y-2">
        {data.map((d) => (
          <li
            key={d.id}
            onClick={() => onSelectStatus(d)}
            className={`p-2 cursor-pointer hover:bg-secondary-100 rounded-xl transition-colors ${
              selectedStatus.id === d.id ? "bg-secondary-100" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-full md:w-1/3  rounded-lg overflow-hidden">
                <Image
                  src={d.imageUrl}
                  alt={d.title}
                  className="w-12 h-12 dark:hidden rounded-xl"
                  width={80}
                  height={80}
                  priority
                />
              </div>

              <div>
                <p className="font-medium text-secondary-600">{d.title}</p>
                <p className="text-sm text-secondary-500">{d.adType}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdList;
