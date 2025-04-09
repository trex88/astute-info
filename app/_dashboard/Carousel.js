"use client";

import Image from "next/image";
import memberImage1 from "../../public/images/person1.jpg";
import memberImage2 from "../../public/images/person2.jpg";
import memberImage3 from "../../public/images/person3.jpg";
import memberImage4 from "../../public/images/person4.jpg";
import memberImage5 from "../../public/images/person5.jpg";
import memberImage6 from "../../public/images/person6.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function TeamMembersCarousel() {
  return (
    <Carousel
      className="max-w-[100%]"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem className="basis-md pl-20">
          <Image src={memberImage1} alt="Portrait of team member" />
        </CarouselItem>
        <CarouselItem className="basis-md pl-20">
          <Image src={memberImage1} alt="Portrait of team member" />
        </CarouselItem>
        <CarouselItem className="basis-md pl-20">
          <Image src={memberImage1} alt="Portrait of team member" />
        </CarouselItem>
        <CarouselItem className="basis-md pl-20">
          <Image src={memberImage1} alt="Portrait of team member" />
        </CarouselItem>
        <CarouselItem className="basis-md pl-20">
          <Image src={memberImage1} alt="Portrait of team member" />
        </CarouselItem>
        <CarouselItem className="basis-md pl-20">
          <Image src={memberImage1} alt="Portrait of team member" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default TeamMembersCarousel;
