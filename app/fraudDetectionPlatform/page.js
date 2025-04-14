import { LuNetwork } from "react-icons/lu";
import TrialForm from "../_components/TrialForm";

function page() {
  return (
    <TrialForm
      serviceName="Fraud Detection Platform for Banking"
      icon={<LuNetwork className="size-8 text-primary" />}
    />
  );
}

export default page;
