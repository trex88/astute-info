"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        className={`w-full text-left p-4 flex justify-between items-center hover:cursor-pointer
          focus:outline-none ${isOpen ? "bg-primary/5" : "bg-white"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-base md:text-lg">{question}</span>
        {isOpen ? (
          <Minus className="h-5 w-5 text-primary flex-shrink-0" />
        ) : (
          <Plus className="h-5 w-5 text-primary flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-4 bg-gray-50 text-gray-700 text-base md:text-lg">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
