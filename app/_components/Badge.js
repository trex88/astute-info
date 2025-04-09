function Badge({ children, className, textColor }) {
  return (
    <div
      className={`${className} inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold
        transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
        ${textColor || "text-white"}`}
    >
      {children}
    </div>
  );
}

export default Badge;
