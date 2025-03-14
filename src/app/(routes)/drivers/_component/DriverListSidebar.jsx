import FilterSidebar from "shared-components/FilterSidebar";
import React from "react";
import { useDriverListContext } from "../_context/driver-list-context";
import { driverFilterOptions } from "@/constants/data";

function DriverListSidebar() {
  const { selectedStatus, setSelectedStatus } = useDriverListContext();
  return (
    <aside className="w-full md:w-1/5 p-4 overflow-y-auto ">
      <FilterSidebar
        title="فیلتر رانندگان"
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        filterOptions={driverFilterOptions}
      />
    </aside>
  );
}

export default DriverListSidebar;
