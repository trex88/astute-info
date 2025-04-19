// Core Value Card Component
function CoreValueCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow group">
      <div
        className="size-14 md:size-15 bg-primary/10 rounded-full flex items-center justify-center
          mb-6 group-hover:bg-primary/20 transition-colors"
      >
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
        {title}
      </h3>
      <p className="text-base md:text-lg text-gray-600">{description}</p>
    </div>
  );
}
export default CoreValueCard;
