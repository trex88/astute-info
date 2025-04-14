"use client";

import Badge from "../_components/Badge";
import {
  LuArrowRight,
  LuBriefcase,
  LuChevronRight,
  LuMapPin,
  LuStar,
  LuUsers,
  LuLightbulb,
  LuHandshake,
  LuRocket,
  LuShield,
  LuClock,
} from "react-icons/lu";
import Image from "next/image";
import avatar from "@/public/images/avatar.png";
import CultureCard from "./CultureCard";
import BenefitItem from "./BenefitItem";
import TestimonialCard from "./TestimonialCard";
import JobCard from "./JobCard";
import { useRef } from "react";

const job1 = {
  contract: "Full-Time",
  department: "Customer Service",
  location: "United States",
  role: "Customer Service Representative",
  description:
    "We are seeking a dedicated Customer Service Representative to join our team in the United States. In this role, you will be responsible for providing exceptional service to our valued customers.",
  responsibility: {
    res1: "Provide exceptional customer service via phone, email, and chat",
    res2: "Address inquiries and resolve issues efficient",
    res3: "Work collaboratively with team members to deliver solutions",
  },
  requirements: {
    req1: "Excellent communication skills",
    req2: "Positive attitude and customer-focused mindset",
    req3: "Passion for delivering outstanding service",
  },
};
const job2 = {
  contract: "Full-Time",
  department: "Customer Support",
  location: "Australia",
  role: "Customer Support Associate",
  description:
    "We are hiring a passionate Customer Support Associate to provide exceptional service to our Australian customers. As a Customer Support Associate, you will be responsible for assisting customers with inquiries.",
  responsibility: {
    res1: "Answer phone calls and respond to emails",
    res2: "Provide support via live chat",
    res3: "Ensure customer satisfaction with our products and services",
  },
  requirements: {
    req1: "Strong interpersonal skills",
    req2: "Customer-focused mindset",
    req3: "Ability to thrive in a fast-paced environment",
  },
};
const job3 = {
  contract: "Full-Time",
  department: "Management",
  location: "Australia",
  role: "Customer Service Manager",
  description:
    "Seeking an experienced Customer Service Manager to lead our team in delivering top-notch support. As the Customer Service Manager, you will oversee a team of customer service representatives.",
  responsibility: {
    res1: "Oversee a team of customer service representatives",
    res2: "Develop and implement customer service policies",
    res3: "Monitor performance metrics and identify areas for improvement",
  },
  requirements: {
    req1: "Previous leadership experience",
    req2: "Strong communication skills",
    req3: "Track record of driving results",
  },
};

