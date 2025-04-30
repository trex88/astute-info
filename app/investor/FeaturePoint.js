import { Check } from "lucide-react";

function FeaturePoint({ text }) {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
      <Check className="h-4 w-4 text-primary" />
      <span className="text-sm md:text-base font-medium">{text}</span>
    </div>
  );
}

export default FeaturePoint;
