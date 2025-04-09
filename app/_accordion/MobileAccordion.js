"use client";

import Link from "next/link";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

function MobileAccordion({ title, icon, items, removeMobileMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex items-center justify-between w-full py-2 text-left hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
          <span className="font-medium">{title}</span>
        </div>
        <LuChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`mt-2 pl-10 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0" }`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block py-1.5 text-gray-600 hover:text-primary transition-colors"
            onClick={removeMobileMenu}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileAccordion;
