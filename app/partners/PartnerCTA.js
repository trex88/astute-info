import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

function PartnerCTA() {
  return (
    <section className="mt-16 max-w-7xl mx-5 md:mx-10 xl:mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 text-center
          relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2
            translate-x-1/2"
        ></div>
        <div
          className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full translate-y-1/2
            -translate-x-1/2"
        ></div>

        <div className="relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Become a Partner?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg md:text-xl">
            Join our growing network of AstuteInfo partners and unlock new
            opportunities for growth, collaboration, and innovation.
          </p>
          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary
                to-secondary text-white text-base md:text-lg px-8 py-4 rounded-full font-medium
                hover:from-primary/90 hover:to-secondary/90 transition-all shadow-lg
                hover:shadow-xl group"
            >
              Apply to Become a Partner{" "}
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 duration-150" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default PartnerCTA;
