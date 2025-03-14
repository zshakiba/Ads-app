"use client";

import { fadeIn } from "@/utils/motion";
import DriversGrid from "../_component/DriversGrid";
import { drivers } from "@/constants/data";
import { motion } from "framer-motion";
import { useDriverListContext } from "../_context/driver-list-context";
import Empty from "shared-components/Empty";

const DriversPage = () => {
  const { selectedStatus } = useDriverListContext();

  const filteredDrivers = drivers.filter(
    (driver) => selectedStatus === "all" || driver.adStatus === selectedStatus
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn("up", 0.2)}
      className="space-y-6 max-w-screen-xl mx-auto"
    >
      {filteredDrivers.length > 0 ? (
        <DriversGrid
          drivers={filteredDrivers}
          className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
        />
      ) : (
        <Empty resourceName="تبلیغی" />
      )}
    </motion.div>
  );
};

export default DriversPage;
