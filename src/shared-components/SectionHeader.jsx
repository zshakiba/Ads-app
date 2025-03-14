import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const SectionHeader = ({ title, icon, viewAllLink }) => {
  return (
    <div className="flex justify-between border-b border-secondary-300 mb-4">
      <p className="text-base font-bold p-2 text-secondary-500">{title}</p>
      <Link href={viewAllLink} className="flex justify-center items-center">
        {icon && (
          <>
            <p className="text-sm p-2 text-primary-500">مشاهده همه</p>
            <ChevronLeftIcon className="w-4 h-4 text-primary-500" />
          </>
        )}
      </Link>
    </div>
  );
};

export default SectionHeader;
