import LinkEffect from "../_components/LinkEffect";

function PartnersType({ icon, heading, children, iconBgColor }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className={`${iconBgColor || "bg-primary/10"} p-4 rounded-full`}>
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3">{heading}</h3>
          <p className="text-gray-600 mb-4 text-xl leading-8">{children}</p>
          <LinkEffect to="" className="text-xl inline-flex items-center gap-1">
            Learn more
          </LinkEffect>
        </div>
      </div>
    </div>
  );
}

export default PartnersType;
