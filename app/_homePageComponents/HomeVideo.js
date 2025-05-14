function HomeVideo({ demoSectionRef }) {
  return (
    <section
      className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white
        relative scroll-mt-22"
      ref={demoSectionRef}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(93, 173, 210, 0.3) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#6ee7b7]/10 rounded-tr-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div
            className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20
              px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            See It In Action
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How AstuteInfo Transforms Finance
          </h2>
          <p className="text-xl text-gray-300">
            Watch our demo to see how our AI solutions are revolutionizing the
            financial industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <iframe
            className="w-full h-96 rounded-2xl"
            src="https://www.youtube.com/embed/LLaMK9vCzzo?si=-AHOmFPHhjkQy2e7"
            title="AstuteInfo AI Finance presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default HomeVideo;
