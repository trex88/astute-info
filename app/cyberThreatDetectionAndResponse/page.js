import { LuShieldAlert } from "react-icons/lu";
import TrialForm from "../_components/TrialForm";

function page() {
  return (
    <TrialForm
      serviceName="Cybersecurity Threat Detection and Response"
      icon={<LuShieldAlert className="size-8 text-primary" />}
    />
  );
}

export default page;
