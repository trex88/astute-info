function Step1() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center">
      <div className="relative mb-6">
        <div
          className="size-32 bg-gradient-to-br from-primary to-secondary rounded-full flex
            items-center justify-center shadow-lg"
        >
          <span className="text-white text-6xl font-bold">1</span>
        </div>
        <div className="absolute -top-2 -right-2 size-8 bg-white rounded-full border-4 border-primary"></div>
        <div
          className="absolute -bottom-2 -left-2 size-6 bg-white rounded-full border-4
            border-secondary"
        ></div>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
        Browse Services
      </h3>
      <p className="text-gray-500 text-center text-sm lg:text-base xl:text-lg">
        Find the perfect service for your needs
      </p>
    </div>
  );
}

export default Step1;
