"use client";

import FilterSidebar from "shared-components/FilterSidebar";
import React from "react";
import { AdsListProvider } from "../_context/ads-list-context";
import AdsListSidebar from "../_component/AdsListSidebar";
import { motion } from "framer-motion"; // For animations
import { fadeIn } from "@/utils/motion";
const AdLayout = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn("up", 0.2)}
      className="space-y-6 max-w-screen-xl mx-auto"
    >
      <AdsListProvider>
        <div className="w-full bg-secondary-100 py-12">
          <div className="container max-w-screen-2xl mx-auto">
            <div className="flex bg-secondary-100 min-h-screen">
              <AdsListSidebar />
              <main className="flex-1 p-6 ">{children}</main>
            </div>
          </div>
        </div>
      </AdsListProvider>
    </motion.div>
  );
};

export default AdLayout;
