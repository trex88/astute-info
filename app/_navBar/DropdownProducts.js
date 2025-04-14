import { LucideBarChart3, Users } from "lucide-react";
import Link from "next/link";
import {
  LuChartNoAxesCombined,
  LuChevronRight,
  LuCpu,
  LuLayers,
  LuNetwork,
  LuShield,
  LuShieldAlert,
} from "react-icons/lu";

function DropdownProducts({ removeDropdown }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40
        animate-fadeIn"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* Products column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <LuLayers className="size-5 lg:size-6 text-primary" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold">Products</h3>
            </div>
            <ul className="space-y-4 pl-10">
              <li className="group">
                <Link
                  href="fraudDetectionPlatform"
                  className="flex items-start gap-3 p-2 -ml-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={removeDropdown}
                >
                  <LuNetwork className="size-5 lg:size-6 text-primary mt-0.5" />
                  <div>
                    <span
                      className="text-base lg:text-lg font-medium text-gray-900 group-hover:text-primary
                        transition-colors"
                    >
                      Fraud detection platform
                    </span>
                    <p className="text-sm lg:text-base text-gray-500 mt-0.5">
                      Advanced security for finance and banking
                    </p>
                  </div>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="cyberThreatDetectionAndResponse"
                  className="flex items-start gap-3 p-2 -ml-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={removeDropdown}
                >
                  <LuShieldAlert className="size-5 lg:size-6 text-primary mt-0.5" />
                  <div>
                    <span
                      className="text-base lg:text-lg font-medium text-gray-900 group-hover:text-primary
                        transition-colors"
                    >
                      Cybersecurity Threat Detection
                    </span>
                    <p className="text-sm lg:text-base text-gray-500 mt-0.5">
                      Proactive protection against cyber threats
                    </p>
                  </div>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="financialAdvisoryPlatform"
                  className="flex items-start gap-3 p-2 -ml-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={removeDropdown}
                >
                  <LuChartNoAxesCombined className="size-5 lg:size-6 text-primary mt-0.5" />
                  <div>
                    <span
                      className="text-base lg:text-lg font-medium text-gray-900 group-hover:text-primary
                        transition-colors"
                    >
                      Financial Advisory Platform
                    </span>
                    <p className="text-sm lg:text-base text-gray-500 mt-0.5">
                      AI-powered financial guidance and insights
                    </p>
                  </div>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="advanceFinancialModellingPlatform"
                  className="flex items-start gap-3 p-2 -ml-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={removeDropdown}
                >
                  <LucideBarChart3 className="size-5 lg:size-6 text-primary mt-0.5" />
                  <div>
                    <span
                      className="text-base lg:text-lg font-medium text-gray-900 group-hover:text-primary
                        transition-colors"
                    >
                      Advance Financial Modeling
                    </span>
                    <p className="text-sm lg:text-base text-gray-500 mt-0.5">
                      Sophisticated modeling tools for financial analysis
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* Services column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-secondary/10 p-2 rounded-full">
                <Users className="size-5 lg:size-6 text-secondary" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold">Services</h3>
            </div>
            <ul className="space-y-4 pl-10">
              {/* Not working yet */}
              <li className="group">
                <Link
                  href=""
                  className="opacity-30 cursor-not-allowed flex items-start gap-3 p-2 -ml-2 rounded-md
                    hover:bg-gray-50 transition-colors"
                >
                  <LuCpu className="size-5 lg:size-6 text-secondary mt-0.5" />
                  <div>
                    <span className="text-base lg:text-lg font-medium text-gray-900 transition-colors">
                      AI Implementation and Integration
                    </span>
                    <p className="text-sm lg:text-base text-gray-500 mt-0.5">
                      Seamless integration of AI solutions
                    </p>
                  </div>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="fraudDetectionAnomalyDetection"
                  className="flex items-start gap-3 p-2 -ml-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={removeDropdown}
                >
                  <LuShield className="size-5 lg:size-6 text-secondary mt-0.5" />
                  <div>
                    <span
                      className="text-base lg:text-lg font-medium text-gray-900 group-hover:text-secondary
                        transition-colors"
                    >
                      Fraud Detection and Anomaly Detection
                    </span>
                    <p className="text-sm lg:text-base text-gray-500 mt-0.5">
                      Advanced pattern recognition for security
                    </p>
                  </div>
                </Link>
              </li>
            </ul>

            {/* Featured Box */}
            <div
              className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border
                border-gray-200"
            >
              <h4 className="text-base lg:text-lg font-medium text-gray-900 mb-2">
                Need custom solutions?
              </h4>
              <p className="text-sm lg:text-base text-gray-600 mb-3">
                Our team can build tailored solutions for your specific needs
              </p>
              <Link
                href="contactUs"
                className="text-primary font-medium text-sm lg:text-base hover:underline underline-offset-3
                  onClick={removeDropdown} inline-flex items-center"
                onClick={removeDropdown}
              >
                Contact our experts
                <LuChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownProducts;
