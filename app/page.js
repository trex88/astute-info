"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Brain,
  Shield,
  BarChart3,
  Zap,
  AlertTriangle,
  Users,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Send,
  CheckCircle,
  ArrowUpRight,
  Play,
  ChevronDown,
} from "lucide-react";
import heroImg from "@/public/images/homeHero.png";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Handle scroll for animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br
          from-[#0f172a] via-[#1e293b] to-[#0f172a]"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Elements */}
          <div
            className="absolute top-1/4 left-1/4 size-64 rounded-full bg-primary/20 blur-3xl
              animate-float"
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 size-80 rounded-full bg-[#6ee7b7]/20 blur-3xl
              animate-float-delayed"
          ></div>

          {/* Animated Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5dadd2" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0,128 C320,213.3 320,42.7 640,128 C960,213.3 960,42.7 1280,128 L1280,720 L0,720 Z"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              className="animate-wave"
            />
            <path
              d="M0,128 C320,213.3 320,42.7 640,128 C960,213.3 960,42.7 1280,128 L1280,720 L0,720 Z"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="10,5"
              className="animate-wave-delayed"
              opacity="0.5"
              transform="translate(0, 50)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20 pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 px-3">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20
                  px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="bg-primary h-2 w-2 rounded-full mr-2"></span>
                WELCOME TO ASTUTEINFO
              </div>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white
                  animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                Empowering Those Who Drive{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Global Progress</span>
                  <span
                    className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-primary to-[#6ee7b7]
                      opacity-40 rounded-lg -z-0"
                  ></span>
                </span>
              </h1>
              <p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                Leveraging cutting-edge AI technologies to enhance efficiency,
                productivity, and security in the finance industry.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <Link
                  href="/register-trial"
                  className="group bg-gradient-to-r from-primary to-[#6ee7b7] text-white px-8 py-4
                    rounded-full font-medium transition-all duration-300 flex items-center
                    justify-center gap-2 shadow-lg hover:shadow-primary/20 hover:shadow-xl transform
                    hover:-translate-y-1"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#"
                  className="group bg-white/10 hover:bg-white/20 border border-white/40 text-white px-8 py-4
                    rounded-full font-medium transition-all duration-300 flex items-center
                    justify-center gap-2 backdrop-blur-sm transform hover:-translate-y-1"
                >
                  <Play className="h-4 w-4" />
                  Watch Demo
                </Link>
              </div>

              {/* Stats */}
              <div
                className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 animate-fade-in"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">200+</div>
                  <div className="text-sm text-gray-400">Global Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* 3D-like Hero Visual */}
            <div
              className="lg:w-1/2 relative animate-fade-in mx-4 sm:mx-2"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="relative">
                {/* Main Image */}
                <div
                  className="relative z-20 rounded-2xl overflow-hidden shadow-2xl transform rotate-3
                    hover:rotate-0 transition-transform duration-500"
                >
                  <Image
                    src={heroImg}
                    alt="AI Technology"
                    className="w-full h-auto"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-[#6ee7b7]/10
                      mix-blend-overlay"
                  ></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-2xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#6ee7b7]/30 rounded-full blur-2xl -z-10"></div>

                {/* Floating Cards */}
                <div
                  className="absolute -top-10 -left-10 bg-white/10 backdrop-blur-md rounded-lg p-4 border
                    border-white/20 shadow-xl z-30 transform -rotate-6 animate-float"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Brain className="size-5 sm:size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm lg:text-base">
                        AI-Powered
                      </h3>
                      <p className="text-gray-300 text-xs lg:text-sm">
                        Advanced algorithms
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md rounded-lg p-4 border
                    border-white/20 shadow-xl z-30 transform rotate-6 animate-float-delayed"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-[#6ee7b7]/20 p-2 rounded-full">
                      <Shield className="size-5 sm:size-6 text-[#6ee7b7]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm lg:text-base">
                        Secure
                      </h3>
                      <p className="text-gray-300 text-xs lg:text-sm">
                        Enterprise-grade protection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/50" />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-500 font-medium">
              TRUSTED BY INDUSTRY LEADERS
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Replace with actual logos */}
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              Logo 1
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              Logo 2
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              Logo 3
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              Logo 4
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              Logo 5
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="AI in Finance"
                    width={600}
                    height={500}
                    className="w-full h-auto"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent
                      mix-blend-overlay"
                  ></div>
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

      {/* Quote Section - Unique Design */}
      <section
        className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white
          relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
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
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -top-10 left-0 text-9xl text-primary opacity-20">
                "
              </div>
              <div className="absolute -bottom-10 right-0 text-9xl text-primary opacity-20">
                "
              </div>
              <blockquote className="text-2xl md:text-3xl font-light italic px-10 text-center">
                "AI is not about replicating human intelligence, but about
                augmenting it, allowing us to transcend our limitations and
                unlock new possibilities we never thought possible"
              </blockquote>
            </div>
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
                  <p className="font-bold text-white">George Huynh</p>
                  <p className="text-gray-300">CEO of AstuteInfo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Unique Design */}
      <section
        id="services"
        className="py-20 bg-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5
              to-[#6ee7b7]/5 rounded-bl-full"
          ></div>
          <div
            className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5
              to-[#6ee7b7]/5 rounded-tr-full"
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div
              className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full text-sm
                font-medium text-primary mb-4"
            >
              Our Specialized Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              AI Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-600">
              Discover our comprehensive range of AI services designed to
              transform your organization and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            {/* AI Training */}
            <div
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl
                transition-all duration-500 transform hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/80 to-[#6ee7b7]/80 opacity-0
                  group-hover:opacity-100 transition-opacity duration-500 z-0"
              ></div>

              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="AI Training"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3
                  className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors
                    duration-500"
                >
                  AI Training
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors duration-500">
                  Comprehensive training programs to equip your team with the
                  knowledge and skills needed to leverage AI technologies
                  effectively.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div
                      className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-white/20 transition-colors
                        duration-500"
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                      Customized learning paths for different roles
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div
                      className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-white/20 transition-colors
                        duration-500"
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                      Hands-on practical exercises and case studies
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div
                      className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-white/20 transition-colors
                        duration-500"
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                      Industry-specific AI applications and use cases
                    </span>
                  </div>
                </div>

                <Link
                  href="/services/ai-training"
                  className="inline-flex items-center text-primary font-medium group-hover:text-white
                    transition-colors duration-500"
                >
                  Learn more
                  <ArrowUpRight
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1
                      transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>

            {/* AI Consulting */}
            <div
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl
                transition-all duration-500 transform hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/80 to-[#6ee7b7]/80 opacity-0
                  group-hover:opacity-100 transition-opacity duration-500 z-0"
              ></div>

              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="AI Consulting"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3
                  className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors
                    duration-500"
                >
                  AI Consulting
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors duration-500">
                  Expert guidance to help you develop and implement effective AI
                  strategies tailored to your business needs and objectives.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div
                      className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-white/20 transition-colors
                        duration-500"
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                      AI readiness assessment and roadmap development
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div
                      className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-white/20 transition-colors
                        duration-500"
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                      Technology selection and implementation planning
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div
                      className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-white/20 transition-colors
                        duration-500"
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                      ROI analysis and business case development
                    </span>
                  </div>
                </div>

                <Link
                  href="/services/ai-consulting"
                  className="inline-flex items-center text-primary font-medium group-hover:text-white
                    transition-colors duration-500"
                >
                  Learn more
                  <ArrowUpRight
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1
                      transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>

            {/* AI Workshops */}
            <div
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl
                transition-all duration-500 transform hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/80 to-[#6ee7b7]/80 opacity-0
                  group-hover:opacity-100 transition-opacity duration-500 z-0"
              ></div>

              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="AI Workshops"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3
                  className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors
                    duration-500"
                >
                  AI Workshops
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors duration-500">
                  Interactive workshops designed to explore specific AI topics,
                  solve real business challenges, and foster innovation within
                  your organization.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div
                      className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-white/20 transition-colors
                        duration-500"
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                      Focused, hands-on learning experiences
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div
                      className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-white/20 transition-colors
                        duration-500"
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                      Collaborative problem-solving sessions
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div
                      className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-white/20 transition-colors
                        duration-500"
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                      Customized to address your specific challenges
                    </span>
                  </div>
                </div>

                <Link
                  href="/services/ai-workshops"
                  className="inline-flex items-center text-primary font-medium group-hover:text-white
                    transition-colors duration-500"
                >
                  Learn more
                  <ArrowUpRight
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1
                      transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary
                to-[#6ee7b7] text-white rounded-full font-medium hover:shadow-lg
                hover:shadow-primary/20 transition-all duration-300 transform
                hover:-translate-y-1"
            >
              View All Services
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section
        id="video"
        className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white
          relative overflow-hidden"
      >
        {/* Background Elements */}
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

          <div className="relative max-w-4xl mx-auto">
            {/* Video Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="AstuteInfo Demo Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-5
                    transition-all duration-300 transform hover:scale-110"
                >
                  <Play className="h-10 w-10 text-white fill-white" />
                </button>
              </div>
            </div>

            {/* Video Caption */}
            <div
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white/10
                backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white/90
                text-sm"
            >
              3:45 min • See how AI is transforming financial services
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="ctaGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#5dadd2" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="#6ee7b7" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#5dadd2" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 C25,40 75,40 100,0 L100,100 L0,100 Z"
                fill="url(#ctaGradient)"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full text-sm
                    font-medium text-primary mb-4"
                >
                  Get Started Today
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join the hundreds of organizations that are already leveraging
                  our AI solutions to drive efficiency, reduce costs, and gain a
                  competitive edge.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Personalized Solutions
                      </h3>
                      <p className="text-gray-600">
                        Tailored to your specific business needs and objectives
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Expert Support
                      </h3>
                      <p className="text-gray-600">
                        Dedicated team of AI specialists to guide you every step
                        of the way
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Proven Results
                      </h3>
                      <p className="text-gray-600">
                        Demonstrated ROI and success stories across various
                        industries
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/register-trial"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary
                      to-[#6ee7b7] text-white rounded-full font-medium hover:shadow-lg
                      hover:shadow-primary/20 transition-all duration-300 transform
                      hover:-translate-y-1"
                  >
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white border
                      border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50
                      transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                            focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                            focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                            focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                            focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none
                          focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-[#6ee7b7] text-white py-3 px-6
                        rounded-md font-medium hover:shadow-lg transition-all duration-300 flex
                        items-center justify-center"
                    >
                      Submit <Send className="ml-2 h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
