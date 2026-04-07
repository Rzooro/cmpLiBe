import React, { useState, useEffect } from "react";
import nandesh from "../../assets/aboutUs/nandesh.png";
import kavya from "../../assets/aboutUs/lakshmi.png";
import swananda from "../../assets/aboutUs/swananda.png";

const stories = [
  {
    name: "Nandesh Naik",
    img: nandesh,
    content:
      "From no English and no background in business to a researcher of calibre – from Research Analyst @Redseer Consulting to being the senior consultant at The Business Research Company”, I couldn’t have asked for more in this life. It was only because of my early career success and my income from salary that I could transform our age-old kaccha house to a pucca house within the first 3 years of my work-life. I now happily work-from-home, managing both – my farm & my corporate life.",
  },
  {
    name: "Lakshmi Kulkarni",
    img: kavya,
    content:
      "A small-town girl with a growth mindset, Lakshmi turned limited exposure into global opportunity. At Stovekraft Ltd., she led product development for the international non-stick division, working closely with leadership to translate market insights into winning strategies while handling clients like Walmart and BigLots. She consistently exceeded sales targets, expanded buyer networks and strengthened export systems while driving new product launches and private-label extensions. Her overseas exposure, from business development meetings in China to global trade fairs and recent professional learning in Japan shaped her into a world-ready professional. Her journey is proof that potential can come from anywhere and that true talent is often discovered, not inherited.",
  },
  {
    name: "Swananda Hegde",
    img: swananda,
    content:
      "Raised in a small town and shaped by city education, Swananda turned determination into a bridge from modest beginnings to a high-impact corporate career. Armed with an MBA in Ecommerce and strong foundations in product, analytics and business planning, he built his way into Myntra, where he now drives revenue and growth through data-led strategy and cross-functional execution. His ongoing LLB further sharpens his problem-solving lens, helping him navigate the evolving intersections of business, technology and regulation. His journey reflects how ambition and learning can propel a small-town achiever into India’s digital commerce leadership landscape.",
  },
];

const ImpactStories = () => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % stories.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="w-full py-12 lg:py-16 xl:py-24 px-4 lg:px-12 xl:px-20 bg-[#001f36] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl xl:max-w-7xl h-[300px] xl:h-[500px] bg-[#004270] rounded-full opacity-30 blur-[120px] xl:blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl xl:max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10 xl:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
            Learner <span className="text-[#f47920]">Success Stories</span>
          </h2>
          <div className="w-16 xl:w-20 h-1 lg:h-1.5 bg-[#00a3e0] mt-3 lg:mt-4 xl:mt-6 mx-auto rounded-full"></div>
        </div>

        {/* ===== Avatars Grid (3 Columns) ===== */}
        <div className="grid grid-cols-3 gap-2 lg:gap-4 xl:gap-8 relative z-20 mb-6 lg:mb-10 xl:mb-14">
          {stories.map((story, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              onMouseEnter={() => {
                setActive(index);
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
              className="flex flex-col items-center cursor-pointer group">
              <img
                src={story.img}
                alt={story.name}
                className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-full object-cover transition-all duration-300 ${
                  active === index
                    ? "scale-110 ring-[3px] lg:ring-4 ring-[#f47920] shadow-[0_10px_25px_rgba(244,121,32,0.4)]"
                    : "opacity-60 grayscale-[20%] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                }`}
              />

              <p
                className={`mt-4 xl:mt-6 font-semibold tracking-wide text-center transition-all duration-300 text-xs lg:text-sm xl:text-lg ${
                  active === index
                    ? "text-white"
                    : "text-sky-200/60 group-hover:text-sky-200"
                }`}>
                {story.name}
              </p>
            </div>
          ))}
        </div>

        {/* ===== Content Section ===== */}
        <div className="relative w-full">
          {/* Connecting Arrow */}
          <div
            className="absolute -top-[12px] lg:-top-[14px] xl:-top-[18px] w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] lg:border-l-[14px] lg:border-r-[14px] lg:border-b-[14px] xl:border-l-[18px] xl:border-r-[18px] xl:border-b-[18px] border-l-transparent border-r-transparent border-b-white/95 transition-all duration-500 ease-in-out z-20 hidden md:block filter drop-shadow-[0_-4px_4px_rgba(0,0,0,0.05)]"
            style={{
              left: `${(active / stories.length) * 100 + 100 / (stories.length * 2)}%`,
              transform: "translateX(-50%)",
            }}
          />

          {/* Main White Content Box */}
          <div className="relative z-10 w-full bg-white/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-2xl lg:rounded-[2rem] xl:rounded-[2.5rem] p-6 lg:p-10 xl:p-14 transition-all duration-500 ease-in-out flex flex-col justify-center min-h-[220px] lg:min-h-[200px] xl:min-h-[260px]">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight text-[#004270] mb-3 lg:mb-4">
              {stories[active].name}
            </h3>

            <div className="w-10 xl:w-16 h-1 xl:h-1.5 bg-[#f47920] rounded-full mb-4 lg:mb-5 xl:mb-6"></div>

            <p className="text-gray-700 leading-relaxed xl:leading-loose text-sm lg:text-base xl:text-lg font-medium">
              {stories[active].content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
