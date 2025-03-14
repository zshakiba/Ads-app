import { ads, categories } from "@/constants/data";
import CategoryTabs from "./CategoryTabs";
import CategoryContent from "./CategoryContent";
import { useMainContext } from "../_context/main-context";

const CategoriesSection = () => {
  const { activeCategory, setActiveCategory } = useMainContext();

  // Filter categories based on the active category
  const filteredCategories = categories.filter(
    (category) => category.name === activeCategory
  );

  const filteredAds = ads.filter((ad) => ad.adType === activeCategory);

  return (
    <div className="mb-20">
      <h2 className="text-base font-bold text-secondary-500 mb-8">
        دسته‌بندی تبلیغات
      </h2>

      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory} // Update the active category
      />

      {/* Content for Each Category */}
      <div className="mt-8 p-4">
        {filteredCategories.map((category) => (
          <CategoryContent
            key={category.id}
            category={category}
            ads={filteredAds} // Pass the ads for this category
            isActive={activeCategory === category.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
