"use client";

import { Card, CardContent } from "shared-components/Cards";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // For animations
import Badge from "shared-components/Badge";

const AdCard = ({ id, title, description, imageUrl, adType, status }) => {
  return (
    <Link href={`/ads/${id}`} passHref>
      <motion.div
        whileHover={{ scale: 1.02 }} // Add hover animation
        whileTap={{ scale: 0.98 }} // Add tap animation
        className="cursor-pointer"
      >
        <Card className="hover:shadow-lg transition-shadow">
          <div className="relative h-40 w-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-t-lg"
              priority // Prioritize loading for better performance
            />
          </div>
          <CardContent className="flex flex-col justify-center items-start gap-2 p-4">
            <h3 className="text-sm font-bold text-secondary-600 line-clamp-2">
              {title}
            </h3>
            <div className="w-full flex flex-row justify-between items-center gap-1">
              <Badge
                variant={status === "منتشر شده" ? "default" : "destructive"}
                size="xs"
              >
                {status}
              </Badge>
              <p className="text-xs font-bold text-primary-600">{adType}</p>
            </div>
            <p className="text-sm text-secondary-600 line-clamp-3">
              {description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default AdCard;
