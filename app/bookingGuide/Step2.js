function Step2() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center">
      <div className="relative mb-6">
        <div
          className="size-32 bg-gradient-to-br from-secondary to-primary rounded-full flex
            items-center justify-center shadow-lg"
        >
          <span className="text-white text-6xl font-bold">2</span>
        </div>
        <div className="absolute top-1/2 -right-3 size-10 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-1/4 -left-3 size-6 bg-primary/20 rounded-full"></div>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
        Select Service
      </h3>
      <p className="text-gray-500 text-center text-sm lg:text-base xl:text-lg">
        Choose the service that fits your needs
      </p>
    </div>
  );
}

export default Step2;
