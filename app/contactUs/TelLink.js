function TelLink({ country, tel, color, children }) {
  return (
    <p className="text-2xl">
      {country}: {""}
      <a href={`tel:${tel}`} className={`text-${`[${color}]`} duration-250`}>
        {children}
      </a>
    </p>
  );
}

export default TelLink;
