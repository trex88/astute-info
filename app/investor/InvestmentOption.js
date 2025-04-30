import { Check } from "lucide-react";

function InvestmentOption({ title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white/10 p-3 rounded-full shrink-0">
        <Check className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="font-semibold text-base md:text-lg mb-1">{title}</h4>
        <p className="text-gray-400 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}

export default InvestmentOption;
