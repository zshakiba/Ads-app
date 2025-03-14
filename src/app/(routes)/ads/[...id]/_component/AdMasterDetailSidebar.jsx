import React from "react";
import { useAdsListContext } from "../../_context/ads-list-context";
import { ads } from "@/constants/data";
import MasterDetailSidebar from "../../_component/MasterDetailSidebar";

function AdMasterDetailSidebar() {
  const { selectedAd, setSelectedAd } = useAdsListContext();

  return (
    <aside className="w-full md:w-1/4 p-4 overflow-y-auto ">
      <MasterDetailSidebar
        selectedItem={selectedAd}
        setSelectedItem={setSelectedAd}
        data={ads}
      />
    </aside>
  );
}

export default AdMasterDetailSidebar;
