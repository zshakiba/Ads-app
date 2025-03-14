"use client";

import Image from "next/image";
import Link from "next/link";
import Badge from "shared-components/Badge";
import { Card, CardContent } from "shared-components/Cards";

const DriverCard = ({ id, name, vehicle, avatar, adType, adStatus }) => {
  return (
    <Link href={`/drivers/${id}`} passHref>
      <Card className="hover:shadow-lg transition-all cursor-pointer">
        <div className="relative h-40 w-full">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover rounded-t-lg"
            priority // Prioritize loading for better performance
          />
        </div>

        <CardContent>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-sm font-bold text-secondary-600">{name}</h1>

            <Badge
              variant={adStatus === "فعال" ? "default" : "destructive"}
              size="sm"
              className="mt-2"
            >
              {adStatus}
            </Badge>
          </div>
          <p className="text-xs font-bold text-primary-600 mt-2">{adType}</p>
          <p className="text-xs text-secondary-600 mt-2">
            وسیله نقلیه: {vehicle}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DriverCard;
