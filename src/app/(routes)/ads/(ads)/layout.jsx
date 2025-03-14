"use client";

import FilterSidebar from "shared-components/FilterSidebar";
import React, { useState } from "react";
import { AdsListProvider } from "../_context/ads-list-context";
import AdsListSidebar from "../_component/AdsListSidebar";

const AdLayout = ({ children }) => {
  return (
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
  );
};

export default AdLayout;
