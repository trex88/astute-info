"use client";

import {
  ArrowDown,
  ArrowRight,
  Check,
  Lightbulb,
  MoveRight,
  Undo2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function InvestorHeroSection({ handleContactInvestor, handleWhyInvest }) {
  const [rotate, setRotate] = useState(false);

  // Hero section
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 perspective-distant">
        <div className="absolute inset-0 transform-3d rotate-y-12 scale-125">
          <div className="absolute w-full h-full top-0 left-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-[#6464ff0d] w-full h-[1px]"
                style={{ top: `${i * 10}%` }}
              ></div>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-[#6464ff0d] h-full w-[1px]"
                style={{ left: `${i * 10}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex flex-col gap-8
          min-h-screen items-center"
      >
        <div
          className="inline-flex items-center bg-white/80 backdrop-blur-md px-4 py-2 rounded-full
            text-sm md:text-base font-medium text-primary shadow-lg"
        >
          INVESTOR RELATIONS
        </div>

        {/* Split Content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div
            className="order-1 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border
              border-gray-100 transform hover:scale-[1.02] transition-transform duration-500"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500
                  to-secondary"
              >
                Develop high performance
              </span>
              <br />
              <span className="text-gray-900">
                and secure AI technologies for finance
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              AstuteInfo is in the early stages of fundraising and is actively
              seeking funding through the issuance of preferred stocks options
              or SAFE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                type="button"
                className="group relative hover:cursor-pointer overflow-hidden rounded-xl bg-white px-6
                  py-3 shadow-md transition-all hover:shadow-xl"
                onClick={handleContactInvestor}
              >
                <span
                  className="relative z-10 font-medium text-gray-800 text-base md:text-lg
                    hover:cursor-pointer"
                >
                  CONTACT INVESTOR RELATIONS
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-80"></span>
                <span
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity
                    duration-500 bg-gradient-to-r from-gray-200 to-gray-300"
                ></span>
              </button>

              <button
                type="button"
                className="group relative overflow-hidden rounded-xl px-6 py-3 shadow-md transition-all
                  hover:shadow-xl hover:cursor-pointer"
                onClick={handleWhyInvest}
              >
                <span
                  className="relative z-10 font-medium text-base md:text-lg text-white flex items-center
                    justify-center gap-2"
                >
                  WHY INVEST
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-secondary"></span>
                <span
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity
                    duration-500 bg-gradient-to-r from-secondary to-primary"
                ></span>
              </button>
            </div>
          </div>

          {/* Right Side - Interactive 3D Card */}
          <div className="order-2 perspective-distant">
            <div
              className={`relative w-full h-[400px] transform-3d transition-transform duration-500
                ${rotate && "rotate-y-180"}`}
            >
              {/* Front card face */}
              <div
                className="absolute flex flex-col w-full h-full backface-hidden z-2 bg-gradient-to-br
                  from-white to-gray-100 p-8 rounded-3xl shadow-2xl border border-gray-200"
              >
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-tr-full"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div
                      className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r
                        from-primary to-secondary"
                    >
                      AstuteInfo
                    </div>
                    <div className="bg-white p-2 rounded-full shadow-md">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-md shrink-0">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-1">
                          Preferred Stock Options
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          Invest in our {`company's`} growth
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-md shrink-0">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-1">
                          SAFE Agreements
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          Simple Agreement for Future Equity
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-md shrink-0">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-1">
                          Global Presence
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          USA & Australia, with growing footprint
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-sm md:text-base text-gray-500">
                      Investor Relations
                    </div>
                    <button
                      type="button"
                      className="flex items-center gap-2 text-sm md:text-base font-medium text-primary
                        hover:cursor-pointer group"
                      onClick={() => setRotate(true)}
                    >
                      <span>Learn More</span>
                      <MoveRight className="group-hover:translate-x-1 duration-150" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Back face */}
              <div
                className="absolute flex flex-col w-full h-full backface-hidden rotate-y-180
                  bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl shadow-2xl
                  text-white"
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Why Invest Now?
                    </h3>
                    <p className="mb-6 text-base md:text-lg">
                      AstuteInfo is at the forefront of AI innovation in the
                      financial sector, with proprietary technology and a
                      growing market presence.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-white/20 p-1 rounded-full">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-base md:text-lg">
                          Early-stage investment opportunity
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-white/20 p-1 rounded-full">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-base md:text-lg">
                          Experienced leadership team
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-white/20 p-1 rounded-full">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-base md:text-lg">
                          Proprietary AI technology
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-6 gap-8">
                    <Link
                      href="contactUs"
                      className="text-center w-full text-base md:text-lg bg-white text-primary font-medium py-3
                        rounded-lg hover:bg-white/90 transition-colors"
                    >
                      CONTACT US
                    </Link>
                    <button
                      type="button"
                      className="hover:cursor-pointer group"
                      onClick={() => setRotate(false)}
                    >
                      <Undo2 className="size-6 group-hover:scale-150 group-active:scale-100 duration-150" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="transform flex flex-col items-center animate-bounce">
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}

export default InvestorHeroSection;
