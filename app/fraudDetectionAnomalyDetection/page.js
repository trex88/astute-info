import { LuShield } from "react-icons/lu";
import TrialForm from "../_components/TrialForm";

function page() {
  return (
    <TrialForm
      serviceName="Fraud Detection and Anomaly Detection"
      icon={<LuShield className="size-8 text-primary" />}
    />
  );
}

export default page;
