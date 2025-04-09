import Link from "next/link";
import {
  LuChartNetwork,
  LuChevronRight,
  LuWand,
  LuUsers,
} from "react-icons/lu";

function DropdownSolutions({ removeDropdown }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40
        animate-fadeIn"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-primary/10 p-2 rounded-full">
            <LuWand className="size-5 lg:size-6 text-primary" />
          </div>
          <h3 className="text-lg lg:text-xl font-bold">Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-10">
          <div
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200
              hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <LuChartNetwork className="size-5 lg:size-6 text-primary" />
              </div>
              <h4 className="font-medium text-base lg:text-lg">
                AI-Powered Investment Banking Analytics
              </h4>
            </div>
            <p className="text-gray-600 text-sm lg:text-base mb-4">
              Advanced analytics solutions for investment banking that leverage
              AI to provide deeper insights
            </p>
            <Link
              href="aiPoweredInvestmentBankingAnalytics"
              className="text-primary font-medium text-sm lg:text-base hover:underline underline-offset-3
                inline-flex items-center"
              onClick={removeDropdown}
            >
              Learn more
              <LuChevronRight />
            </Link>
          </div>

          <div
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200
              hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <LuUsers className="size-5 lg:size-6 text-primary" />
              </div>
              <h4 className="font-medium text-base lg:text-lg">
                Robotics-Enhanced Customer Service
              </h4>
            </div>
            <p className="text-gray-600 text-sm lg:text-base mb-4">
              Innovative customer service solutions for banking that combine AI
              and robotics for superior experiences
            </p>
            <Link
              href="roboticsEnhancedCustomerServiceInBanking"
              className="text-primary font-medium text-sm lg:text-base hover:underline underline-offset-3
                inline-flex items-center"
              onClick={removeDropdown}
            >
              Learn more
              <LuChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownSolutions;
