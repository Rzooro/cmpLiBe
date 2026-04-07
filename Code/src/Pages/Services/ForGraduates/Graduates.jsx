import React from "react";
import { Link } from "react-router-dom";

import ban from "../../../assets/Services/ForGraduates/gban.png";
import img1 from "../../../assets/Services/ForGraduates/img1.jpeg";
import img2 from "../../../assets/Services/ForGraduates/img2.jpeg";
import ic1 from "../../../assets/Services/ForGraduates/or1.png";
import ic2 from "../../../assets/Services/ForGraduates/or2.png";
import ic3 from "../../../assets/Services/ForGraduates/or3.png";

function Graduates() {
  return (
    <div className="w-full font-sans bg-[#f8fafc]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-[#002845]">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
          style={{ backgroundImage: `url(${ban})` }}
        />
        {/* Deep Blue Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002845]/80 via-[#004270]/60 to-[#002845]/90 mix-blend-multiply" />

        {/* pt offset to clear the fixed navbar */}
        <div className="relative z-10 text-center text-white px-6 md:px-10 flex flex-col items-center pt-20 lg:pt-28 xl:pt-32 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-bold tracking-tight drop-shadow-xl uppercase leading-tight xl:leading-tight">
            Where Learning Is Continuous, <br className="hidden lg:block" />
            <span className="text-sky-300">Opportunities Thrive</span>
          </h1>

          <div className="w-16 lg:w-20 xl:w-24 h-1 lg:h-1.5 bg-[#f47920] mt-6 lg:mt-8 xl:mt-10 rounded-full shadow-[0_0_15px_rgba(244,121,32,0.5)]"></div>

          <Link
            to="/contact"
            state={{ category: "Student" }}
            className="mt-8 lg:mt-10 xl:mt-12 inline-block bg-[#f47920] hover:bg-[#d96617] text-white text-base lg:text-lg xl:text-xl px-8 lg:px-10 xl:px-12 py-3 lg:py-3.5 xl:py-4 rounded-full font-semibold shadow-[0_10px_25px_rgba(244,121,32,0.3)] hover:shadow-[0_15px_35px_rgba(244,121,32,0.4)] transition-all duration-300 hover:-translate-y-1">
            Explore more
          </Link>
        </div>
      </section>

      {/* ================= INTRO STRIP ================= */}
      <section className="bg-white py-10 lg:py-14 xl:py-24 px-6 md:px-12 text-center shadow-sm relative z-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-[#004270] leading-relaxed md:leading-relaxed xl:leading-normal">
            At cMPLiBe, we unite institutions, graduates and industry to build a
            generation defined by{" "}
            <span className="font-semibold text-[#f47920]">
              Learning Agility
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#004270]">Growth-Mindset</span>
            .
          </p>
        </div>
      </section>

      {/* ================= TRANSFORMING POTENTIAL SECTION ================= */}
      <section className="bg-gradient-to-b from-[#005086] via-[#003b73] to-[#001f36] px-6 lg:px-12 xl:px-20 py-12 lg:py-16 xl:py-28 relative overflow-hidden text-white">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] bg-[#00a3e0] rounded-full opacity-10 blur-[100px] lg:blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] bg-[#f47920] rounded-full opacity-10 blur-[100px] lg:blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16 xl:gap-24 relative z-10">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight drop-shadow-md">
              Transforming Potential{" "}
              <span className="text-[#f47920]">into Proof</span>
            </h2>
          </div>

          {/* First Row: Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
            {/* Changed from aspect-[4/3] to aspect-video (16:9) to make it sleek and less tall */}
            <div className="w-full aspect-video mx-auto rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white/10 bg-white/5">
              <img
                src={img1}
                alt="Transforming Potential"
                className="w-full h-full object-cover object-[center_10%] hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="flex flex-col gap-5 lg:gap-6 xl:gap-8 text-sm lg:text-base xl:text-xl leading-relaxed lg:leading-relaxed xl:leading-loose text-sky-100 font-medium text-center lg:text-left">
              <p>
                In today's world, LQ (Learning Quotient) is the new IQ. At
                cMPLiBe, we call it the{" "}
                <span className="font-bold text-white">
                  learnAgiliQuotient®
                </span>{" "}
                — the mindset to Learn, Unlearn and Relearn. It's your new
                currency.
              </p>
              <p>
                We help you seed, nurture and present this million-dollar
                mindset to the world, through our unique framework.
              </p>
            </div>
          </div>

          {/* Second Row: Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
            <div className="flex flex-col gap-5 lg:gap-6 xl:gap-8 text-center lg:text-left order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight">
                Your Exclusive Path
              </h3>

              <p className="text-sm lg:text-base xl:text-xl leading-relaxed lg:leading-relaxed xl:leading-loose text-sky-100 font-medium">
                Embark on a gamified journey integrated into your campus life
                for real-world Exposure, hands-on Experience and a sharp
                Eye-on-Goal.
              </p>

              <div className="mt-2 lg:mt-4 flex justify-center lg:justify-start">
                <Link
                  to="/contact"
                  state={{ category: "Student" }}
                  className="inline-flex bg-transparent border-2 border-sky-300/80 text-sky-300 hover:bg-sky-300 hover:text-[#002845] px-5 lg:px-8 py-2 lg:py-2.5 rounded-full text-sm lg:text-base xl:text-lg font-semibold transition-all duration-300">
                  Know more
                </Link>
              </div>
            </div>

            {/* Changed from aspect-[4/3] to aspect-video (16:9) to make it sleek and less tall */}
            <div className="w-full aspect-video mx-auto rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white/10 bg-white/5 order-1 lg:order-2">
              <img
                src={img2}
                alt="Your Exclusive Path"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW WE MAKE IT HAPPEN ================= */}
      <section className="bg-gray-50 px-6 lg:px-12 xl:px-20 py-12 lg:py-16 xl:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 lg:gap-14 xl:gap-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#004270] tracking-tight">
              How Do We Make It Happen?
            </h2>
            <div className="w-16 lg:w-20 h-1 bg-[#f47920] mt-3 lg:mt-4 xl:mt-6 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 xl:gap-10 w-full">
            {/* CARD 1 */}
            <div className="relative bg-white rounded-2xl lg:rounded-[2rem] p-6 lg:p-8 xl:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center gap-5 lg:gap-6 xl:gap-8 border-t-4 border-[#f47920] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group">
              <div className="absolute -top-5 lg:-top-6 xl:-top-7 bg-[#f47920] text-white w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 rounded-full flex items-center justify-center font-bold text-lg lg:text-xl xl:text-2xl shadow-lg ring-4 ring-gray-50 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <img
                src={ic1}
                alt="Self Discovery"
                className="w-16 lg:w-20 xl:w-28 mt-2 lg:mt-3 drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-[#004270] font-bold text-base lg:text-lg xl:text-2xl uppercase tracking-tight leading-snug">
                Coach-Led <br /> Self-Discovery
              </h3>
            </div>

            {/* CARD 2 */}
            <div className="relative bg-white rounded-2xl lg:rounded-[2rem] p-6 lg:p-8 xl:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center gap-5 lg:gap-6 xl:gap-8 border-t-4 border-[#f47920] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group">
              <div className="absolute -top-5 lg:-top-6 xl:-top-7 bg-[#f47920] text-white w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 rounded-full flex items-center justify-center font-bold text-lg lg:text-xl xl:text-2xl shadow-lg ring-4 ring-gray-50 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <img
                src={ic2}
                alt="Talent Branding"
                className="w-16 lg:w-20 xl:w-28 mt-2 lg:mt-3 drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-[#004270] font-bold text-base lg:text-lg xl:text-2xl uppercase tracking-tight leading-snug">
                Personal Talent <br /> Branding
              </h3>
            </div>

            {/* CARD 3 */}
            <div className="relative bg-white rounded-2xl lg:rounded-[2rem] p-6 lg:p-8 xl:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center gap-5 lg:gap-6 xl:gap-8 border-t-4 border-[#f47920] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group">
              <div className="absolute -top-5 lg:-top-6 xl:-top-7 bg-[#f47920] text-white w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 rounded-full flex items-center justify-center font-bold text-lg lg:text-xl xl:text-2xl shadow-lg ring-4 ring-gray-50 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <img
                src={ic3}
                alt="Experiential Learning"
                className="w-16 lg:w-20 xl:w-28 mt-2 lg:mt-3 drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-[#004270] font-bold text-base lg:text-lg xl:text-2xl uppercase tracking-tight leading-snug">
                Curated Experiential <br /> Learning & Placement{" "}
                <br className="hidden lg:block" /> Opportunities
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="bg-[#001f36] px-6 py-16 lg:py-20 xl:py-32 text-center flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-10 xl:gap-12 max-w-4xl mx-auto">
          <p className="text-white font-light text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-normal">
            Your potential deserves proof. <br className="hidden md:block" />
            <span className="font-semibold text-[#f47920]">
              We help you earn it, own it and launch it
            </span>{" "}
            with joy & pride.
          </p>

          <Link
            to="/contact"
            state={{ category: "Student" }}
            className="group relative inline-flex items-center justify-center px-6 lg:px-10 xl:px-12 py-3 lg:py-4 xl:py-5 text-sm lg:text-lg xl:text-xl font-semibold text-white bg-[#f47920] rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
            <span className="relative">Become a cMPLiBe Learner</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Graduates;
