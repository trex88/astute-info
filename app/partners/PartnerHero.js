import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

function PartnerHero({ handleExplore }) {
  return (
    <section className="relative">
      {/* Background with animated elements */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80
          to-secondary/90"
      >
        <div className="absolute inset-0 opacity-7 md:opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white animate-float"></div>
          <div className="absolute top-60 right-20 w-20 h-20 rounded-full bg-white animate-float-delayed"></div>
          <div className="absolute bottom-10 left-1/3 w-32 h-32 rounded-full bg-white animate-float"></div>
        </div>
      </div>

      <div className="relative z-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white">
            The Significance of{" "}
            <span className="relative inline-block">
              AstuteInfo
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></span>
            </span>{" "}
            Partnerships
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed">
            In the dynamic landscape of AstuteInfo, partnerships play a crucial
            role in driving innovation, expanding capabilities, and delivering
            value to customers.
          </p>
          <button
            type="button"
            className="group inline-flex items-center gap-2 bg-white text-primary text-base md:text-lg
              px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg
              hover:shadow-xl hover:cursor-pointer"
            onClick={handleExplore}
          >
            Explore Our Partners
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default PartnerHero;
