"use client";

import { Globe, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

function AccordionItem({ region }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100
          hover:cursor-pointer transition-colors group"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-primary" />
          <span className="font-medium text-gray-800 text-base md:text-lg">
            {region.name}
          </span>
        </div>
        <LuChevronDown className={`${isOpen && "rotate-180"} duration-150`} />
      </button>
      <div
        className={`${isOpen ? "max-h-500" : "max-h-0"} overflow-hidden transition-all duration-300
          ease-in-out`}
      >
        <div className="px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {region.countries.map((country, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="size-4 md:size-5 text-gray-500" />
                  <span className="font-medium text-base md:text-lg text-gray-800">
                    {country.name}
                  </span>
                </div>

                <a
                  href={`tel:${country.phone}`}
                  className="flex items-center gap-2 text-primary text-base md:text-lg hover:text-blue-500
                    transition-colors mb-1"
                >
                  <Phone className="size-4 md:size-5" />
                  <span>{country.phone}</span>
                </a>

                {country.accessCode && (
                  <div className="text-base md:text-lg text-gray-600 ml-6">
                    Access code: {country.accessCode}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AccordionItem;
