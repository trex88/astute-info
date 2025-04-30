function ContactDetail({ icon, h3, p, type }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-800">
          {h3}
        </h3>
        {type === "phone" && (
          <a
            href="tel:+1 (555) 123-4567"
            className="text-gray-600 text-base md:text-lg hover:text-primary/90 duration-150"
          >
            {p}
          </a>
        )}
        {type === "email" && (
          <a
            href="mailto:info@astuteinfo.com"
            className="text-gray-600 text-base md:text-lg hover:text-primary/90 duration-150"
          >
            {p}
          </a>
        )}
        {!type && <p className="text-gray-600 text-base md:text-lg">{p}</p>}
      </div>
    </div>
  );
}

export default ContactDetail;
