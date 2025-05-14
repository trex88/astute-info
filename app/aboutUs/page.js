"use client";

import Image from "next/image";
import teamImg from "../../public/images/team.jpg";
import ourMissionImg from "../../public/images/mission.png";
import ourVisionImg from "../../public/images/ourVisionSquare.png";

import {
  ArrowRight,
  Lightbulb,
  Shield,
  Recycle,
  Zap,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import { useRef } from "react";
import CoreValueCard from "./CoreValueCard";
import ContactDetail from "./ContactDetail";
import TeamCarousel from "./TeamCarousel";
// Disable TeamCarousel atm - Still fixing TeamCarousel responsive issue

export default function AboutPage() {
  const missionSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  function handleLearnMore() {
    missionSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  function handleContactUs() {
    contactSectionRef.current.scrollIntoView({
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
              <button
                type="button"
                className="px-6 py-3 bg-primary text-white text-base md:text-lg font-medium rounded-lg
                  hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md
                  hover:cursor-pointer"
                onClick={handleContactUs}
              >
                Contact Us
              </button>
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

          <TeamCarousel />

          <div className="mt-16 text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Our team is dedicated to developing next-generation AI
              technologies that redefine industries. Through their dedication,
              knowledge, and passion, Astute Info continues to lead the AI
              revolution.
            </p>
            <Link
              href="career"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-base md:text-lg
                text-white font-medium rounded-lg hover:bg-primary/90 transition-colors
                shadow-sm hover:shadow-md group"
            >
              Join Our Team{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-150" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white scroll-mt-20" ref={contactSectionRef}>
        <div className="max-w-11/12 xl:max-w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left content */}
          <div>
            <div
              className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium
                text-sm md:text-base mb-4"
            >
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Contact Us
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary/50 to-blue-400/50 rounded-full mb-8"></div>

            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Have questions about our AI solutions or want to explore how we
              can help your business? Reach out to our team today.
            </p>

            <div className="space-y-6 mb-8">
              <ContactDetail
                icon={<MapPin className="w-5 h-5 text-primary" />}
                h3="Headquarters"
                p="123 AI Innovation Center, New York, NY 10001, USA"
              />
              <ContactDetail
                icon={<MapPin className="w-5 h-5 text-primary" />}
                h3="Asia-Pacific Office"
                p="45 Tech Hub Lane, Sydney, NSW 2000, Australia"
              />
              <ContactDetail
                icon={<Phone className="w-5 h-5 text-primary" />}
                h3="Phone"
                p="+1 (555) 123-4567"
                type="phone"
              />
              <ContactDetail
                icon={<Mail className="w-5 h-5 text-primary" />}
                h3="Email"
                p="info@astuteinfo.com"
                type="email"
              />
            </div>

            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61575828585288"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                  hover:bg-primary/10 transition-colors"
                target="_blank"
              >
                <LuFacebook className="size-5 text-gray-600" />
              </Link>
              <Link
                href="https://www.instagram.com/astuteinfo"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                  hover:bg-primary/10 transition-colors"
                target="_blank"
              >
                <LuInstagram className="size-5 text-gray-600" />
              </Link>
              <Link
                href="https://x.com/astuteinfo"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                  hover:bg-primary/10 transition-colors"
                target="_blank"
              >
                <FaXTwitter className="size-5 text-gray-600" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/astuteinfo/about/"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
                  hover:bg-primary/10 transition-colors"
                target="_blank"
              >
                <LuLinkedin className="size-5 text-gray-600" />
              </Link>
            </div>
          </div>

          {/* Right content - Contact Form*/}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary
                        focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary
                        focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="company"
                    className="block text-sm md:text-base font-medium text-gray-700 mb-1"
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
                    className="block text-sm md:text-base font-medium text-gray-700 mb-1"
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
                    className="block text-sm md:text-base font-medium text-gray-700 mb-1"
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
                    hover:bg-primary/90 hover:cursor-pointer transition-colors shadow-sm
                    hover:shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
