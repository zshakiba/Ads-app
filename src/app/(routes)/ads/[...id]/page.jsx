"use client";

import { ads } from "@/constants/data";
import Image from "next/image";
import { motion } from "framer-motion"; // For animations
import Badge from "shared-components/Badge";
import { fadeIn } from "@/utils/motion";
import { useAdsListContext } from "../_context/ads-list-context";

const AdDetailPage = () => {
  const { selectedAd } = useAdsListContext();

  if (!selectedAd) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-secondary-600">آگهی یافت نشد</p>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn("up", 0.2)}
      className="flex flex-row justify-center p-8 min-h-screen"
    >
      <div className="">
        {/* Ad Image */}
        <motion.div variants={fadeIn("up", 0.3)}>
          <div className=" rounded-lg">
            <div className="relative h-96">
              <Image
                src={selectedAd.imageUrl}
                alt={selectedAd.title}
                fill
                className="object-cover"
                priority // Prioritize loading for better performance
              />
            </div>
          </div>
        </motion.div>

        {/* Ad Details */}
        <motion.div variants={fadeIn("up", 0.4)}>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold text-secondary-600">
              {selectedAd.title}
            </h1>
            <p className="text-lg text-secondary-600 mt-4">
              {selectedAd.description}
            </p>

            {/* Ad Type and Status */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-secondary-500">
                  نوع:
                </span>
                <p className="text-sm font-bold text-primary-600">
                  {selectedAd.adType}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-secondary-500">
                  وضعیت:
                </span>
                <Badge
                  variant={
                    selectedAd.status === "منتشر شده"
                      ? "default"
                      : "destructive"
                  }
                  size="sm"
                >
                  {selectedAd.status}
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdDetailPage;
