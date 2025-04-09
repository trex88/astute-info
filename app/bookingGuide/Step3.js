function Step3() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center">
      <div className="relative mb-6">
        <div
          className="h-32 w-32 bg-gradient-to-tr from-primary via-secondary to-primary rounded-full
            flex items-center justify-center shadow-lg"
        >
          <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
          <span className="text-white text-6xl font-bold">3</span>
        </div>
        <div className="absolute -bottom-3 right-0 h-8 w-8 bg-primary/20 rounded-full animate-pulse"></div>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
        Check Availability
      </h3>
      <p className="text-gray-500 text-center text-sm lg:text-base xl:text-lg">
        Find a time that works for you
      </p>
    </div>
  );
}

export default Step3;
