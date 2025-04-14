function CompanyFeaturesIcon({ icon, context }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="size-[90px] rounded-[50%] flex justify-center items-center
          bg-[rgba(164,207,224,0.6)]"
      >
        {icon}
      </div>
      <p className="text-2xl font-bold mt-5 leading-10">{context}</p>
    </div>
  );
}

export default CompanyFeaturesIcon;
