"use client";

import { Card, CardContent } from "shared-components/Cards";

const AssignedAds = ({ ads }) => {
  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-secondary-600">
          تبلیغات اختصاص داده شده
        </h3>
        <ul className="mt-4 space-y-3">
          {ads?.map((ad, index) => (
            <li key={index} className="p-3 bg-secondary-100 rounded-lg shadow-sm">
              <p className="font-medium text-secondary-600">{ad.title}</p>
              <p className="text-sm text-secondary-500">{ad.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AssignedAds;
