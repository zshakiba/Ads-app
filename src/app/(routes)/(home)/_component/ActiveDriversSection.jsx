import { useState } from "react";
import { drivers } from "@/constants/data";
import SectionHeader from "../../../../shared-components/SectionHeader";
import DriversGrid from "app/(routes)/drivers/_component/DriversGrid";

const ActiveDriversSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="mb-20">
      <SectionHeader title="رانندگان فعال" viewAllLink="/drivers"  icon="true"/>
      <DriversGrid
        drivers={drivers}
        className="grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
      />
    </div>
  );
};

export default ActiveDriversSection;
