"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import person1 from "../../public/images/person1.jpg";

function TeamCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const teamMembers = [
    {
      name: "Vance Huynh",
      role: "Co-Founder, President, Chief Innovation & Technology Officer",
      image: person1,
      bio: " With over 20 years of experience in enterprise AI, cloud systems, and public policy, George Huynh drives the innovation vision at AIROBOD Inc.",
    },
    {
      name: "Thuy Bich Tram (Elizabeth) Ho",
      role: "Co-Founder, Chief Executive Officer",
      image: person1,
      bio: " Elizabeth is a Certified Practising Accountant (CPA) and seasoned finance executive with more than 15 years of leadership in financial strategy, compliance, and global operations. She has scaled multinational operations and now leads AIROBOD’s U.S. and APAC expansion with a focus on secure, AI-driven platforms for financial institutions.",
    },

    {
      name: "Micheal Vo",
      role: "AI & Cyber Security Advisor, Head of Data",
      image: person1,
      bio: " Michael is a security expert with years of experience securing financial data systems and AI model pipelines. At AIROBOD, he advises on zero-trust architecture, secure development lifecycles, and compliance with global data protection laws.",
    },
    {
      name: "Dayne Voller",
      role: "Group Chief Technology Officer, Managing Director of AIROBOD Europe & AIROBOD Africa",
      image: person1,
      bio: "As a Vice President of Valutico, led initiatives in fintech sectors. Spearheading initiatives in multiple fintech and healthcare companies, notably where he served as Chief Technology Officers and Vice Presidents. Delivered data-driven insights, improved client performance, and minimized risk, fostering innovation and impactful solutions. ",
    },
    {
      name: "Tobias Ruiz Moreno",
      role: "Group Chief Data, Analytics & AI Officer, Managing Director of AIROBOD South America & AIROBOD New Zealand",
      image: person1,
      bio: "Experienced product and data leader with a strong background in AI, analytics, and digital strategy. Former Chief Product Officer at Dymaxion Labs, leading digital product innovation. Managed global AI-driven initiatives in agriculture at GDM. Assistant Professor in Machine Learning at Universidad Torcuato Di Tella. Previous roles in data science and business intelligence at Tiendanube and Map of Agriculture. Holds an MSc in Management, Analytics, and Machine Learning from Columbia University.",
    },
    {
      name: "Cong Pham",
      role: "Web & Visual Communications Manager",
      image: person1,
      bio: " Cong is a versatile web developer and designer responsible for crafting AIROBOD’s digital presence. He manages multiple branded sites and marketing funnels while also contributing to product UI design and investor-ready presentations.",
    },
  ];

  // Update slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentSlide < teamMembers.length - slidesPerView) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to the beginning
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(teamMembers.length - slidesPerView); // Loop to the end
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = 100 / slidesPerView;
      carouselRef.current.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    }
  }, [currentSlide, slidesPerView]);

  return (
    <div className="relative max-w-10/12 lg:max-w-9/12 mx-auto overflow-x-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={"max-w-full sm:max-w-1/2 lg:max-w-1/3 shrink-0 px-4"}
            // style={{ width: `${100 / slidesPerView}%` }}
          >
            <div
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow
                h-full"
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform
                    duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-0 -translate-y-1/2 w-10 h-10 bg-white rounded-full
          shadow-md flex items-center justify-center hover:bg-gray-50 hover:cursor-pointer
          focus:outline-none z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full
          shadow-md flex items-center justify-center hover:bg-gray-50 hover:cursor-pointer
          focus:outline-none z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      <div className="flex justify-center mt-8">
        {Array.from({
          length: Math.max(1, teamMembers.length - slidesPerView + 1),
        }).map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full
            ${currentSlide === index ? "bg-primary" : "bg-gray-300"} hover:cursor-pointer`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamCarousel;
