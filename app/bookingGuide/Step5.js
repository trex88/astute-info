function Step5() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center">
      <div className="relative mb-6">
        <div
          className="h-32 w-32 bg-gradient-to-r from-primary via-secondary to-primary rounded-full
            flex items-center justify-center shadow-lg"
        >
          <div className="absolute inset-0 rounded-full border-4 border-white/20 transform rotate-45"></div>
          <div className="absolute inset-0 rounded-full border-4 border-white/20 transform -rotate-45"></div>
          <span className="text-white text-6xl font-bold">5</span>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 h-8 w-8 bg-secondary/30 rounded-full"></div>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
        Payment
      </h3>
      <p className="text-gray-500 text-center text-sm lg:text-base xl:text-lg">
        Secure and easy payment options
      </p>
    </div>
  );
}

export default Step5;
