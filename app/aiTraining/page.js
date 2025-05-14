"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// Data
const trainingPrograms = [
  {
    id: 1,
    title: "AI Risk Assessment & Management",
    description:
      "Learn to audit models for fairness, transparency, and resilience against adversarial threats.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    tags: ["Risk Mitigation", "Compliance", "Model Auditing"],
  },
  {
    id: 2,
    title: "AI Security Implementation",
    description:
      "Train your teams in secure development, incident response, and best practices for protecting AI systems.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    tags: ["Security", "Incident Response", "Threat Protection"],
  },
  {
    id: 3,
    title: "AI Governance & Ethics",
    description:
      "Build a principled AI culture with policy guidance, compliance strategies, and ethical deployment models.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    tags: ["Ethics", "Governance", "Compliance"],
  },
  {
    id: 4,
    title: "Explainable AI (XAI)",
    description:
      "Improve model interpretability and decision transparency for stakeholder trust and regulatory alignment.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    tags: ["Transparency", "Interpretability", "Regulatory Compliance"],
  },
];

const trainingFormats = [
  {
    id: 1,
    title: "Workshops",
    description:
      "Intensive 1-3 day hands-on sessions focused on specific AI skills and frameworks.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Certification Programs",
    description:
      "Comprehensive multi-week programs with assessments and recognized credentials.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Custom Training",
    description:
      "Tailored programs designed specifically for your organization's unique needs and challenges.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "The AI Governance training transformed how our organization approaches AI implementation. We now have a robust framework that ensures ethical and responsible AI use.",
    name: "Sarah Johnson",
    position: "CTO, Global Financial Services",
  },
  {
    quote:
      "Astute Info's training on Explainable AI helped us build trust with our customers and meet regulatory requirements. Their practical approach made complex concepts accessible.",
    name: "Michael Chen",
    position: "AI Ethics Director, Healthcare Solutions",
  },
  {
    quote:
      "The customized security training program addressed our specific industry challenges. Our team is now equipped to identify and mitigate AI-specific threats.",
    name: "Priya Sharma",
    position: "CISO, Government Agency",
  },
  {
    quote:
      "From theory to practical implementation, the AI Risk Assessment workshop provided actionable strategies we could implement immediately.",
    name: "David Rodriguez",
    position: "Risk Management Lead, Tech Startup",
  },
];

export default function TrainingPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-10">
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 lg:bg-blue-500/20 rounded-full
              blur-3xl"
          ></div>
          <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 lg:bg-purple-500/20
              rounded-full blur-3xl"
          ></div>
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto text-center mb-16"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6
                leading-tight"
            >
              Empowering Your Teams for the AI Era
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
              At Astute Info, we believe that AI transformation starts with
              people. Our training programs are designed to equip professionals
              and organizations with the knowledge, skills, and governance
              frameworks needed to adopt AI responsibly and effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-16 bg-gray-900">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              What We Offer
            </motion.h2>

            <div className="space-y-8">
              {trainingPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all
                    duration-300 border border-gray-700 hover:border-blue-500/50 group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg text-white shrink-0
                        group-hover:scale-110 transition-transform duration-300"
                    >
                      {program.icon}
                    </div>
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400
                          transition-colors duration-300"
                      >
                        {program.title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-300">
                        {program.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {program.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs md:text-sm font-medium px-2.5 py-0.5 rounded-full bg-blue-900/30
                              text-blue-300 border border-blue-800/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 mt-12 text-center"
            >
              Whether {`you're`} a government agency, financial institution, or
              startup, our training tracks are customized to fit your industry
              and use case.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Training Formats Section */}
      <section className="py-16 bg-gray-950 relative">
        {/* Decorative circles */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 md:bg-blue-500/15 rounded-full
              blur-3xl"
          ></div>
          <div
            className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/5 md:bg-purple-500/15
              rounded-full blur-3xl"
          ></div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              Training Formats
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trainingFormats.map((format, index) => (
                <motion.div
                  key={format.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border
                    border-gray-700 hover:border-purple-500/50 hover:transform hover:-translate-y-1
                    transition-all duration-300"
                >
                  <div
                    className="bg-gradient-to-br from-purple-500 to-blue-600 w-16 h-16 rounded-full flex
                      items-center justify-center mx-auto mb-4 text-white"
                  >
                    {format.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {format.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-300">
                    {format.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section leave for future */}
      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              What Our Clients Say
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 relative"
                >
                  <div className="absolute -top-4 -left-4 text-5xl text-blue-500 opacity-50">
                    "
                  </div>
                  <p className="text-gray-300 mb-4 relative z-10">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex
                        items-center justify-center text-white font-bold text-lg"
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-medium">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20
              to-purple-900/20"
          ></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Team?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Fill out the form below to request information about our AI
                training programs or schedule a consultation with our experts.
              </p>
            </div>

            <form
              className="space-y-6 bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700
                shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm md:text-base font-medium text-gray-300 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full text-base md:text-lg px-4 py-2.5 bg-gray-700 border border-gray-600
                      rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white
                      placeholder-gray-400"
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
                    className="w-full text-base md:text-lg px-4 py-2.5 bg-gray-700 border border-gray-600
                      rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white
                      placeholder-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm md:text-base font-medium text-gray-300 mb-1"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full text-base md:text-lg px-4 py-2.5 bg-gray-700 border border-gray-600
                      rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white
                      placeholder-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm md:text-base font-medium text-gray-300 mb-1"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    className="w-full text-base md:text-lg px-4 py-2.5 bg-gray-700 border border-gray-600
                      rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white
                      placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="trainingInterest"
                  className="block text-sm md:text-base font-medium text-gray-300 mb-1"
                >
                  Training Program of Interest *
                </label>
                <select
                  id="trainingInterest"
                  name="trainingInterest"
                  required
                  className="w-full text-base md:text-lg px-4 py-2.5 bg-gray-700 border border-gray-600
                    rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white
                    placeholder-gray-400"
                  defaultValue={""}
                >
                  <option value="" disabled>
                    Select a training program
                  </option>
                  <option value="risk">AI Risk Assessment & Management</option>
                  <option value="security">AI Security Implementation</option>
                  <option value="governance">AI Governance & Ethics</option>
                  <option value="xai">Explainable AI (XAI)</option>
                  <option value="custom">Custom Training Program</option>
                </select>
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
                  className="w-full text-base md:text-lg px-4 py-2.5 bg-gray-700 border border-gray-600
                    rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white
                    placeholder-gray-400"
                  placeholder="Tell us about your team size, specific needs, or any questions you have."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500
                    hover:cursor-pointer"
                />

                <div className="ml-3 text-sm md:text-base">
                  <label htmlFor="privacy" className="text-gray-300">
                    I agree to the{" "}
                    <Link
                      href={{
                        pathname: "policies",
                        query: {
                          section: "privacy",
                        },
                      }}
                      className="text-blue-400 hover:underline"
                    >
                      privacy policy
                    </Link>{" "}
                    and consent to being contacted about AstuteInfo services.
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent
                    text-base md:text-lg font-medium rounded-md text-white bg-gradient-to-r
                    from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg
                    hover:shadow-blue-500/20 hover:cursor-pointer transition-all duration-300"
                >
                  Request Information
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
