import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const ViewAllLink = ({src}) => {
  return (
    <Link href={src} className="flex flex-row items-center gap-2">
      <p className="text-sm font-bold text-primary-600">مشاهده همه آگهی ها</p>
      <ChevronLeftIcon className="w-6 h-6 stroke-primary-500" />
    </Link>
  );
};

export default ViewAllLink;
