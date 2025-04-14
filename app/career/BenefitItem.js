function BenefitItem({ icon, heading, p }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="bg-primary/10 p-2 rounded-full size-10 lg:size-12 flex items-center
          justify-center shrink-0"
      >
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg lg:text-xl mb-1">{heading}</h3>
        <p className="text-gray-600 text-3xs lg:text-lg">{p}</p>
      </div>
    </div>
  );
}

export default BenefitItem;
