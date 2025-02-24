import { steps } from "@/constants/data";
import FeatureCard from "../../../../../ui/FeatureCard";

const HowItWorksSection = () => {
  return (
    <div className="flex-row justify-center w-full pt-4 md:pt-0">
      <div className="mx-auto p-0">
        <div className="py-6 px-24">
          <div className="rounded-xl bg-secondary-200 p-12">
            <h2 className="text-2xl font-bold text-secondary-700 mb-12">
              چگونه با اپلیکیشن کسب درآمد کنید؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
              {steps.map((item, index) => (
                <FeatureCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorksSection;
