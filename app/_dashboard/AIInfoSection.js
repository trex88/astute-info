import Image from "next/image";
import financeImage from "../../public/images/finance.jpg";
import industryImage from "../../public/images/industry.jpg";
import sunriseImage from "../../public/images/sunrise.jpg";
import AIInfoCard from "./AIInfoCard";

function InformationSection() {
  return (
    <section
      className="mt-24 grid max-w-screen grid-cols-3 justify-items-center bg-linear-to-r
        from-[#EA7977] via-[#1E3E64] via-46% to-[#BFAFB0] py-16"
    >
      <div className="relative justify-self-end">
        <Image
          src={sunriseImage}
          className="rounded-xl"
          width={350}
          alt="Image of sunrise"
        />
        <AIInfoCard
          heading="The Rise of AI"
          context=" AI technologies are rapidly advancing, reshaping industries. They
              enable complex tasks and data analysis with speed and accuracy.
              High performance ensures efficiency, while strong security
              protects against risks. Balancing both is crucial for safe and
              productive AI deployment."
        />
      </div>

      <div className="relative">
        <Image
          src={financeImage}
          className="rounded-xl"
          width={350}
          alt="Image of finance theme"
        />
        <AIInfoCard
          heading="Leveraging AI"
          context="Organizations can greatly enhance their operations by adopting AI that is both powerful and secure. High-performance AI automates tasks and provides valuable analytics, leading to better decision-making. High-security AI safeguards data and ensures adherence to regulations."
        />
      </div>

      <div className="relative justify-self-start">
        <Image
          src={industryImage}
          className="justify-self-start rounded-xl"
          width={350}
          alt="Image of industry"
        />
        <AIInfoCard
          heading="AI Drives Change"
          context="Industries are seeing a revolution thanks to AI that's both powerful and secure.This combination allows for faster, more efficient processes, like quicker medical diagnoses and automated financial trading, while also ensuring robust protection against threats, leading to safer and more productive operations."
        />
      </div>
    </section>
  );
}

export default InformationSection;
