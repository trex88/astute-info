import Link from "next/link";
import { LuCalendar } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import { LuAward } from "react-icons/lu";
import { LuDatabase } from "react-icons/lu";
import { LuBox } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { LuServer } from "react-icons/lu";
import Badge from "../_components/Badge";
import Benefit from "./Benefit";
import News from "./News";

function page() {
  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gray-900 py-16 md:py-20 mb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="h-full w-full"
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 60L60 0"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Colored Circles */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary opacity-20 blur-3xl"></div>
        <div
          className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary opacity-20
            blur-3xl"
        ></div>

        <div className="relative mx-25 md:mx-50">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-1 w-10 bg-accent"></div>
                  <Badge className="bg-accent hover:bg-accent/90 text-white text-sm">
                    Latest Updates
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  AI and Finance <br />
                  <span className="text-primary">Industry News</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                  Stay informed with the latest developments, innovations, and
                  trends in the rapidly evolving AI and Finance industry.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search news articles..."
                      className="w-full sm:w-80 px-4 py-3 rounded-lg bg-white/10 border border-white/20
                        text-white placeholder-gray-400 focus:outline-none focus:ring-2
                        focus:ring-primary"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </div>
                  <button
                    className="bg-primary hover:bg-primary/90 hover:cursor-pointer duration-200 rounded-lg px-5
                      py-3 font-medium text-white"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative">
                {/* Featured News Card */}
                <div
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 transform
                    rotate-2 hover:rotate-0 transition-transform duration-300"
                >
                  <Badge className="bg-[#76b900] hover:bg-[#76b900]/90 mb-3 text-sm">
                    FEATURED
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-2">
                    AstuteInfo Joins NVIDIA Inception Program
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    We are thrilled to announce our acceptance into the
                    prestigious NVIDIA Inception Program, joining an elite group
                    of startups driving innovation worldwide.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <LuCalendar className="h-3 w-3" /> May 2024
                    </span>
                    <button
                      type="button"
                      className="text-primary font-medium flex items-center gap-1 hover:cursor-pointer
                        hover:underline underline-offset-4 duration-200"
                    >
                      Read more <LuChevronRight className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-accent/30 blur-xl"></div>
                <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-secondary/30 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* News Categories */}
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            <Badge className="bg-white/10 hover:bg-white/20 px-4 py-2 text-lg cursor-pointer">
              All News
            </Badge>
            <Badge className="bg-white/10 hover:bg-white/20 px-4 py-2 text-lg cursor-pointer">
              AI Technology
            </Badge>
            <Badge className="bg-white/10 hover:bg-white/20 px-4 py-2 text-lg cursor-pointer">
              Finance
            </Badge>
            <Badge className="bg-white/10 hover:bg-white/20 px-4 py-2 text-lg cursor-pointer">
              Partnerships
            </Badge>
            <Badge className="bg-white/10 hover:bg-white/20 px-4 py-2 text-lg cursor-pointer">
              Industry Events
            </Badge>
            <Badge className="bg-white/10 hover:bg-white/20 px-4 py-2 text-lg cursor-pointer">
              Press Releases
            </Badge>
          </div>
        </div>
      </section>
      <div className="mx-20">
        {/* Featured News */}
        <section className="mb-30">
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
                  been accepted into the prestigious NVIDIA Inception Program!
                  This exciting development places AstuteInfo among an elite
                  group of startups that are driving innovation and transforming
                  industries worldwide.
                </p>
                <h4 className="text-xl md:text-2xl font-bold mb-3">
                  Unleashing New Opportunities with NVIDIA Inception
                </h4>
                <p className="text-gray-600 mb-6 text-3xs md:text-xl">
                  Joining the NVIDIA Inception Program opens up a wealth of
                  resources and support for AstuteInfo. Our team will have
                  access to cutting-edge AI models, development tools, and
                  collaborative platforms designed to accelerate our projects
                  and enhance our technological capabilities.
                </p>
                {/* <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#76b900] font-medium hover:underline"
                >
                  Read the full announcement
                  <LuChevronRight className="h-4 w-4" />
                </Link> */}
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
              To maximize the value of our NVIDIA Inception membership,
              AstuteInfo will participate in onboarding webinars and leverage
              the extensive resources available through the program. This
              partnership marks a significant milestone in our journey to push
              the boundaries of AI.
            </p>
            <p className="text-gray-600 mb-4 text-3xs md:text-lg">
              We extend our heartfelt thanks to the NVIDIA Inception Team for
              their support and recognition. This opportunity will undoubtedly
              propel AstuteInfo toward new heights of innovation and success.
            </p>
            <div className="flex items-center gap-2 text-primary font-medium text-3xs md:text-lg">
              <span>
                Stay tuned for more updates as we embark on this exciting new
                chapter!
              </span>
            </div>
          </div>
        </section>
        {/* More News Section */}
        <section className="mb-30">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              More News About AstuteInfo
            </h2>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <News
              heading="Develop High Performance and Secure AI Technologies for
                  Finance Industry"
              content="  AstuteInfo is pioneering new approaches to AI in finance,
                  focusing on security, performance, and regulatory compliance."
              href=""
            >
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-secondary hover:bg-secondary/90">
                  AI Technology
                </Badge>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <LuCalendar className="h-3 w-3" /> April 2024
                </span>
              </div>
            </News>
            <News
              heading="AstuteInfo at Early Stage of Raising Funds"
              content="AstuteInfo is at early stage of raising fund and currently
                  actively looking for funding via issuing preferred stocks."
              href=""
            >
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-accent hover:bg-accent/90">Funding</Badge>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <LuCalendar className="h-3 w-3" /> March 2024
                </span>
              </div>
            </News>
          </div>

          {/* Video Section */}
          <div
            className="w-fit h-fit bg-white border border-neutral-200 rounded-xl overflow-hidden
              shadow-sm"
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-primary hover:bg-primary/90">
                  Video Presentation
                </Badge>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <LuCalendar className="h-3 w-3" /> February 2024
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Airobod AI Finance Presentation
              </h3>
              <p className="text-gray-600 mb-4 text-3xs md:text-lg">
                Watch our latest presentation on how AstuteInfo is transforming
                the finance industry with AI-powered solutions.
              </p>
              <div className="relative rounded-lg overflow-hidden">
                <iframe
                  className="mx-auto rounded-xl"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/LLaMK9vCzzo?si=-AHOmFPHhjkQy2e7"
                  title="Airobod AI Finance presentation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* Newsletter Section */}
        <section className="bg-primary/5 rounded-xl p-8 md:p-15 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            Stay Updated with AstuteInfo News
          </h2>
          <p className="text-gray-600 mb-6 text-3xs md:text-lg">
            Subscribe to our newsletter to receive the latest updates, industry
            insights, and exclusive content directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-11 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm
                md:text-lg ring-offset-background placeholder:text-neutral-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              className="bg-primary hover:bg-primary/90 hover:cursor-pointer duration-200 rounded-lg px-5
                py-3 font-medium text-white"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default page;
