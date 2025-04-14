import { LuCheck } from "react-icons/lu";

function CultureCard({
  icon,
  heading,
  content,
  color,
  firstDescription,
  secondDescription,
  thirdDescription,
}) {
  return (
    <div
      className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md
        transition-shadow group"
    >
      <div
        className={`bg-${color}/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6
          group-hover:bg-${color}/20 transition-colors`}
      >
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl font-bold mb-4">{heading}</h3>
      <p className="text-3xs lg:text-lg text-gray-600 mb-6">{content}</p>
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <LuCheck className={`h-5 w-5 text-${color} shrink-0 mt-0.5`} />
          <span className="text-3xs lg:text-lg text-gray-700">
            {firstDescription}
          </span>
        </li>
        <li className="flex items-start gap-2">
          <LuCheck className={`h-5 w-5 text-${color} shrink-0 mt-0.5`} />
          <span className="text-3xs lg:text-lg text-gray-700">
            {secondDescription}
          </span>
        </li>
        <li className="flex items-start gap-2">
          <LuCheck className={`h-5 w-5 text-${color} shrink-0 mt-0.5`} />
          <span className="text-3xs lg:text-lg text-gray-700">
            {thirdDescription}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CultureCard;
