import { Blend, Handshake, Users } from "lucide-react";
import { motion } from "motion/react";

const partnerBenefits = [
  {
    title: "Access to a Diverse Network",
    description:
      "As a partner with our platform, you gain access to a diverse network of customers, projects, and opportunities spanning various industries and geographic regions.",
    icon: <Users className="h-6 w-6 text-white" />,
    bgColor: "bg-primary",
  },
  {
    title: "Marketing and Promotion",
    description:
      "We are committed to promoting our partners and showcasing their expertise, achievements, and success stories through various marketing channels, including our website and social media platforms.",
    icon: <Handshake className="h-6 w-6 text-white" />,
    bgColor: "bg-secondary",
  },
  {
    title: "Streamlined Operations",
    description:
      "Our platform offers advanced tools, resources, and support to streamline operations, manage projects, and enhance collaboration between partners and clients.",
    icon: <Blend className="h-6 w-6 text-white" />,
    bgColor: "bg-accent",
  },
];

function PartnerBenefits() {
  return (
    <section className="py-16 mt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
          Benefits of Partnering with Us
          <span
            className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary
              to-secondary rounded-full"
          ></span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-6 px-5">
          Partnering with our platform offers numerous benefits and
          opportunities for AstuteInfo providers looking to expand their reach,
          grow their business, and enhance their capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto px-5">
        {partnerBenefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all
              hover:-translate-y-1 border border-gray-100"
          >
            <div
              className={`p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center
              ${benefit.bgColor}`}
            >
              {benefit.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
              {benefit.title}
            </h3>
            <p className="text-base md:text-lg text-gray-600">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PartnerBenefits;
