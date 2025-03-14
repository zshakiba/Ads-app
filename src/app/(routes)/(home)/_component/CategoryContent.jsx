import SectionHeader from "shared-components/SectionHeader";
import AdsGrid from "app/(routes)/ads/_component/AdsGrid";

const CategoryContent = ({ category, ads, isActive }) => {
  if (!isActive) return null;

  return (
    <div className="container">
      <SectionHeader
        title={`آخرین تبلیغات ${category.name}`}
        viewAllLink={`/ads`}
        icon="true"
      />
      <AdsGrid ads={ads} />
    </div>
  );
};

export default CategoryContent;
