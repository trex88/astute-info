"use client";
import { LuCheck } from "react-icons/lu";

function Criteria({ children, color }) {
  return (
    <li className="flex items-start gap-2">
      <LuCheck className={`h-5 w-5 text-${color} shrink-0 mt-0.5`} />
      <span className="text-gray-700 text-sm lg:text-lg">{children}</span>
    </li>
  );
}

export default Criteria;
