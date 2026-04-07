import React from "react";
import ImpactStories from "./ImpactStories.jsx";
import ban from "../../assets/aboutUs/banner.png";
import ban2 from "../../assets/aboutUs/banner2.jpg";
import { FaPlay } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className="w-full font-sans bg-[#f8fafc]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-[#002845]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
          style={{ backgroundImage: `url(${ban})` }}
        />
        {/* Deep Blue Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002845]/80 via-[#004270]/60 to-[#002845]/90 mix-blend-multiply" />

        <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col items-center pt-20 lg:pt-28 xl:pt-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white drop-shadow-xl uppercase leading-tight xl:leading-tight">
            Where Potential Meets <br className="hidden md:block" />
            <span className="text-sky-300">Opportunity in Every Pincode</span>
          </h1>
          <div className="w-16 lg:w-20 xl:w-24 h-1 lg:h-1.5 bg-[#f47920] mt-6 lg:mt-8 rounded-full shadow-[0_0_15px_rgba(244,121,32,0.5)]"></div>
        </div>
      </section>

      {/* ================= VIDEO STORY SECTION ================= */}
      <section className="w-full py-12 lg:py-16 xl:py-24 px-6 lg:px-12 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16 xl:gap-24">
          {/* Story 1 */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
            {/* Video Container - Balanced aspect ratio */}
            <div className="w-11/12 aspect-video rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] border-4 lg:border-[6px] border-gray-50 bg-gray-100">
              <iframe
                src="https://www.youtube.com/embed/oD4L5Np85qE?si=Wd8TtauN2055uH1V"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"></iframe>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6 text-center lg:text-left items-center lg:items-start">
              <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#f47920]/10 rounded-full flex items-center justify-center mb-1">
                <FaPlay className="text-[#f47920] text-lg lg:text-md xl:text-2xl ml-1" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-[#004270] leading-tight xl:leading-snug">
                cMPLiBe was born not just from an idea, but from{" "}
                <span className="text-[#f47920]">
                  empathy, outrage and purpose.
                </span>
              </h2>
            </div>
          </div>

          {/* Story 2 (Reversed on Desktop) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
              <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#00a3e0]/10 rounded-full flex items-center justify-center mb-1">
                <FaPlay className="text-[#00a3e0] text-lg lg:text-md xl:text-2xl ml-1" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-[#004270] leading-tight xl:leading-snug">
                My story began in a small town classroom where talent
                overflowed,{" "}
                <span className="text-[#00a3e0]">
                  but opportunities didn't.
                </span>
              </h2>
            </div>

            {/* Video Container */}
            <div className="w-11/12 aspect-video rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] border-4 lg:border-[6px] border-gray-50 bg-gray-100 order-1 lg:order-2">
              <iframe
                src="https://www.youtube.com/embed/P4Z624UYLUI?si=AYEh-rdvocVoXuod"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="w-full py-12 lg:py-16 xl:py-28 px-6 lg:px-12 xl:px-20 bg-gradient-to-r from-[#002845] via-[#004270] to-[#002845] text-white flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 xl:w-96 xl:h-96 bg-[#f47920] rounded-full opacity-10 blur-[100px] xl:blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 xl:w-96 xl:h-96 bg-[#00a3e0] rounded-full opacity-10 blur-[100px] xl:blur-[150px] pointer-events-none"></div>

        <div className="max-w-5xl xl:max-w-6xl text-center relative z-10">
          <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-normal font-light">
            At cMPLiBe, our mission is to create{" "}
            <span className="font-semibold text-[#f47920]">
              cMPLi futuREadi earliTalent®
            </span>{" "}
            from every pincode of Bharat. The numbers tell a story far beyond
            statistics. Each figure represents lives transformed, families
            uplifted, institutes empowered and companies & opportunities served.
          </p>
        </div>
      </section>

      {/* ================= IMPACT METRICS SECTION ================= */}
      <section className="relative overflow-hidden w-full py-12 lg:py-10 xl:py-24 px-4 lg:px-10 xl:px-20 bg-[#001f36]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: `url(${ban2})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001f36] via-[#002845]/80 to-[#001f36]"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-6 lg:mb-10 xl:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight drop-shadow-md">
              The game started{" "}
              <span className="text-[#f47920]">15 years ago</span>
            </h2>
            <div className="w-16 xl:w-20 h-1 lg:h-1.5 bg-[#00a3e0] mt-3 lg:mt-4 xl:mt-6 mx-auto rounded-full"></div>
          </div>

          {/* Kept EXACTLY 2 Columns. Extremely compressed padding to fit in one scroll on lg laptops */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 xl:gap-8 w-full">
            {[
              { num: "230K+", text: "learning minutes delivered" },
              { num: "9,000+", text: "opportunities curated & presented" },
              { num: "3,300+", text: "students’ learning behaviours decoded" },
              {
                num: "INR 600 Cr",
                text: "cumulative incremental income added",
              },
              { num: "300+", text: "companies’ hiring bytes fulfilled" },
              { num: "36+", text: "diverse sectors served" },
              { num: "36+", text: "higher education institution partners" },
              {
                num: "25+",
                text: "tier II & III cities/towns and counting...",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 lg:gap-4 xl:gap-6 p-4 lg:p-5 xl:p-8 bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 group shadow-lg">
                <div className="bg-[#f47920]/20 p-2.5 xl:p-4 rounded-full group-hover:bg-[#f47920] transition-colors duration-300 shrink-0">
                  <IoMdArrowDroprightCircle className="text-[#f47920] group-hover:text-white text-2xl lg:text-3xl xl:text-4xl transition-colors duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl lg:text-2xl xl:text-4xl font-bold text-white tracking-tight">
                    {item.num}
                  </span>
                  <span className="text-sky-200/90 text-xs lg:text-sm xl:text-lg font-medium mt-0.5 xl:mt-1.5 leading-tight">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT STORIES ================= */}
      <ImpactStories />
    </div>
  );
};

export default AboutUs;
