"use client";

import { ads } from "@/constants/data";
import AdsGrid from "../_component/AdsGrid";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useAdsListContext } from "../_context/ads-list-context";

const AdsPage = () => {
  const { selectedStatus } = useAdsListContext();

  const filteredAds = ads.filter(
    (ad) => selectedStatus === "all" || ad.status === selectedStatus
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn("up", 0.2)}
      className="space-y-6 max-w-screen-xl mx-auto"
    >
      {filteredAds.length > 0 ? (
        <AdsGrid ads={filteredAds} />
      ) : (
        <div className="text-center text-secondary-500 text-lg mt-10">
          هیچ تبلیغی برای این وضعیت یافت نشد.
        </div>
      )}
    </motion.div>
  );
};

export default AdsPage;
