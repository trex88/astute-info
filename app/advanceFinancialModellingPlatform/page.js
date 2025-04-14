import TrialForm from "../_components/TrialForm";
import { LucideBarChart3 } from "lucide-react";

function page() {
  return (
    <TrialForm
      serviceName="Advance Financial Modeling Platform"
      serviceType="finance"
      icon={<LucideBarChart3 className="size-8 text-primary" />}
    />
  );
}

export default page;
