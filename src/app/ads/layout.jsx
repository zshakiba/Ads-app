"use client";

import Header from "shared-components/Header";
import FilterCheckbox from "./-/components/FilterCheckbox";
import FilterSection from "./-/components/FilterSection";
import MobileFilters from "./-/components/MobileFilters";
import Footer from "shared-components/Footer";

// import MobileFilters from "@/components/MobileFilters";
// import FilterSection from "@/components/FilterSection";
// import FilterCheckbox from "@/components/FilterCheckbox";

export default function AdLayout() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <div className="hidden lg:block">
              <FilterSection title="Color">
                <div className="space-y-4">
                  <FilterCheckbox
                    id="filter-color-0"
                    label="White"
                    name="color[]"
                    value="white"
                  />
                  <FilterCheckbox
                    id="filter-color-1"
                    label="Beige"
                    name="color[]"
                    value="beige"
                  />
                  {/* Add more color options */}
                </div>
              </FilterSection>

              <FilterSection title="Category">
                <div className="space-y-4">
                  <FilterCheckbox
                    id="filter-category-0"
                    label="New Arrivals"
                    name="category[]"
                    value="new-arrivals"
                  />
                  <FilterCheckbox
                    id="filter-category-1"
                    label="Sale"
                    name="category[]"
                    value="sale"
                  />
                  {/* Add more category options */}
                </div>
              </FilterSection>

              <FilterSection title="Size">
                <div className="space-y-4">
                  <FilterCheckbox
                    id="filter-size-0"
                    label="2L"
                    name="size[]"
                    value="2l"
                  />
                  <FilterCheckbox
                    id="filter-size-1"
                    label="6L"
                    name="size[]"
                    value="6l"
                  />
                  {/* Add more size options */}
                </div>
              </FilterSection>
            </div>
          </div>
          <div className="col-span-3">
            <span>hello</span>
          </div>
        </div>
      </div>
    </>
  );
}
