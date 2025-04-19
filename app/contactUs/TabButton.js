// Component for tab buttons
function TabButton({ name, children, activeTab, setActiveTab }) {
  return (
    <button
      className={`px-6 py-4 text-sm sm:text-base lg:text-lg hover:cursor-pointer font-medium
        border-b-2 focus:outline-none ${
        activeTab === name
            ? "border-primary text-primary"
            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
        }`}
      onClick={() => {
        setActiveTab(name);
      }}
    >
      {children}
    </button>
  );
}

export default TabButton;
