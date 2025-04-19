import AccordionItem from "./ContactAccordionItem";

// Components for regions accordion
function RegionAccordion({ regions }) {
  return (
    <div className="space-y-4">
      {regions.map((region, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <AccordionItem region={region} />
        </div>
      ))}
    </div>
  );
}

export default RegionAccordion;
