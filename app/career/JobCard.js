"use client";

import {
  LuArrowRight,
  LuHeadset,
  LuMail,
  LuMapPin,
  LuBriefcase,
} from "react-icons/lu";
import Badge from "../_components/Badge";
import Link from "next/link";
import Criteria from "./Criteria";
import { createContext, useEffect, useState } from "react";

function JobCard({ jobInfo }) {
  const {
    contract,
    department,
    location,
    role,
    description,
    responsibility: { res1, res2, res3 },
    requirements: { req1, req2, req3 },
  } = jobInfo;

  const [color, setColor] = useState("");

  const JobContext = createContext();

  useEffect(
    function () {
      if (department.toLowerCase() === "customer service") setColor("primary");
      if (department.toLowerCase() === "customer support")
        setColor("secondary");
      if (department.toLowerCase() === "management") setColor("accent");
    },
    [department],
  );

  return (
    <div
      className="group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100
        hover:shadow-md transition-all duration-300"
    >
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="flex gap-5">
            <div
              className={`bg-${color}/10 p-4 rounded-lg h-16 w-16 flex items-center justify-center
                shrink-0 group-hover:bg-${color}/20 transition-colors`}
            >
              {department.toLowerCase() === "management" ? (
                <LuBriefcase className={`h-8 w-8 text-${color}`} />
              ) : (
                <LuHeadset className={`h-8 w-8 text-${color}`} />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <Badge className={`bg-${color} hover:bg-${color}/90`}>
                  {contract}
                </Badge>
                <Badge
                  className="bg-gray-100 hover:bg-gray-200"
                  textColor="text-gray-800"
                >
                  {department}
                </Badge>
                <span className="text-sm lg:text-lg text-gray-500 flex items-center gap-1">
                  <LuMapPin className="size-3 lg:size-4" /> {location}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{role}</h3>
              <p className="text-gray-600 text-sm lg:text-lg line-clamp-2 mb-4">
                {description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-3 text-sm lg:text-lg">
                Key Responsibilities:
              </h4>
              <ul className="space-y-2">
                <Criteria color={color}>{res1}</Criteria>
                <Criteria color={color}>{res2}</Criteria>
                <Criteria color={color}>{res3}</Criteria>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm lg:text-lg">
                Requirements:
              </h4>
              <ul className="space-y-2">
                <Criteria color={color}>{req1}</Criteria>
                <Criteria color={color}>{req2}</Criteria>
                <Criteria color={color}> {req3}</Criteria>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className={`inline-flex items-center justify-center gap-2 bg-${color} text-white px-6 py-3
                rounded-md font-medium hover:bg-${color}/90 transition-colors`}
            >
              Apply Now <LuArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:jobs@AIROBOTICX.com"
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300
                text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50
                transition-colors"
            >
              <LuMail className="h-4 w-4" /> jobs@AIROBOTICX.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
