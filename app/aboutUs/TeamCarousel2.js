"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import person1 from "../../public/images/person1.jpg";

function TeamCarousel2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      image: person1,
      bio: "With over 15 years of experience in AI research, Dr. Chen leads our AI strategy and innovation initiatives.",
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Data Scientist",
      image: person1,
      bio: "Michael specializes in machine learning algorithms and predictive analytics for financial applications.",
    },
    {
      name: "Aisha Patel",
      role: "AI Ethics Director",
      image: person1,
      bio: "Aisha ensures our AI solutions adhere to ethical standards and responsible AI principles.",
    },
    {
      name: "David Kim",
      role: "Senior AI Engineer",
      image: person1,
      bio: "David develops cutting-edge neural network architectures for our enterprise clients.",
    },
    {
      name: "Emma Wilson",
      role: "Business Strategy Lead",
      image: person1,
      bio: "Emma bridges the gap between technical capabilities and business applications.",
    },
    {
      name: "James Thompson",
      role: "Natural Language Processing Expert",
      image: person1,
      bio: "James specializes in developing advanced NLP models for conversational AI and text analytics.",
    },
    // {
    //   name: "James Thompson",
    //   role: "Natural Language Processing Expert",
    //   image: person1,
    //   bio: "James specializes in developing advanced NLP models for conversational AI and text analytics.",
    // },
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
    <div className="relative max-w-10/12 lg:max-w-9/12 mx-auto">
      <div className="overflow-x-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="max-w-full sm:max-w-1/2 lg:max-w-1/3 flex-shrink-0 px-4"
              style={{ width: `${100 / slidesPerView}%` }}
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
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full
          shadow-md flex items-center justify-center hover:bg-gray-50 hover:cursor-pointer
          focus:outline-none z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full
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

export default TeamCarousel2;
