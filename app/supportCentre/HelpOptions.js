import HelpItem from "./HelpItem";

function HelpOptions() {
  return (
    <section>
      <h2 className="text-5xl font-bold mt-30 ml-20">
        What are you looking for?
      </h2>
      <div className="grid grid-cols-2 mt-15 max-w-[50%] mx-auto gap-20">
        <HelpItem to="contactUs">Contact Us</HelpItem>
        <HelpItem to="cancellationOptions">Cancellation Options</HelpItem>
      </div>
    </section>
  );
}

export default HelpOptions;
