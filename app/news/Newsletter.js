function Newsletter() {
  return (
    <section className="bg-primary/5 rounded-xl p-8 md:p-15 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">
        Stay Updated with AstuteInfo News
      </h2>
      <p className="text-gray-600 mb-6 text-base md:text-lg">
        Subscribe to our newsletter to receive the latest updates, industry
        insights, and exclusive content directly to your inbox.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex h-11 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm
            md:text-lg ring-offset-background placeholder:text-neutral-500
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
            disabled:cursor-not-allowed disabled:opacity-50"
        />
        <button
          className="bg-primary hover:bg-primary/90 hover:cursor-pointer duration-200 rounded-lg px-5
            py-3 font-medium text-white"
          type="button"
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default Newsletter;
