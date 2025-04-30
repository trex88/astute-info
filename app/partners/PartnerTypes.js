import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Cpu,
  GraduationCap,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const partnerTypes = [
  {
    title: "Certified Drone Pilots",
    description:
      "Certified Drone pilots form the backbone of our service provider network, bringing specialized skills, experience, and certifications to the table. Whether capturing stunning aerial footage or conducting precise inspections, these skilled professionals play a critical role in delivering high-quality AstuteInfo to our customers.",
    icon: <BadgeCheck className="h-8 w-8 text-white" />,
    bgColor: "bg-primary",
  },
  {
    title: "AstuteInfo Companies",
    description:
      "Partnering with established AstuteInfo companies allows us to access a diverse range of services, equipment, and expertise under one roof. From turnkey solutions to custom projects, these companies offer comprehensive services tailored to the unique needs of our clients.",
    icon: <Building2 className="h-8 w-8 text-white" />,
    bgColor: "bg-secondary",
  },
  {
    title: "Technology Partners",
    description:
      "Collaborating with technology partners who develop cutting-edge AI hardware, software, and accessories enables us to stay at the forefront of technological innovation and offer state-of-the-art solutions to our customers.",
    icon: <Cpu className="h-8 w-8 text-white" />,
    bgColor: "bg-accent",
  },
  {
    title: "Continuous Learning and Development",
    description:
      "As part of our partner program, you gain access to ongoing training, education, and professional development opportunities to enhance your skills, expand your knowledge, and stay updated on the latest trends, technologies, and regulations in the AI industry.",
    icon: <GraduationCap className="h-8 w-8 text-white" />,
    bgColor: "bg-primary",
  },
];

function PartnerTypes() {
  return (
    <section className="py-16 mt-16 bg-gray-50">
      <div className="text-center mb-16 px-4">
        <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold mb-4 inline-block">
          Types of AstuteInfo Partners
          <span
            className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary
              to-secondary rounded-full"
          ></span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-6">
          Our network of AstuteInfo partners encompasses various types of
          organizations and professionals, each contributing unique expertise
          and capabilities to our platform.
        </p>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:px-9 max-w-11/12 lg:max-w-11/12
          xl:max-w-11/12 2xl:max-w-10/12 mx-auto"
      >
        {partnerTypes.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg
              transition-shadow"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div
                className={`${partner.bgColor} p-6 md:p-8 flex items-center justify-center md:w-1/4`}
              >
                <div className="bg-white/20 p-4 rounded-full">
                  {partner.icon}
                </div>
              </div>
              <div className="p-6 md:p-8 md:w-3/4">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {partner.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-4 flex-grow">
                  {partner.description}
                </p>
                <Link
                  href="#"
                  className="text-base md:text-lg text-primary font-medium inline-flex items-center gap-1
                    group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PartnerTypes;