function Page() {
  const jobSectionRef = useRef(null);
  const cultureSectionRef = useRef(null);

  function handleClickJob() {
    jobSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleClickCulture() {
    cultureSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      {/* Hero section */}
      <section className="relative pt-10 pb-20 md:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-primary/10 z-0"></div>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0"></div>
        {/* Dots Pattern */}
        <div className="absolute inset-0 opacity-30 z-0">
          <div
            className="h-full w-full bg-radial from-primary from-[1px] to-transparent to-[1px]
              bg-[length:30px_30px]"
          ></div>
        </div>
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1400px] mx-auto px-10">
            <div className="lg:w-1/2 max-w-2xl">
              <Badge
                className="bg-primary/20 hover:bg-primary/30 mb-4"
                textColor="text-primary"
              >
                {` We're Hiring`}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Build Your Career <span className="text-primary">With Us</span>
              </h1>
              <p className="text-lg lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Join our team of innovators and problem-solvers who are
                passionate about transforming the AI and Finance industry.
                Discover exciting opportunities to grow, learn, and make an
                impact.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  className="text-3xs lg:text-lg inline-flex items-center justify-center gap-2 bg-primary
                    text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90
                    transition-colors hover:cursor-pointer"
                  onClick={handleClickJob}
                >
                  Browse Open Positions <LuArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="text-3xs lg:text-lg inline-flex items-center justify-center gap-2 bg-white
                    border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium
                    hover:bg-gray-50 transition-colors hover:cursor-pointer"
                  onClick={handleClickCulture}
                >
                  Our Culture <LuChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                {/* Main Image */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col gap-4">
                      <div
                        className="bg-primary/10 rounded-lg p-5 flex flex-col items-center justify-center
                          aspect-square"
                      >
                        <LuUsers className="h-10 w-10 text-primary mb-2" />
                        <span className="text-2xl font-bold text-gray-900">
                          200+
                        </span>
                        <span className="text-sm text-gray-500">
                          Team Members
                        </span>
                      </div>
                      <div
                        className="bg-secondary/10 rounded-lg p-5 flex flex-col items-center justify-center
                          aspect-square"
                      >
                        <LuMapPin className="h-10 w-10 text-secondary mb-2" />
                        <span className="text-2xl font-bold text-gray-900">
                          12
                        </span>
                        <span className="text-sm text-gray-500">Countries</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div
                        className="bg-accent/10 rounded-lg p-5 flex flex-col items-center justify-center
                          aspect-square"
                      >
                        <LuStar className="h-10 w-10 text-accent mb-2" />
                        <span className="text-2xl font-bold text-gray-900">
                          4.8
                        </span>
                        <span className="text-sm text-gray-500">
                          Employee Rating
                        </span>
                      </div>
                      <div
                        className="bg-primary/10 rounded-lg p-5 flex flex-col items-center justify-center
                          aspect-square"
                      >
                        <LuBriefcase className="h-10 w-10 text-primary mb-2" />
                        <span className="text-2xl font-bold text-gray-900">
                          25+
                        </span>
                        <span className="text-sm text-gray-500">
                          Open Positions
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">
                      What Our Team Says
                    </h3>
                    <div className="relative">
                      <div className="italic text-gray-600 mb-4 text-3xs lg:text-lg">
                        {`"Joining AstuteInfo was the best career decision I've
                        made. The collaborative environment, growth
                        opportunities, and work-life balance are unmatched."`}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="relative size-10 lg:size-15 rounded-full">
                          <Image
                            src={avatar}
                            className="rounded-full"
                            fill
                            alt="A smiling woman working at AstuteInfo"
                          />
                        </div>
                        <div className="text-3xs lg:text-lg">
                          <p className="font-bold">Jane Doe</p>
                          <p className="text-gray-500">
                            Customer Service Manager
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full z-0"></div>
              </div>
            </div>
          </div>
          {/* Stats Bar */}
          <div
            className="mt-16 bg-white rounded-xl shadow-md p-6 grid grid-cols-2 md:grid-cols-4 gap-6
              md:gap-8 mx-10"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">85%</div>
              <div className="text-sm lg:text-lg text-gray-500">
                Annual Growth
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">92%</div>
              <div className="text-sm lg:text-lg text-gray-500">
                Employee Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">4.7</div>
              <div className="text-sm lg:text-lg text-gray-500">
                Glassdoor Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">18+</div>
              <div className="text-sm lg:text-lg text-gray-500">
                Industry Awards
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our culture section */}
      <section className="relative py-20 scroll-mt-32" ref={cultureSectionRef}>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>

        <div className="relative mx-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge
              className="bg-primary/10 text-primary hover:bg-primary/20 mb-4"
              textColor="text-primary"
            >
              Our Culture
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why {`You'll`} Love Working With Us
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl">
              At AstuteInfo, {`we're`} building a workplace where innovation
              thrives, collaboration is celebrated, and every team member has
              the opportunity to make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CultureCard
              icon={<LuLightbulb className="h-8 w-8 text-primary" />}
              heading="Innovative Environment"
              content="Work on cutting-edge technologies and solutions that are
                transforming the AI and Finance industry."
              firstDescription="State-of-the-art technologies"
              secondDescription="Creative problem-solving"
              thirdDescription="Continuous learning"
              color="primary"
            />
            <CultureCard
              icon={<LuHandshake className="h-8 w-8 text-secondary" />}
              heading="Collaborative Culture"
              content="Join a diverse team that values collaboration, creativity, and
                open communication."
              firstDescription="Inclusive workplace"
              secondDescription="Cross-functional teams"
              thirdDescription="Mentorship opportunities"
              color="secondary"
            />
            <CultureCard
              icon={<LuRocket className="h-8 w-8 text-accent" />}
              heading="Growth Opportunities"
              content="Develop your skills and advance your career with our
                comprehensive training and development programs."
              firstDescription="Career advancement paths"
              secondDescription="Professional development"
              thirdDescription="Leadership training"
              color="accent"
            />
          </div>
        </div>
      </section>
      {/* Benefit section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Badge
                className="bg-primary/10 hover:bg-primary/20 mb-4"
                textColor="text-primary"
              >
                Benefits
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                We Take Care of Our Team
              </h2>
              <p className="text-gray-600 text-lg lg:text-xl mb-8">
                We believe that taking care of our employees leads to better
                outcomes for everyone.{` That's`} why we offer a comprehensive
                benefits package designed to support your well-being and
                professional growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <BenefitItem
                  icon={<LuShield className="size-5 lg:size-6 text-primary" />}
                  heading="Health Insurance"
                  p="Comprehensive medical, dental, and vision coverage"
                />
                <BenefitItem
                  icon={<LuClock className="size-5 lg:size-6 text-primary" />}
                  heading="Flexible Schedule"
                  p="Work-life balance with remote options"
                />
                <BenefitItem
                  icon={<LuStar className="size-5 lg:size-6 text-primary" />}
                  heading="Professional Growth"
                  p="Education assistance and career advancement"
                />
                <BenefitItem
                  icon={<LuUsers className="size-5 lg:size-6 text-primary" />}
                  heading="Team Events"
                  p="Regular social activities and celebrations"
                />
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="absolute -top-4 -right-4 bg-primary/10 rounded-full w-24 h-24"></div>
                <div className="absolute -bottom-4 -left-4 bg-secondary/10 rounded-full w-16 h-16"></div>

                <h3 className="text-2xl font-bold mb-6 relative z-10">
                  Employee Testimonials
                </h3>

                <div className="space-y-6 relative z-10">
                  <TestimonialCard
                    src={avatar}
                    alt="Team member at AstuteInfo"
                    testimonial="Joining AstuteInfo was the best career decision I've
                      made. The collaborative environment and growth
                      opportunities have been incredible."
                    name="Jane Doe"
                    role="Customer Service Manager"
                  />
                  <TestimonialCard
                    src={avatar}
                    alt="Team member at AstuteInfo"
                    testimonial="Joining AstuteInfo was the best career decision I've
                      made. The collaborative environment and growth
                      opportunities have been incredible."
                    name="Jane Doe"
                    role="Customer Service Manager"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -right-8 h-16 w-16 bg-primary/10 rounded-full"></div>
              <div className="absolute bottom-1/4 -left-8 h-24 w-24 bg-secondary/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Current Job Openings Section */}
      <section className="py-20 scroll-mt-32" ref={jobSectionRef}>
        <div className="mx-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge
              className="bg-primary/10 hover:bg-primary/20 mb-4"
              textColor="text-primary"
            >
              Opportunities
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Current Job Openings
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl">
              {` We're`} looking for talented individuals to join our team.
              Check out our current openings and find the perfect role for you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Job Cards */}
            <JobCard jobInfo={job1} />
            <JobCard jobInfo={job2} />
            <JobCard jobInfo={job3} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
