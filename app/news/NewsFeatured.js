import {
  LuBox,
  LuCalendar,
  LuCpu,
  LuDatabase,
  LuLayers,
  LuServer,
} from "react-icons/lu";
import Badge from "../_components/Badge";
import Benefit from "./Benefit";

function NewsFeatured({ latestNewsSectionRef }) {
  return (
    <section
      className="mb-30 scroll-mt-35 px-6 sm:px-3 max-w-full xl:max-w-10/12 2xl:max-w-9/12 mx-auto"
      ref={latestNewsSectionRef}
    >
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Latest News</h2>
        <div className="h-px bg-gray-200 flex-grow"></div>
      </div>

      <div className="bg-gradient-to-r from-[#76b900]/10 to-transparent rounded-xl p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="flex items-center gap-2 mb-5">
              <Badge className="bg-[#76b900] hover:bg-[#76b900]/90">
                NVIDIA Partnership
              </Badge>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <LuCalendar className="h-3 w-3" /> May 2024
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              AstuteInfo Joins NVIDIA Inception Program
            </h3>
            <p className="text-gray-600 mb-5 text-3xs md:text-xl">
              We are thrilled to announce that from May 2024, AstuteInfo has
              been accepted into the prestigious NVIDIA Inception Program! This
              exciting development places AstuteInfo among an elite group of
              startups that are driving innovation and transforming industries
              worldwide.
            </p>
            <h4 className="text-xl md:text-2xl font-bold mb-3">
              Unleashing New Opportunities with NVIDIA Inception
            </h4>
            <p className="text-gray-600 mb-6 text-3xs md:text-xl">
              Joining the NVIDIA Inception Program opens up a wealth of
              resources and support for AstuteInfo. Our team will have access to
              cutting-edge AI models, development tools, and collaborative
              platforms designed to accelerate our projects and enhance our
              technological capabilities.
            </p>
          </div>
          <div className="md:max-w-1/3 flex flex-col gap-4">
            <div className="bg-white rounded-lg border border-neutral-200 p-5">
              <h4 className="font-bold mb-8 flex items-center gap-2 text-3xs md:text-xl">
                Key Benefits and Resources
              </h4>
              <ul className="space-y-8">
                <Benefit
                  icon={<LuDatabase className="size-6 text-[#76b900]" />}
                  heading="Inception Portal"
                  subhead="Access to startup resources"
                />
                <Benefit
                  icon={<LuBox className="size-6 text-[#76b900]" />}
                  heading="AI Foundation Models"
                  subhead="Optimized for peak performance"
                />
                <Benefit
                  icon={<LuCpu className="size-6 text-[#76b900]" />}
                  heading="Developer Program"
                  subhead=" Free tools and resources"
                />
                <Benefit
                  icon={<LuLayers className="size-6 text-[#76b900]" />}
                  heading="NVIDIA Omniverse"
                  subhead="3D simulation platform"
                />
                <Benefit
                  icon={<LuServer className="size-6 text-[#76b900]" />}
                  heading=" Triton Management"
                  subhead="Efficient model orchestration"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 md:p-8">
        <h4 className="text-xl md:text-2xl font-bold mb-4">Next Steps</h4>
        <p className="text-gray-600 mb-4 text-3xs md:text-lg">
          To maximize the value of our NVIDIA Inception membership, AstuteInfo
          will participate in onboarding webinars and leverage the extensive
          resources available through the program. This partnership marks a
          significant milestone in our journey to push the boundaries of AI.
        </p>
        <p className="text-gray-600 mb-4 text-3xs md:text-lg">
          We extend our heartfelt thanks to the NVIDIA Inception Team for their
          support and recognition. This opportunity will undoubtedly propel
          AstuteInfo toward new heights of innovation and success.
        </p>
        <div className="flex items-center gap-2 text-primary font-medium text-3xs md:text-lg">
          <span>
            Stay tuned for more updates as we embark on this exciting new
            chapter!
          </span>
        </div>
      </div>
    </section>
  );
}

export default NewsFeatured;
