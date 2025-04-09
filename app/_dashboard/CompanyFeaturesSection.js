"use client";

import CompanyFeaturesIcon from "./CompanyFeaturesIcon";
import { IconContext } from "react-icons";
import { PiStrategy } from "react-icons/pi";
import { RiBankLine } from "react-icons/ri";
import { IoBarChartOutline } from "react-icons/io5";
import { BsShieldLock } from "react-icons/bs";
import { TbSettingsSpark } from "react-icons/tb";
import { IoWarningOutline } from "react-icons/io5";
import Button from "../_components/Button";

function CompanyFeaturesSection() {
  return (
    <section className="grid grid-cols-3 grid-rows-2 justify-items-center mt-24 gap-y-24">
      <IconContext.Provider value={{ size: "50px" }}>
        <CompanyFeaturesIcon
          icon={<PiStrategy />}
          context="Empowers smarter investment strategies"
        />
        <CompanyFeaturesIcon
          icon={<RiBankLine />}
          context="Specializes in secure AI for finance & government"
        />
        <CompanyFeaturesIcon
          icon={<IoBarChartOutline />}
          context="Automates financial processes & analytics"
        />
        <CompanyFeaturesIcon
          icon={<BsShieldLock />}
          context="Ensures top-tier cybersecurity"
        />
        <CompanyFeaturesIcon
          icon={<TbSettingsSpark />}
          context="Optimizes resources and cuts costs"
        />
        <CompanyFeaturesIcon
          icon={<IoWarningOutline />}
          context="Enables fraud detection and risk analysis"
        />
      </IconContext.Provider>
      <div className="col-start-2">
        <Button>Find an AIRoboticx services or products</Button>
      </div>
    </section>
  );
}

export default CompanyFeaturesSection;
