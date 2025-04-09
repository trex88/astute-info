"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LinkEffect from "../_components/LinkEffect";
import ContactItem from "./ContactItem";
import bgPinkBlue from "../../public/images/bgPinkBlue.jpg";
import bulbImage from "../../public/images/bulb.jpg";
import TelLink from "./TelLink";
import ShortForm from "../_components/ShortForm";

function Page() {
  const [team, setTeam] = useState("customer");
  const [themeColor, setThemeColor] = useState("#5DADD2");
  const sectionRef = useRef(null);

  useEffect(
    function () {
      if (team === "customer") setThemeColor("#5DADD2");
      if (team === "technical") setThemeColor("#fb93c7");
      if (team === "sales") setThemeColor("#5d4639");
    },
    [team],
  );

  function handleSelect(e) {
    setTeam(e.target.value);
  }

  function handleClickCustomer() {
    setTeam("customer");
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  function handleClickTechnical() {
    setTeam("technical");
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  function handleClickSales() {
    setTeam("sales");
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <section className="h-[85dvh] relative">
        <Image
          className="absolute -z-1 object-cover h-[100%]"
          src={bgPinkBlue}
          alt="Image of puzzle"
        />
        <div className="px-8 grid grid-cols-[0.4fr_0.6fr] items-center h-[100%]">
          <h1
            className="animate-[fade-in-effect_0.5s_ease-in_forwards] text-center font-bold text-8xl
              text-[#111111]"
          >
            Contact Us
          </h1>
          <div className="grid grid-cols-1 gap-y-10">
            <ContactItem>
              For general inquiries and assistance, please
              <LinkEffect onClick={handleClickCustomer}>
                contact our Customer Support Team
              </LinkEffect>
            </ContactItem>
            <ContactItem>
              For technical issues or questions about our products/services,
              please
              <LinkEffect onClick={handleClickTechnical}>
                contact our Technical Support Team
              </LinkEffect>
            </ContactItem>
            <ContactItem>
              To inquire about our products/services or discuss partnerships,
              please
              <LinkEffect onClick={handleClickSales}>
                contact our Sales Department
              </LinkEffect>
            </ContactItem>
          </div>
        </div>
      </section>
      <div className="ml-10">
        <section className="mt-30 scroll-mt-32" ref={sectionRef}>
          <label htmlFor="team-select" className="block text-4xl">
            Please select a department:
          </label>
          <select
            id="team-select"
            name="team"
            className={`text-${`[${themeColor}]`} text-4xl font-bold mt-5 hover:cursor-pointer
              focus:outline-0 focus:ring-2 duration-100 rounded-xl `}
            value={team}
            onChange={handleSelect}
          >
            <option value="customer" className="text-[#5DADD2]">
              Customer Support Team
            </option>
            <option value="technical" className="text-[#fb93c7]">
              Technical Support Team
            </option>
            <option value="sales" className="text-[#5d4639]">
              Sales Department
            </option>
          </select>
          <div className="grid grid-cols-3 mt-10 justify-items-center items-start">
            <div className="ring-2 px-20 py-5 rounded-xl flex flex-col gap-3">
              <h3 className="text-3xl font-bold">North America and Oceania</h3>
              <TelLink
                country="US & Canada"
                tel="+4733378901"
                color={themeColor}
              >
                +1 605-313-5870
              </TelLink>
              <TelLink country="Australia" tel="+4733378901" color={themeColor}>
                +1 605-313-5870
              </TelLink>
              <TelLink
                country="New Zealand"
                tel="+4733378901"
                color={themeColor}
              >
                +1 605-313-5870
              </TelLink>
            </div>
            <div className="ring-2 px-20 py-5 rounded-xl flex flex-col gap-3">
              <h3 className="text-3xl font-bold">Asia</h3>
              <TelLink country="Japan" tel="+4733378901" color={themeColor}>
                +1 605-313-5870
              </TelLink>
              <TelLink country="Indonesia" tel="+4733378901" color={themeColor}>
                +1 605-313-5870
              </TelLink>
              <TelLink country="Mongolia" tel="+4733378901" color={themeColor}>
                +1 605-313-5870
              </TelLink>
              <TelLink country="Cambodia" tel="+4733378901" color={themeColor}>
                +1 605-313-5870
              </TelLink>
            </div>
            <div className="ring-2 px-20 py-5 rounded-xl flex flex-col gap-3">
              <h3 className="text-3xl font-bold">Africa</h3>
              <TelLink
                country="South Africa"
                tel="+4733378901"
                color={themeColor}
              >
                +1 605-313-5870
              </TelLink>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl mt-40">
            Still need help? Please submit your inquiry
          </h2>
          <ShortForm
            image={bulbImage}
            alt="Image of a hand holding a lightbulb"
          />
        </section>
      </div>
    </>
  );
}

export default Page;
