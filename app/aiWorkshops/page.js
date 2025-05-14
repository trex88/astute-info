"use client";

import Link from "next/link";
import {
  Users,
  Briefcase,
  Shield,
  LineChart,
  Layers,
  ChevronRight,
  MapPin,
  Clock,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function WorkshopsPage() {
  const availableWorkshopSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  function handleExploreWorkshops() {
    availableWorkshopSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleRequestWorkshop() {
    contactSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              AI Workshops
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hands-On Workshops to Accelerate AI Adoption
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our immersive AI workshops are built for teams ready to explore,
              prototype, and implement AI solutions in real-time. Delivered
              virtually or on-site, these sessions are led by experienced AI
              practitioners and tailored to your sector.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                type="button"
                className="text-base md:text-lg px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600
                  text-white font-medium rounded-lg hover:opacity-90 transition-all flex
                  items-center gap-2 group hover:cursor-pointer hover:scale-105 active:scale-98"
                onClick={handleExploreWorkshops}
              >
                Explore Workshops{" "}
                <ChevronRight className="group-hover:translate-x-1 duration-150" />
              </button>
              <button
                type="button"
                className="text-base md:text-lg px-6 py-3 bg-gray-800 text-white font-medium rounded-lg
                  hover:bg-gray-700 transition-all hover:cursor-pointer hover:scale-105
                  active:scale-98"
                onClick={handleRequestWorkshop}
              >
                Request Custom Workshop
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Our Workshops?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="size-10 text-blue-400" />,
                title: "Expert-Led Sessions",
                description:
                  "Learn from AI practitioners with real-world implementation experience across industries.",
              },
              {
                icon: <Briefcase className="size-10 text-purple-400" />,
                title: "Practical Application",
                description:
                  "Apply concepts to your specific business challenges with hands-on exercises.",
              },
              {
                icon: <Award className="size-10 text-blue-400" />,
                title: "Customized Content",
                description:
                  "Workshops tailored to your team's experience level and industry context.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-900/20
                  transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Workshops */}
      <section
        className="py-16 bg-gray-950 scroll-mt-20"
        ref={availableWorkshopSectionRef}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Available Workshops
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-center text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose from our specialized workshops designed to address different
            aspects of AI implementation and strategy.
          </motion.p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                icon: <LineChart className="w-8 h-8 text-blue-500" />,
                title: "AI in Action",
                description: "Use case discovery and rapid prototyping",
                details:
                  "Learn to identify high-value AI use cases within your organization and rapidly prototype solutions. This workshop includes hands-on sessions with no-code/low-code AI tools.",
                duration: "2 days",
                format: "Virtual or On-site",
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-500" />,
                title: "Responsible AI & Governance",
                description:
                  "Design AI frameworks that are compliant, fair, and secure",
                details:
                  "Develop governance frameworks to ensure your AI initiatives are ethical, transparent, and compliant with regulations. Includes risk assessment methodologies and mitigation strategies.",
                duration: "1.5 days",
                format: "Virtual or On-site",
              },
              {
                icon: <Briefcase className="w-8 h-8 text-blue-500" />,
                title: "Applied AI for Business Leaders",
                description: "Translate AI trends into operational decisions",
                details:
                  "Designed for executives and decision-makers, this workshop bridges the gap between AI capabilities and business strategy. Learn to evaluate AI investments and lead transformation initiatives.",
                duration: "1 day",
                format: "Virtual or On-site",
              },
              {
                icon: <Layers className="w-8 h-8 text-purple-500" />,
                title: "Industry Labs",
                description:
                  "Focused tracks for finance, cybersecurity, logistics, and more",
                details:
                  "Industry-specific workshops that address unique challenges and opportunities in your sector. Includes case studies, regulatory considerations, and implementation roadmaps.",
                duration: "2 days",
                format: "Virtual or On-site",
              },
            ].map((workshop, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all
                  duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 flex flex-col md:flex-row gap-6">
                  <motion.div className="shrink-0 bg-gray-700 rounded-lg p-4 self-start">
                    {workshop.icon}
                  </motion.div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {workshop.title}
                    </h3>
                    <p className="text-lg text-blue-300 mb-3">
                      {workshop.description}
                    </p>
                    <p className="text-gray-300 mb-4">{workshop.details}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{workshop.format}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 px-6 py-3 flex justify-end">
                  <button
                    type="button"
                    className="text-blue-300 hover:text-blue-100 flex items-center gap-1 text-sm font-medium
                      hover:cursor-pointer"
                    onClick={handleRequestWorkshop}
                  >
                    Request this workshop <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-base md:text-lg">
              Each workshop blends theory with real-world application,
              empowering your team to move from AI awareness to confident
              execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Schedule for future */}
      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Upcoming Public Workshops
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="py-4 px-6 text-left text-gray-300">
                      Workshop
                    </th>
                    <th className="py-4 px-6 text-left text-gray-300">Date</th>
                    <th className="py-4 px-6 text-left text-gray-300">
                      Format
                    </th>
                    <th className="py-4 px-6 text-left text-gray-300">
                      Availability
                    </th>
                    <th className="py-4 px-6 text-left text-gray-300"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      workshop: "AI in Action",
                      date: "June 15-16, 2025",
                      format: "Virtual",
                      availability: "Available",
                      status: "available",
                    },
                    {
                      workshop: "Responsible AI & Governance",
                      date: "June 22-23, 2025",
                      format: "Virtual",
                      availability: "Limited Seats",
                      status: "limited",
                    },
                    {
                      workshop: "Applied AI for Business Leaders",
                      date: "July 5, 2025",
                      format: "On-site (New York)",
                      availability: "Available",
                      status: "available",
                    },
                    {
                      workshop: "Industry Labs: Finance",
                      date: "July 12-13, 2025",
                      format: "Virtual",
                      availability: "Sold Out",
                      status: "sold",
                    },
                  ].map((event, index) => (
                    <motion.tr
                      key={index}
                      className="border-t border-gray-700 hover:bg-gray-750"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <td className="py-4 px-6 text-white">{event.workshop}</td>
                      <td className="py-4 px-6 text-gray-300">{event.date}</td>
                      <td className="py-4 px-6 text-gray-300">
                        {event.format}
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                          event.status === "available"
                              ? "bg-green-900 text-green-300"
                              : event.status === "limited"
                                ? "bg-yellow-900 text-yellow-300"
                                : "bg-red-900 text-red-300"
                          }`}
                        >
                          {event.availability}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        {event.status !== "sold" ? (
                          <Link
                            href="/register"
                            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                          >
                            Register
                          </Link>
                        ) : (
                          <span className="text-gray-500 text-sm">
                            Unavailable
                          </span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Testimonials for futuire */}
      {/* <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            What Participants Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The AI in Action workshop helped our team identify three high-value use cases we hadn't considered before. Within weeks, we had working prototypes.",
                author: "Sarah Chen",
                position: "CTO, FinTech Solutions",
              },
              {
                quote:
                  "As a non-technical executive, the Applied AI workshop gave me the framework I needed to evaluate AI investments and communicate effectively with our technical teams.",
                author: "Michael Rodriguez",
                position: "COO, Retail Innovations",
              },
              {
                quote:
                  "The Industry Labs workshop for healthcare addressed our specific regulatory concerns and provided a clear roadmap for implementing AI in patient care.",
                author: "Dr. Aisha Johnson",
                position: "Innovation Director, MedCare Systems",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500
                  transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
              >
                <motion.div
                  className="mb-4 text-blue-400"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </motion.div>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section
        className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 scroll-mt-20"
        ref={contactSectionRef}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Accelerate Your AI Journey?
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Book a workshop for your team or inquire about our custom training
              programs.
            </motion.p>
            <motion.div
              className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-700
                max-w-2xl lg:max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form className="space-y-6 text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm md:text-base font-medium text-gray-300 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full text-base md:text-lg px-4 py-2 bg-gray-800 border border-gray-700
                        rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm md:text-base font-medium text-gray-300 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full text-base md:text-lg px-4 py-2 bg-gray-800 border border-gray-700
                        rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm md:text-base font-medium text-gray-300 mb-1"
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full text-base md:text-lg px-4 py-2 bg-gray-800 border border-gray-700
                        rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="workshop"
                      className="block text-sm md:text-base font-medium text-gray-300 mb-1"
                    >
                      Workshop of Interest *
                    </label>
                    <select
                      id="workshop"
                      name="workshop"
                      required
                      className="w-full text-base md:text-lg px-4 py-2 bg-gray-800 border border-gray-700
                        rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a workshop
                      </option>
                      <option value="ai-in-action">AI in Action</option>
                      <option value="responsible-ai">
                        Responsible AI & Governance
                      </option>
                      <option value="applied-ai">
                        Applied AI for Business Leaders
                      </option>
                      <option value="industry-labs">Industry Labs</option>
                      <option value="custom">Custom Workshop</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm md:text-base font-medium text-gray-300 mb-1"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full text-base md:text-lg px-4 py-2 bg-gray-800 border border-gray-700
                      rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Tell us about your team size, specific interests, or questions"
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-600 focus:ring-blue-500
                      hover:cursor-pointer"
                  />
                  <div className="ml-3 text-sm md:text-lg">
                    <label htmlFor="privacy" className="text-gray-300">
                      I agree to the{" "}
                      <Link
                        href={{
                          pathname: "policies",
                          query: {
                            section: "privacy",
                          },
                        }}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        privacy policy
                      </Link>{" "}
                      and consent to being contacted about workshops.
                    </label>
                  </div>
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
                    Request Workshop Information
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How many participants can attend a workshop?",
                answer:
                  "Our workshops are designed for groups of 8-20 participants to ensure interactive learning and personalized attention. For larger teams, we can arrange multiple sessions or customize the format.",
              },
              {
                question: "Do participants need technical backgrounds?",
                answer:
                  "No technical background is required for most workshops. We tailor the content to match your team's experience level. The 'AI in Action' workshop includes technical components, but alternatives are provided for non-technical participants.",
              },
              {
                question: "Can workshops be customized for our industry?",
                answer:
                  "Yes, all our workshops can be customized to address your industry's specific challenges and use cases. Our Industry Labs workshops are already pre-configured for specific sectors like finance, healthcare, retail, and manufacturing.",
              },
              {
                question: "What materials do participants receive?",
                answer:
                  "Participants receive comprehensive digital workbooks, reference guides, templates, and access to a resource portal with additional materials for 90 days after the workshop.",
              },
              {
                question: "Is there follow-up support after the workshop?",
                answer:
                  "Yes, we offer a 30-day post-workshop consultation period where your team can ask questions and receive guidance as they apply what they've learned.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
