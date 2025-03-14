import React from "react";
import AdList from "./AdList";

function MasterDetailSidebar({ data, selectedItem, setSelectedItem }) {
  return (
    <div className="border-2 border-secondary-300 rounded-2xl p-4">
      <AdList
        data={data}
        selectedStatus={selectedItem}
        onSelectStatus={setSelectedItem}
      />
    </div>
  );
}

export default MasterDetailSidebar;
