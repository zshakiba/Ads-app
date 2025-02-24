import Image from "next/image";

const AdCard = ({ title, description, imageUrl, adType, status }) => (
  <div className="bg-secondary-100 shadow-lg hover:shadow-2xl transition-shadow rounded-lg overflow-hidden">
    <Image
      src={imageUrl}
      alt={title}
      width={300}
      height={300}
      className="w-full h-40 object-cover"
    />
    <div className="flex flex-col justify-center items-center gap-2 p-4">
      <h3 className="text-base font-bold text-secondary-600" >{title}</h3>
      {/* <p className="text-xs text-secondary-600">{description}</p> */}
      <p className="text-sm font-bold  text-primary-600">{adType}</p>
      <p
        className={`text-sm text-secondary-500${
          status === "منتشر شده" ? "text-success" : "text-primary-500"
        }`}
      >
        {status}
      </p>
    </div>
  </div>
);
export default AdCard;
