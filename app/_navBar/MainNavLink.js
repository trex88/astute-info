function MainNavLink({
  children,
  toggleDropdown,
  dropdownName,
  activeDropdown,
}) {
  return (
    <div className="relative group">
      <button
        type="button"
        onClick={() => toggleDropdown(dropdownName)}
        className={`flex text-3xs xl:text-lg items-center hover:cursor-pointer gap-1 px-3 py-2
          rounded-md transition-all duration-200 ${
          activeDropdown === dropdownName
              ? "text-primary bg-primary/5 "
              : "text-gray-700 hover:text-primary hover:bg-gray-50"
          }`}
      >
        {children}
      </button>

      {/* Dropdown indicator line */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all
          duration-300 ${activeDropdown === dropdownName ? "w-full" : "w-0"}`}
      ></div>
    </div>
  );
}

export default MainNavLink;
