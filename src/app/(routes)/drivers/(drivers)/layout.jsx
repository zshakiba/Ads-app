"use client";

import React from "react";
import { DriversListProvider } from "../_context/driver-list-context";
import DriverListSidebar from "../_component/DriverListSidebar";

const DriversLayout = ({ children }) => {
  return (
    <DriversListProvider>
      <div className="w-full bg-secondary-100 py-12">
        <div className="container max-w-screen-2xl mx-auto">
          <div className="flex bg-secondary-100 min-h-screen">
            <DriverListSidebar />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </div>
    </DriversListProvider>
  );
};

export default DriversLayout;
