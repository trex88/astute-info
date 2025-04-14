function Card({ children, className }) {
  return (
    <div
      className={`rounded-lg ring-2 ring-primary ${className ? "" : "py-5 pl-5 pr-4"} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
