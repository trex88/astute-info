"use client";

import Link from "next/link";
import LinkEffect from "../_components/LinkEffect";
import { LuChevronRight } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuZap } from "react-icons/lu";
import { LuGlobe } from "react-icons/lu";
import { LuAward } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";
import { LuBookOpen } from "react-icons/lu";
import PartnersType from "./PartnersType";
import { useRef } from "react";

function Page() {
  const partnerSectionRef = useRef(null);
  function handleClick() {
    partnerSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="mb-30 bg-gradient-to-r from-primary/90 to-secondary py-16 md:py-24 text-white">
        <div>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Significance of AstuteInfo Partnerships
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              In the dynamic landscape of AstuteInfo, partnerships play a
              crucial role in driving innovation, expanding capabilities, and
              delivering value to customers.
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-md
                font-medium hover:bg-gray-100 hover:cursor-pointer duration-200 text-2xl group"
              onClick={handleClick}
            >
              Explore Our Partners{" "}
              <LuChevronRight className="size-5 group-active:translate-x-4 duration-100" />
            </button>
          </div>
        </div>
      </section>
      {/* Value Proposition Cards */}
      <div className="mx-20 grid grid-cols-1 md:grid-cols-3 gap-6 mb-30">
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary">
          <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
            <LuUsers className="size-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Collaborative Ecosystem</h3>
          <p className="text-gray-600 text-xl leading-8">
            AstuteInfo partnerships foster a collaborative ecosystem where
            industry stakeholders come together to share resources, expertise,
            and best practices.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-secondary">
          <div className="bg-secondary/10 p-4 rounded-full w-fit mb-4">
            <LuZap className="size-8 text-secondary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Expanded Capabilities</h3>
          <p className="text-gray-600 text-xl leading-8">
            Partnering with specialized AstuteInfo providers allows us to expand
            our service offerings and meet the diverse needs of our customers.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-accent">
          <div className="bg-accent/10 p-4 rounded-full w-fit mb-4">
            <LuGlobe className="size-8 text-accent" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Global Expansion</h3>
          <p className="text-gray-600 text-xl leading-8">
            Strategic partnerships facilitate market expansion by tapping into
            new geographic regions, industries, and customer segments.
          </p>
        </div>
      </div>
      {/* Partner Types Section */}
      <section className="mb-30 mx-10 lg:mx-45">
        <div className="text-center mb-15">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Types of AstuteInfo Partners
          </h2>
          <p className="text-gray-600 max-w-5xl mx-auto text-2xl">
            Our network of AstuteInfo partners encompasses various types of
            organizations and professionals, each contributing unique expertise
            and capabilities to our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <PartnersType
            icon={<LuAward className="size-7 text-primary" />}
            heading="Certified Drone Pilots"
          >
            Certified Drone pilots form the backbone of our service provider
            network, bringing specialized skills, experience, and certifications
            to the table. Whether capturing stunning aerial footage or
            conducting precise inspections, these skilled professionals play a
            critical role in delivering high-quality AstuteInfo to our
            customers.
          </PartnersType>
          <PartnersType
            icon={<LuUsers className="size-7 text-primary" />}
            heading="AstuteInfo Companies"
          >
            Partnering with established AstuteInfo companies allows us to access
            a diverse range of services, equipment, and expertise under one
            roof. From turnkey solutions to custom projects, these companies
            offer comprehensive services tailored to the unique needs of our
            clients.
          </PartnersType>
          <PartnersType
            icon={<LuCpu className="size-7 text-accent" />}
            heading="Technology Partners"
            iconBgColor="bg-accent/10"
          >
            Collaborating with technology partners who develop cutting-edge AI
            hardware, software, and accessories enables us to stay at the
            forefront of technological innovation and offer state-of-the-art
            solutions to our customers.
          </PartnersType>
          <PartnersType
            icon={<LuBookOpen className="size-7 text-primary" />}
            heading="Continuous Learning and Development"
          >
            As part of our partner program, you gain access to ongoing training,
            education, and professional development opportunities to enhance
            your skills, expand your knowledge, and stay updated on the latest
            trends, technologies, and regulations in the AI industry.
          </PartnersType>
        </div>
      </section>
      {/* NVIDIA Partnership Section */}
      <section
        className="bg-gradient-to-r from-[#76b900]/10 to-transparent rounded-xl p-8 mx-20 mb-30
          scroll-mt-35"
        ref={partnerSectionRef}
      >
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#76b900] p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              AstuteInfo Joins NVIDIA Inception Program
            </h2>
          </div>
          <p className="text-gray-600 mb-6 text-xl">
            We are thrilled to announce that from May 2024, AIROBOTCX Inc. has
            been accepted into the prestigious NVIDIA Inception Program! This
            exciting development places AIROBOTCX among an elite group of
            startups that are driving innovation and transforming industries
            worldwide.
          </p>
          <h3 className="text-2xl font-bold mb-3">
            Key Benefits and Resources
          </h3>
          <ul className="space-y-3 mb-6 text-xl">
            <li className="flex items-start gap-2">
              <LuChevronRight className="h-5 w-5 text-[#76b900] shrink-0 mt-0.5" />
              <span>
                <strong>Inception Portal:</strong> AIROBOTCX can now log in to
                the Inception Portal to update our profile, request benefits,
                and explore a variety of startup resources.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <LuChevronRight className="h-5 w-5 text-[#76b900] shrink-0 mt-0.5" />
              <span>
                <strong>NVIDIA AI Foundation Models:</strong> Available on NGC,
                these models are optimized for peak performance and can be
                customized for deployed semi-supervised and unsupervised
                Foundation Endpoints.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <LuChevronRight className="h-5 w-5 text-[#76b900] shrink-0 mt-0.5" />
              <span>
                <strong>NVIDIA Developer Program:</strong> Offers free tools and
                resources, including tutorials, forums, and other support tools
                for our development team.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <LuChevronRight className="h-5 w-5 text-[#76b900] shrink-0 mt-0.5" />
              <span>
                <strong>NVIDIA Omniverse:</strong> A scalable, multi-GPU
                real-time development platform for 3D simulation and design
                collaboration, providing extensive customization and modular
                development frameworks.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <LuChevronRight className="h-5 w-5 text-[#76b900] shrink-0 mt-0.5" />
              <span>
                <strong>NVIDIA Isaac Sim:</strong> A scalable robotics
                simulation application that helps in developing, testing, and
                managing AI-based robots within photorealistic virtual
                environments.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <LuChevronRight className="h-5 w-5 text-[#76b900] shrink-0 mt-0.5" />
              <span>
                <strong>Triton Management Service:</strong> Automates the
                deployment of multiple Triton Inference Server instances with
                GPU resource-efficient model orchestration, enhancing our AI
                model deployment processes.
              </span>
            </li>
          </ul>
          {/* <Link
            href=""
            className="inline-flex items-center gap-2 bg-[#76b900] text-white px-6 py-3 rounded-md
              font-medium hover:bg-[#76b900]/90 transition-colors"
          >
            Learn More About NVIDIA Partnership{" "}
            <LuChevronRight className="h-4 w-4" />
          </Link> */}
        </div>
      </section>
      {/* Benefits Section */}
      <section className="mb-30 mx-20 lg:mx-45">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Benefits of Partnering with Us
          </h2>
          <p className="text-gray-600 max-w-5xl mx-auto text-xl md:text-2xl leading-9">
            Partnering with our platform offers numerous benefits and
            opportunities for AstuteInfo providers looking to expand their
            reach, grow their business, and enhance their capabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-primary">
              Access to a Diverse Network
            </h3>
            <p className="text-gray-600 text-lg md:text-xl">
              As a partner with our platform, you gain access to a diverse
              network of customers, projects, and opportunities spanning various
              industries and geographic regions.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-primary">
              Marketing and Promotion
            </h3>
            <p className="text-gray-600 text-lg md:text-xl">
              We are committed to promoting our partners and showcasing their
              expertise, achievements, and success stories through various
              marketing channels, including our website and social media
              platforms.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-primary">
              Streamlined Operations
            </h3>
            <p className="text-gray-600 text-lg md:text-xl">
              Our platform offers advanced tools, resources, and support to
              streamline operations, manage projects, and enhance collaboration
              between partners and clients.
            </p>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="mx-20 lg:mx-45 bg-primary/5 rounded-xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          Ready to Become a Partner?
        </h2>
        <p className="text-gray-600 max-w-5xl mx-auto text-xl md:text-2xl leading-9 mb-8">
          Join our growing network of AstuteInfo partners and unlock new
          opportunities for growth, collaboration, and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-lg md:text-xl">
          <Link
            href=""
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3
              rounded-md font-medium hover:bg-primary/90 transition-colors group duration-200"
          >
            Apply to Become a Partner{" "}
            <LuChevronRight className="size-5 group-active:translate-x-4 duration-100" />
          </Link>
          {/* <Link
            href=""
            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300
              text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50
              transition-colors duration-200"
          >
            Learn More About Our Program
          </Link> */}
        </div>
      </section>
    </div>
  );
}

export default Page;
