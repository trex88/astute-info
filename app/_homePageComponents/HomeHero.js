import { ArrowRight, Brain, ChevronDown, Play, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/images/homeHero.png";

function HomeHero({ handleWatchDemo }) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br
        from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 md:px-6 lg:px-8 xl:px-10"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        <div
          className="absolute top-1/4 left-1/4 size-64 rounded-full bg-primary/20 blur-3xl
            animate-float"
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 size-80 rounded-full bg-[#6ee7b7]/20 blur-3xl
            animate-float-delayed"
        ></div>

        {/* Animated Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5dadd2" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,128 C320,213.3 320,42.7 640,128 C960,213.3 960,42.7 1280,128 L1280,720 L0,720 Z"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="animate-wave"
          />
          <path
            d="M0,128 C320,213.3 320,42.7 640,128 C960,213.3 960,42.7 1280,128 L1280,720 L0,720 Z"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="10,5"
            className="animate-wave-delayed"
            opacity="0.5"
            transform="translate(0, 50)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 px-3">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20
                px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="bg-primary h-2 w-2 rounded-full mr-2"></span>
              WELCOME TO ASTUTEINFO
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white
                animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Empowering Those Who Drive{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Global Progress</span>
                <span
                  className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-primary to-[#6ee7b7]
                    opacity-40 rounded-lg -z-0"
                ></span>
              </span>
            </h1>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              Leveraging cutting-edge AI technologies to enhance efficiency,
              productivity, and security in the finance industry.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Link
                href="/allServices"
                className="group bg-gradient-to-r from-primary to-[#6ee7b7] text-white px-8 py-4
                  rounded-full font-medium transition-all duration-300 flex items-center
                  justify-center gap-2 shadow-lg hover:shadow-primary/20 hover:shadow-xl transform
                  hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                type="button"
                className="group bg-white/10 hover:bg-white/20 border border-white/40 text-white px-8 py-4
                  rounded-full font-medium transition-all duration-300 flex items-center
                  justify-center gap-2 backdrop-blur-sm transform hover:-translate-y-1
                  hover:cursor-pointer"
                onClick={handleWatchDemo}
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div
              className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-sm text-gray-400">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* 3D-like Hero Visual */}
          <div
            className="lg:w-1/2 relative animate-fade-in mx-4 sm:mx-2"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="relative">
              {/* Main Image */}
              <div
                className="relative z-20 rounded-2xl overflow-hidden shadow-2xl transform rotate-3
                  hover:rotate-0 transition-transform duration-500"
              >
                <Image
                  src={heroImg}
                  alt="AI Technology"
                  className="w-full h-auto"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-[#6ee7b7]/10
                    mix-blend-overlay"
                ></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-2xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#6ee7b7]/30 rounded-full blur-2xl -z-10"></div>

              {/* Floating Cards */}
              <div
                className="absolute -top-10 -left-10 bg-white/10 backdrop-blur-md rounded-lg p-4 border
                  border-white/20 shadow-xl z-30 transform -rotate-6 animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Brain className="size-5 sm:size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm lg:text-base">
                      AI-Powered
                    </h3>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      Advanced algorithms
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md rounded-lg p-4 border
                  border-white/20 shadow-xl z-30 transform rotate-6 animate-float-delayed"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#6ee7b7]/20 p-2 rounded-full">
                    <Shield className="size-5 sm:size-6 text-[#6ee7b7]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm lg:text-base">
                      Secure
                    </h3>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      Enterprise-grade protection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/50" />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
