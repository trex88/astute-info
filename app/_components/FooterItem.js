import Link from "next/link";

function FooterItem({ children, heading, href, color, className }) {
  if (heading)
    return (
      <h3 className="text-lg font-bold mb-6 relative inline-block">
        {children}
        <span
          className={`absolute -bottom-2 left-0 w-1/2 h-1 bg-${color} rounded-full`}
        ></span>
      </h3>
    );
  return (
    <li>
      <Link
        href={href}
        className={`text-gray-300 ${className} transition-colors flex items-center gap-2`}
      >
        <span className={`h-1 w-1 bg-${color} rounded-full`}></span>
        {children}
      </Link>
    </li>
  );
}

export default FooterItem;
