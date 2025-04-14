import { LuChevronRight } from "react-icons/lu";
import Link from "next/link";

function News({ children, heading, content, href }) {
  return (
    <div
      className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm
        hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        {children}
        <h3 className="text-xl font-bold mb-3">{heading}</h3>
        <p className="text-gray-600 mb-4 text-3xs md:text-lg">{content}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline
            underline-offset-4 text-3xs md:text-lg"
        >
          Read more <LuChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default News;
