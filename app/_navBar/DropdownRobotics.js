import Link from "next/link";
import {
  LuBrainCircuit,
  LuBrainCog,
  LuChevronRight,
  LuWorkflow,
} from "react-icons/lu";

function DropdownRobotics({ removeDropdown }) {
  return (
    <div
      className="absolute left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40
        animate-fadeIn"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-primary/10 p-2 rounded-full">
            <LuBrainCog className="size-5 lg:size-6 text-primary" />
          </div>
          <h3 className="text-lg lg:text-xl font-bold">Robotics</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-10">
          <div
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200
              hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <LuBrainCircuit className="size-5 lg:size-6 text-primary" />
              </div>
              <h4 className="font-medium text-base lg:text-lg">
                AI-Powered Financial Advisory
              </h4>
            </div>
            <p className="text-gray-600 text-sm lg:text-base mb-4">
              Advanced platforms with Robo-Advisors that provide personalized
              financial guidance using AI algorithms
            </p>
            <Link
              href="aiPoweredFinancialAdvisoryPlatforms"
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
                <LuWorkflow className="size-5 lg:size-6 text-primary" />
              </div>
              <h4 className="font-medium text-base lg:text-lg">
                Autonomous Robotic Process Automation
              </h4>
            </div>
            <p className="text-gray-600 text-sm lg:text-base mb-4">
              RPA solutions designed specifically for banking operations to
              streamline workflows and reduce manual tasks
            </p>
            <Link
              href="rpaForBankingOps"
              className="text-primary font-medium text-sm lg:text-base hover:underline inline-flex
                items-center underline-offset-3"
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

export default DropdownRobotics;
