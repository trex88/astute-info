import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import imageAITraining from "@/public/images/AI-training.png";
import imageAIConsulting from "@/public/images/AI-consulting.png";
import imageAIWorkshop from "@/public/images/AI-workshop.png";

function HomeServices() {
  return (
    <section className="pt-20 pb-30 bg-white relative overflow-hidden">
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
                src={imageAITraining}
                alt="AI Training"
                fill
                sizes="500px"
                className="object-cover object-center group-hover:scale-110 transition-transform
                  duration-700"
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
                href="aiTraining"
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
                src={imageAIConsulting}
                alt="AI Consulting"
                fill
                sizes="500px"
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
                href="aiConsulting"
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
                src={imageAIWorkshop}
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
                href="aiWorkshops"
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
      </div>
    </section>
  );
}

export default HomeServices;
