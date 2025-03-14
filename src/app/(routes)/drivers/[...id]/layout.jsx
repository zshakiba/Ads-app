"use client";

import { createContext } from "react";
import { DriversListProvider } from "../_context/driver-list-context";
import DriverDetailSidebar from "./_component/DriverDetailSidebar";

export const DriverContext = createContext();

const DriverLayout = ({ children }) => {
  return (
    <DriversListProvider>
      <div className="flex w-full bg-secondary-100 py-12">
        <div className="container flex max-w-screen-3xl min-h-screen mx-auto">
          <DriverDetailSidebar />
          <main className="flex-1 p-6 ">{children}</main>
        </div>
      </div>
    </DriversListProvider>
  );
};

export default DriverLayout;
