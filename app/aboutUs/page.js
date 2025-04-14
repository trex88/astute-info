import Image from "next/image";
import teamImg from "../../public/images/team.jpg";
import ourMissionImg from "../../public/images/mission.png";
import ourVisionImg from "../../public/images/our-vision.png";
import teamMembersImg from "../../public/images/team-members.png";

function page() {
  return (
    <div className="mx-20 text-neutral-700">
      <section>
        <h1 className="text-9xl mt-15">About AstuteInfo</h1>
        <p className="text-3xl mt-10 tracking-wide max-w-[70%]">
          AstuteInfo is the Artificial Intelligence division of AIROBOTICX
          Group, specializing in AI-driven products and services across
          industries. Headquartered in New York, USA, with its Asia-Pacific base
          in Sydney, Australia. Astute Info pioneers advancements in AI
          applications, transforming sectors such as finance, healthcare,
          automation, and enterprise intelligence. Our mission is to provide
          state-of-the-art AI solutions that drive efficiency, innovation, and
          sustainability.
        </p>
        <div className="relative w-[96%] h-[600px] mt-30">
          <Image
            className="rounded-2xl object-cover"
            src={teamImg}
            fill
            alt="Image of a team"
          />
        </div>
      </section>
      {/* Mission section */}
      <section className="mt-35">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-7xl">
            Our Mission
          </h2>
        </div>
        <div className="grid gap-10 mt-20 md:grid-cols-2 md:items-center">
          <div className="text-3xl space-y-4 md:order-1">
            <p>
              At Astute Info, we are committed to fostering AI-driven innovation
              that enhances decision-making, automates complex processes, and
              enables organizations to unlock new growth opportunities.
            </p>
            <p>
              By offering cutting-edge AI solutions, we empower industries to
              embrace artificial intelligence and harness its potential for
              long-term success.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg md:order-2">
            <Image
              src={ourMissionImg}
              fill
              alt="Astute Info Mission"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* Vision Section */}
      <section className="mt-35">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-7xl">
            Our Vision
          </h2>
        </div>
        <div className="grid gap-10 mt-20 md:grid-cols-2 md:items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image
              src={ourVisionImg}
              fill
              alt="Astute Info Vision"
              className="object-cover"
            />
          </div>
          <div className="text-3xl space-y-4">
            <p>
              Our vision is to shape the future of artificial intelligence by
              creating an ecosystem where AI seamlessly integrates into
              industries, fostering innovation, efficiency, and sustainable
              growth.
            </p>
            <p>
              We aim to make AI more accessible, ethical, and transformative,
              ensuring that organizations across the globe benefit from
              high-performance AI-powered solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="mt-35">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-7xl">
            Core Values
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-all
              hover:shadow-md"
          >
            <h3 className="mb-3 text-2xl font-semibold text-primary">
              Innovation
            </h3>
            <p className="text-xl">
              We push the boundaries of AI technology to develop advanced,
              secure, and high-performance solutions.
            </p>
          </div>
          <div
            className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-all
              hover:shadow-md"
          >
            <h3 className="mb-3 text-2xl font-semibold text-primary">
              Quality
            </h3>
            <p className="text-xl">
              Delivering AI products and services that set industry benchmarks
              for reliability and efficiency.
            </p>
          </div>
          <div
            className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-all
              hover:shadow-md"
          >
            <h3 className="mb-3 text-2xl font-semibold text-primary">
              Integrity
            </h3>
            <p className="text-xl">
              Upholding transparency, trust, and ethical AI development in all
              our operations.
            </p>
          </div>
          <div
            className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-all
              hover:shadow-md"
          >
            <h3 className="mb-3 text-2xl font-semibold text-primary">
              Sustainability
            </h3>
            <p className="text-xl">
              Developing AI solutions that contribute to a more sustainable and
              responsible technological future.
            </p>
          </div>
        </div>
      </section>
      {/* People section */}
      <section className="mt-35">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-7xl">
            Our People
          </h2>
        </div>
        <div className="grid gap-10 mt-20 md:grid-cols-2 md:items-center">
          <div className="text-3xl space-y-4 md:order-1">
            <p>
              Astute Info thrives on the expertise of its AI engineers, data
              scientists, and business strategists who drive its mission
              forward. Our team is dedicated to developing next-generation AI
              technologies that redefine industries.
            </p>
            <p>
              Ensuring that businesses remain at the forefront of AI-powered
              transformation. Through their dedication, knowledge, and passion,
              Astute Info continues to lead the AI revolution.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg md:order-2">
            <Image
              src={teamMembersImg}
              fill
              alt="Astute Info team members"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
