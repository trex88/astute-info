import Image from "next/image";
import feather from "../../public/images/feather.jpg";
import FAQSection from "./FAQSection";
import HelpOptions from "./HelpOptions";

function Page() {
  return (
    <>
      <div className="relative w-dvw h-[90dvh] flex flex-col items-center">
        <Image
          className="absolute h-[100%] object-cover -z-10"
          src={feather}
          alt="Background image of white feathers"
        />
        <h1 className="font-bold text-center text-6xl mt-10">Support Centre</h1>
        <p
          className="opacity-0 text-3xl mt-15 w-[60%] tracking-wide
            animate-[fade-in-effect_0.5s_1s_ease-in_forwards]"
        >
          Welcome to our support page. We offer multiple support channels,
          including live chat, email, and phone support, ensuring quick and
          reliable solutions.Let us help you get the answers you need—whenever
          you need them.
        </p>
        <p
          className="text-3xl mt-15 w-[60%] tracking-wide opacity-0
            animate-[fade-in-effect_0.5s_2s_ease-in_forwards]"
        >
          For quick answers and instant support, try our Virtual Agent!
          Available 24/7, it can help you troubleshoot issues, find information,
          and guide you through common tasks—all in just a few clicks. It’s
          fast, easy, and always ready to assist.
        </p>
        <div className="opacity-0 animate-[fade-in-effect_0.5s_2s_ease-in_forwards]">
          <a
            className="mt-15 flex gap-3 items-center rounded-2xl p-[25px_50px] font-bold text-4xl
              hover:cursor-pointer bg-linear-[45deg,#5DADD2_50%,#D5DFE7_50%]
              [background-size:270%] bg-right-top
              animate-[button-animation_0.5s_ease-out_forwards]
              hover:animate-[button-animation-rev_0.5s_ease-out_forwards] group"
          >
            <span
              className="bg-linear-[45deg,#000000_50%,#3F9ECA_50%] bg-right-top [background-size:270%]
                [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]
                [-moz-background-clip:text] [-moz-text-fill-color:transparent]
                animate-[button-animation_0.5s_ease-out_forwards]
                group-hover:animate-[button-animation-rev_0.5s_ease-out_forwards]"
            >
              Chat with our virtual customer support agent
            </span>
          </a>
        </div>
      </div>
      <HelpOptions />
      <FAQSection />
    </>
  );
}

export default Page;
