import { LuBriefcase } from "react-icons/lu";

function Step7() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center">
      <div className="relative mb-6">
        <div
          className="h-32 w-32 bg-gradient-to-tr from-primary to-secondary rounded-full flex
            items-center justify-center shadow-lg"
        >
          <div className="absolute inset-0 rounded-full border-dotted border-4 border-white/40"></div>
          <span className="text-white text-6xl font-bold">7</span>
        </div>
        <div
          className="absolute -bottom-3 -right-3 h-12 w-12 bg-primary/10 rounded-full flex
            items-center justify-center"
        >
          <LuBriefcase className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
        Enjoy Your Service
      </h3>
      <p className="text-gray-500 text-center text-sm lg:text-base xl:text-lg">
        Experience professional service
      </p>
    </div>
  );
}

export default Step7;
