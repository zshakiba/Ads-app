"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";

export default function DropdownMenu({
  title,
  items,
  isOpen,
  onClose,
  customTrigger,
}) {
  // State for hover-based dropdowns
  const [isHoverOpen, setIsHoverOpen] = useState(false);

  // Determine if the dropdown is open
  const isDropdownOpen = customTrigger ? isOpen : isHoverOpen;

  return (
    <li className=" group text-[14px] relative flex flex-row justify-center items-center">
      {/* Custom trigger for Avatar */}
      {customTrigger ? (
        <div onClick={() => onClose?.()} className="cursor-pointer">
          {title}
        </div>
      ) : (
        // Default trigger for Agencies (hover-based)
        <div
          onMouseEnter={() => setIsHoverOpen(true)}
          onMouseLeave={() => setIsHoverOpen(false)}
          className="hover:text-primary-500 hover:fill-primary-500 text-secondary-500 font-semibold text-[15px] block flex items-center"
       >
          {title}
          <ChevronDownIcon className="ml-1 h-4 w-4 inline-block" />
        </div>
      )}

      {/* Dropdown content */}
      <div className="absolute lg:top-8 max-lg:top-8 -left-1 z-50 flex shadow-lg bg-secondary-0   max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
        <div className="min-w-[180px] ">
          <ul className="">
            {items.map((item, index) => (
              <li key={index} className="py-1 rounded">
                <Link
                  href={item.href}
                  className="hover:text-primary-500 text-secondary-600 font-semibold text-[15px] block"
                  onClick={() => {
                    onClose?.(); // Close dropdown when an item is clicked
                    setIsHoverOpen(false); // Close hover-based dropdown
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
