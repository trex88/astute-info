import {
  AlertTriangle,
  BarChart3,
  Brain,
  CheckCircle,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import financeAI from "@/public/images/AIFinance.png";

const features = [
  {
    icon: <Brain className="h-7 w-7" />,
    title: "Empowers smarter investment strategies",
    description:
      "Our AI-powered analytics provide deep insights and recommendations to optimize investment decisions and portfolio management.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Specializes in secure AI for finance & government",
    description:
      "We develop robust, compliant AI solutions specifically designed for the unique security requirements of financial institutions and government agencies.",
  },
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Automates financial processes & analytics",
    description:
      "Streamline operations and gain valuable insights with our automated financial processing and advanced analytics solutions.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Ensures top-tier cybersecurity",
    description:
      "Our comprehensive cybersecurity solutions protect your sensitive financial data and systems from evolving threats and vulnerabilities.",
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Optimizes resources and cuts costs",
    description:
      "Identify inefficiencies and reduce operational expenses with our AI-driven resource optimization and cost management tools.",
  },
  {
    icon: <AlertTriangle className="h-7 w-7" />,
    title: "Enables fraud detection and risk analysis",
    description:
      "Detect and prevent fraudulent activities while assessing potential risks with our advanced AI-powered monitoring and analysis systems.",
  },
];

function HomeFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-11/12 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full text-sm
              font-medium text-primary mb-4"
          >
            Our Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Transforming Finance with AI
          </h2>
          <p className="text-xl text-gray-600">
            Discover how our AI solutions are revolutionizing the financial
            industry with innovative approaches and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Feature Selector */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-2xl p-8 shadow-lg">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                        ? "bg-white rounded-xl shadow-md p-6 border-l-4 border-primary"
                        : "p-4 opacity-60 hover:opacity-80"
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`rounded-full p-3 ${
                        activeFeature === index
                            ? "bg-primary/10 text-primary"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3
                          className={`font-bold mb-2 ${activeFeature === index ? "text-gray-900" : "text-gray-600"}`}
                        >
                          {feature.title}
                        </h3>
                        {activeFeature === index && (
                          <p className="text-gray-600 animate-fade-in">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Visualization */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl shadow-xl">
                <Image
                  src={financeAI}
                  alt="AI in Finance"
                  className="rounded-2xl"
                />
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg z-20 transform
                  rotate-3 animate-float"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-800 font-medium text-sm">
                    99.9% Accuracy
                  </span>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg z-20 transform
                  -rotate-3 animate-float-delayed"
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-gray-800 font-medium text-sm">
                    Real-time Analysis
                  </span>
                </div>
              </div>

              {/* Background Elements */}
              <div
                className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  w-full h-full"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#6ee7b7]/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFeatures;
