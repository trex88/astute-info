"use client";

import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

function AccordionItem({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
      <button
        type="button"
        className="w-full text-3xs lg:text-lg flex items-center justify-between p-4 font-medium
          ease-in-out hover:cursor-pointer focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <LuChevronDown
          className={`h-5 w-5 duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={` duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!isOpen}
      >
        <div className="p-4 border-t border-gray-100 text-gray-600 text-3xs lg:text-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
