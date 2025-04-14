import Link from "next/link";

function LinkEffect({ to, children, onClick, className, type = "internal" }) {
  if (type === "external")
    return (
      <div
        className="inline-block relative group hover:cursor-pointer"
        onClick={onClick}
      >
        <Link
          href={to}
          className={`text-primary font-bold group-hover:text-primary-dark duration-250 ${className}`}
        >
          {children}
        </Link>
        <div
          className="absolute w-[0%] group-hover:w-[100%] h-1 bg-primary group-hover:bg-primary-dark
            top-[90%] rounded-2xl duration-250"
        ></div>
      </div>
    );

  return (
    <div
      className="inline-block relative group hover:cursor-pointer"
      onClick={onClick}
    >
      <button
        type="button"
        className={`text-primary font-bold group-hover:text-primary-dark group-hover:cursor-pointer
          duration-250 ${className} `}
      >
        {children}
      </button>
      <div
        className="absolute w-[0%] group-hover:w-[100%] h-1 bg-primary group-hover:bg-primary-dark
          top-[90%] rounded-2xl duration-250"
      ></div>
    </div>
  );
}

export default LinkEffect;
