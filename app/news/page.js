"use client";

import { useRef } from "react";
import NewsHero from "./NewsHero";
import NewsFeatured from "./NewsFeatured";
import NewsMore from "./NewsMore";
import Newsletter from "./Newsletter";

function Newsroom() {
  const latestNewsSectionRef = useRef(null);
  function handleReadMore() {
    latestNewsSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      {/* Hero section */}
      <NewsHero handleReadMore={handleReadMore} />

      {/* Featured News */}
      <NewsFeatured latestNewsSectionRef={latestNewsSectionRef} />

      {/* More News Section */}
      <NewsMore />

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
}

export default Newsroom;
