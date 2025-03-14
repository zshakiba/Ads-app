import { drivers } from "@/constants/data";
import DriversList from "app/(routes)/drivers/_component/DriversList";
import { useDriverListContext } from "app/(routes)/drivers/_context/driver-list-context";
import React from "react";

function DriverDetailSidebar() {
  const { selectedDriver, setSelectedDriver } = useDriverListContext();
  return (
    <aside className="w-full md:w-1/5 p-4 overflow-y-auto ">
      <DriversList
        drivers={drivers}
        selectedDriver={selectedDriver}
        onSelectDriver={setSelectedDriver}
      />
    </aside>
  );
}

export default DriverDetailSidebar;
