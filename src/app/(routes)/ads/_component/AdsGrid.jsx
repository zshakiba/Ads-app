"use client";

import AdCard from "app/(routes)/ads/_component/AdCard";

const AdsGrid = ({ ads }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {ads.map((ad) => (
        <AdCard F key={ad.id} {...ad} />
      ))}
    </div>
  );
};

export default AdsGrid;
