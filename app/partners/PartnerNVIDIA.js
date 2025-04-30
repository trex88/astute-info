import { CheckCircle2, ExternalLink, LucideLayers } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const nvidiaResources = [
  {
    title: "Inception Portal",
    description:
      "AIROBOTCX can now log in to the Inception Portal to update our profile, request benefits, and explore a variety of startup resources.",
  },
  {
    title: "NVIDIA AI Foundation Models",
    description:
      "Available on NGC, these models are optimized for peak performance and can be customized for deployed semi-supervised and unsupervised Foundation Endpoints.",
  },
  {
    title: "NVIDIA Developer Program",
    description:
      "Offers free tools and resources, including tutorials, forums, and other support tools for our development team.",
  },
];

const nvidiaInceptionBenefits = [
  "Access to NVIDIA's latest GPU technologies",
  "Cloud computing credits with preferred providers",
  "Technical expertise and support",
  "Marketing and PR opportunities",
  "Networking with industry leaders",
  "Early access to new NVIDIA products",
  "Discounted hardware for development",
];

function PartnerNVIDIA({ partnerSectionRef }) {
  return (
    <section
      className="mt-16 max-w-11/12 lg:max-w-10/12 xl:max-w-9/12 mx-auto scroll-mt-48"
      ref={partnerSectionRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl p-8 md:p-12"
      >
        {/* Background color */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#76b900]/10 via-[#76b900]/5
            to-transparent"
        ></div>
        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-[#76b900]/5 rounded-full -translate-y-1/2
            translate-x-1/2"
        ></div>
        <div
          className="absolute bottom-0 left-0 w-40 h-40 bg-[#76b900]/5 rounded-full translate-y-1/2
            -translate-x-1/2"
        ></div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#76b900] p-3 rounded-lg shadow-lg">
                  <LucideLayers className="text-white size-8" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  AstuteInfo Joins NVIDIA Inception Program
                </h2>
              </div>
              <p className="text-gray-700 mb-8 text-lg md:text-xl">
                We are thrilled to announce that from May 2024, AIROBOTCX Inc.
                has been accepted into the prestigious NVIDIA Inception Program!
                This exciting development places AIROBOTCX among an elite group
                of startups that are driving innovation and transforming
                industries worldwide.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Key Benefits and Resources
              </h3>
              <ul className="space-y-4 mb-8">
                {nvidiaResources.map((resource, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-[#76b900] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-base md:text-lg">
                        {resource.title}:
                      </span>{" "}
                      <span className="text-base md:text-lg text-gray-700">
                        {resource.description}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <div className="flex justify-center lg:block">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-base md:text-lg bg-[#76b900] text-white px-6
                    py-3 rounded-lg font-medium hover:bg-[#76b900]/90 transition-colors shadow-md
                    hover:shadow-lg"
                >
                  Learn More About NVIDIA Partnership{" "}
                  <ExternalLink className="size-4 md:size-5" />
                </Link>
              </div>
            </div>

            <div className="mx-auto lg:mx-0 lg:w-1/3 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#76b900]">
                NVIDIA Inception Benefits
              </h3>
              <ul className="space-y-3">
                {nvidiaInceptionBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="bg-[#76b900]/10 p-1 rounded mt-0.5">
                      <CheckCircle2 className="size-4 md:size-5 text-[#76b900]" />
                    </div>
                    <span className="text-gray-700 text-base md:text-lg">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base text-gray-500">
                    Program Status
                  </span>
                  <span className="text-sm md:text-base font-medium text-[#76b900]">
                    Active Member
                  </span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#76b900] w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default PartnerNVIDIA;
