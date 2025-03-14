"use client";

import { ads, categories } from "@/constants/data";
import React, { createContext, useContext, useState } from "react";

const MainContext = createContext(undefined);

export const MainProvider = ({ children }) => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedAd, setSelectedAd] = useState(ads[0]);
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  return (
    <MainContext.Provider
      value={{
        selectedStatus,
        setSelectedStatus,
        selectedAd,
        setSelectedAd,
        activeCategory,
        setActiveCategory,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context)
    throw new Error("useMainContext must be used within a AdsProvider");
  return context;
};
