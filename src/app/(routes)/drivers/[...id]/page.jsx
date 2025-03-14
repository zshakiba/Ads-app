"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import DriverDetails from "../_component/DriverDetails";
import AssignedAds from "../_component/AssignedAds";
import LocationMap from "../_component/LocationMap";
import { useDriverListContext } from "../_context/driver-list-context";

const DriverMasterDetail = () => {
  const { selectedDriver } = useDriverListContext(); // Access the selectedDriver from context
  
  if (!selectedDriver) {
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
      className="space-y-6 max-w-screen-xl mx-auto"
    >
      <div className="w-full max-w-4xl space-y-8"></div>
      <h1 className="text-2xl font-bold text-secondary-600">مشخصات راننده</h1>
      <DriverDetails driver={selectedDriver} />
      <AssignedAds ads={selectedDriver.assignedAds} />
      <LocationMap location={selectedDriver.location} />
    </motion.div>
  );
};

export default DriverMasterDetail;
