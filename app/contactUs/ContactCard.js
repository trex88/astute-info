import { LuChevronRight } from "react-icons/lu";

// Component for contact cards in the hero section
function ContactCard({ icon, title, description, buttonText }) {
  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col
        h-full relative group"
    >
      {/* Decorative bottom border that animates on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent
          via-primary/0 to-transparent group-hover:via-primary/50 transition-all
          duration-300"
      ></div>

      <div
        className="bg-primary/10 size-12 lg:size-14 rounded-full flex items-center justify-center
          mb-4 group-hover:scale-110 transition-transform"
      >
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 flex-grow text-base sm:text-lg">
        {description}
      </p>
      <button
        type="button"
        className="text-primary mx-auto text-base sm:text-lg font-medium hover:text-blue-500
          hover:cursor-pointer flex items-center gap-1 transition-all"
      >
        {buttonText}
        <LuChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

export default ContactCard;
