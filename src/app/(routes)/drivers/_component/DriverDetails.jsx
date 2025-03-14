"use client";

import Image from "next/image";
import Badge from "shared-components/Badge";
import { Card, CardContent } from "shared-components/Cards";

const DriverDetails = ({ driver }) => {
  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Driver Image */}
          <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
            <Image
              src={driver.avatar}
              alt={driver.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Driver Information */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-secondary-600">
              {driver.name}
            </h2>
            <p className="text-secondary-600 mt-2">وسیله نقلیه: {driver.vehicle}</p>

            {/* Status Badge */}
            <div className="mt-4">
              <Badge
                variant={driver.adStatus === "فعال" ? "default" : "destructive"}
                size="sm"
              >
                {driver.adStatus}
              </Badge>
            </div>

            {/* Contact Information */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-secondary-600">
                اطلاعات تماس
              </h3>
              <p className="text-sm text-secondary-600 mt-2">تلفن: {driver.phone}</p>
              <p className="text-sm text-secondary-600 mt-1">
                ایمیل: {driver.email}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverDetails;
