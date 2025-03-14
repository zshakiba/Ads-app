"use client";
import DriverCard from "app/(routes)/drivers/_component/DriverCard";
import { useState } from "react";

const DriversGrid = ({
  drivers,
  className = "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
}) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className={`grid  gap-6 ${className}`}>
      {drivers.map((driver) => (
        <DriverCard
          key={driver.id}
          {...driver}
          index={driver.id}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

export default DriversGrid;
