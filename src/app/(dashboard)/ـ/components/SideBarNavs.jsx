import { adminNavItems, advertiserNavItems, driverNavItems } from "@/constants/navItems";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { adminNavItems, advertiserNavItems, driverNavItems} from "";

export default function SideBarNavs() {
  const router = useRouter();
  const path = usePathname(); // Get the current path
  console.log(path);

  // Determine the role based on the path
  const getRoleFromPath = () => {
    if (!path) return null; // Handle undefined path

    if (path.includes("/admin")) {
      return "admin";
    } else if (path.includes("/driver")) {
      return "driver";
    } else if (path.includes("/advertiser")) {
      return "advertiser";
    }
    return null;
  };

  const role = getRoleFromPath();
  console.log(role);

  const getNavItems = () => {
    switch (role) {
      case "admin":
        return adminNavItems;
      case "driver":
        return driverNavItems;
      case "advertiser":
        return advertiserNavItems;
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <ul className="space-y-2">
      {navItems.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                "flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-4",
                {
                  "bg-primary-100/40 !font-bold text-primary-900":
                    router.pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
