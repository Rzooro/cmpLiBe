import React from "react";
import ImpactStories from "./ImpactStories.jsx";
import ban from "../../assets/aboutUs/banner.png";
import t1 from "../../assets/aboutUs/thumb1.jpg";
import t2 from "../../assets/aboutUs/thumb2.jpg";
import ban2 from "../../assets/aboutUs/banner2.png";
import { FaPlay } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section
        className="w-full min-h-[70vh] flex items-center justify-center px-6 md:px-20 py-20"
        style={{ backgroundImage: `url(${ban})` }}>
        <h1 className="text-3xl md:text-6xl font-bold text-center text-white leading-tight">
          WHERE POTENTIAL MEETS <br />
          OPPORTUNITY IN EVERY PINCODE
        </h1>
      </section>

      {/* ================= VIDEO STORY SECTION ================= */}
      <section className="w-full py-16 px-6 md:px-20 bg-linear-to-br from-sky-500 to-sky-700 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Video Thumbnail 1 */}
          <iframe
            width="620"
            height="360"
            src="https://www.youtube.com/embed/EFk8-ihhaT0?si=8c5kF7QsozPzuD2W"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-2xl"></iframe>

          {/* Text */}
          <div className="flex gap-4 items-center">
            <FaPlay className="size-5 md:size-6" />
            <h2 className="text-xl md:text-3xl font-semibold max-w-2xl">
              cMPLiBe was born not just from an idea, but from empathy, outrage
              and purpose.
            </h2>
          </div>
        </div>

        {/* Second Story Row */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          {/* Text */}
          <div className="flex gap-4 items-center">
            <FaPlay className="size-5 md:size-6" />
            <h2 className="text-xl md:text-3xl font-semibold max-w-2xl">
              My story began in a small town classroom where talent overflowed,
              but opportunities didn't.
            </h2>
          </div>

          {/* Video Thumbnail 2 */}
          <iframe
            width="620"
            height="360"
            src="https://www.youtube.com/embed/cqM19MQsipQ?si=xdkrXccZ5eMAV3B8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-2xl"></iframe>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="w-full py-20 px-6 md:px-20 bg-[#063B6E] text-white flex flex-col items-center gap-8">
        <div className="max-w-7xl">
          <p className="text-lg md:text-3xl leading-relaxed">
            At cMPLiBe, our mission is to create cMPLi futuREadi earliTalent®
            from every pincode of Bharat. The numbers tell a story far beyond
            statistics. Each figure represents lives transformed, families
            uplifted, institutes empowered and companies & opportunities served.
          </p>
        </div>
      </section>

      {/* ================= IMPACT METRICS SECTION ================= */}
      <section className="relative overflow-hidden w-full py-20 pb-60 px-6 md:px-20">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-position-[center_65%] bg-no-repeat opacity-40 scale-110"
          style={{ backgroundImage: `url(${ban2})` }}></div>

        {/* Optional Color Overlay (Recommended for readability) */}
        <div className="absolute inset-0 bg-[rgba(6,59,110,0.65)]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl text-white flex flex-col gap-24">
          <h2 className="text-2xl md:text-5xl font-bold mb-10">
            The game started 15 years ago
          </h2>

          <ul className="space-y-18 md:text-3xl">
            <li className="flex items-start gap-4">
              <IoMdArrowDroprightCircle className="mt-1 shrink-0" />
              <span>
                <strong>230 thousand+</strong> learning minutes delivered
              </span>
            </li>

            <li className="flex items-start gap-4">
              <IoMdArrowDroprightCircle className="mt-1 shrink-0" />
              <span>
                <strong>9000+</strong> real-world opportunities curated &
                presented
              </span>
            </li>

            <li className="flex items-start gap-4">
              <IoMdArrowDroprightCircle className="mt-1 shrink-0" />
              <span>
                <strong>3300+</strong> students’ learning behaviours decoded
              </span>
            </li>

            <li className="flex items-start gap-4">
              <IoMdArrowDroprightCircle className="mt-1 shrink-0" />
              <span>
                <strong>INR 600 Cr</strong> cumulative incremental income added
              </span>
            </li>

            <li className="flex items-start gap-4">
              <IoMdArrowDroprightCircle className="mt-1 shrink-0" />
              <span>
                <strong>300+</strong> companies’ hiring bytes fulfilled
              </span>
            </li>

            <li className="flex items-start gap-4">
              <IoMdArrowDroprightCircle className="mt-1 shrink-0" />
              <span>
                <strong>36+</strong> diverse sectors served
              </span>
            </li>

            <li className="flex items-start gap-4">
              <IoMdArrowDroprightCircle className="mt-1 shrink-0" />
              <span>
                <strong>36+</strong> higher education institution partners
              </span>
            </li>

            <li className="flex items-start gap-4">
              <IoMdArrowDroprightCircle className="mt-1 shrink-0" />
              <span>
                <strong>25+</strong> tier II & III cities/towns and counting...
              </span>
            </li>
          </ul>
        </div>
      </section>

      <ImpactStories />
    </div>
  );
};

export default AboutUs;
