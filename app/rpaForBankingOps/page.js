import { LuWorkflow } from "react-icons/lu";
import TrialForm from "../_components/TrialForm";

function page() {
  return (
    <TrialForm
      serviceName="Autonomous Robotic Process Automation (RPA) for Banking Operations"
      icon={<LuWorkflow className="size-8 text-primary" />}
      serviceType="RPA"
    />
  );
}

export default page;
