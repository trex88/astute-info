import Image from "next/image";
import Button from "./Button";

function ShortForm({ image, alt, ref }) {
  return (
    <div
      ref={ref}
      className="m-auto grid grid-cols-[0.7fr_0.3fr] border-[#5DADD2] border-3 rounded-[10px]
        mt-15 overflow-hidden max-w-[80%]"
    >
      <form>
        <div className="ml-5 mr-5 mb-5">
          <div className="grid grid-cols-2 gap-y-7 mt-5">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-2xl" htmlFor="fname">
                Full name *
              </label>
              <input
                className="w-96 h-14 bg-[#E0EFF5] rounded-[10px] text-2xl"
                type="text"
                id="fname"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold text-2xl" htmlFor="email">
                Email address *
              </label>
              <input
                className="w-96 h-14 bg-[#E0EFF5] rounded-[10px] text-2xl"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold text-2xl" htmlFor="phone">
                Phone number *
              </label>
              <input
                className="w-96 h-14 bg-[#E0EFF5] rounded-[10px] text-2xl"
                type="tel"
                id="phone"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold text-2xl" htmlFor="company">
                Company/Organization
              </label>
              <input
                className="w-96 h-14 bg-[#E0EFF5] rounded-[10px] text-2xl"
                type="text"
                id="company"
              />
            </div>
            <div className="flex flex-col col-span-2 gap-1">
              <label className="font-bold text-2xl" htmlFor="message">
                Your message *
              </label>
              <textarea
                id="message"
                className="w-[100%] h-40 bg-[#E0EFF5] rounded-[10px] text-2xl resize-none"
              />
            </div>
          </div>
          <div className="mt-10 mb-10 flex justify-end">
            <Button extraPadding={true}>Submit</Button>
          </div>
        </div>
      </form>
      <div className="relative">
        <Image
          className="object-cover"
          src={image}
          fill
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // Identify size so NextJS won't render the image full size which is 100dvw
          alt={alt}
        />
      </div>
    </div>
  );
}

export default ShortForm;
