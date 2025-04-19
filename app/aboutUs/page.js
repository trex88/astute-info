"use client";

import Image from "next/image";
import teamImg from "../../public/images/team.jpg";
import ourMissionImg from "../../public/images/mission.png";
import ourVisionImg from "../../public/images/ourVisionSquare.png";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Lightbulb,
  Shield,
  Recycle,
  Zap,
  Star,
} from "lucide-react";

import TeamCarousel from "./TeamCarousel";
import Link from "next/link";
import CoreValueCard from "./CoreValueCard";
import { useRef } from "react";
import TeamCarousel2 from "./TeamCarousel2";

export default function AboutPage() {
  const missionSectionRef = useRef(null);

  function handleLearnMore() {
    missionSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      {/* Hero Section  */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 mx-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl z-0"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 border-4 border-primary/20 rounded-lg
            rotate-12 z-0"
        ></div>

        <div className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div
              className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium
                text-sm md:text-base mb-6"
            >
              Artificial Intelligence Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gray-800">
              Pioneering the Future with{" "}
              <span className="text-primary">AI Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              AstuteInfo is the Artificial Intelligence division of AIROBOTICX
              Group, specializing in AI-driven products and services across
              industries. Headquartered in New York, USA, with its Asia-Pacific
              base in Sydney, Australia.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link
                href="contactUs"
                className="px-6 py-3 bg-primary text-white text-base md:text-lg font-medium rounded-lg
                  hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
              >
                Contact Us
              </Link>
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 text-base md:text-lg font-medium
                  rounded-lg hover:bg-gray-100 hover:cursor-pointer transition-colors flex
                  items-center gap-2 group"
                onClick={handleLearnMore}
              >
                Learn More{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-150" />
              </button>
            </div>

            <div className="relative max-w-7xl">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/10 rounded-lg z-0"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={teamImg}
                  alt="AstuteInfo team collaboration"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="py-20 px-4 lg:px-10 xl:px-50 bg-white scroll-mt-18"
        ref={missionSectionRef}
      >
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div
              className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium
                text-sm md:text-base mb-4"
            >
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Our Mission
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary/50 to-blue-400/50 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                At Astute Info, we are committed to fostering AI-driven
                innovation that enhances decision-making, automates complex
                processes, and enables organizations to unlock new growth
                opportunities.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                By offering cutting-edge AI solutions, we empower industries to
                embrace artificial intelligence and harness its potential for
                long-term success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="size-6 md:size-7 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                    Innovative Solutions
                  </h3>
                  <p className="text-base md:text-lg text-gray-600">
                    Cutting-edge AI technologies that drive business
                    transformation
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="size-6 md:size-7 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                    Ethical AI
                  </h3>
                  <p className="text-base md:text-lg text-gray-600">
                    Committed to responsible and transparent AI development
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative mx-auto max-w-10/12 md:max-w-8/12 lg:max-w-full rounded-xl shadow-lg
                z-10"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg -z-1"></div>
              <Image
                src={ourMissionImg}
                alt="AI innovation visualization"
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 px-4 lg:px-10 xl:px-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400/10 rounded-lg z-0"></div>
            <div className="relative mx-auto max-w-10/12 md:max-w-8/12 lg:max-w-full z-10 shadow-lg">
              <Image
                src={ourVisionImg}
                alt="Future of AI visualization"
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div
              className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium
                text-sm md:text-base mb-4"
            >
              Looking Forward
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Our Vision
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary/50 to-blue-400/50 rounded-full mb-8"></div>

            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Our vision is to shape the future of artificial intelligence by
              creating an ecosystem where AI seamlessly integrates into
              industries, fostering innovation, efficiency, and sustainable
              growth.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              We aim to make AI more accessible, ethical, and transformative,
              ensuring that organizations across the globe benefit from
              high-performance AI-powered solutions.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center
                    flex-shrink-0"
                >
                  <Lightbulb className="size-5 md:size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                    Future-Focused Approach
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    {` We're`} constantly exploring emerging technologies and
                    methodologies to stay at the forefront of AI innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div
              className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium
                text-sm md:text-base mb-4"
            >
              What Drives Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Our values guide everything we do, from product development to
              customer interactions
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary/50 to-blue-400/50 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-10 lg:px-15">
            <CoreValueCard
              icon={<Lightbulb className="w-6 h-6 text-primary" />}
              title="Innovation"
              description="We push the boundaries of AI technology to develop advanced, secure, and high-performance solutions."
            />
            <CoreValueCard
              icon={<Star className="w-6 h-6 text-primary" />}
              title="Quality"
              description="Delivering AI products and services that set industry benchmarks for reliability and efficiency."
            />
            <CoreValueCard
              icon={<Shield className="w-6 h-6 text-primary" />}
              title="Integrity"
              description="Upholding transparency, trust, and ethical AI development in all our operations."
            />
            <CoreValueCard
              icon={<Recycle className="w-6 h-6 text-primary" />}
              title="Sustainability"
              description="Developing AI solutions that contribute to a more sustainable and responsible technological future."
            />
          </div>
        </div>
      </section>

      {/* Team Section with Carousel */}
      <section className="py-20 bg-gray-50">
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div
              className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium
                text-sm md:text-base mb-4"
            >
              Our People
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Meet Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Astute Info thrives on the expertise of its AI engineers, data
              scientists, and business strategists who drive its mission forward
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary/50 to-blue-400/50 rounded-full mx-auto"></div>
          </div>

          {/* <TeamCarousel /> */}
          <TeamCarousel2 />

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Our team is dedicated to developing next-generation AI
              technologies that redefine industries. Through their dedication,
              knowledge, and passion, Astute Info continues to lead the AI
              revolution.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium
                rounded-lg hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
            >
              Join Our Team <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div
                className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium
                  text-sm mb-4"
              >
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Contact Us
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary/50 to-blue-400/50 rounded-full mb-8"></div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Have questions about our AI solutions or want to explore how we
                can help your business? Reach out to our team today.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center
                      flex-shrink-0"
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">
                      Headquarters
                    </h3>
                    <p className="text-gray-600">
                      123 AI Innovation Center, New York, NY 10001, USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center
                      flex-shrink-0"
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">
                      Asia-Pacific Office
                    </h3>
                    <p className="text-gray-600">
                      45 Tech Hub Lane, Sydney, NSW 2000, Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center
                      flex-shrink-0"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">
                      Phone
                    </h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center
                      flex-shrink-0"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">
                      Email
                    </h3>
                    <p className="text-gray-600">info@astuteinfo.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                    hover:bg-primary/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                    hover:bg-primary/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                    hover:bg-primary/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                    hover:bg-primary/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Send Us a Message
                </h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary
                          focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary
                          focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary
                        focus:border-primary"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary
                        focus:border-primary"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary
                        focus:border-primary"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg
                      hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
