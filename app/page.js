"use client";

import { useRef } from "react";
import HomeHero from "./_homePageComponents/HomeHero";
import HomeFeatures from "./_homePageComponents/HomeFeatures";
import HomeQuote from "./_homePageComponents/HomeQuote";
import HomeServices from "./_homePageComponents/HomeServices";
import HomeVideo from "./_homePageComponents/HomeVideo";
import HomeCTA from "./_homePageComponents/HomeCTA";

export default function HomePage() {
  const demoSectionRef = useRef(null);

  function handleWatchDemo() {
    demoSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      {/* Hero Section */}
      <HomeHero handleWatchDemo={handleWatchDemo} />

      {/* Interactive Features Section */}
      <HomeFeatures />

      {/* Quote Section */}
      <HomeQuote />

      {/* Services Section */}
      <HomeServices />

      {/* Video Section */}
      <HomeVideo demoSectionRef={demoSectionRef} />

      {/* CTA Section */}
      <HomeCTA />
    </>
  );
}
