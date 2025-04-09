import {
  LucideCheckCircle,
  LucideCheckSquare,
  LucideHelpCircle,
} from "lucide-react";
import Link from "next/link";
import {
  LuArrowRight,
  LuBriefcase,
  LuCalendar,
  LuChevronRight,
  LuClock,
  LuClock3,
  LuLaptop,
  LuMapPin,
  LuMessageSquare,
  LuSearch,
  LuShield,
  LuSparkles,
  LuStar,
  LuUsers,
  LuZap,
} from "react-icons/lu";
import {
  FaCreditCard,
  FaPaypal,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa6";
import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
import Step4 from "./Step4.js";
import Step5 from "./Step5.js";
import Step6 from "./Step6.js";
import Step7 from "./Step7.js";
import Step8 from "./Step8.js";

function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section
        className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 py-20
          overflow-hidden mb-14"
      >
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg
              className="h-full w-full"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 60L60 0"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Soft Gradient Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>
          </div>
        </div>

        <div className="relative mx-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-white">
              <div
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20
                  px-4 py-2 rounded-full text-sm lg:text-base xl:text-lg font-medium mb-6"
              >
                <span className="bg-primary size-2 rounded-full mr-2"></span>
                Simple & Intuitive Booking Process
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Book Your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">AstuteInfo</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/40 rounded-lg -z-0"></span>
                </span>{" "}
                Service in Minutes
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl">
                Follow our streamlined step-by-step guide to book professional
                AstuteInfo services quickly and easily, with real-time
                availability and instant confirmation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="#booking-steps"
                  className="group bg-primary text-white text-base lg:text-lg hover:bg-primary/90 px-6 py-3
                    rounded-md font-medium transition-all duration-300 flex items-center
                    justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  View Booking Steps
                  <LuChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#"
                  className="group bg-white/10 hover:bg-white/20 border border-white/40 text-white text-base
                    lg:text-lg px-6 py-3 rounded-md font-medium transition-all duration-300 flex
                    items-center justify-center gap-2 backdrop-blur-sm hover:-translate-y-1"
                >
                  Browse Services
                  <LuSearch className="size-4 lg:size-5 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Content - Booking Preview Card */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 size-12 rounded-lg bg-primary/20 rotate-12"></div>
                <div className="absolute -bottom-6 -right-6 size-12 rounded-lg bg-white/10 -rotate-12"></div>

                {/* Feature Highlights */}
                <div
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden
                    shadow-2xl relative z-10 p-6"
                >
                  <h3 className="text-white text-xl xl:text-2xl font-bold mb-6 flex items-center gap-2">
                    <LuSparkles className="size-5 xl:size-6 text-primary" />
                    Why Book With AstuteInfo
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Feature 1 */}
                    <div
                      className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10
                        transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                          <LuClock3 className="size-6 xl:size-7 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base xl:text-lg text-white font-bold mb-1">
                            Quick Booking
                          </h4>
                          <p className="text-gray-300 text-sm lg:text-base xl:text-lg">
                            Complete your booking in under 2 minutes
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div
                      className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10
                        transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-secondary/20 p-2 rounded-lg group-hover:bg-secondary/30 transition-colors">
                          <LucideCheckSquare className="size-6 xl:size-7 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base xl:text-lg text-white font-bold mb-1">
                            Verified Experts
                          </h4>
                          <p className="text-gray-300 text-sm lg:text-base xl:text-lg">
                            All service providers are thoroughly vetted
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div
                      className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10
                        transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                          <LuShield className="size-6 xl:size-7 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base xl:text-lg text-white font-bold mb-1">
                            Secure Process
                          </h4>
                          <p className="text-gray-300 text-sm lg:text-base xl:text-lg">
                            End-to-end encrypted booking system
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Feature 4 */}
                    <div
                      className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10
                        transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-secondary/20 p-2 rounded-lg group-hover:bg-secondary/30 transition-colors">
                          <LuLaptop className="size-6 xl:size-7 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base xl:text-lg text-white font-bold mb-1">
                            Digital Dashboard
                          </h4>
                          <p className="text-gray-300 text-sm lg:text-base xl:text-lg">
                            Manage all your bookings in one place
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated Illustration */}
                  <div className="mt-6 relative">
                    <div
                      className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-4 border
                        border-white/10"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                            <LuCalendar className="size-5 xl:size-6 text-white" />
                            <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                          <div>
                            <p className="text-white font-medium text-base xl:text-lg">
                              Ready to get started?
                            </p>
                            <p className="text-gray-300 text-sm lg:text-base xl:text-lg">
                              Book your first service today
                            </p>
                          </div>
                        </div>
                        <Link
                          href=""
                          className="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-md text-sm
                            lg:text-base font-medium transition-colors flex items-center gap-1"
                        >
                          Start Now
                          <LuArrowRight className="size-3 lg:size-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Animated Elements */}
                    <div className="absolute -top-2 -right-2 h-4 w-4 bg-primary/30 rounded-full animate-ping"></div>
                    <div
                      className="absolute -bottom-2 -left-2 h-4 w-4 bg-secondary/30 rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl xl:max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-30">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Booking Your AstuteInfo Service
            </h2>
            <p className="text-gray-600 text-base lg:text-lg xl:text-xl max-w-2xl mx-6 md:mx-auto">
              Our platform makes it easy to find and book the perfect AstuteInfo
              service for your needs. Follow these simple steps to get started.
            </p>
          </div>

          {/* Step 1 */}
          <div className="mb-25 md:mb-30 xl:mb-40 mx-0 md:mx-5">
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
              <div className="md:w-1/2">
                <Step1 />
              </div>
              <div className="md:w-1/2 mx-6 md:mx-0">
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6">
                  Explore our wide range of AstuteInfo services available on our
                  platform. You can browse services by category, location, or
                  specific keywords to find exactly what you need.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="text-base lg:text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <LucideHelpCircle className="size-4 lg:size-5 text-primary" />{" "}
                    Pro Tip
                  </h4>
                  <p className="text-gray-600 text-sm lg:text-base xl:text-lg">
                    Use our advanced filters to narrow down your search based on
                    price range, ratings, and availability to find the perfect
                    match for your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-25 md:mb-30 xl:mb-40 mx-0 md:mx-5">
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-10 items-center">
              <div className="md:w-1/2">
                <Step2 />
              </div>
              <div className="md:w-1/2 mx-6 md:mx-0">
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6">
                  Once you find the AstuteInfo that meets your needs, click on
                  it to view more details. {`You'll`} see information about the
                  service, including pricing, duration, and service provider
                  credentials.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <LucideCheckCircle className="size-4 lg:size-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-base lg:text-lg font-medium text-gray-900">
                        Detailed descriptions
                      </span>
                      <p className="text-sm lg:text-base xl:text-lg text-gray-600">
                        Comprehensive information about {`what's`} included
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <LucideCheckCircle className="size-4 lg:size-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-base lg:text-lg font-medium text-gray-900">
                        Provider profiles
                      </span>
                      <p className="text-sm lg:text-base xl:text-lg text-gray-600">
                        View ratings, reviews, and expertise
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <LucideCheckCircle className="size-4 lg:size-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-base lg:text-lg font-medium text-gray-900">
                        Transparent pricing
                      </span>
                      <p className="text-sm lg:text-base xl:text-lg text-gray-600">
                        Clear breakdown of all costs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-25 md:mb-30 xl:mb-40 mx-0 md:mx-5">
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
              <div className="md:w-1/2">
                <Step3 />
              </div>
              <div className="md:w-1/2 mx-6 md:mx-0">
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6">
                  Before booking, check the availability of the service for your
                  desired date and time. Some services may have specific
                  availability windows, so make sure your schedule aligns.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start gap-3">
                  <LuCalendar className="size-5 lg:size-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm lg:text-base xl:text-lg">
                    Our interactive calendar shows real-time availability,
                    allowing you to select from available time slots. Green
                    slots indicate available times, while gray slots are already
                    booked.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-25 md:mb-30 xl:mb-40 mx-0 md:mx-5">
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-10 items-center">
              <div className="md:w-1/2">
                <Step4 />
              </div>
              <div className="md:w-1/2 mx-6 md:mx-0">
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6">
                  Once {`you've`} confirmed availability, proceed to book the
                  AstuteInfo. {`You'll`} be prompted to provide details such as
                  the date, time, and any special requests or instructions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                    <LuCalendar className="size-5 lg:size-6 text-primary" />
                    <span className="text-base lg:text-lg text-gray-700">
                      Select your preferred date
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                    <LuClock className="size-5 lg:size-6 text-primary" />
                    <span className="text-base lg:text-lg text-gray-700">
                      Choose an available time slot
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                    <LuMapPin className="size-5 lg:size-6 text-primary" />
                    <span className="text-base lg:text-lg text-gray-700">
                      Confirm service location
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-25 md:mb-30 xl:mb-40 mx-0 md:mx-5">
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
              <div className="md:w-1/2">
                <Step5 />
              </div>
              <div className="md:w-1/2 mx-6 md:mx-0">
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6">
                  Complete the payment process to confirm your booking. We offer
                  secure payment options for your convenience, including credit
                  cards, digital wallets, and more.
                </p>
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h4 className="text-base lg:text-lg font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <LuShield className="size-4 lg:size-5 text-primary" />{" "}
                    Secure Payment Options
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-gray-600 text-sm lg:text-base xl:text-lg">
                      <FaCreditCard className="h-5 w-10" />
                      Credit/Debit Cards
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm lg:text-base xl:text-lg">
                      <FaPaypal className="h-5 w-10" />
                      PayPal
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm lg:text-base xl:text-lg">
                      <FaApplePay className="h-6 w-10" />
                      Apple Pay
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm lg:text-base xl:text-lg">
                      <FaGooglePay className="h-6 w-10" />
                      Google Pay
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="mb-25 md:mb-30 xl:mb-40 mx-0 md:mx-5">
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-10 items-center">
              <div className="md:w-1/2">
                <Step6 />
              </div>
              <div className="md:w-1/2 mx-6 md:mx-0">
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6">
                  After successfully booking the AstuteInfo, {`you'll`} receive
                  a confirmation email with all the details of your booking. You
                  can also view your bookings in your account on our platform.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <LucideCheckCircle className="size-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-base lg:text-lg text-gray-900 mb-1">
                      Confirmation Includes:
                    </h4>
                    <ul className="text-sm lg:text-base xl:text-lg text-gray-600 space-y-1">
                      <li>• Booking reference number</li>
                      <li>• Date and time of service</li>
                      <li>• Service provider details</li>
                      <li>• Location information</li>
                      <li>• Payment receipt</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="mb-25 md:mb-30 xl:mb-40 mx-0 md:mx-5">
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
              <div className="md:w-1/2">
                <Step7 />
              </div>
              <div className="md:w-1/2 mx-6 md:mx-0">
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6">
                  On the day of the service, be ready at the designated location
                  and time. Our service provider will arrive and provide the
                  AstuteInfo as booked.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <LuZap className="size-4 lg:size-5 text-base lg:text-lg text-primary" />{" "}
                    What to Expect
                  </h4>
                  <p className="text-gray-600 text-sm lg:text-base xl:text-lg">
                    Our service providers are professionals who will arrive on
                    time and deliver the service according to the specifications
                    in your booking. {`They'll`} bring all necessary equipment
                    and materials needed for the service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 8 */}
          <div className="mb-25 md:mb-30 xl:mb-40 mx-0 md:mx-5">
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-10 items-center">
              <div className="md:w-1/2">
                <Step8 />
              </div>
              <div className="md:w-1/2 mx-6 md:mx-0">
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6">
                  Once the service is completed, we appreciate your feedback!
                  You can leave a review and rating for the service provider
                  based on your experience.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <LuStar className="h-5 w-5 text-yellow-400" />
                    <LuStar className="h-5 w-5 text-yellow-400" />
                    <LuStar className="h-5 w-5 text-yellow-400" />
                    <LuStar className="h-5 w-5 text-yellow-400" />
                    <LuStar className="h-5 w-5 text-yellow-400" />
                    <span className="text-base lg:text-lg text-gray-600 ml-2">
                      Rate your experience
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LuMessageSquare className="size-5 lg:size-6 text-primary" />
                    <span className="text-base lg:text-lg text-gray-600">
                      Share your thoughts in a written review
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LuUsers className="size-5 lg:size-6 text-primary" />
                    <span className="text-base lg:text-lg text-gray-600">
                      Help other users make informed decisions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
              Ready to Book Your AstuteInfo Service?
            </h3>
            <p className="text-base lg:text-lg xl:text-xl text-gray-600 text-center mb-6">
              {`That's`} it! {`You're`} now ready to book an AstuteInfo with
              ease on our platform. If you have any questions or need
              assistance, feel free to contact our customer support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="text-base lg:text-lg bg-primary text-white hover:bg-primary/90 px-6 py-3
                  rounded-md font-medium transition-colors flex items-center justify-center gap-2"
              >
                Browse Services Now <LuArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="contactUs"
                className="text-base lg:text-lg bg-white border border-gray-300 text-gray-700
                  hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition-colors flex
                  items-center justify-center gap-2"
              >
                Contact Support <LucideHelpCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div>
          <div className="max-w-4xl lg:max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base lg:text-lg xl:text-xl text-gray-600">
                Have questions about booking an AstuteInfo service? Find answers
                to common questions below.
              </p>
            </div>

            <div className="space-y-6 md:space-y-4 mx-6 md:mx-0">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg lg:text-xl mb-2">
                  What happens if I need to cancel my booking?
                </h3>
                <p className="text-base lg:text-lg xl:text-xl text-gray-600">
                  You can cancel your booking through your account up to 24
                  hours before the scheduled service time for a full refund.
                  Cancellations made less than 24 hours in advance may be
                  subject to a cancellation fee. Visit our cancellation policy
                  page for more details.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg lg:text-xl mb-2">
                  Can I reschedule my service?
                </h3>
                <p className="text-base lg:text-lg xl:text-xl text-gray-600">
                  Yes, you can reschedule your service through your account up
                  to 24 hours before the scheduled time. Simply go to your
                  bookings, select the service you want to reschedule, and
                  choose a new available time slot.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg lg:text-xl mb-2">
                  How do I know if a service provider is qualified?
                </h3>
                <p className="text-base lg:text-lg xl:text-xl text-gray-600">
                  All service providers on our platform undergo a thorough
                  vetting process. You can view their qualifications,
                  certifications, and customer reviews on their profile before
                  booking. We only partner with professionals who meet our high
                  standards.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg lg:text-xl mb-2">
                  What if {`I'm`} not satisfied with the service?
                </h3>
                <p className="text-base lg:text-lg xl:text-xl text-gray-600">
                  Your satisfaction is our priority. If {`you're`} not
                  completely satisfied with the service, please contact our
                  customer support team within 48 hours of service completion.{" "}
                  {`We'll`} work with you to resolve any issues and ensure your
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
