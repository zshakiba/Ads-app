"use client";
import { driverMenuItems } from "@/constants/data";
import Avatar from "@/ui/Avatar";
import ButtonIcon from "@/ui/ButtonIcon";
import DropdownMenu from "@/ui/DropdownMenu";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

// import { useAuth } from "@/context/AuthContext";
// import Loading from "@/components/ui/Loading";
// import { HeaderSkeleton } from "./Skeletons";

function Header({}) {
  // const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  // const { user, isLoading } = useAuth();
  // State to manage dropdown visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  return (
    <header className="bg-secondary-0">
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <div className="flex items-center gap-x-3">
          <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-x-2">
            <span className="text-sm lg:text-lg font-bold text-secondary-700">
              سلام؛
              {/* {user?.name} */}
            </span>
          </div>
        </div>
        {/* Navigation Menu with Agencies Dropdown */}
        <nav className="max-lg:hidden">
          <ul className="flex items-center gap-x-6">
            {/* Use the DropdownMenu component */}
            <DropdownMenu
              title={
                <ButtonIcon
                  color="outline"
                  className="border-secondary-200 rounded-2xl flex items-center"
                >
                  <Avatar src="" />
                </ButtonIcon>
              }
              items={driverMenuItems}
              isOpen={isMenuOpen} // Pass the state to control visibility
              onClose={() => setIsMenuOpen(false)} // Close the dropdown
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
