"use client";

import { useState, useEffect } from "react";
import {
  Bars3Icon,
  UserIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import NavLink from "./NavLink";
import DarkModeToggle from "@/ui/DarkModeToggle";
import Drawer from "@/ui/Drawer";
import Image from "next/image";
import DropdownMenu from "@/ui/DropdownMenu";
import ButtonIcon from "@/ui/ButtonIcon";
import Avatar from "@/ui/Avatar";
import { driverMenuItems } from "@/constants/data";
import Modal from "@/ui/Modal";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

// Constants for navigation links
const NAV_LINKS = [
  { id: 1, children: "درباره ما", path: "/about" },
  { id: 2, children: "تماس با ما", path: "/contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Toggle drawer visibility
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  // Open modal with specific content
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Detect screen size and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for mobile view
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="bg-secondary-600 shadow fixed z-30 w-full transition-all top-0 px-4">
        <nav className="xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto xl:px-0 sm:px-5">
          <div className="flex justify-between items-center ">
            {/* Left Section: Logo and Mobile Menu */}
            <div className="flex items-center gap-x-5">
              {isMobile && (
                <button
                  onClick={toggleDrawer}
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Bars3Icon className="h-6 w-6 cursor-pointer" />
                </button>
              )}

              <div className="flex justify-center items-center gap-4">
                <NavLink path="/">
                  <div className="relative w-11 h-11 hidden lg:block">
                    <Image
                      src="/images/vanet.png"
                      alt="تبلیغات هوشمند روی وانت‌ها"
                      fill
                      priority
                      quality={90}
                      className="object-cover opacity-80 rounded-xl"
                    />
                  </div>
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-x-4">
                  <NavLink
                    path="/search"
                    icon={
                      <MagnifyingGlassIcon className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
                    }
                    className="flex flex-row items-center justify-center gap-x-2"
                  >
                    جستجوی تبلیغات
                  </NavLink>
                  <NavLink
                    path="/advertisers"
                    icon={
                      <UserGroupIcon className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
                    }
                    className="flex flex-row items-center justify-center gap-x-2"
                  >
                    بخش تبلیغ دهندگان
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Right Section: User Actions and Dark Mode Toggle */}
            <div className="flex items-center gap-x-5">
              <div className="hidden md:flex items-center gap-x-4">
                <button className="text-" onClick={() => openModal(<SignInForm />)}>
                  ورود راننده
                </button>
                <button onClick={() => openModal(<SignUpForm />)}>
                  ثبت نام راننده
                </button>
              </div>

              {/* User Dropdown */}
              <div>
                <div className="md:hidden">
                  <UserIcon className="h-6 w-6 cursor-pointer" />
                </div>

                <DropdownMenu
                  title={
                    <ButtonIcon
                      color="outline"
                      className="border-secondary-200 rounded-2xl flex items-center"
                    >
                      <div className="flex items-center gap-x-2">
                        <p className="text-secondary-200 hover:text-primary-800 transition-all ease-out md:text-sm lg:text-sm hover:scale-110 duration-300">
                          zeinab shakiba
                        </p>
                        <Avatar src="" />
                      </div>
                    </ButtonIcon>
                  }
                  items={driverMenuItems}
                  isOpen={isMenuOpen}
                  onClose={() => setIsMenuOpen(false)}
                />
              </div>

              {/* Dark Mode Toggle */}
              <div>
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {isMobile && isDrawerOpen && (
        <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
          <ul className="flex flex-col gap-y-4 p-4 mt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <NavLink path={link.path}>{link.children}</NavLink>
              </li>
            ))}
            <li>
              <button onClick={() => openModal(<SignInForm />)}>ورود</button>
            </li>
            <li>
              <button onClick={() => openModal(<SignUpForm />)}>ثبت‌نام</button>
            </li>
          </ul>
        </Drawer>
      )}

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        title={modalContent?.type === "signin" ? "ورود" : "ثبت‌نام"}
      >
        {modalContent}
      </Modal>
    </>
  );
}

export default Header;
