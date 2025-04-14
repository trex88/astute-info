"use client";

import { useRef, useState } from "react";
import ContactCard from "./ContactCard";
import TabButton from "./TabButton";
import {
  MapPin,
  Phone,
  Globe,
  MessageCircle,
  Headphones,
  Users,
} from "lucide-react";

// Data for Customer Support
const customerSupportRegions = [
  {
    name: "North America and Oceania",
    countries: [
      { name: "US & Canada", phone: "+1 800 555-0100", accessCode: "35921728" },
      { name: "Australia", phone: "+61 2 8046-9115", accessCode: "35921728" },
      { name: "New Zealand", phone: "+64 9 884 4767", accessCode: "35921728" },
    ],
  },
  {
    name: "Asia",
    countries: [
      { name: "Japan", phone: "+81 3 5050-5050", accessCode: "35921728" },
      { name: "Indonesia", phone: "+62 21 27507915", accessCode: "35921728" },
      { name: "Malaysia", phone: "+60 3 7680 7020", accessCode: "35921728" },
      { name: "Cambodia", phone: "+855 96 696 7653", accessCode: "35921728" },
    ],
  },
  {
    name: "Europe",
    countries: [
      {
        name: "United Kingdom",
        phone: "+44 330 390 2133",
        accessCode: "35921728",
      },
      {
        name: "Netherlands",
        phone: "+31 970 530 5188",
        accessCode: "35921728",
      },
      { name: "France", phone: "+33 1 59 42 45 61", accessCode: "35921728" },
      { name: "Germany", phone: "+49 221 98203501", accessCode: "35921728" },
      { name: "Austria", phone: "+43 1 2650399", accessCode: "35921728" },
      { name: "Belgium", phone: "+32 460 20 10 05", accessCode: "35921728" },
      { name: "Denmark", phone: "+45 32 71 41 93", accessCode: "35921728" },
      { name: "Finland", phone: "+358 9 31525860", accessCode: "35921728" },
      { name: "Italy", phone: "+39 06 4520 0354", accessCode: "35921728" },
      { name: "Spain", phone: "+34 872 50 51 67", accessCode: "35921728" },
      { name: "Luxembourg", phone: "+352 20 30 10 42", accessCode: "35921728" },
      { name: "Monaco", phone: "+377 93 25 10 47", accessCode: "35921728" },
      { name: "Norway", phone: "+47 21 93 73 93", accessCode: "35921728" },
      { name: "Portugal", phone: "+351 308 804 00 38", accessCode: "35921728" },
      { name: "Sweden", phone: "+46 70 143 00 97", accessCode: "35921728" },
      {
        name: "Switzerland",
        phone: "+41 44 513 30 05",
        accessCode: "35921728",
      },
    ],
  },
  {
    name: "Africa",
    countries: [
      {
        name: "South Africa",
        phone: "+27 10 109 5619",
        accessCode: "35921728",
      },
    ],
  },
  {
    name: "Middle East",
    countries: [
      { name: "Bahrain", phone: "+973 6500 0100", accessCode: "35921728" },
      {
        name: "United Arab Emirates",
        phone: "+971 600 521273",
        accessCode: "35921728",
      },
    ],
  },
  {
    name: "South America",
    countries: [
      { name: "Brazil", phone: "+55 11 3042-2865", accessCode: "35921728" },
      { name: "Chile", phone: "+56 44 890 9166", accessCode: "35921728" },
      { name: "Peru", phone: "+51 1 6429771", accessCode: "35921728" },
    ],
  },
];

// Data for Technical Support (using the same structure but with different access codes)
const technicalSupportRegions = [
  {
    name: "North America and Oceania",
    countries: [
      { name: "US & Canada", phone: "+1 800 555-0100", accessCode: "86782620" },
      { name: "Australia", phone: "+61 2 8046-9115", accessCode: "86782620" },
      { name: "New Zealand", phone: "+64 9 884 4767", accessCode: "86782620" },
    ],
  },
  {
    name: "Asia",
    countries: [
      { name: "Japan", phone: "+81 3 5050-5050", accessCode: "86782620" },
      { name: "Indonesia", phone: "+62 21 27507915", accessCode: "86782620" },
      { name: "Malaysia", phone: "+60 3 7680 7020", accessCode: "86782620" },
      { name: "Cambodia", phone: "+855 96 696 7653", accessCode: "86782620" },
    ],
  },
  {
    name: "Europe",
    countries: [
      {
        name: "United Kingdom",
        phone: "+44 330 390 2133",
        accessCode: "86782620",
      },
      {
        name: "Netherlands",
        phone: "+31 970 530 5188",
        accessCode: "86782620",
      },
      { name: "France", phone: "+33 1 59 42 45 61", accessCode: "86782620" },
      { name: "Germany", phone: "+49 221 98203501", accessCode: "86782620" },
      { name: "Austria", phone: "+43 1 2650399", accessCode: "86782620" },
      { name: "Belgium", phone: "+32 460 20 10 05", accessCode: "86782620" },
      { name: "Denmark", phone: "+45 32 71 41 93", accessCode: "86782620" },
      { name: "Finland", phone: "+358 9 31525860", accessCode: "86782620" },
      { name: "Italy", phone: "+39 06 4520 0354", accessCode: "86782620" },
      { name: "Spain", phone: "+34 872 50 51 67", accessCode: "86782620" },
      { name: "Luxembourg", phone: "+352 20 30 10 42", accessCode: "86782620" },
      { name: "Monaco", phone: "+377 93 25 10 47", accessCode: "86782620" },
      { name: "Norway", phone: "+47 21 93 73 93", accessCode: "86782620" },
      { name: "Portugal", phone: "+351 308 804 00 38", accessCode: "86782620" },
      { name: "Sweden", phone: "+46 70 143 00 97", accessCode: "86782620" },
      {
        name: "Switzerland",
        phone: "+41 44 513 30 05",
        accessCode: "86782620",
      },
    ],
  },
  {
    name: "Africa",
    countries: [
      {
        name: "South Africa",
        phone: "+27 10 109 5619",
        accessCode: "86782620",
      },
    ],
  },
  {
    name: "Middle East",
    countries: [
      { name: "Bahrain", phone: "+973 6500 0100", accessCode: "86782620" },
      {
        name: "United Arab Emirates",
        phone: "+971 600 521273",
        accessCode: "86782620",
      },
    ],
  },
  {
    name: "South America",
    countries: [
      { name: "Brazil", phone: "+55 11 3042-2865", accessCode: "86782620" },
      { name: "Chile", phone: "+56 44 890 9166", accessCode: "86782620" },
      { name: "Peru", phone: "+51 1 6429771", accessCode: "86782620" },
    ],
  },
];

