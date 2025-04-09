function AIInfoCard({ heading, context }) {
  return (
    <div className="group absolute top-0 h-[100%] w-[100%] overflow-hidden rounded-b-xl">
      <div
        className="absolute inset-0 top-[85%] items-start bg-[rgba(217,217,217,0.7)] duration-150
          rounded-b-xl group-hover:rounded-xl backdrop-blur-xl py-2 group-hover:top-0"
      >
        <h2 className="text-4xl tracking-tight text-center font-bold mt-3">
          {heading}
        </h2>
        <p className="text-2xl mt-3 px-5 tracking-wide">{context}</p>
      </div>
    </div>
  );
}

export default AIInfoCard;
