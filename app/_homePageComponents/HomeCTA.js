import { ArrowRight, CheckCircle, Send } from "lucide-react";
import Link from "next/link";

function HomeCTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="ctaGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#5dadd2" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#6ee7b7" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#5dadd2" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 C25,40 75,40 100,0 L100,100 L0,100 Z"
              fill="url(#ctaGradient)"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full text-sm
                  font-medium text-primary mb-4"
              >
                Get Started Today
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join the hundreds of organizations that are already leveraging
                our AI solutions to drive efficiency, reduce costs, and gain a
                competitive edge.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Personalized Solutions
                    </h3>
                    <p className="text-gray-600">
                      Tailored to your specific business needs and objectives
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Expert Support</h3>
                    <p className="text-gray-600">
                      Dedicated team of AI specialists to guide you every step
                      of the way
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Proven Results</h3>
                    <p className="text-gray-600">
                      Demonstrated ROI and success stories across various
                      industries
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="allServices"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary
                    to-[#6ee7b7] text-white rounded-full font-medium hover:shadow-lg
                    hover:shadow-primary/20 transition-all duration-300 transform
                    hover:-translate-y-1 group"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 duration-300" />
                </Link>
                <Link
                  href="contactUs#sales"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border
                    border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50
                    transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                          focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                          focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                          focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                          focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                        focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-[#6ee7b7] text-white py-3 px-6
                      rounded-md font-medium hover:shadow-lg transition-all duration-300 flex
                      items-center justify-center hover:cursor-pointer group"
                  >
                    Submit{" "}
                    <Send
                      className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                        group-active:translate-0 duration-300"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;
