import Link from "next/link";
import { LuBrainCog, LuLayers, LuLightbulb, LuWand, LuX } from "react-icons/lu";
import MobileAccordion from "../_accordion/MobileAccordion";
import { LucideBuilding2, LucideHelpCircle, Users } from "lucide-react";

function MobileMenu({
  mobileMenuOpen,
  mobileMenuRef,
  removeMobileMenu,
  setMobileMenuOpen,
}) {
  return (
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
                href="login"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-md
                  font-medium w-full flex items-center justify-center duration-200"
                onClick={removeMobileMenu}
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
                {
                  label: "Join our training classes",
                  href: "https://www.astuteinfo.com/dronetraining",
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                {
                  label: "Specialized services",
                  href: "https://www.droneservicehub.com/service",
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                {
                  label: "Community Forums",
                  href: "https://www.dronesserve.com/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
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
  );
}

export default MobileMenu;
