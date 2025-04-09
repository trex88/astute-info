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
import { LucideBuilding2, LucideHelpCircle, Users } from "lucide-react";
import MainNavLink from "./MainNavLink";
import DropdownProducts from "./DropdownProducts";
import DropdownRobotics from "./DropdownRobotics";
import DropdownSolutions from "./DropdownSolutions";
import DropdownMore from "./DropdownMore";

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
        <div className="container mx-auto px-4 flex items-center justify-between h-30">
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
              href="/login"
              className="text-3xs lg:text-lg bg-gradient-to-r from-primary to-secondary text-white px-6
                py-2.5 rounded-md font-medium hover:shadow-md transition-all duration-300
                hover:-translate-y-0.5 hidden md:flex items-center"
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
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none" }`}
        ref={mobileMenuRef}
      >
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform
            transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full" }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                <LuLightbulb className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">AstuteInfo</span>
            </div>
            <button
              className="p-2 text-gray-500 hover:text-primary rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LuX className="size-6 cursor-pointer" />
            </button>
          </div>

          <div className="p-4 overflow-y-auto h-full pb-32">
            <div className="space-y-6">
              {/* Mobile Login Button */}
              <div className="mb-8">
                <Link
                  href="/login"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-md
                    font-medium w-full flex items-center justify-center duration-200"
                >
                  LOGIN
                </Link>
              </div>

              {/* Mobile Navigation Accordion */}
              <MobileAccordion
                title="Products & Services"
                icon={<LuLayers className="h-5 w-5" />}
                items={[
                  {
                    label: "Fraud detection platform",
                    href: "fraudDetectionPlatform",
                  },
                  {
                    label: "Cybersecurity Threat Detection",
                    href: "cyberThreatDetectionAndResponse",
                  },
                  {
                    label: "Financial Advisory Platform",
                    href: "financialAdvisoryPlatform",
                  },
                  {
                    label: "Advance Financial Modeling",
                    href: "advanceFinancialModellingPlatform",
                  },
                  { label: "AI Implementation Services", href: "#" },
                  {
                    label: "Fraud Detection Services",
                    href: "fraudDetectionAnomalyDetection",
                  },
                ]}
                removeMobileMenu={removeMobileMenu}
              />

              <MobileAccordion
                title="Robotics"
                icon={<LuBrainCog className="h-5 w-5" />}
                items={[
                  {
                    label: "AI-Powered Financial Advisory",
                    href: "aiPoweredFinancialAdvisoryPlatforms",
                  },
                  {
                    label: "Autonomous Robotic Process Automation",
                    href: "rpaForBankingOps",
                  },
                ]}
                removeMobileMenu={removeMobileMenu}
              />

              <MobileAccordion
                title="Solutions"
                icon={<LuWand className="h-5 w-5" />}
                items={[
                  {
                    label: "AI-Powered Investment Banking Analytics",
                    href: "aiPoweredInvestmentBankingAnalytics",
                  },
                  {
                    label: "Robotics-Enhanced Customer Service",
                    href: "roboticsEnhancedCustomerServiceInBanking",
                  },
                ]}
                removeMobileMenu={removeMobileMenu}
              />

              <MobileAccordion
                title="Support"
                icon={<LucideHelpCircle className="h-5 w-5" />}
                items={[
                  { label: "Support Centre & FAQ", href: "supportCentre" },
                  { label: "Contact Us", href: "contactUs" },
                  {
                    label: "Cancellation Options",
                    href: "cancellationOptions",
                  },
                ]}
                removeMobileMenu={removeMobileMenu}
              />

              <MobileAccordion
                title="AstuteInfo Services"
                icon={<Users className="h-5 w-5" />}
                items={[
                  { label: "How to book our services", href: "bookingGuide" },
                  { label: "Join our training classes", href: "#" },
                  { label: "Specialized services", href: "#" },
                  { label: "Community Forums", href: "#" },
                ]}
                removeMobileMenu={removeMobileMenu}
              />

              <MobileAccordion
                title="About AstuteInfo"
                icon={<LucideBuilding2 className="h-5 w-5" />}
                items={[
                  { label: "About us", href: "aboutUs" },
                  { label: "Investor Relations", href: "investor" },
                  { label: "Partners", href: "partners" },
                  { label: "Newsroom", href: "news" },
                  { label: "Careers", href: "career" },
                  { label: "Contact Us", href: "contactUs" },
                ]}
                removeMobileMenu={removeMobileMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
