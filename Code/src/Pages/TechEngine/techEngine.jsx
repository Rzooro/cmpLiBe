import React from "react";
import { Link } from "react-router-dom";
import ban from "../../assets/techEngine/tbanner.png";
import cImg from "../../assets/techEngine/circleImg.png";
import oneTap from "../../assets/techEngine/oneTap.png";

function TechEngine() {
  return (
    <div className="w-full font-sans bg-[#f8fafc]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-[#002845]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center scale-105 opacity-60"
          style={{ backgroundImage: `url(${ban})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#002845]/80 via-[#004270]/60 to-[#002845]/90 mix-blend-multiply" />

        {/* pt offset added to clear the fixed navbar */}
        <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col items-center pt-20 lg:pt-28 xl:pt-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-bold text-white tracking-tight drop-shadow-xl uppercase leading-tight xl:leading-tight">
            GROW WITHIN, <br className="md:hidden" />
            <span className="text-sky-300">EXPAND BEYOND</span>
          </h1>
          <div className="w-16 lg:w-20 xl:w-24 h-1 lg:h-1.5 bg-[#f47920] mt-6 lg:mt-8 xl:mt-10 rounded-full shadow-[0_0_15px_rgba(244,121,32,0.5)]"></div>
        </div>
      </section>

      {/* ================= TECH ENGINE VISUAL SECTION ================= */}
      <section className="py-12 lg:py-10 xl:py-18 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#004270] tracking-tight">
              The Architecture of Growth
            </h2>
            <p className="mt-3 lg:mt-4 text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              A meticulously designed framework to accelerate your learning
              curve and market readiness.
            </p>
          </div>

          {/* --- DESKTOP VIEW (Circular Diagram) --- */}
          <div className="hidden lg:block relative min-h-[380px] xl:min-h-[550px] w-full max-w-4xl xl:max-w-5xl mx-auto">
            {/* Center Containers */}
            {/* Outer dotted circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] xl:w-[420px] h-[280px] xl:h-[420px] rounded-full border-2 border-dotted border-[#004270]/30 bg-transparent z-10 animate-[spin_45s_linear_infinite]"></div>

            {/* Inner image circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] xl:w-[320px] h-[220px] xl:h-[320px] rounded-full overflow-hidden border-[6px] xl:border-8 border-white shadow-[0_15px_40px_rgba(0,66,112,0.15)] bg-gray-50 z-30">
              <img
                src={cImg}
                alt="Center Concept"
                className="w-full h-full object-cover opacity-95 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#004270]/10 mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* ===== Connecting Curves (EMERGING FROM BEHIND) ===== */}
            {/* These tuck under the z-30 center image while remaining disconnected vertically (52%) */}

            {/* Top Left Curve */}
            <div className="absolute top-[12%] xl:top-[16%] bottom-[52%] left-[210px] xl:left-[260px] right-[calc(50%+80px)] xl:right-[calc(50%+120px)] border-t-[3px] border-r-[3px] border-[#004270]/30 rounded-tr-[30px] z-20 transition-all"></div>

            {/* Bottom Left Curve */}
            <div className="absolute top-[52%] bottom-[12%] xl:bottom-[16%] left-[210px] xl:left-[260px] right-[calc(50%+80px)] xl:right-[calc(50%+120px)] border-b-[3px] border-r-[3px] border-[#004270]/30 rounded-br-[30px] z-20 transition-all"></div>

            {/* Top Right Curve */}
            <div className="absolute top-[12%] xl:top-[16%] bottom-[52%] right-[210px] xl:right-[260px] left-[calc(50%+80px)] xl:left-[calc(50%+120px)] border-t-[3px] border-l-[3px] border-[#004270]/30 rounded-tl-[30px] z-20 transition-all"></div>

            {/* Bottom Right Curve */}
            <div className="absolute top-[52%] bottom-[12%] xl:bottom-[16%] right-[210px] xl:right-[260px] left-[calc(50%+80px)] xl:left-[calc(50%+120px)] border-b-[3px] border-l-[3px] border-[#004270]/30 rounded-bl-[30px] z-20 transition-all"></div>

            {/* ===== Outer Endpoint Dots ===== */}
            <div className="absolute top-[12%] xl:top-[16%] left-[210px] xl:left-[260px] -translate-x-1/2 -translate-y-1/2 w-3 xl:w-4 h-3 xl:h-4 bg-[#f47920] rounded-full z-30 shadow-md ring-4 ring-white"></div>
            <div className="absolute bottom-[12%] xl:bottom-[16%] left-[210px] xl:left-[260px] -translate-x-1/2 translate-y-1/2 w-3 xl:w-4 h-3 xl:h-4 bg-[#f47920] rounded-full z-30 shadow-md ring-4 ring-white"></div>
            <div className="absolute top-[12%] xl:top-[16%] right-[210px] xl:right-[260px] translate-x-1/2 -translate-y-1/2 w-3 xl:w-4 h-3 xl:h-4 bg-[#f47920] rounded-full z-30 shadow-md ring-4 ring-white"></div>
            <div className="absolute bottom-[12%] xl:bottom-[16%] right-[210px] xl:right-[260px] translate-x-1/2 translate-y-1/2 w-3 xl:w-4 h-3 xl:h-4 bg-[#f47920] rounded-full z-30 shadow-md ring-4 ring-white"></div>

            {/* ===== Text Blocks ===== */}
            {/* Top Left */}
            <div className="absolute top-[12%] xl:top-[16%] left-0 w-[190px] xl:w-[240px] -translate-y-1/2 text-right z-40">
              <h3 className="font-bold text-[#004270] text-base xl:text-xl tracking-tight leading-tight">
                THE cMPLiBe <br /> TECH ENGINE
              </h3>
              <p className="text-sky-600/90 mt-1 font-medium text-xs xl:text-sm">
                Where Potential <br /> Bags Currencies
              </p>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-[12%] xl:bottom-[16%] left-0 w-[190px] xl:w-[240px] translate-y-1/2 text-right z-40">
              <h3 className="font-bold text-[#004270] text-base xl:text-xl tracking-tight uppercase leading-tight">
                15 Months &gt; <br /> 3 or 4 Years
              </h3>
              <p className="text-sky-600/90 mt-1 font-medium text-xs xl:text-sm">
                Targeted Growth <br /> Measured Agility
              </p>
            </div>

            {/* Top Right */}
            <div className="absolute top-[12%] xl:top-[16%] right-0 w-[190px] xl:w-[240px] -translate-y-1/2 text-left z-40">
              <h3 className="font-bold text-[#004270] text-base xl:text-xl tracking-tight uppercase leading-tight">
                Play to Prove
              </h3>
              <p className="text-sky-600/90 mt-1 font-medium text-xs xl:text-sm">
                Not simply learn. <br /> Get cMPLi futuReadi.
              </p>
              <p className="font-semibold text-[#f47920] mt-1.5 xl:mt-2 text-[10px] xl:text-xs tracking-widest uppercase">
                Adapt • Solve • Lead
              </p>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-[12%] xl:bottom-[16%] right-0 w-[190px] xl:w-[240px] translate-y-1/2 text-left z-40">
              <h3 className="font-bold text-[#004270] text-base xl:text-xl tracking-tight uppercase leading-tight">
                Exclusive <br /> Visibility
              </h3>
              <p className="text-sky-600/90 mt-1 font-medium text-xs xl:text-sm">
                Establish early <br /> career success
              </p>
            </div>
          </div>

          {/* --- MOBILE / TABLET VIEW (Grid Layout) --- */}
          <div className="flex flex-col lg:hidden items-center space-y-8">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-white shadow-[0_10px_30px_rgba(0,66,112,0.15)]">
              <img
                src={cImg}
                alt="Center Concept"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl">
              <div className="bg-white p-6 rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.04)] border border-gray-100 text-center flex flex-col items-center">
                <div className="w-8 h-1 bg-[#f47920] rounded-full mb-3"></div>
                <h3 className="font-bold text-[#004270] text-sm md:text-base tracking-tight uppercase">
                  The cMPLiBe <br /> Tech Engine
                </h3>
                <p className="text-sky-600/90 mt-2 text-xs font-medium">
                  Where Potential Bags Currencies
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.04)] border border-gray-100 text-center flex flex-col items-center">
                <div className="w-8 h-1 bg-[#f47920] rounded-full mb-3"></div>
                <h3 className="font-bold text-[#004270] text-sm md:text-base tracking-tight uppercase">
                  Play to Prove
                </h3>
                <p className="text-sky-600/90 mt-2 text-xs font-medium">
                  Not simply learn. Get cMPLi futuReadi.
                </p>
                <p className="font-semibold text-[#f47920] mt-2 md:mt-3 text-[10px] tracking-widest uppercase">
                  Adapt • Solve • Lead
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.04)] border border-gray-100 text-center flex flex-col items-center">
                <div className="w-8 h-1 bg-[#f47920] rounded-full mb-3"></div>
                <h3 className="font-bold text-[#004270] text-sm md:text-base tracking-tight uppercase">
                  15 Months &gt; <br /> 3 or 4 Years
                </h3>
                <p className="text-sky-600/90 mt-2 text-xs font-medium">
                  Targeted Growth <br /> Measured Agility
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.04)] border border-gray-100 text-center flex flex-col items-center">
                <div className="w-8 h-1 bg-[#f47920] rounded-full mb-3"></div>
                <h3 className="font-bold text-[#004270] text-sm md:text-base tracking-tight uppercase">
                  Exclusive <br /> Visibility
                </h3>
                <p className="text-sky-600/90 mt-2 text-xs font-medium">
                  Establish early career success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATEMENT BANNER ================= */}
      <section className="py-12 lg:py-16 xl:py-28 px-6 bg-gradient-to-r from-[#002845] via-[#004270] to-[#002845] text-center flex justify-center shadow-inner relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f47920] rounded-full opacity-10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00a3e0] rounded-full opacity-10 blur-[100px] pointer-events-none"></div>

        <h2 className="relative z-10 font-light text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-normal max-w-5xl">
          cMPLiBe’s Tech Engine seeds, nurtures, and harvests agile talent from
          Bharat’s heartland. <br className="hidden md:block" />
          <span className="font-semibold text-sky-300 mt-2 xl:mt-4 block tracking-wide">
            Presenting what matters most to India’s inclusive growth.
          </span>
        </h2>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-16 lg:py-20 xl:py-32 text-center overflow-hidden bg-[#001f36]">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-30 lg:opacity-40"
          style={{ backgroundImage: `url(${oneTap})` }}
        />
        <div className="absolute inset-0 bg-[#002845]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002845] to-transparent opacity-90" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8 lg:gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg tracking-tight">
            Your growth is <span className="text-[#f47920]">one tap</span> away
          </h2>

          <a
            href="https://play.google.com/store/apps/details?id=com.tagmango.cmplibe&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-6 md:px-10 xl:px-12 py-3 md:py-4 xl:py-5 text-sm md:text-lg xl:text-xl font-semibold text-white bg-[#f47920] rounded-full overflow-hidden shadow-[0_10px_25px_rgba(244,121,32,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(244,121,32,0.5)]">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
            <span className="relative">Take the 21 Days cMPLiBe Challenge</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default TechEngine;
