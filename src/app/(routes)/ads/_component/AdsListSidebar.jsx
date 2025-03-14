import FilterSidebar from "shared-components/FilterSidebar";
import React from "react";
import { useAdsListContext } from "../_context/ads-list-context";
import { adFilterOption } from "@/constants/data";

function AdsListSidebar() {
  const { selectedStatus, setSelectedStatus } = useAdsListContext();
  return (
    <aside className="w-full md:w-1/5 p-4 overflow-y-auto ">
      <FilterSidebar
        title="دسته بندی"
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        filterOptions={adFilterOption}
      />
    </aside>
  );
}

export default AdsListSidebar;
