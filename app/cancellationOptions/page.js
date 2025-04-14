"use client";

import {
  LucideAlertCircle,
  LucideCheckCircle,
  LucideHelpCircle,
} from "lucide-react";
import {
  LuArrowRight,
  LuCalendar,
  LuPhone,
  LuUser,
  LuX,
  LuChevronDown,
} from "react-icons/lu";
import Link from "next/link";
import { useRef } from "react";
import AccordionItem from "../_accordion/AccordionItem";

function Page() {
  const policiesSectionRef = useRef(null);
  const phoneSectionRef = useRef(null);
  const accountSectionRef = useRef(null);
  const formSectionRef = useRef(null);

  function moveToSection(sectionRef) {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-8 lg:h-10 w-1 bg-red-500 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Cancellation Center
            </h1>
          </div>
          <p className="text-3xs lg:text-lg text-gray-600 ml-10 border-l-2 border-gray-200 pl-4">
            We understand that plans change. This page will guide you through
            our cancellation process.
          </p>
        </div>

        {/* Two-column layout  */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Sidebar style */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-40">
              <div className="bg-gray-800 text-white p-6">
                <h2 className="text-xl lg:text-2xl font-bold mb-2">
                  Quick Navigation
                </h2>
                <p className="text-gray-300 text-sm lg:text-lg">
                  Jump to any section of this page
                </p>
              </div>
              <div className="divide-y divide-gray-100">
                <button
                  type="button"
                  className="p-4 w-[100%] hover:cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => moveToSection(policiesSectionRef)}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <LucideAlertCircle className="size-5 lg:size-6 text-red-500" />
                    </div>
                    <span className="font-medium text-3xs lg:text-lg">
                      Cancellation Policies
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  className="p-4 w-[100%] hover:cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => moveToSection(phoneSectionRef)}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <LuPhone className="size-5 lg:size-6 text-blue-500" />
                    </div>
                    <span className="font-medium text-3xs lg:text-lg">
                      Cancel by Phone
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  className="p-4 w-[100%] hover:cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => moveToSection(accountSectionRef)}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <LuUser className="size-5 lg:size-6 text-green-500" />
                    </div>
                    <span className="font-medium text-3xs lg:text-lg">
                      Cancel via Account
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  className="p-4 w-[100%] hover:cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => moveToSection(formSectionRef)}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <LucideHelpCircle className="size-5 lg:size-6 text-purple-500" />
                    </div>
                    <span className="font-medium text-3xs lg:text-lg">
                      Cancellation Form
                    </span>
                  </div>
                </button>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <h3 className="font-medium text-3xs lg:text-lg text-gray-900 mb-2">
                  Need immediate help?
                </h3>
                <p className="text-gray-600 text-sm lg:text-lg mb-4">
                  Our support team is available 24/7 to assist you.
                </p>
                <Link
                  href="contactUs"
                  className="inline-flex items-center justify-center w-full bg-gray-800 text-white text-3xs
                    lg:text-lg px-4 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Policy Cards */}
            <section className="scroll-mt-33" ref={policiesSectionRef}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 p-2 rounded-full">
                  <LucideAlertCircle className="size-5 lg:size-6 text-red-500" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Cancellation Policies
                </h2>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100 relative">
                    <div
                      className="absolute top-0 right-0 bg-green-400 text-white text-xs lg:text-sm font-bold px-3
                        py-1 rounded-bl-lg"
                    >
                      RECOMMENDED
                    </div>
                    <div>
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <LucideCheckCircle className="size-6 lg:size-7 text-green-500" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-2">
                        24+ Hours Before Service
                      </h3>
                      <div className="h-1 w-16 lg:w-18 bg-green-500 rounded-full mb-4"></div>
                      <p className="text-gray-600 text-3xs lg:text-lg mb-4">
                        Cancellations made 24 hours or more before the scheduled
                        service time.
                      </p>
                      <div
                        className="bg-green-50 border border-green-100 rounded-lg p-4 flex items-center
                          justify-between"
                      >
                        <span className="font-bold text-3xs lg:text-lg text-green-700">
                          No cancellation fee
                        </span>
                        <LucideCheckCircle className="size-5 lg:size-6 text-green-500" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                      <LuX className="size-6 lg:size-7 text-red-500" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2">
                      Less than 24 Hours Before
                    </h3>
                    <div className="h-1 w-16 lg:w-18 bg-red-500 rounded-full mb-4"></div>
                    <p className="text-gray-600text-3xs lg:text-lg mb-4">
                      Cancellations made less than 24 hours before the scheduled
                      service time.
                    </p>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-center justify-between">
                      <span className="font-bold text-3xs lg:text-lg text-red-700">
                        Full booking amount charged
                      </span>
                      <LucideAlertCircle className="size-5 lg:size-6 text-red-500" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cancel by Phone - Unique card design */}
            <section className="scroll-mt-33 mt-20" ref={phoneSectionRef}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-full">
                  <LuPhone className="size-5 lg:size-6 text-blue-500" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Cancel by Phone
                </h2>
              </div>

              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-md text-white
                  overflow-hidden"
              >
                <div className="p-6 md:p-8 relative">
                  <div className="absolute top-0 right-0 opacity-10">
                    <LuPhone className="size-32 -mt-8 -mr-8" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3">
                    Give us a call!
                  </h3>
                  <p className="text-3xs lg:text-lg text-blue-100 mb-6 max-w-lg">
                    Our customer service team is available to assist you with
                    cancellations over the phone. {`We're`} here to help make
                    the process as smooth as possible.
                  </p>
                  <Link
                    href="contactUs"
                    className="inline-flex items-center bg-white text-3xs lg:text-lg text-blue-600 px-4 py-2
                      rounded-md font-medium hover:bg-blue-50 transition-colors"
                  >
                    Find your local support number
                    <LuArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Cancel via Account - Unique step design */}
            <section className="scroll-mt-33 mt-20" ref={accountSectionRef}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-full">
                  <LuUser className="size-5 lg:size-6 text-green-500" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Cancel via Account
                </h2>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <p className="text-3xs lg:text-lg text-gray-600 mb-8">
                  The fastest way to cancel your booking is through your online
                  account. Follow these simple steps:
                </p>

                <div className="relative">
                  {/* Vertical line connecting steps */}
                  <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-200"></div>

                  <div className="space-y-8">
                    <div className="flex items-start gap-6 relative z-10">
                      <div
                        className="bg-green-500 text-3xs lg:text-lg size-8 lg:size-9 rounded-full flex items-center
                          justify-center shrink-0 text-white font-bold"
                      >
                        1
                      </div>
                      <div>
                        <h4 className="text-lg lg:text-xl font-bold mb-1">
                          Login to your account
                        </h4>
                        <p className="text-3xs text-gray-600">
                          Access your AstuteInfo dashboard using your email and
                          password
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 relative z-10">
                      <div
                        className="bg-green-500 text-3xs lg:text-lg size-8 lg:size-9 rounded-full flex items-center
                          justify-center shrink-0 text-white font-bold"
                      >
                        2
                      </div>
                      <div>
                        <h4 className="text-lg lg:text-xl font-bold mb-1">
                          {`Navigate to "My Bookings"`}
                        </h4>
                        <p className="text-3xs text-gray-600">
                          Find and select the booking you wish to cancel from
                          your list of scheduled services
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 relative z-10">
                      <div
                        className="bg-green-500 text-3xs lg:text-lg size-8 lg:size-9 rounded-full flex items-center
                          justify-center shrink-0 text-white font-bold"
                      >
                        3
                      </div>
                      <div>
                        <h4 className="text-lg lg:text-xl font-bold mb-1">
                          {` Select "Cancel Booking"`}
                        </h4>
                        <p className="text-3xs text-gray-600">
                          Click the cancellation button and confirm your
                          decision to complete the process
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Link
                    href=""
                    className="inline-flex items-center justify-center bg-green-500 text-3xs lg:text-lg
                      text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition-colors"
                  >
                    Login to your account
                    <LuArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Cancellation Form - Unique design */}
            <section className="scroll-mt-33 mt-20" ref={formSectionRef}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-full">
                  <LucideHelpCircle className="size-5 lg:size-6 text-purple-500" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Cancellation Form
                </h2>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-purple-600 p-6 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold">
                    Request Cancellation via Form
                  </h3>
                  <p className="text-3xs lg:text-lg text-purple-200">
                    If you prefer, you can submit your cancellation request
                    using the form below.
                  </p>
                </div>

                <form className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm lg:text-lg font-medium text-gray-700 mb-1"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none
                          focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm lg:text-lg font-medium text-gray-700 mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none
                          focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="bookingId"
                        className="block text-sm lg:text-lg font-medium text-gray-700 mb-1"
                      >
                        Booking ID (if available)
                      </label>
                      <input
                        type="text"
                        id="bookingId"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none
                          focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="serviceDate"
                        className="block text-sm lg:text-lg font-medium text-gray-700 mb-1"
                      >
                        Service Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="serviceDate"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                        <LuCalendar
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400
                            pointer-events-none size-5"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm lg:text-lg font-medium text-gray-700 mb-1"
                    >
                      Reason for Cancellation{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none
                        focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Please provide details about your cancellation request"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 block text-sm lg:text-lg text-gray-700"
                    >
                      I understand and agree to the cancellation policy terms
                    </label>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3
                        rounded-md font-medium hover:cursor-pointer hover:bg-purple-700
                        transition-colors"
                    >
                      Submit Cancellation Request
                    </button>
                  </div>
                </form>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-12">
              <div className="bg-gray-100 rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>

                <AccordionItem title="Will I receive a refund for my cancellation?">
                  If you cancel more than 24 hours before your scheduled
                  service, you will receive a full refund. Cancellations made
                  less than 24 hours before the service will be charged the full
                  booking amount.
                </AccordionItem>

                <AccordionItem title="How long does it take to process a refund?">
                  Refunds are typically processed within 3-5 business days,
                  although it may take longer depending on your payment method
                  and financial institution.
                </AccordionItem>

                <AccordionItem title="Can I reschedule instead of cancelling?">
                  Yes, you can reschedule your service instead of cancelling.
                  Please contact our customer service team or log in to your
                  account to reschedule your booking.
                </AccordionItem>

                <AccordionItem title="What if I need to cancel multiple bookings?">
                  If you need to cancel multiple bookings, you can either cancel
                  them individually through your account or contact our customer
                  service team for assistance with bulk cancellations.
                </AccordionItem>

                <AccordionItem title="Is there a limit to how many times I can reschedule?">
                  You can reschedule a booking up to 3 times. After that, we
                  recommend cancelling the current booking and creating a new
                  one when you have a more definite schedule.
                </AccordionItem>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
