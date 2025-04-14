function Step4() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center">
      <div className="relative mb-6">
        <div
          className="h-32 w-32 bg-gradient-to-bl from-secondary to-primary rounded-full flex
            items-center justify-center shadow-lg"
        >
          <div className="absolute inset-0 rounded-full border-dashed border-4 border-white/40"></div>
          <span className="text-white text-6xl font-bold">4</span>
        </div>
        <div className="absolute -top-3 -left-3 h-10 w-10 bg-secondary/20 rounded-full"></div>
        <div className="absolute -bottom-3 -right-3 h-10 w-10 bg-primary/20 rounded-full"></div>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
        Book Service
      </h3>
      <p className="text-gray-500 text-center text-sm lg:text-base xl:text-lg">
        Confirm your booking details
      </p>
    </div>
  );
}

export default Step4;
