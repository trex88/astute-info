import Image from "next/image";
import companyVision from "../../public/images/vision.jpg";
import Button from "../_components/Button";
import Link from "next/link";

function VisionSection() {
  return (
    <section className="mt-24 relative">
      <Image
        className="max-w-[100%] h-130 object-cover"
        src={companyVision}
        alt="Image of AIRoboticx's vision"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.85)]">
        <div className="gap-y-10 absolute inset-0 grid grid-rows-3 justify-items-center items-center">
          <h2 className="text-8xl text-[#ffffff] font-bold">Our Vision</h2>
          <p className="text-5xl text-[#fff] leading-15 max-w-[80%]">
            AstuteInfo is a leading AI fintech company specializing in
            high-performance, secure AI technologies designed to enhance
            efficiency, productivity, and security in the finance industry.
          </p>

          <Button>
            <Link href="aboutUs">More about AstuteInfo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
