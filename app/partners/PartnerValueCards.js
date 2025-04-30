import { Expand, Globe, Users } from "lucide-react";
import { motion } from "motion/react";

const valuePropositions = [
  {
    title: "Collaborative Ecosystem",
    description:
      "AstuteInfo partnerships foster a collaborative ecosystem where industry stakeholders come together to share resources, expertise, and best practices.",
    icon: <Users className="h-8 w-8 text-primary" />,
    bgColor: "bg-primary/10",
  },
  {
    title: "Expanded Capabilities",
    description:
      "Partnering with specialized AstuteInfo providers allows us to expand our service offerings and meet the diverse needs of our customers.",
    icon: <Expand className="h-8 w-8 text-secondary" />,
    bgColor: "bg-secondary/10",
  },
  {
    title: "Global Expansion",
    description:
      "Strategic partnerships facilitate market expansion by tapping into new geographic regions, industries, and customer segments.",
    icon: <Globe className="h-8 w-8 text-accent" />,
    bgColor: "bg-accent/10",
  },
];

function PartnerValueCards() {
  return (
    <section className="mt-16 max-w-11/12 lg:max-w-11/12 xl:max-w-11/12 2xl:max-w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {valuePropositions.map((prop, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="relative group"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl
                transform group-hover:scale-105 transition-transform duration-300"
            ></div>
            <div
              className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow
                border border-gray-100 h-full flex flex-col"
            >
              <div
                className={`p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center ${prop.bgColor}`}
              >
                {prop.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {prop.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6 flex-grow">
                {prop.description}
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PartnerValueCards;
