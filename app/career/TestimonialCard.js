import Image from "next/image";

function TestimonialCard({ src, alt, name, role, testimonial }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <blockquote className="italic text-gray-600 mb-4 text-3xs lg:text-lg">
        <q>{testimonial}</q>
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="size-10 lg:size-12 rounded-full relative">
          <Image className="rounded-full" src={src} alt={alt} />
        </div>
        <div>
          <p className="font-bold text-3xs lg:text-lg">{name}</p>
          <p className="text-sm lg:text-lg text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
