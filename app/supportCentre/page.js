"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronRight,
  Search,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  Clock,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import FaqItem from "./FaqItem";

export default function SupportCenter() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Decorative Elements */}
      <section className="relative bg-white pt-16 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/5
              to-transparent"
          ></div>
          <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/4 h-48 w-48 rounded-full bg-primary/10 blur-3xl"></div>

          {/* Decorative shapes */}
          <div
            className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/20 rounded-xl
              rotate-12 hidden md:block"
          ></div>
          <div
            className="absolute bottom-20 right-10 w-20 h-20 border-2 border-secondary/20 rounded-full
              hidden md:block"
          ></div>
          <div className="absolute top-1/3 right-1/3 w-4 h-24 bg-primary/10 rounded-full hidden md:block"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-4 lg:mx-5 xl:mx-auto">
          <div className="flex flex-col md:flex-row items-center md:space-x-8 lg:space-x-16">
            {/* Left Column - Content */}
            <div className="md:w-1/2 mb-12 md:mb-0 relative">
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-6">
                  <span
                    className="bg-primary/10 text-primary text-sm lg:text-base font-medium px-4 py-1
                      rounded-full"
                  >
                    24/7 SUPPORT
                  </span>
                  <div className="h-px w-12 bg-gray-200"></div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                  {`We're`} here to{" "}
                  <span className="text-primary">help you</span> succeed
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg">
                  Our dedicated support team and AI-powered virtual assistant
                  are available around the clock to ensure you get the solutions
                  you need, when you need them.
                </p>

                {/* Quick Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://airobodaichatbot.vercel.app/"
                    className="bg-primary hover:bg-primary/90 text-white text-base lg:text-lg px-5 py-3
                      rounded-lg font-medium inline-flex items-center transition-all group"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Talk to an Agent
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button
                    type="button"
                    className="bg-white border border-gray-200 hover:border-primary/50 hover:cursor-pointer
                      text-gray-700 text-base lg:text-lg px-5 py-3 rounded-lg font-medium inline-flex
                      items-center transition-all"
                  >
                    Browse FAQs
                  </button>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute w-24 h-24 bg-secondary/10 rounded-full -z-10 -left-12 top-0 blur-xl"></div>
            </div>

            {/* Right Column - Support Cards */}
            <div className="md:w-1/2 relative">
              {/* Floating Support Cards */}
              <div className="relative">
                {/* Main Support Card */}
                <div
                  className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-6 transform
                    transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-xl mr-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg lg:text-xl mb-2">
                        Virtual AI Assistant
                      </h3>
                      <p className="text-gray-600 mb-3 text-base lg:text-lg">
                        Get instant answers, troubleshooting, and guidance 24/7
                      </p>
                      <a
                        href="https://airobodaichatbot.vercel.app/"
                        className="text-primary text-base lg:text-lg hover:text-blue-400 font-medium flex
                          items-center group"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Chat Now{" "}
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 duration-150" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Secondary Support Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="bg-white rounded-xl shadow-lg p-5 border border-gray-100 transform transition
                      hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start">
                      <div className="bg-secondary/10 p-2 rounded-lg mr-3">
                        <Phone className="size-5 lg:size-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base lg:text-lg mb-1">
                          Phone Support
                        </h3>
                        <p className="text-gray-600 text-sm lg:text-base">
                          Talk to our team directly
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-white rounded-xl shadow-lg p-5 border border-gray-100 transform transition
                      hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start">
                      <div className="bg-secondary/10 p-2 rounded-lg mr-3">
                        <Mail className="size-5 lg:size-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base lg:text-lg mb-1">
                          Email Support
                        </h3>
                        <p className="text-gray-600 text-sm lg:text-base">
                          Get detailed assistance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support Stats */}
                <div
                  className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-4 hidden
                    md:block"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                        24/7
                      </div>
                      <div className="text-xs lg:text-base text-gray-600">
                        Support
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                        95%
                      </div>
                      <div className="text-xs lg:text-base text-gray-600">
                        Satisfaction
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                        &lt;5 min
                      </div>
                      <div className="text-xs lg:text-base text-gray-600">
                        Response Time
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -right-4 -bottom-4 w-40 h-40 border border-primary/10 rounded-full
                  -z-10"
              ></div>
              <div className="absolute right-1/3 -top-6 w-20 h-20 bg-primary/5 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-10"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="#5dadd2"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="#5dadd2"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#5dadd2"
            />
          </svg>
        </div>
      </section>
      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
            What are you looking for?
          </h2>

          <div className="max-w-5xl mx-4 lg:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="contactUs" className="group">
              <div
                className="bg-gray-50 hover:bg-primary/5 rounded-xl p-6 text-center transition-all
                  duration-300 border border-gray-100 hover:border-primary/20 hover:shadow-md"
              >
                <div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto
                    mb-4 group-hover:scale-110 transition-transform"
                >
                  <Mail className="size-6 lg:size-7 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2">
                  Contact Us
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-600">
                  Get in touch with our team
                </p>
              </div>
            </Link>

            <Link href="cancellationOptions" className="group">
              <div
                className="bg-gray-50 hover:bg-primary/5 rounded-xl p-6 text-center transition-all
                  duration-300 border border-gray-100 hover:border-primary/20 hover:shadow-md"
              >
                <div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto
                    mb-4 group-hover:scale-110 transition-transform"
                >
                  <FileText className="size-6 lg:size-7 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2">
                  Cancellation Options
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-600">
                  Manage your subscription
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Virtual Agent Highlight */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div
          className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-4 xl:mx-auto
            gap-8"
        >
          <div className="md:w-1/2 text-center md:text-start">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Meet Our Virtual Support Agent
            </h2>
            <p className="text-gray-700 mb-6 text-base md:text-lg">
              For quick answers and instant support, try our Virtual Agent!
              Available 24/7, it can help you troubleshoot issues, find
              information, and guide you through common tasks—all in just a few
              clicks. {`It's`} fast, easy, and always ready to assist.
            </p>
            <a
              href="https://airobodaichatbot.vercel.app/"
              className="bg-primary hover:bg-primary/90 text-white text-base md:text-lg px-6 py-3
                rounded-lg font-medium inline-flex items-center transition-all group"
              rel="noopener noreferrer"
              target="_blank"
            >
              Chat with our virtual agent
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto relative z-10">
              <div className="flex items-start mb-4">
                <div
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3
                    flex-shrink-0"
                >
                  <span className="text-primary font-bold">AI</span>
                </div>
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-3">
                  <p className="text-gray-800">
                    Hello! {`I'm`} your virtual assistant. How can I help you
                    today?
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-4 justify-end">
                <div className="bg-primary/10 rounded-lg rounded-tr-none p-3">
                  <p className="text-gray-800">
                    I need help with my account settings.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3
                    flex-shrink-0"
                >
                  <span className="text-primary font-bold">AI</span>
                </div>
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-3">
                  <p className="text-gray-800">
                    I can help with that! To access your account settings,
                    please follow these steps...
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
            <div
              className="absolute -bottom-2 -right-2 w-12 h-12 border border-primary/20 rounded-lg
                rotate-12"
            ></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white px-4">
        <div>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl md:max-w-3xl mx-auto">
              Find answers to common questions about our services, technology,
              and support options.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FaqItem
              question="What services does AstuteInfo offer, and how can they benefit my business?"
              answer="AstuteInfo provides AI-driven financial technology solutions, including AI-powered payment switch technology, customizable SaaS platforms, and AI solutions for various industries. These services enhance transaction speed, security, and efficiency while offering tailored platforms that drive innovation and improve customer experiences."
            />

            <FaqItem
              question="What industries does AstuteInfo serve, and what businesses can benefit from its solutions?"
              answer="AstuteInfo caters to industries such as finance, retail, e-commerce, digital marketing, logistics, and healthcare. Businesses in these sectors benefit from AI-driven solutions that optimize operations, improve decision-making, and enhance customer engagement."
            />

            <FaqItem
              question="How does AstuteInfo ensure data security and regulatory compliance?"
              answer="AstuteInfo prioritizes data security through robust encryption, secure cloud solutions, and adherence to industry-standard security protocols. Our solutions comply with regulatory requirements, helping businesses meet legal standards and maintain customer trust."
            />

            <FaqItem
              question="What makes AstuteInfo's AI-powered payment switch technology unique?"
              answer="AstuteInfo's AI-powered payment switch technology delivers superior transaction speed, security, and efficiency. It enables seamless integration with various payment platforms, ensuring a smooth, secure, and optimized customer payment experience."
            />

            <FaqItem
              question="How can AstuteInfo solutions be integrated with existing systems and third-party tools?"
              answer="AstuteInfo offers flexible, cloud-agnostic solutions designed for easy integration with existing systems and third-party tools. Our team ensures a smooth transition with minimal disruption, maximizing the benefits of AI technology for your business."
            />

            <FaqItem
              question="What customization and scalability options does AstuteInfo offer?"
              answer="AstuteInfo provides fully customizable SaaS platforms, AI algorithms, and software solutions tailored to your business needs. Our technology is designed to scale with your growth, ensuring long-term adaptability and performance."
            />

            <FaqItem
              question="What kind of support and training does AstuteInfo provide?"
              answer="AstuteInfo offers 24/7 technical support, dedicated account management, and comprehensive training programs to ensure your team can effectively utilize our solutions. We also provide ongoing updates and optimization services."
            />

            <FaqItem
              question="How does AstuteInfo approach AI innovation and reliability?"
              answer="AstuteInfo stays ahead of industry trends through continuous research and development. We ensure the reliability of our AI models through rigorous testing, real-time monitoring, and regular updates to maintain accuracy, adaptability, and superior performance."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-gradient-to-r from-primary to-secondary text-white relative
          overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-32">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 transform rotate-180">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Still need help?
            </h2>
            <p className="text-white/90 mb-8 text-lg md:text-xl">
              Our dedicated support team is ready to assist you with any
              questions or issues you may have.
            </p>
            <div className="max-w-3/4 md:max-w-auto mx-auto flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="contactUs"
                className="bg-white text-primary text-base md:text-lg hover:bg-white/90 px-6 py-3
                  rounded-lg font-medium inline-flex items-center justify-center transition-all"
              >
                Contact Support Team
              </Link>
              <Link
                href=""
                className="bg-transparent border text-base md:text-lg border-white hover:bg-white/10
                  text-white px-6 py-3 rounded-lg font-medium inline-flex items-center
                  justify-center transition-all"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
