"use client";

import { useState } from "react";
import {
  Clock,
  DollarSign,
  FileText,
  Send,
  AlertCircle,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { LuUserRoundPen } from "react-icons/lu";

export default function TrialForm({
  serviceName,
  serviceType = "security",
  icon,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    productDescription: "",
    budget: "",
    timeline: "",
    requirements: "",
    purpose: "",
    otherRequests: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        productDescription: "",
        budget: "",
        timeline: "",
        requirements: "",
        purpose: "",
        otherRequests: "",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div
        className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6
          lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-xl rounded-xl p-8 md:p-10">
            <div className="text-center">
              <div
                className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100
                  mb-6"
              >
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Registration Successful!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for registering for our {serviceName} trial. Our team
                will review your information and contact you shortly.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-medium text-gray-900 mb-2">
                  What happens next?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <span className="text-gray-600">
                      Our team will review your registration details
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <span className="text-gray-600">
                      {`You'll receive a confirmation email within 24 hours`}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <span className="text-gray-600">
                      A product specialist will contact you to set up your trial
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent
                    text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90
                    transition-colors"
                >
                  Return to Home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300
                    text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50
                    transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6
        lg:px-8"
    >
      <div className="max-w-4xl xl:max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10
              mb-4"
          >
            {icon}
          </div>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-2">
            {serviceName}
          </h1>
          <p className="text-xl xl:text-2xl text-gray-600">
            Register for a trial of our advanced {serviceType} solution
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-primary/90 to-primary text-white p-6 md:p-8">
            <h2 className="text-2xl xl:text-3xl font-bold mb-2">
              Trial Registration
            </h2>
            <p className="opacity-90 text-base md:text-lg">
              Complete the form below to register for a 30-day trial of our{" "}
              {serviceName}. Our team will contact you to set up your trial
              environment.
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Personal Information Section */}
              <div className="md:col-span-2">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-primary/10 p-1.5 rounded-full mr-2">
                    <LuUserRoundPen className="size-5 lg:size-6 text-primary" />
                  </span>
                  Personal Information
                </h3>
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-base xl:text-lg font-medium text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.fullName
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                      transition-colors`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base xl:text-lg font-medium text-gray-700 mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.email
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                      transition-colors`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-base xl:text-lg font-medium text-gray-700 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.phone
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                      transition-colors`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Company/Organization */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-base xl:text-lg font-medium text-gray-700 mb-1"
                >
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                    focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your company name"
                />
              </div>

              {/* Requirements Section */}
              <div className="md:col-span-2 mt-6">
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-primary/10 p-1.5 rounded-full mr-2">
                      <FileText className="size-5 lg:size-6 text-primary" />
                    </span>
                    Requirements Information
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-6 italic">
                    To help us understand your needs and provide the best
                    possible solution, please provide the following details:
                  </p>
                </div>
              </div>

              {/* Product/Service Description */}
              <div className="md:col-span-2">
                <label
                  htmlFor="productDescription"
                  className="block text-base xl:text-lg font-medium text-gray-700 mb-1"
                >
                  Product/Service
                </label>
                <textarea
                  id="productDescription"
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                    focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="A comprehensive description of the product or service you are seeking"
                ></textarea>
              </div>

              {/* Budget */}
              <div className="md:col-span-2 lg:col-span-1">
                <label
                  htmlFor="budget"
                  className="block text-base xl:text-lg font-medium text-gray-700 mb-1 flex items-center"
                >
                  <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                  Budget
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                    focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your estimated budget range or specific financial constraints"
                />
              </div>

              {/* Timeline */}
              <div className="md:col-span-2 lg:col-span-1">
                <label
                  htmlFor="timeline"
                  className="block text-base xl:text-lg font-medium text-gray-700 mb-1 flex items-center"
                >
                  <Clock className="h-4 w-4 text-gray-400 mr-1" />
                  Timeline
                </label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                    focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your desired project completion date or timeframe"
                />
              </div>

              {/* Specific Requirements */}
              <div className="md:col-span-2">
                <label
                  htmlFor="requirements"
                  className="block text-base xl:text-lg font-medium text-gray-700 mb-1"
                >
                  Specific Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                    focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Any unique features, functionalities, or specifications you require"
                ></textarea>
              </div>

              {/* Purpose */}
              <div className="md:col-span-2">
                <label
                  htmlFor="purpose"
                  className="block text-base xl:text-lg font-medium text-gray-700 mb-1"
                >
                  Purpose
                </label>
                <textarea
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                    focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="The intended use of the product or service"
                ></textarea>
              </div>

              {/* Other Requests/Messages */}
              <div className="md:col-span-2">
                <label
                  htmlFor="otherRequests"
                  className="block text-base xl:text-lg font-medium text-gray-700 mb-1"
                >
                  Other Requests/Messages
                </label>
                <textarea
                  id="otherRequests"
                  name="otherRequests"
                  value={formData.otherRequests}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                    focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Any additional information or requests you'd like to share"
                ></textarea>
              </div>
            </div>

            {/* Form Actions */}
            <div
              className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4
                border-t border-gray-200 pt-6"
            >
              <p className="text-sm sm:text-base text-gray-500">
                By submitting this form, you agree to our{" "}
                <Link href="#" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center px-6 py-3 border border-transparent
                  text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90
                  hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-primary transition-colors
                  ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Submit Registration <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Form Footer */}
          <div className="bg-gray-50 p-6 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              {` Need additional support? We're here to help!`}{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:underline"
              >
                Contact Customer Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
