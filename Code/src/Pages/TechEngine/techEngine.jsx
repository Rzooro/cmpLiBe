import React from "react";
import { Link } from "react-router-dom";
import ban from "../../assets/techEngine/tbanner.png";
import cImg from "../../assets/techEngine/circleImg.png";
import oneTap from "../../assets/techEngine/oneTap.png";

function TechEngine() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center scale-110 blur-xs opacity-80"
          style={{ backgroundImage: `url(${ban})` }}></div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[rgba(6,59,110,0.65)]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl w-full px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            GROW WITHIN, EXPAND BEYOND
          </h1>
        </div>
      </section>

      {/* Tech Engine Visual */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative flex items-center justify-center min-h-150">
            {/* Outer dotted circle - now with higher z-index and background to hide lines */}
            <div className="absolute w-72 h-72 md:w-88 md:h-88 rounded-full border-2 border-dotted border-gray-400 bg-white z-20"></div>

            {/* Inner image circle */}
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center z-30">
              <img
                src={cImg}
                alt="Center Image"
                className="w-full h-full object-cover opacity-80 blur-[2px]"
              />
            </div>

            {/* ===== Curved Lines - positioned exactly like reference ===== */}
            {/* These now appear behind the dotted circle */}

            {/* Top Left Curve */}
            <div className="absolute left-[24%] top-[24%] w-36 h-32 z-10">
              <div className="w-full h-full border-r-2 border-t-2 border-sky-900 rounded-tr-[50px]"></div>
            </div>

            {/* Bottom Left Curve */}
            <div className="absolute left-[24%] bottom-[24%] w-36 h-32 z-10">
              <div className="w-full h-full border-r-2 border-b-2 border-sky-900 rounded-br-[50px]"></div>
            </div>

            {/* Top Right Curve */}
            <div className="absolute right-[24%] top-[24%] w-36 h-32 z-10">
              <div className="w-full h-full border-l-2 border-t-2 border-sky-900 rounded-tl-[50px]"></div>
            </div>

            {/* Bottom Right Curve */}
            <div className="absolute right-[24%] bottom-[24%] w-36 h-32 z-10">
              <div className="w-full h-full border-l-2 border-b-2 border-sky-900 rounded-bl-[50px]"></div>
            </div>

            {/* Small endpoint dots - placed at the outer ends of curves */}
            <div className="absolute left-[24%] top-[23%] w-1 h-4 bg-sky-900 rounded-lg z-10"></div>
            <div className="absolute left-[24%] bottom-[23%] w-1 h-4 bg-sky-900 rounded-lg z-10"></div>
            <div className="absolute right-[24%] top-[23%] w-1 h-4 bg-sky-900 rounded-lg z-10"></div>
            <div className="absolute right-[24%] bottom-[23%] w-1 h-4 bg-sky-900 rounded-lg z-10"></div>

            {/* ===== Text Blocks - positioned exactly like reference ===== */}

            {/* Top Left */}
            <div className="absolute -left-[2%] top-[18%] text-right max-w-56 z-30">
              <h3 className="font-bold text-sky-900 text-2xl">
                The cMPLiBe <br /> Tech Engine:
              </h3>
              <p className="text-sky-800 mt-1 text-2xl">
                Where Potential Bags Currencies
              </p>
            </div>

            {/* Bottom Left */}
            <div className="absolute -left-[2%] bottom-[10%] text-right max-w-56 z-30">
              <h3 className="font-bold text-sky-900 text-2xl">
                15 Months &gt;
                <br /> 3 or 4 Years:
              </h3>
              <p className="text-sky-800 mt-1 text-2xl">
                Targeted Growth Measured Agility
              </p>
            </div>

            {/* Top Right */}
            <div className="absolute -right-[2%] top-[18%] text-left max-w-56 z-30">
              <h3 className="font-bold text-sky-900 text-2xl">
                Play to Prove:
              </h3>
              <p className="text-sky-800 mt-1 text-2xl">
                Not simply learn. Get cMPLi futuReadi.
              </p>
              <p className="font-bold text-sky-900 mt-1 text-xl">
                Adapt • Solve • Lead
              </p>
            </div>

            {/* Bottom Right */}
            <div className="absolute -right-[2%] bottom-[10%] text-left max-w-56 z-30">
              <h3 className="font-bold text-sky-900 text-2xl">
                Gain Exclusive Visibility:
              </h3>
              <p className="text-sky-800 mt-1 text-2xl">
                Establish early career success
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-linear-to-bl from-[#003b73] to-[#01a3e0] text-center flex flex-col">
        <h1 className="font-bold text-4xl text-white leading-snug">
          cMPLiBe’s Tech Engine seeds, nurtures, and harvests agile talent from
          Bharat’s heartland. Presenting what matters most to India’s inclusive
          growth.
        </h1>
      </section>

      <section className="relative py-40 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover blur-xs opacity-90"
          style={{ backgroundImage: `url(${oneTap})` }}></div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[rgba(6,59,110,0.55)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-10">
          <h1 className="text-5xl font-bold text-white">
            Your growth is one tap away
          </h1>
          <Link
            to="/login"
            className="bg-orange-500 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition duration-300 cursor-pointer hover:scale-[102%]">
            Take the 21 days cMPLiBe Challenge
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TechEngine;
