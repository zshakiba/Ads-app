"use client";

import { drivers } from "@/constants/data";
import React, { createContext, useContext, useState } from "react";

const DriverListContext = createContext(undefined);

export const DriversListProvider = ({ children }) => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedDriver, setSelectedDriver] = useState(drivers[0]);
  return (
    <DriverListContext.Provider
      value={{
        selectedStatus,
        setSelectedStatus,
        selectedDriver,
        setSelectedDriver,
      }}
    >
      {children}
    </DriverListContext.Provider>
  );
};

export const useDriverListContext = () => {
  const context = useContext(DriverListContext);
  if (!context)
    throw new Error(
      "useDriverListContext must be used within a DriverProvider"
    );
  return context;
};
