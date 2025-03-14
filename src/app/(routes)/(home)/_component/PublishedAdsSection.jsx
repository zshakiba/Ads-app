import { ads } from "@/constants/data";
import SectionHeader from "shared-components/SectionHeader";
import Carousel from "shared-components/Carousel";
import AdCard from "../../ads/_component/AdCard";
import Empty from "shared-components/Empty";

const PublishedAdsSection = () => {
  const renderAdCard = (ad) => <AdCard key={ad.id} {...ad} />;

  return (
    <div className="mb-20">
      <SectionHeader
        title="آخرین تبلیغات منتشر شده"
        viewAllLink="/ads"
        icon="true"
      />
      <div className="px-12 rounded-xl">
        {ads.length > 0 ? (
          <Carousel
            items={ads}
            renderItem={renderAdCard}
            slidesPerView={4}
            options={{ slidesPerView: 4 }} // Ensure this matches
          />
        ) : (
          <Empty resourceName="تبلیغی" />
        )}
      </div>
    </div>
  );
};

export default PublishedAdsSection;
