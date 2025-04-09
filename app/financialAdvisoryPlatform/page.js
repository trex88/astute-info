import { LuChartNoAxesCombined } from "react-icons/lu";
import TrialForm from "../_components/TrialForm";

function page() {
  return (
    <TrialForm
      serviceName="Financial Advisory Platform"
      serviceType="finance"
      icon={<LuChartNoAxesCombined className="size-8 text-primary" />}
    />
  );
}

export default page;
