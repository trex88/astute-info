import FAQItem from "./FAQItem";

function FAQSection() {
  return (
    <section>
      <h2 className="text-5xl font-bold mt-30 ml-20">
        Frequently Asked Questions (FAQs)
      </h2>
      <ul className="max-w-[70%] ml-20">
        <FAQItem question="What services does AstuteInfo offer, and how can they benefit my business?">
          AstuteInfo provides AI-driven financial technology solutions,
          including AI-powered payment switch technology, customizable SaaS
          platforms, and AI solutions for various industries. These services
          enhance transaction speed, security, and efficiency while offering
          tailored platforms that drive innovation and improve customer
          experiences.
        </FAQItem>
        <FAQItem question="What industries does AstuteInfo serve, and what businesses can benefit from its solutions?">
          AstuteInfo caters to industries such as finance, retail, e-commerce,
          digital marketing, logistics, and healthcare. Businesses in these
          sectors benefit from AI-driven solutions that optimize operations,
          improve decision-making, and enhance customer engagement.
        </FAQItem>
        <FAQItem question="How does AstuteInfo ensure data security and regulatory compliance?">
          AstuteInfo prioritizes data security through robust encryption, secure
          cloud solutions, and adherence to industry-standard security
          protocols. Our solutions comply with regulatory requirements, helping
          businesses meet legal standards and maintain customer trust.
        </FAQItem>
        <FAQItem question="What makes AstuteInfo’s AI-powered payment switch technology unique?">
          AstuteInfo’s AI-powered payment switch technology delivers superior
          transaction speed, security, and efficiency. It enables seamless
          integration with various payment platforms, ensuring a smooth, secure,
          and optimized customer payment experience.
        </FAQItem>
        <FAQItem question="How can AstuteInfo solutions be integrated with existing systems and third-party tools?">
          AstuteInfo offers flexible, cloud-agnostic solutions designed for easy
          integration with existing systems and third-party tools. Our team
          ensures a smooth transition with minimal disruption, maximizing the
          benefits of AI technology for your business.
        </FAQItem>
        <FAQItem question="What customization and scalability options does AstuteInfo offer?">
          AstuteInfo provides fully customizable SaaS platforms, AI algorithms,
          and software solutions tailored to your business needs. Our technology
          is designed to scale with your growth, ensuring long-term adaptability
          and performance.
        </FAQItem>
        <FAQItem question="What kind of support and training does AstuteInfo provide?">
          AstuteInfo offers 24/7 technical support, dedicated account
          management, and comprehensive training programs to ensure your team
          can effectively utilize our solutions. We also provide ongoing updates
          and optimization services.
        </FAQItem>
        <FAQItem question="How does AstuteInfo approach AI innovation and reliability?">
          AstuteInfo stays ahead of industry trends through continuous research
          and development. We ensure the reliability of our AI models through
          rigorous testing, real-time monitoring, and regular updates to
          maintain accuracy, adaptability, and superior performance.
        </FAQItem>
      </ul>
    </section>
  );
}

export default FAQSection;
