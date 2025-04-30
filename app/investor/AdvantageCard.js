function AdvantageCard({ icon, title, description, color }) {
  return (
    <div
      className="max-w-10/12 sm:max-w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden
        group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
        h-full"
    >
      <div className={`bg-gradient-to-r ${color} p-6 flex justify-center`}>
        <div
          className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center
            group-hover:scale-110 transition-transform"
        >
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
}

export default AdvantageCard;
