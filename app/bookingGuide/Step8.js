import { LuStar } from "react-icons/lu";

function Step8() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center">
      <div className="relative mb-6">
        <div
          className="h-32 w-32 bg-gradient-to-bl from-secondary to-primary rounded-full flex
            items-center justify-center shadow-lg"
        >
          <div className="absolute inset-0 rounded-full border-2 border-white/50"></div>
          <span className="text-white text-6xl font-bold">8</span>
        </div>
        <div className="absolute top-0 right-0 flex -space-x-1">
          <div className="h-8 w-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <LuStar className="h-5 w-5 text-white" fill="currentColor" />
          </div>
          <div className="h-8 w-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <LuStar className="h-5 w-5 text-white" fill="currentColor" />
          </div>
        </div>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
        Leave Feedback
      </h3>
      <p className="text-gray-500 text-center text-sm lg:text-base xl:text-lg">
        Share your experience
      </p>
    </div>
  );
}

export default Step8;
