"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  BarChart3,
  Shield,
  FileCode,
  Briefcase,
  Workflow,
  Brain,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// Data
const serviceList = [
  {
    icon: <Brain size={32} />,
    title: "AI Strategy Development & Roadmapping",
    description:
      "Create a comprehensive AI strategy aligned with your business objectives and develop a clear implementation roadmap.",
  },
  {
    icon: <Workflow size={32} />,
    title: "Automation Consulting",
    description:
      "Implement RPA, AI chatbots, and workflow optimization to streamline operations and reduce manual processes.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Predictive Analytics & Business Intelligence",
    description:
      "Leverage your data for actionable insights and predictive capabilities to drive better business decisions.",
  },
  {
    icon: <Shield size={32} />,
    title: "AI Security & Threat Intelligence",
    description:
      "Protect your AI systems and data with advanced security measures and proactive threat intelligence.",
  },
  {
    icon: <FileCode size={32} />,
    title: "Ethical AI Governance & Compliance",
    description:
      "Ensure your AI initiatives adhere to ethical standards and regulatory requirements across jurisdictions.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Industry-Specific Solutions",
    description:
      "Tailored AI solutions for Finance, Retail, Healthcare, and other industries with domain-specific expertise.",
  },
];

const consultingProcess = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description:
      "We begin by understanding your business goals, current capabilities, and challenges to identify the right AI opportunities.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Based on our assessment, we develop a tailored AI strategy and roadmap aligned with your business objectives.",
  },
  {
    step: "03",
    title: "Solution Design",
    description:
      "Our experts design AI solutions that address your specific needs, considering technical feasibility and business impact.",
  },
  {
    step: "04",
    title: "Implementation Support",
    description:
      "We provide guidance and expertise throughout the implementation process, ensuring successful deployment.",
  },
  {
    step: "05",
    title: "Continuous Optimization",
    description:
      "We help you monitor, evaluate, and refine your AI solutions to maximize ROI and adapt to changing needs.",
  },
];

export default function ConsultingPage() {
  const contactSectionRef = useRef(null);
  const serviceSectionRef = useRef(null);

  function handleGetStarted() {
    contactSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  function handleExploreServices() {
    serviceSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI Consulting
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From Strategy to Deployment — Your AI Partner at Every Step
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mb-12 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Astute Info offers end-to-end AI consulting services that help
            businesses of all sizes plan, build, and scale intelligent systems.
            With deep expertise across machine learning, automation,
            cybersecurity, and enterprise IT, we tailor each engagement to your
            business goals.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              type="button"
              className="text-base md:text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white
                px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:scale-105
                active:scale-95 duration-150 hover:cursor-pointer group"
              onClick={handleGetStarted}
            >
              Get Started
              <ArrowRight className="size-4 group-hover:translate-x-1 duration-150" />
            </button>
            <button
              type="button"
              className="text-base md:text-lg border border-blue-500 text-blue-400 px-8 py-3 rounded-lg
                font-medium flex items-center gap-2 hover:bg-[#3B82F6]/10 hover:cursor-pointer
                hover:scale-105 active:scale-95 group duration-150"
              onClick={handleExploreServices}
            >
              Explore Services
              <ChevronRight className="size-4 group-hover:translate-x-1 duration-250" />
            </button>
          </motion.div>
        </div>

        {/* Wave divider */}
        <motion.div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <svg
            className="relative block w-full h-12 md:h-24"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-gray-800"
            ></path>
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        className="bg-gray-800 py-20 scroll-mt-20"
        ref={serviceSectionRef}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services Include:
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500
                  hover:-translate-y-3 duration-500 hover:shadow-[0_10px_30px_-15px_#3B82F6]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4 text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-base md:text-lg text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Consulting Process
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {consultingProcess.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-6 mb-12 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline line */}
                {index < 4 && (
                  <motion.div
                    className="absolute left-6 top-12 w-0.5 bg-blue-500/30 h-full"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                )}

                {/* Step number */}
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-purple-600 text-white h-12 w-12 rounded-full
                    flex items-center justify-center font-bold text-lg shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {step.step}
                </motion.div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section for future */}
      {/* <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how our AI consulting services have helped organizations
              across industries transform their operations and achieve
              measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Financial Services",
                title: "AI-Powered Fraud Detection",
                result:
                  "Reduced fraud losses by 37% while improving customer experience",
              },
              {
                industry: "Healthcare",
                title: "Predictive Patient Care",
                result:
                  "Improved early diagnosis accuracy by 28% and reduced readmissions",
              },
              {
                industry: "Manufacturing",
                title: "Smart Factory Optimization",
                result:
                  "Increased production efficiency by 22% and reduced downtime by 45%",
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)",
                }}
              >
                <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600" />
                <div className="p-6">
                  <span className="text-blue-400 text-sm font-medium">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-semibold my-2">{study.title}</h3>
                  <div className="flex items-center gap-2 mt-4 text-green-400">
                    <CheckCircle size={16} />
                    <span>{study.result}</span>
                  </div>
                  <motion.button
                    className="mt-6 text-blue-400 flex items-center gap-1 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Read case study
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section
        className="py-20 bg-gray-800 relative scroll-mt-20"
        ref={contactSectionRef}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Complexity into Clarity
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We help transform complexity into clarity — aligning cutting-edge
              AI with business impact. Ready to start your AI journey?
            </p>

            <motion.div
              className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6">
                Schedule a Consultation
              </h3>
              <form className="space-y-4 text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm md:text-base font-medium mb-1 text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full text-base md:text-lg px-4 py-2 bg-gray-700 border border-gray-600
                        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                        focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-medium mb-1 text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full text-base md:text-lg px-4 py-2 bg-gray-700 border border-gray-600
                        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                        focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium mb-1 text-gray-300">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full text-base md:text-lg px-4 py-2 bg-gray-700 border border-gray-600
                      rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                      focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium mb-1 text-gray-300">
                    How can we help?
                  </label>
                  <textarea
                    className="w-full text-base md:text-lg px-4 py-2 bg-gray-700 border border-gray-600
                      rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                      focus:border-transparent h-32"
                    placeholder="Tell us about your AI consulting needs..."
                  ></textarea>
                </div>

                <motion.div
                  className="max-w-lg mx-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white
                      font-medium rounded-lg hover:opacity-90 transition-all hover:cursor-pointer"
                  >
                    Request Consultation
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
