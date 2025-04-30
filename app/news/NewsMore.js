import { LuCalendar } from "react-icons/lu";
import Badge from "../_components/Badge";
import News from "./News";

function NewsMore() {
  return (
    <section className="mb-30 px-6 sm:px-3 max-w-full xl:max-w-10/12 2xl:max-w-9/12 mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          More News About AstuteInfo
        </h2>
        <div className="h-px bg-gray-200 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <News
          heading="Develop High Performance and Secure AI Technologies for
            Finance Industry"
          content="  AstuteInfo is pioneering new approaches to AI in finance,
            focusing on security, performance, and regulatory compliance."
          href=""
        >
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-secondary hover:bg-secondary/90">
              AI Technology
            </Badge>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <LuCalendar className="h-3 w-3" /> April 2024
            </span>
          </div>
        </News>
        <News
          heading="AstuteInfo at Early Stage of Raising Funds"
          content="AstuteInfo is at early stage of raising fund and currently
            actively looking for funding via issuing preferred stocks."
          href=""
        >
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-accent hover:bg-accent/90">Funding</Badge>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <LuCalendar className="h-3 w-3" /> March 2024
            </span>
          </div>
        </News>
      </div>

      {/* Video Section */}
      <div
        className="w-fit h-fit bg-white border border-neutral-200 rounded-xl overflow-hidden
          shadow-sm"
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-primary hover:bg-primary/90">
              Video Presentation
            </Badge>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <LuCalendar className="h-3 w-3" /> February 2024
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3">
            Airobod AI Finance Presentation
          </h3>
          <p className="text-gray-600 mb-4 text-3xs md:text-lg">
            Watch our latest presentation on how AstuteInfo is transforming the
            finance industry with AI-powered solutions.
          </p>
          <div className="relative rounded-lg overflow-hidden">
            <iframe
              className="mx-auto rounded-xl h-[300px] sm:h-[350px] md:h-[400px] w-full md:w-10/12"
              src="https://www.youtube.com/embed/LLaMK9vCzzo?si=-AHOmFPHhjkQy2e7"
              title="AstuteInfo AI Finance presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsMore;
