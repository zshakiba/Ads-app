import { ads } from "@/constants/data";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const { default: AdCard } = require("./AdCard");

const AdList = ({ adType }) => {
  ads.filter((ad) => ad.description === adType);

  return (
    <div className="container  ">
      <div className="flex justify-between border-b border-secondary-300 mb-3">
        <p className="text-base font-bold p-2 text-secondary-500">
          آخرین تبلیغات {adType}
        </p>
        <div className="flex justify-center items-center">
          <p className="text-sm p-2 text-primary-500">مشاهده همه</p>
          <ChevronLeftIcon className="w-4 h-4 text-secondary-500" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {ads.map((ad) => (
          <AdCard key={ad.id} {...ad} />
        ))}
      </div>
    </div>
  );
};
export default AdList;
