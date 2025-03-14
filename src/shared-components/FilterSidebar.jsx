"use client";

import FilterSection from "shared-components/FilterSection";
import FilterCheckbox from "./FilterCheckbox";

const FilterSidebar = ({
  title,
  selectedStatus,
  onStatusChange,
  filterOptions,
}) => {
  return (
    <FilterSection title={title}>
      <div className="space-y-4">
        {filterOptions.map((option) => (
          <FilterCheckbox
            key={option.id}
            id={option.id}
            label={option.label}
            checked={selectedStatus === option.value}
            onChange={(checked) => checked && onStatusChange(option.value)}
          />
        ))}
      </div>
    </FilterSection>
  );
};

export default FilterSidebar;
