"use client";

import Image from "next/image";

const DriversList = ({ drivers, selectedDriver, onSelectDriver }) => {
  return (
    <div className="border-2 border-secondary-300 rounded-2xl p-4">
      <h2 className="text-lg font-semibold mb-4">رانندگان</h2>
      <ul className="space-y-2">
        {drivers.map((driver) => (
          <li
            key={driver.id}
            onClick={() => onSelectDriver(driver)}
            className={`p-2 cursor-pointer hover:bg-secondary-100 rounded-xl transition-colors ${
              selectedDriver.id === driver.id ? "bg-secondary-100" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={driver.avatar}
                  alt={driver.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-secondary-600">{driver.name}</p>
                <p className="text-sm text-secondary-500">{driver.vehicle}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriversList;
