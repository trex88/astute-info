"use client";

import Link from "next/link";
import Button from "../_components/Button";
import { LuArrowRight } from "react-icons/lu";
import { LuShield } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuSparkles } from "react-icons/lu";
import { LuChartLine } from "react-icons/lu";
import { LuGlobe } from "react-icons/lu";
import { LuBuilding } from "react-icons/lu";
import { LuRecycle } from "react-icons/lu";
import { LuRocket } from "react-icons/lu";
import Image from "next/image";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import ShortForm from "../_components/ShortForm";
import astuteInfoImg from "@/public/images/astuteinfo.png";
import investorsImg from "@/public/images/investors.png";
import { useRef } from "react";

function Page() {
  const contactFormRef = useRef(null);
  const investSectionRef = useRef(null);

  function handleClick() {
    contactFormRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleInvestClick() {
    investSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative mt-10">
        <div className="flex flex-col items-center text-center gap-4">
          <div>
            <h1 className="text-6xl font-bold tracking-tight">
              Develop high performance and secure AI technologies for finance
            </h1>
            <p className="mx-auto max-w-[60%] text-3xl mt-5 text-neutral-700">
              AstuteInfo is in the early stages of fundraising and is actively
              seeking funding through the issuance of preferred stocks options
              or SAFE.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 mt-5">
            <Button type="button" onClick={handleClick}>
              Contact Investor Relations
            </Button>
            <Button
              color="#ffffff"
              className="ring-2 hover:ring-0"
              onClick={handleInvestClick}
            >
              Why Invest <LuArrowRight className="inline-block" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-50">
        <div className="mx-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-5">
              <div
                className="inline-block items-center rounded-lg bg-primary-light px-3 py-1 text-lg
                  font-medium"
              >
                About AstuteInfo
              </div>
              <h2 className="font-bold tracking-tighter text-5xl">
                Unlocking the Future with AstuteInfo
              </h2>
              <div className="text-2xl text-neutral-700 space-y-5">
                <p>
                  A Journey of Innovation and Impact: Imagine a world where
                  artificial intelligence {`isn't`} just a concept but a
                  powerful force driving innovation across industries. Welcome
                  to AstuteInfo, where{` we're`} transforming the landscape of
                  financial technologies with our cutting-edge AI solutions.
                </p>
                <p>
                  As we embark on this journey of innovation, we invite you to
                  join us in shaping the future of AI technologies and unlocking
                  new possibilities for growth and impact.
                </p>
              </div>
              <Button className="ml-auto mt-10">
                <Link href="aboutUs" className="flex items-center gap-2">
                  More about AstuteInfo <LuArrowRight />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
              <Image
                src={astuteInfoImg}
                fill
                alt="Astute Info image"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mt-35 bg-neutral-50 py-35 px-10">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-5">
            <div
              className="inline-block items-center rounded-lg bg-primary-light px-3 py-1 text-lg
                font-medium"
            >
              Highlights
            </div>
            <h2 className="font-bold tracking-tighter text-5xl">
              Key Advantages
            </h2>
            <p className="mx-auto max-w-[72%] text-2xl text-neutral-700">
              AstuteInfo brings together innovation, security, and global reach
              to create cutting-edge AI solutions for the finance industry.
            </p>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-20">
          <Card>
            <CardHeader>
              <LuGlobe className="size-15 text-primary" />
              <CardTitle>Global Presence</CardTitle>
            </CardHeader>
            <CardContent>
              Business presence in two major global innovation hubs, the USA &
              Australia, can be scaled up globally
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <LuShield className="size-15 text-primary" />
              <CardTitle>Secure AI</CardTitle>
            </CardHeader>
            <CardContent>
              Secure, high-performance AI pioneer with advanced security
              protocols and optimized performance
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <LuUsers className="size-15 text-primary" />
              <CardTitle>Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              Empowerment through collaboration with strategic partnerships
              across the finance industry
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <LuRecycle className="size-15 text-primary" />
              <CardTitle>Sustainable</CardTitle>
            </CardHeader>
            <CardContent>
              Sustainable solutions for tomorrow with a focus on long-term
              impact and environmental responsibility
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-35 px-10" ref={investSectionRef}>
        <div className="mx-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-5">
              <div
                className="inline-block items-center rounded-lg bg-primary-light px-3 py-1 text-lg
                  font-medium"
              >
                Investment Opportunity
              </div>
              <h2 className="font-bold tracking-tighter text-5xl">
                Why Invest in AstuteInfo?
              </h2>
              <p className="mx-auto max-w-[72%] text-2xl text-neutral-700">
                Join us on our journey to transform the financial technology
                landscape with secure and high-performance AI solutions.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-15 mt-20">
            <Card>
              <CardHeader>
                <LuChartLine className="size-15 text-primary" />
                <CardTitle>Market Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                AstuteInfo is positioned as a market leader in high performance
                and secure AI-driven solutions, with a proven track record of
                delivering high-quality products and services that meet and
                exceed customer expectations.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <LuSparkles className="size-15 text-primary" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                {`We're`} at the forefront of innovation, constantly pushing the
                boundaries of what is possible with secure and high-performance
                AI technology. Our commitment to innovation ensures that we stay
                ahead of the curve and continue to deliver cutting-edge
                solutions.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <LuRocket className="size-15 text-primary" />
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                Investing in AstuteInfo means investing in real-world impact.
                Our solutions are not just about driving profits but about
                making a positive difference in the world. From improving
                efficiency and safety to enhancing sustainability, our
                AI-powered platforms are driving meaningful change across
                industries.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <LuBuilding className="size-15 text-primary" />
                <CardTitle>Visionary Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                Our leadership team comprises seasoned professionals with
                extensive experience and industry knowledge. Their visionary
                leadership ensures that AstuteInfo remains at the forefront of
                the AI revolution, guiding us towards a future of growth and
                success.
              </CardContent>
            </Card>
          </div>
          <Button className="mt-15 mx-auto" onClick={handleClick}>
            Contact Investor Relations
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-35 px-10 bg-neutral-50">
        <div className="mx-10">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-5">
              <h2 className="font-bold tracking-tighter text-5xl">
                Join us on this journey
              </h2>
              <p className="text-2xl text-neutral-700">
                AstuteInfo Corporation is not just a {`company—it's`} a catalyst
                for change. With our innovative AI solutions, dedicated team,
                and visionary leadership, {`we're`} shaping the future of AI
                technologies and unlocking new possibilities for growth and
                impact.
              </p>
              <p className="text-2xl text-neutral-700">
                We look forward to partnering with you to build a brighter, more
                inclusive future.
              </p>
            </div>
            <Card className="bg-white py-10 px-10 max-w-[85%] justify-self-center">
              <CardHeader>
                <CardTitle>Ready to Invest?</CardTitle>
                <CardContent>
                  To invest directly with us through preferred stocks or the
                  SAFE options, please contact our Investor Relations Team.
                </CardContent>
              </CardHeader>
              <Button className="mx-auto mt-10" onClick={handleClick}>
                Contact Investor Relations
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-35 px-10" ref={contactFormRef}>
        <div className="mx-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="space-y-5">
              <div
                className="inline-block items-center rounded-lg bg-primary-light px-3 py-1 text-lg
                  font-medium"
              >
                Get in Touch
              </div>
              <h2 className="font-bold tracking-tighter text-5xl">
                Contact our Investor Relations Team
              </h2>
              <p className="text-2xl text-neutral-700">
                {`We're`} here to answer your questions and provide more
                information about investment opportunities.
              </p>
            </div>
          </div>
        </div>
        <ShortForm image={investorsImg} alt="Investors shaking hand" />
      </section>
    </div>
  );
}

export default Page;
