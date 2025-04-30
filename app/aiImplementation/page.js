import { LuCpu } from "react-icons/lu";
import TrialForm from "../_components/TrialForm";

function page() {
  return (
    <TrialForm
      serviceName="AI Implementation and Integration"
      icon={<LuCpu className="size-8 text-primary" />}
    />
  );
}

export default page;
