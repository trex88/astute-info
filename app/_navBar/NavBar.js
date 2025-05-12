"use client";

import Link from "next/link";
import {
  LuBrainCog,
  LuChevronDown,
  LuLayers,
  LuLightbulb,
  LuMenu,
  LuWand,
  LuX,
} from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import MobileAccordion from "../_accordion/MobileAccordion";
import { LucideHelpCircle } from "lucide-react";
import MainNavLink from "./MainNavLink";
import DropdownProducts from "./DropdownProducts";
import DropdownRobotics from "./DropdownRobotics";
import DropdownSolutions from "./DropdownSolutions";
import DropdownMore from "./DropdownMore";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobileMenu when clicking outside
  // useEffect(() => {
  //   function handleClickOutsideMobileMenu(e) {
  //     if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
  //       setMobileMenuOpen(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutsideMobileMenu);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutsideMobileMenu);
  //   };
  // }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  function removeDropdown() {
    setActiveDropdown(null);
  }

  function removeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <div className="w-full sticky top-0 z-[50]" ref={dropdownRef}>
      {/* Main Navbar */}
      <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div
          className="container mx-auto px-4 md:px-4 xl:px-10 2xl:px-10 flex items-center
            justify-between h-30"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={removeDropdown}
          >
            <div
              className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg transform
                transition-transform group-hover:rotate-12 duration-300"
            >
              <LuLightbulb className="h-6 w-6 text-white" />
            </div>
            <span
              className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text
                text-transparent"
            >
              AstuteInfo
            </span>
          </Link>
          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Products & Services */}
            <MainNavLink
              toggleDropdown={toggleDropdown}
              activeDropdown={activeDropdown}
              dropdownName="products"
            >
              <LuLayers className="size-4 lg:size-5 mr-1" />
              Products & Services
              <LuChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === "products" ? "rotate-180" : "" }`}
              />
            </MainNavLink>
            {/* Robotics */}
            <MainNavLink
              toggleDropdown={toggleDropdown}
              activeDropdown={activeDropdown}
              dropdownName="robotics"
            >
              <LuBrainCog className="size-4 lg:size-5 mr-1" />
              Robotics
              <LuChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === "robotics" ? "rotate-180" : "" }`}
              />
            </MainNavLink>
            {/* Solutions */}
            <MainNavLink
              toggleDropdown={toggleDropdown}
              activeDropdown={activeDropdown}
              dropdownName="solutions"
            >
              <LuWand className="size-4 lg:size-5 mr-1" />
              Solutions
              <LuChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === "solutions" ? "rotate-180" : "" }`}
              />
            </MainNavLink>
            {/* More */}
            <MainNavLink
              toggleDropdown={toggleDropdown}
              activeDropdown={activeDropdown}
              dropdownName="more"
            >
              <LucideHelpCircle className="size-4 lg:size-5 mr-1" />
              More
              <LuChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === "more" ? "rotate-180" : "" }`}
              />
            </MainNavLink>
          </nav>

          {/* Right Side - Login Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="login"
              className="text-3xs lg:text-lg bg-gradient-to-r from-primary to-secondary text-white px-6
                py-2.5 rounded-md font-medium hover:shadow-md transition-all duration-300
                hover:-translate-y-0.5 hidden md:flex items-center"
              onClick={removeDropdown}
            >
              LOGIN
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden rounded-md p-2 text-gray-500 hover:text-primary hover:bg-gray-100
                hover:cursor-pointer transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <LuX className="h-6 w-6" />
              ) : (
                <LuMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menus */}
      {activeDropdown === "products" && (
        <DropdownProducts removeDropdown={removeDropdown} />
      )}
      {activeDropdown === "robotics" && (
        <DropdownRobotics removeDropdown={removeDropdown} />
      )}
      {activeDropdown === "solutions" && (
        <DropdownSolutions removeDropdown={removeDropdown} />
      )}
      {activeDropdown === "more" && (
        <DropdownMore removeDropdown={removeDropdown} />
      )}

      {/* Mobile Menu - Slide in from right */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuRef={mobileMenuRef}
        removeMobileMenu={removeMobileMenu}
      />
    </div>
  );
}

export default NavBar;
