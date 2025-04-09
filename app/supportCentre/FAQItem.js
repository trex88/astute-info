"use client";

import { useRef, useState } from "react";

function FAQItem({ question, children }) {
  const [open, setOpen] = useState(false);
  const paraRef = useRef(null);

  function handleClick() {
    open ? setOpen(false) : setOpen(true);
    // const sectionHeight = paraRef.current.scrollHeight;
    // paraRef.current.style.height = sectionHeight + "px";
  }

  return (
    <li className="text-2xl mt-10 px-4 py-3 ring-2 ring-[#5DADD2] rounded-2xl duration-250">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleClick}
      >
        <h3 className="font-bold tracking-wide">{question}</h3>
        <svg width="50" height="50">
          <rect
            x="13"
            y="24"
            rx="5"
            width="24"
            height="1"
            stroke="black"
            strokeWidth="5"
          />
          <rect
            className={`origin-center duration-250 ${open && "rotate-90 "}`}
            x="24.5"
            y="12"
            rx="5"
            width="1"
            height="25"
            stroke="black"
            strokeWidth="5"
          />
        </svg>
      </div>
      <p className={`tracking-wide ${open ? "block" : "hidden"}`} ref={paraRef}>
        {children}
      </p>
    </li>
  );
}

export default FAQItem;
