import { LucideCheckCircle } from "lucide-react";

function Step6() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center">
      <div className="relative mb-6">
        <div
          className="h-32 w-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex
            items-center justify-center shadow-lg"
        >
          <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
          <span className="text-white text-6xl font-bold">6</span>
        </div>
        <div
          className="absolute -top-2 -right-2 h-10 w-10 bg-green-100 rounded-full flex items-center
            justify-center"
        >
          <LucideCheckCircle className="h-6 w-6 text-green-500" />
        </div>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
        Confirmation
      </h3>
      <p className="text-gray-500 text-center text-sm lg:text-base xl:text-lg">
        Your booking is confirmed
      </p>
    </div>
  );
}

export default Step6;
