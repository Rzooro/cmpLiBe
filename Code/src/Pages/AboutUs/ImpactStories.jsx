import React, { useState, useEffect } from "react";
import nandesh from "../../assets/aboutUs/nandesh.png";
import kavya from "../../assets/aboutUs/kavya.png";
import swananda from "../../assets/aboutUs/swananda.png";

const stories = [
  {
    name: "Nandesh Naik",
    img: nandesh,
    content:
      "From no English and no background in business to a researcher of calibre – from Research Analyst @Redseer Consulting to being the senior consultant at The Business Research Company”, I couldn’t have asked for more in this life. It was only because of my early career success and my income from salary that I could transform our age-old kaccha house to a pucca house within the first 3 years of my work-life. I now happily work-from-home, managing both – my farm & my corporate life.",
  },
  {
    name: "Kavya MG",
    img: kavya,
    content: "Breaking barriers and decoding learning behaviours...",
  },
  {
    name: "Swananda Hegde",
    img: swananda,
    content: "Transforming opportunity access across regions...",
  },
];

const ImpactStories = () => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % stories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="w-full py-20 px-6 md:px-20 text-center bg-sky-700">
      {/* ===== Photos + Names ===== */}
      <div className="flex justify-center gap-52 mb-16 relative">
        {stories.map((story, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setActive(index);
              setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            className="flex flex-col items-center cursor-pointer transition-all duration-300">
            <img
              src={story.img}
              alt={story.name}
              className={`w-32 h-32 rounded-full object-cover transition-all duration-300 
              ${
                active === index
                  ? "scale-110 ring-4 ring-orange-500 shadow-lg"
                  : "opacity-60 hover:opacity-80"
              }`}
            />

            <p
              className={`mt-4 font-semibold transition-all duration-300 text-lg 
              ${active === index ? "text-white" : "text-gray-400"}`}>
              {story.name}
            </p>
          </div>
        ))}
      </div>

      {/* ===== Content Section ===== */}
      <div className="relative max-w-5xl mx-auto">
        {/* Arrow */}
        <div
          className="absolute -top-10 w-0 h-0 border-l-12 border-r-12 border-b-12 border-l-transparent border-r-transparent border-b-orange-500 transition-all duration-500 ease-in-out"
          style={{
            left: `${(active / stories.length) * 100 + 100 / (stories.length * 2)}%`,
            transform: "translateX(-50%)",
          }}
        />

        {/* Content Box */}
        <div className="bg-white shadow-xl rounded-xl p-8 transition-all duration-500 ease-in-out">
          <h3 className="text-2xl font-bold mb-4 transition-opacity duration-300">
            {stories[active].name}
          </h3>

          <p className="text-gray-600 text-xl leading-relaxed transition-opacity duration-300">
            {stories[active].content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
