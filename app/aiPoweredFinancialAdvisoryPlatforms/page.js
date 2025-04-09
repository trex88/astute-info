import { LuBrainCircuit } from "react-icons/lu";
import TrialForm from "../_components/TrialForm";

function page() {
  return (
    <TrialForm
      serviceName="AI-Powered Financial Advisory Platform with Robo-Advisors"
      icon={<LuBrainCircuit className="size-8 text-primary" />}
      serviceType="robotics"
    />
  );
}

export default page;
