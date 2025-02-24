import Avatar from "@/ui/Avatar";
import { cn } from "@/utils/cn";
// import { cn } from "@/lib/utils";

const DriverCard = ({ name, vehicle, adStatus, avatar, adType, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "bg-secondary-50 shadow-lg hover:shadow-2xl transition-shadow p-6 rounded-xl flex flex-col items-center text-center gap-2",
      hovered !== null && hovered !== index && "opacity-50"
    )}
  >
    <div className="flex flex-row justify-center items-center gap-3">
      <Avatar src={avatar} width={80} className="mb-4" />
      <div className="flex flex-col justify-between items-start">
        <h3 className="text-lg font-bold text-secondary-900">{name}</h3>
        <p className="text-secondary-600 text-xs">{vehicle}</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-1">
      <p className="text-xs text-secondary-500">{adType}</p>
      <p
        className={`text-xs font-bold ${
          adStatus === "تبلیغ فعال" ? "text-green-500" : "text-red-500"
        }`}
      >
        {adStatus}
      </p>
    </div>
  </div>
);

export default DriverCard;