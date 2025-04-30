import { LuCalendar, LuChevronRight } from "react-icons/lu";
import Badge from "../_components/Badge";

function NewsHero({ handleReadMore }) {
  return (
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
              <path d="M0 60L60 0" stroke="white" strokeWidth="1" fill="none" />
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

      <div className="relative px-6 sm:px-3 max-w-full xl:max-w-10/12 2xl:max-w-9/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-10 bg-accent"></div>
                <Badge className="bg-accent hover:bg-accent/90 text-white text-sm">
                  Latest Updates
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                AI and Finance <br />
                <span className="text-primary">Industry News</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                Stay informed with the latest developments, innovations, and
                trends in the rapidly evolving AI and Finance industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    className="w-full sm:w-80 px-4 py-3 rounded-lg bg-white/10 border border-white/20
                      text-white placeholder-gray-400 focus:outline-none focus:ring-2
                      focus:ring-primary"
                  />
                </div>
                <button
                  className="relative gap-2 bg-primary hover:bg-primary/90 hover:cursor-pointer duration-200
                    rounded-lg px-5 py-3 font-medium text-white group"
                >
                  <span>Search</span>
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  AstuteInfo Joins NVIDIA Inception Program
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-4 line-clamp-2">
                  We are thrilled to announce our acceptance into the
                  prestigious NVIDIA Inception Program, joining an elite group
                  of startups driving innovation worldwide.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base text-gray-400 flex items-center gap-1">
                    <LuCalendar className="size-3 md:size-4" /> May 2024
                  </span>
                  <button
                    type="button"
                    className="text-base md:text-lg text-primary font-medium flex items-center gap-1
                      hover:cursor-pointer hover:underline underline-offset-4 duration-200 group"
                    onClick={handleReadMore}
                  >
                    Read more{" "}
                    <LuChevronRight className="size-4 group-hover:translate-x-1 duration-200" />
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
  );
}

export default NewsHero;