// Data for Sales Department (using the same structure but with different access codes)
const salesDepartmentRegions = [
  {
    name: "North America and Oceania",
    countries: [
      { name: "US & Canada", phone: "+1 800 555-0100", accessCode: "69741978" },
      { name: "Australia", phone: "+61 2 8046-9115", accessCode: "69741978" },
      { name: "New Zealand", phone: "+64 9 884 4767", accessCode: "69741978" },
    ],
  },
  {
    name: "Asia",
    countries: [
      { name: "Japan", phone: "+81 3 5050-5050", accessCode: "69741978" },
      { name: "Indonesia", phone: "+62 21 27507915", accessCode: "69741978" },
      { name: "Malaysia", phone: "+60 3 7680 7020", accessCode: "69741978" },
      { name: "Cambodia", phone: "+855 96 696 7653", accessCode: "69741978" },
    ],
  },
  {
    name: "Europe",
    countries: [
      {
        name: "United Kingdom",
        phone: "+44 330 390 2133",
        accessCode: "69741978",
      },
      {
        name: "Netherlands",
        phone: "+31 970 530 5188",
        accessCode: "69741978",
      },
      { name: "France", phone: "+33 1 59 42 45 61", accessCode: "69741978" },
      { name: "Germany", phone: "+49 221 98203501", accessCode: "69741978" },
      { name: "Austria", phone: "+43 1 2650399", accessCode: "69741978" },
      { name: "Belgium", phone: "+32 460 20 10 05", accessCode: "69741978" },
      { name: "Denmark", phone: "+45 32 71 41 93", accessCode: "69741978" },
      { name: "Finland", phone: "+358 9 31525860", accessCode: "69741978" },
      { name: "Italy", phone: "+39 06 4520 0354", accessCode: "69741978" },
      { name: "Spain", phone: "+34 872 50 51 67", accessCode: "69741978" },
      { name: "Luxembourg", phone: "+352 20 30 10 42", accessCode: "69741978" },
      { name: "Monaco", phone: "+377 93 25 10 47", accessCode: "69741978" },
      { name: "Norway", phone: "+47 21 93 73 93", accessCode: "69741978" },
      { name: "Portugal", phone: "+351 308 804 00 38", accessCode: "69741978" },
      { name: "Sweden", phone: "+46 70 143 00 97", accessCode: "69741978" },
      {
        name: "Switzerland",
        phone: "+41 44 513 30 05",
        accessCode: "69741978",
      },
    ],
  },
  {
    name: "Africa",
    countries: [
      {
        name: "South Africa",
        phone: "+27 10 109 5619",
        accessCode: "69741978",
      },
    ],
  },
  {
    name: "Middle East",
    countries: [
      { name: "Bahrain", phone: "+973 6500 0100", accessCode: "69741978" },
      {
        name: "United Arab Emirates",
        phone: "+971 600 521273",
        accessCode: "69741978",
      },
    ],
  },
  {
    name: "South America",
    countries: [
      { name: "Brazil", phone: "+55 11 3042-2865", accessCode: "69741978" },
      { name: "Chile", phone: "+56 44 890 9166", accessCode: "69741978" },
      { name: "Peru", phone: "+51 1 6429771", accessCode: "69741978" },
    ],
  },
];

