"use client";

import React, { createContext } from "react";
import { AdsListProvider } from "../_context/ads-list-context";
import AdMasterDetailSidebar from "./_component/AdMasterDetailSidebar";

export const AdContext = createContext();

const AdLayout = ({ children }) => {
  return (
    <AdsListProvider>
      <div className="flex w-full bg-secondary-100 py-12">
        <div className="container flex max-w-screen-3xl min-h-screen mx-auto">
          <AdMasterDetailSidebar />
          <main className="flex-1 p-6 ">{children}</main>
        </div>
      </div>
    </AdsListProvider>
  );
};

export default AdLayout;
