import Link from "next/link";

function HelpItem({ to, children }) {
  return (
    <div
      className="group text-2xl ring-3 ring-[#5DADD2] py-20 rounded-xl flex justify-center
        items-center hover:cursor-pointer hover:scale-80 hover:ring-0 duration-250"
    >
      <Link
        href={to}
        className="active:scale-180 group-hover:scale-200 group-hover:text-[#3594C0]
          group-hover:underline underline-offset-4 duration-250"
      >
        {children}
      </Link>
    </div>
  );
}

export default HelpItem;
