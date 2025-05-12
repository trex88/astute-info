import Image from "next/image";
import logoNVIDIA from "@/public/images/nvidia.svg";
import logoMicrosoft from "@/public/images/microsoft.svg";
import logoVSEC from "@/public/images/vsec.svg";
import logoBeyondKey from "@/public/images/beyondKey.png";

function HomePartnerships() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-base md:text-lg text-gray-500 font-medium">
            GLOBAL PARTNERSHIPS
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-32">
          <Image
            src={logoNVIDIA}
            className="h-12 w-25 md:w-32"
            alt="Logo of Nvidia"
          />
          <Image
            src={logoMicrosoft}
            className="h-12 w-25 md:w-32"
            alt="Logo of Microsoft"
          />
          <Image
            src={logoVSEC}
            className="h-9 w-20 md:w-32"
            alt="Logo of VSEC"
          />
          <div className="relative h-9 w-50 md:h-12 md:w-60">
            <Image
              src={logoBeyondKey}
              alt="Logo of beyondKey"
              fill
              sizes="(min-width:768px) 240px, 200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePartnerships;