export default function ContactPage() {
  const customerSupportTab = useRef(null);
  const technicalSupportTab = useRef(null);
  const salesDepartmentTab = useRef(null);
  const [activeTab, setActiveTab] = useState("customer");

  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-12">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
        {/* Decorative floating circles */}
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-md z-0
            animate-pulse"
        ></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-md z-0
            animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* Decorative shapes */}
        <div
          className="absolute top-10 right-[10%] w-20 h-20 border-4 border-primary/20 rounded-lg
            rotate-12 z-0"
        ></div>
        <div
          className="absolute bottom-20 left-[15%] w-16 h-16 border-4 border-blue-400/20 rounded-full
            z-0"
        ></div>
        {/* Decorative dots pattern - top right */}
        <div className="absolute top-12 right-12 grid grid-cols-3 gap-2 z-0">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="size-2 rounded-full bg-primary/30"></div>
          ))}
        </div>
        {/* Decorative dots pattern - bottom left */}
        <div className="absolute bottom-12 left-12 grid grid-cols-3 gap-2 z-0">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="size-2 rounded-full bg-blue-400/30"></div>
          ))}
        </div>
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center relative z-10">
          {/* Decorative element above heading */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <div className="mx-4 text-primary font-medium text-base lg:text-lg">
              Contact Us
            </div>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary
              to-blue-700 bg-clip-text text-transparent"
          >
            Get in Touch
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-8">
            Our global support team is here to help you with any questions or
            concerns
          </p>

          {/* Decorative element below text */}
          <div
            className="w-20 h-1.5 bg-gradient-to-r from-primary/50 to-blue-400/50 rounded-full mx-auto
              mb-12"
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mx-4 md:mx-2">
            <ContactCard
              icon={<MessageCircle className="h-6 w-6 text-primary" />}
              title="Customer Support"
              description="For general inquiries and assistance with our customer support team."
              buttonText="Contact Customer Support"
            />
            <ContactCard
              icon={<Headphones className="h-6 w-6 text-primary" />}
              title="Technical Support"
              description="For technical issues or questions about our products, contact our technical support team."
              buttonText="Contact Technical Support"
            />
            <ContactCard
              icon={<Users className="h-6 w-6 text-primary" />}
              title="Sales Department"
              description="To inquire about our products or discuss partnership, please contact our sales department."
              buttonText="Contact Sales Department"
            />
          </div>
        </div>
      </section>

      {/* Global Support Center */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-4 sm:mx-auto">
          <div
            className="bg-gradient-to-r from-primary/10 to-blue-100/50 rounded-xl p-6 md:p-8 shadow-sm
              flex flex-col md:flex-row items-center justify-between"
          >
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Call our Global Support Center in the USA
              </h2>
              <p className="text-gray-600 mt-1 text-base md:text-lg">
                Available 24/7 for urgent assistance
              </p>
            </div>
            <a
              href="tel:+1518-554-6124"
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md
                transition-all text-primary font-medium text-base md:text-lg"
            >
              <Phone className="h-5 w-5" />
              +1 518-554-6124
            </a>
          </div>
        </div>
      </section>

      {/* Contact Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="border-b">
              <nav className="flex" aria-label="Tabs">
                <TabButton
                  ref={customerSupportTab}
                  name="customer"
                  target="customer-support"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  Customer Support
                </TabButton>

                <TabButton
                  ref={technicalSupportTab}
                  name="technical"
                  target="technical-support"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  Technical Support
                </TabButton>

                <TabButton
                  ref={salesDepartmentTab}
                  name="sales"
                  target="sales-department"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  Sales Department
                </TabButton>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Customer Support Tab */}
              <div id="customer-support" className="tab-content block">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Customer Support
                </h2>
                <RegionAccordion regions={customerSupportRegions} />
              </div>

              {/* Technical Support Tab */}
              <div id="technical-support" className="tab-content hidden">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Technical Support
                </h2>
                <RegionAccordion regions={technicalSupportRegions} />
              </div>

              {/* Sales Department Tab */}
              <div id="sales-department" className="tab-content hidden">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Sales Department
                </h2>
                <RegionAccordion regions={salesDepartmentRegions} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600">
              Fill out the form below and our team will get back to you as soon
              as possible
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form className="bg-white rounded-xl shadow-md p-8">
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

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium
                    rounded-md shadow-sm hover:shadow-md transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component for region accordions
function RegionAccordion({ regions }) {
  return (
    <div className="space-y-4">
      {regions.map((region, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100
              transition-colors"
            onClick={(e) => {
              const content = e.currentTarget.nextElementSibling;
              const icon = e.currentTarget.querySelector(".accordion-icon");

              if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.classList.remove("rotate-180");
              } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.classList.add("rotate-180");
              }
            }}
          >
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-800">{region.name}</span>
            </div>
            <svg
              className="accordion-icon w-5 h-5 text-gray-500 transform transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {region.countries.map((country, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <span className="font-medium text-gray-800">
                        {country.name}
                      </span>
                    </div>

                    <a
                      href={`tel:${country.phone}`}
                      className="flex items-center gap-2 text-primary hover:text-blue-700 transition-colors mb-1"
                    >
                      <Phone className="h-4 w-4" />
                      <span>{country.phone}</span>
                    </a>

                    {country.accessCode && (
                      <div className="text-sm text-gray-600 ml-6">
                        Access code: {country.accessCode}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
