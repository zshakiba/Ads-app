"use client";

import { ads } from "@/constants/data";
import React, { createContext, useContext, useState } from "react";

const AdsListContext = createContext(undefined);

export const AdsListProvider = ({ children }) => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedAd, setSelectedAd] = useState(ads[0]);

  return (
    <AdsListContext.Provider
      value={{
        selectedStatus,
        setSelectedStatus,
        selectedAd,
        setSelectedAd,
      }}
    >
      {children}
    </AdsListContext.Provider>
  );
};

export const useAdsListContext = () => {
  const context = useContext(AdsListContext);
  if (!context)
    throw new Error("useAdsListContext must be used within a AdsProvider");
  return context;
};
