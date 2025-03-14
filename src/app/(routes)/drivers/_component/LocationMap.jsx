import { Card, CardContent } from "shared-components/Cards";

const LocationMap = ({ location }) => {
  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <div className="mt-6 ">
          <h2 className="text-xl font-bold text-secondary-600">
            موقعیت راننده
          </h2>
          <div className="mt-4 w-full max-w-xl  mx-auto ">
            <iframe
              src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              className="w-full aspect-[4/3] rounded-xl border-2 border-secondary-200"
              loading="lazy"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;
