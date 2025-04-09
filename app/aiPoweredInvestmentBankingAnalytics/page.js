import { LuChartNetwork } from "react-icons/lu";
import TrialForm from "../_components/TrialForm";

function page() {
  return (
    <TrialForm
      serviceName="AI-Powered Investment Banking Analytics"
      icon={<LuChartNetwork className="size-8 text-primary" />}
      serviceType="analytics"
    />
  );
}

export default page;
