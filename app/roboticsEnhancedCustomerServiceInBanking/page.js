import { LuUsers } from "react-icons/lu";
import TrialForm from "../_components/TrialForm";

function page() {
  return (
    <TrialForm
      serviceName="Robotics-Enhanced Customer Service in Banking"
      icon={<LuUsers className="size-8 text-primary" />}
      serviceType="customer service"
    />
  );
}

export default page;
