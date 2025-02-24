"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ path,icon, children }) {
  const pathname = usePathname();

  return (
    <Link
      className={`flex-row items-center justify-center gap-x-2 block py-2 text-secondary-200 hover:text-primary-800 transition-all ease-out md:text-sm lg:text-sm hover:scale-110 duration-300
        ${pathname === path ? "text-primary-900" : ""}
      `}
      href={path}
    >
      {/* {icon} */}
      {children}
    </Link>
  );
}

export default NavLink;
