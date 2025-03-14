import { benefits } from "@/constants/data";
import FeatureCard from "shared-components/FeatureCard";

const BenefitsSection = () => {
  return (
    <div className="rounded-xl bg-secondary-200 p-12 mb-20">
      <h2 className="text-2xl font-bold text-secondary-700 mb-12">
        چرا اپلیکیشن ما انتخابی هوشمندانه است؟
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {benefits.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default BenefitsSection;
