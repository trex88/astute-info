"use client";

import PartnerHero from "./PartnerHero";
import PartnerValueCards from "./PartnerValueCards";
import PartnerTypes from "./PartnerTypes";
import PartnerNVIDIA from "./PartnerNVIDIA";
import PartnerBenefits from "./PartnerBenefits";
import PartnerCTA from "./PartnerCTA";
import { useRef } from "react";

export default function PartnershipsPage() {
  const partnerSectionRef = useRef(null);

  function handleExplore() {
    partnerSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PartnerHero handleExplore={handleExplore} />

      {/* Value Proposition Cards */}
      <PartnerValueCards />

      {/* Partner Types Section */}
      <PartnerTypes />

      {/* NVIDIA Partnership Section */}
      <PartnerNVIDIA partnerSectionRef={partnerSectionRef} />

      {/* Benefits Section */}
      <PartnerBenefits />

      {/* CTA Section */}
      <PartnerCTA />
    </div>
  );
}
