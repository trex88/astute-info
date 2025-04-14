function Button({
  children,
  extraPadding,
  type,
  color = "#5DADD2",
  className,
  onClick,
}) {
  return (
    <button
      type={type}
      className={`${extraPadding ? "p-[16px_32px]" : "p-4"} duration-200 hover:bg-[#24647F]
        hover:text-[#ffffff] uppercase flex cursor-pointer items-center justify-center
        rounded-xl bg-${`[${color}]`} shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]
        active:shadow-none active:translate-[2px] ${className}`}
      onClick={onClick}
    >
      <p className="font-bold lg:text-2xl">{children}</p>
    </button>
  );
}

export default Button;
