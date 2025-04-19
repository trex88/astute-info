"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import person1 from "../../public/images/person1.jpg";
// import person2 from "../../public/images/person2.jpg";
// import person3 from "../../public/images/person3.jpg";
// import person4 from "../../public/images/person4.jpg";
// import person5 from "../../public/images/person5.jpg";

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
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael specializes in machine learning algorithms and predictive analytics for financial applications.",
  },
  {
    name: "Aisha Patel",
    role: "AI Ethics Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Aisha ensures our AI solutions adhere to ethical standards and responsible AI principles.",
  },
  {
    name: "David Kim",
    role: "Senior AI Engineer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "David develops cutting-edge neural network architectures for our enterprise clients.",
  },
  {
    name: "Emma Wilson",
    role: "Business Strategy Lead",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emma bridges the gap between technical capabilities and business applications.",
  },
  {
    name: "James Thompson",
    role: "Natural Language Processing Expert",
    image: "/placeholder.svg?height=400&width=400",
    bio: "James specializes in developing advanced NLP models for conversational AI and text analytics.",
  },
];

// Team Carousel Component
function TeamCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide < teamMembers.length - 3) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to the beginning
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(teamMembers.length - 3); // Loop to the end
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 33.33}%)`;
    }
  }, [currentSlide]);

  return (
    <div className="relative max-w-10/12 mx-auto">
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105
                      transition-transform duration-500"
                    width={300}
                    height={300}
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
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white
          rounded-full shadow-md flex items-center justify-center hover:bg-gray-50
          focus:outline-none z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white
          rounded-full shadow-md flex items-center justify-center hover:bg-gray-50
          focus:outline-none z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      <div className="flex justify-center mt-8">
        {Array.from({ length: teamMembers.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full
            ${currentSlide === index ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamCarousel;
