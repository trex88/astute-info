"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "@/public/images/aboutAstuteInfo.png";
import contactImg from "@/public/images/investorContact.png";
import {
  ArrowRight,
  Globe,
  Shield,
  Users,
  Leaf,
  BarChart,
  Lightbulb,
  Heart,
  Award,
  Mail,
  Phone,
} from "lucide-react";
import InvestorHeroSection from "./InvestorHeroSection";
import AdvantageCard from "./AdvantageCard";
import InvestmentCard from "./InvestmentCard";
import FeaturePoint from "./FeaturePoint";
import InvestmentOption from "./InvestmentOption";
import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

export default function InvestorPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const investorRelationSectionRef = useRef(null);
  const whyInvestSectionRef = useRef(null);

  function handleContactInvestor() {
    investorRelationSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleWhyInvest() {
    whyInvestSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  return (
    <div className="min-h-screen bg-white">
      <InvestorHeroSection
        handleContactInvestor={handleContactInvestor}
        handleWhyInvest={handleWhyInvest}
      />

      {/* About Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div
                className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full text-sm
                  md:text-base font-medium text-primary mb-6"
              >
                ABOUT ASTUTEINFO
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unlocking the Future with{" "}
                <span className="text-primary">AstuteInfo</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                A Journey of Innovation and Impact. Imagine a world where
                artificial intelligence {`isn't`} just a concept but a powerful
                force driving innovation across industries. At AstuteInfo,
                {` we're`}
                turning this vision into reality at the forefront of financial
                technologies with our cutting-edge AI solutions.
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                As we embark on this journey of innovation, we invite you to
                join us in shaping the future of AI technologies and unlocking
                new possibilities for growth and impact.
              </p>
              <Link
                href="aboutUs"
                className="group flex items-center text-base md:text-lg text-primary font-medium
                  hover:text-primary/80 transition-colors"
              >
                MORE ABOUT ASTUTEINFO
                <ArrowRight
                  className="h-4 w-4 ml-2 group-hover:translate-x-1 group-active:translate-x-0
                    transition-transform"
                />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image src={aboutImg} alt="AI Technology Visualization" />
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg transform -rotate-6
                    animate-float"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-gray-800 font-medium text-sm">
                      Secure AI
                    </span>
                  </div>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg transform rotate-6
                    animate-float-delayed"
                >
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-secondary" />
                    <span className="text-gray-800 font-medium text-sm">
                      Innovation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full text-sm
                md:text-base font-medium text-primary mb-4"
            >
              HIGHLIGHTS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Key Advantages
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              AstuteInfo brings together innovation, security, and global reach
              to create cutting-edge AI solutions for the finance industry.
            </p>

            {/* Decorative Element */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AdvantageCard
              icon={<Globe className="h-6 w-6 text-white" />}
              title="Global Presence"
              description="Business presence in two major global innovation hubs, the USA & Australia, with a growing footprint."
              color="from-blue-500 to-blue-600"
            />
            <AdvantageCard
              icon={<Shield className="h-6 w-6 text-white" />}
              title="Secure AI"
              description="Secure, high-performance AI pioneer with advanced security protocols and compliance frameworks."
              color="from-primary to-secondary"
            />
            <AdvantageCard
              icon={<Users className="h-6 w-6 text-white" />}
              title="Collaboration"
              description="Empowerment through collaboration with strategic partnerships across industries and sectors."
              color="from-purple-500 to-indigo-500"
            />
            <AdvantageCard
              icon={<Leaf className="h-6 w-6 text-white" />}
              title="Sustainable"
              description="Sustainable solutions for tomorrow with a focus on long-term impact and responsible AI development."
              color="from-green-500 to-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section
        className="py-20 relative scroll-mt-20"
        ref={whyInvestSectionRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full text-sm
                md:text-base font-medium text-primary mb-4"
            >
              Investment Opportunity
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Invest in AstuteInfo?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Join us on our journey to transform the financial technology
              landscape with secure and high-performance solutions.
            </p>
            {/* Decorative Line */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InvestmentCard
              icon={<BarChart className="h-6 w-6 text-primary" />}
              title="Market Leadership"
              description="AstuteInfo is positioned as a market leader in high-performance and secure AI-driven solutions, with a proven track record of delivering high-quality products and services that meet and exceed customer expectations."
              index={0}
            />
            <InvestmentCard
              icon={<Lightbulb className="h-6 w-6 text-primary" />}
              title="Innovation"
              description="We're at the forefront of innovation, constantly pushing the boundaries of what is possible with secure and high-performance AI technology. Our commitment to research and development keeps us ahead of the curve and continues to deliver cutting-edge solutions."
              index={1}
            />
            <InvestmentCard
              icon={<Heart className="h-6 w-6 text-primary" />}
              title="Impact"
              description="Investing in AstuteInfo means investing in real-world impact. Our solutions are designed to address critical challenges facing organizations around the world, from improving efficiency and safety to enhancing sustainability. Our AI-powered platforms are driving meaningful change across industries."
              index={2}
            />
            <InvestmentCard
              icon={<Award className="h-6 w-6 text-primary" />}
              title="Visionary Leadership"
              description="Our leadership team comprises seasoned professionals with extensive experience in AI, finance, and business strategy. We ensure that AstuteInfo remains at the forefront of the AI revolution, guiding us towards a future of growth and success."
              index={3}
            />
          </div>

          <div className="text-center mt-16">
            <button
              type="button"
              className="text-base md:text-lg bg-gradient-to-r from-primary to-secondary
                hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-3 px-8
                rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 transform
                hover:-translate-y-1 hover:cursor-pointer"
              onClick={handleContactInvestor}
            >
              CONTACT INVESTOR RELATIONS
            </button>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section
        className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white
          relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="h-full w-full"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="smallGrid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallGrid)" />
            </svg>
          </div>

          {/* Soft Gradient Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Join us on this journey
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                AstuteInfo Corporation is not just a {`company—it's`} a catalyst
                for change. With our innovative AI solutions, dedicated team,
                and visionary leadership, {`we're`} shaping the future of
                finance and creating meaningful impact.
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                We look forward to partnering with you to build a brighter, more
                inclusive future.
              </p>

              <div className="flex flex-wrap gap-4">
                <FeaturePoint text="Cutting-edge AI technology" />
                <FeaturePoint text="Experienced leadership team" />
                <FeaturePoint text="Global market presence" />
                <FeaturePoint text="Sustainable business model" />
              </div>
            </div>
            {/* Ready to invest card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Invest?
              </h3>
              <p className="text-base md:text-lg text-gray-300 mb-8">
                To invest directly with us through preferred stocks or the SAFE
                options, please contact our Investor Relations Team.
              </p>

              <div className="space-y-6 mb-8">
                <InvestmentOption
                  title="Preferred Stock Options"
                  description="Invest in our company's growth with preferred stock options"
                />
                <InvestmentOption
                  title="SAFE Agreements"
                  description="Simple Agreement for Future Equity with favorable terms"
                />
                <InvestmentOption
                  title="Direct Investment"
                  description="Connect directly with our investor relations team"
                />
              </div>
              <button
                type="button"
                className="w-full text-base md:text-lg bg-gradient-to-r from-primary to-secondary
                  hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-3 px-6
                  rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20
                  hover:cursor-pointer flex items-center justify-center gap-2 group"
                onClick={handleContactInvestor}
              >
                CONTACT INVESTOR RELATIONS
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="py-20 bg-gradient-to-b from-white to-gray-50 relative scroll-mt-22"
        ref={investorRelationSectionRef}
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-tr-full -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full text-sm
                md:text-base font-medium text-primary mb-4"
            >
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact our Investor Relations Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {`We're`} here to answer your questions and provide more
              information about investment opportunities.
            </p>
            {/* Decorative Line */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    Investor Inquiry Form
                  </h3>
                  <p className="text-base md:text-lg text-white/80">
                    Fill out the form below and our team will get back to you
                    promptly
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                      >
                        Full name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary
                          focus:border-primary bg-gray-50 text-base md:text-lg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                      >
                        Email address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                          focus:ring-primary focus:border-primary bg-gray-50 text-base md:text-lg"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                      >
                        Phone number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                          focus:ring-primary focus:border-primary bg-gray-50 text-base md:text-lg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                      >
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                          focus:ring-primary focus:border-primary bg-gray-50 text-base md:text-lg"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                    >
                      Your message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                        focus:ring-primary focus:border-primary bg-gray-50 text-base md:text-lg"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90
                      hover:to-secondary/90 text-base md:text-lg text-white font-medium py-3 px-8
                      rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20
                      hover:cursor-pointer flex items-center gap-2 ml-auto group"
                  >
                    SUBMIT
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-active:translate-0 duration-150" />
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image src={contactImg} alt="Investor Relations" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Our Investor Relations Team
                      </h3>
                      <p className="text-white/80 text-base">
                        Dedicated to providing you with the information you need
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-1">
                          Email Us
                        </h4>
                        <p className="text-gray-600 mb-1">
                          For general inquiries:
                        </p>
                        <a
                          href="mailto:investors@astuteinfo.com"
                          className="text-primary hover:underline"
                        >
                          investors@astuteinfo.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-1">
                          Call Us
                        </h4>
                        <p className="text-gray-600 mb-1">
                          Investor Relations Hotline:
                        </p>
                        <a
                          href="tel:+1-555-123-4567"
                          className="text-primary hover:underline"
                        >
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-1">
                          Visit Our Offices
                        </h4>
                        <p className="text-gray-600 mb-1">Headquarters:</p>
                        <address className="not-italic text-gray-600">
                          123 AI Innovation Center
                          <br />
                          New York, NY 10001
                          <br />
                          United States
                        </address>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-base md:text-lg mb-4">
                      Connect With Us
                    </h4>
                    <div className="flex gap-4">
                      <Link
                        href="https://www.facebook.com/profile.php?id=61575828585288"
                        className="size-10 rounded-full bg-gray-800 flex items-center justify-center
                          hover:bg-primary transition-colors"
                        target="_blank"
                      >
                        <LuFacebook className="text-white h-5 w-5" />
                      </Link>
                      <Link
                        href="https://www.instagram.com/astuteinfo"
                        className="size-10 rounded-full bg-gray-800 flex items-center justify-center
                          hover:bg-primary transition-colors"
                        target="_blank"
                      >
                        <LuInstagram className="text-white h-5 w-5" />
                      </Link>
                      <Link
                        href="https://x.com/astuteinfo"
                        className="size-10 rounded-full bg-gray-800 flex items-center justify-center
                          hover:bg-primary transition-colors"
                        target="_blank"
                      >
                        <FaXTwitter className="text-white h-5 w-5" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/astuteinfo/about/"
                        className="size-10 rounded-full bg-gray-800 flex items-center justify-center
                          hover:bg-primary transition-colors"
                        target="_blank"
                      >
                        <LuLinkedin className="text-white h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
