function Benefit({ icon, heading, subhead }) {
  return (
    <li className="flex gap-3">
      <div
        className="bg-[#76b900]/10 p-2 rounded-full size-10 flex items-center justify-center
          shrink-0"
      >
        {icon}
      </div>
      <div>
        <span className="font-medium block text-lg md:text-xl">{heading}</span>
        <span className="text-3xs md:text-lg text-gray-500">{subhead}</span>
      </div>
    </li>
  );
}

export default Benefit;
