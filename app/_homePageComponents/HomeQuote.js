import { Users } from "lucide-react";

function HomeQuote() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white
        relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="smallGrid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <blockquote
            className="text-2xl md:text-3xl font-light italic px-10 text-center tracking-normal
              md:tracking-wide leading-relaxed"
          >
            {`"AI is not about replicating human intelligence, but about
                  augmenting it, allowing us to transcend our limitations and
                  unlock new possibilities we never thought possible"`}
          </blockquote>

          <div className="mt-10 flex items-center justify-center">
            <div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex
                items-center gap-4"
            >
              <div
                className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-[#6ee7b7] flex
                  items-center justify-center"
              >
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="font-bold text-white">Vance Huynh</p>
                <p className="text-gray-300">CEO of AstuteInfo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeQuote;
