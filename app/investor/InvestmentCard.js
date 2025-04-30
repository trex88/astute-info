function InvestmentCard({ icon, title, description, index }) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group
        hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
        h-full"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="p-8">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              {title}
            </h3>
            <p className="text-base md:text-lg text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentCard;
