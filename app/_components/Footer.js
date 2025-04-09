"use client";

import FooterItem from "./FooterItem";
import Link from "next/link";
import {
  LuChevronDown,
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
} from "react-icons/lu";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-80">
      {/* Top Wave Pattern */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 text-white fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 mx-auto py-16">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 justify-items-start lg:justify-items-center
            gap-12"
        >
          {/* Support Column */}
          <div>
            <FooterItem heading={true} color="primary">
              Support
            </FooterItem>
            <ul className="space-y-3">
              <FooterItem
                className="hover:text-primary"
                href="supportCentre"
                color="primary"
              >
                Support Centre & FAQ
              </FooterItem>
              <FooterItem
                className="hover:text-primary"
                href="contactUs"
                color="primary"
              >
                Contact Us
              </FooterItem>
              <FooterItem
                className="hover:text-primary"
                href="cancellationOptions"
                color="primary"
              >
                Cancellation options
              </FooterItem>
            </ul>
          </div>
          {/* AstuteInfo Services Column */}
          <div>
            <FooterItem heading={true} color="secondary">
              AstuteInfo Services
            </FooterItem>
            <ul className="space-y-3">
              <FooterItem
                className="hover:text-secondary"
                href=""
                color="secondary"
              >
                How to book our AstuteInfo services
              </FooterItem>
              <FooterItem
                className="hover:text-secondary"
                href=""
                color="secondary"
              >
                Join our AIRobotics training classes
              </FooterItem>
              <FooterItem
                className="hover:text-secondary"
                href=""
                color="secondary"
              >
                Other specialized AstuteInfo services
              </FooterItem>
              <FooterItem
                className="hover:text-secondary"
                href=""
                color="secondary"
              >
                Community forums
              </FooterItem>
            </ul>
          </div>
          {/* AstuteInfo Column */}
          <div>
            <FooterItem heading={true} color="accent">
              AstuteInfo
            </FooterItem>
            <ul className="space-y-3">
              <FooterItem
                className="hover:text-accent"
                href="aboutUs"
                color="accent"
              >
                About us
              </FooterItem>
              <FooterItem
                className="hover:text-accent"
                href="investor"
                color="accent"
              >
                Investor relations
              </FooterItem>
              <FooterItem
                className="hover:text-accent"
                href="partners"
                color="accent"
              >
                Partners
              </FooterItem>
              <FooterItem
                className="hover:text-accent"
                href="news"
                color="accent"
              >
                Newsroom
              </FooterItem>
              <FooterItem
                className="hover:text-accent"
                href="career"
                color="accent"
              >
                Careers
              </FooterItem>
              <FooterItem className="hover:text-accent" href="" color="accent">
                Contact us
              </FooterItem>
            </ul>
          </div>
        </div>
        {/* Logo Section */}
        <div className="flex justify-center mt-16 mb-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-gray-800 p-3 rounded-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17l10 5 10-5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12l10 5 10-5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">AIRoboticx</span>
          </Link>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Country Selector */}
            <div className="relative">
              <select
                className="appearance-none bg-gray-800 text-gray-300 px-4 py-1 rounded-lg pr-8
                  focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>AI Roboticx United States</option>
                <option>AI Roboticx Canada</option>
                <option>AI Roboticx UK</option>
                <option>AI Roboticx Australia</option>
              </select>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2
                  text-gray-400"
              >
                <LuChevronDown className="h-4 w-4" />
              </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              @Copyright 2025 AIROBOD Inc. All rights reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <Link
                href="#"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-lg"
              >
                <LuFacebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-lg"
              >
                <LuInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-lg"
              >
                <LuTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-lg"
              >
                <LuLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
