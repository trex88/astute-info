import Image from "next/image";
import Button from "../_components/Button";
import bgBlueMountain from "../../public/images/blue-mountain.jpg";

function AssistSection() {
  return (
    <section className="max-w-dvw grid grid-cols-[0.5fr_0.6fr] mt-24">
      <div className="bg-[#A4CFE0] px-10 py-15">
        <p className="text-8xl tracking-tight">How can we assist you today?</p>
        <div className="mt-20 max-w-[70%]">
          <Button>Find an AstuteInfo service or product</Button>
        </div>
        <div className="mt-18 max-w-[70%]">
          <Button>Request a custom AstuteInfo quote</Button>
        </div>
      </div>
      <Image src={bgBlueMountain} alt="Image of a blue mountain" />
    </section>
  );
}

export default AssistSection;
