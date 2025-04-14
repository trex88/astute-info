import { LucideBuilding2, LucideHelpCircle, Users } from "lucide-react";
import Link from "next/link";

function DropdownMore({ removeDropdown }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40
        animate-fadeIn"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <LucideHelpCircle className="size-5 lg:size-6 text-primary" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold">Support</h3>
            </div>
            <ul className="space-y-3 pl-10">
              <li>
                <Link
                  href="supportCentre"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-primary
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-primary rounded-full"></span>
                  Support Centre & FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="contactUs"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-primary
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-primary rounded-full"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="cancellationOptions"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-primary
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-primary rounded-full"></span>
                  Cancellation Options
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-secondary/10 p-2 rounded-full">
                <Users className="size-5 lg:size-6 text-secondary" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold">
                AstuteInfo Services
              </h3>
            </div>
            <ul className="space-y-3 pl-10">
              <li>
                <Link
                  href="bookingGuide"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-secondary
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-secondary rounded-full"></span>
                  How to book our AstuteInfo Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-secondary
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-secondary rounded-full"></span>
                  Join our AstuteInfo training classes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-secondary
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-secondary rounded-full"></span>
                  Other specialized AstuteInfo services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-secondary
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-secondary rounded-full"></span>
                  Community Forums
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-accent/10 p-2 rounded-full">
                <LucideBuilding2 className="size-5 lg:size-6 text-accent" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold">AstuteInfo</h3>
            </div>
            <ul className="space-y-3 pl-10">
              <li>
                <Link
                  href="aboutUs"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-accent
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-accent rounded-full"></span>
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="investor"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-accent
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-accent rounded-full"></span>
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link
                  href="partners"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-accent
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-accent rounded-full"></span>
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="news"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-accent
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-accent rounded-full"></span>
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  href="career"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-accent
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-accent rounded-full"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="contactUs"
                  className="text-base lg:text-lg flex items-center gap-2 text-gray-700 hover:text-accent
                    transition-colors"
                  onClick={removeDropdown}
                >
                  <span className="size-1.5 bg-accent rounded-full"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownMore;
