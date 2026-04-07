import React from "react";
import { Link } from "react-router-dom";
import { TbShieldCheck, TbTrendingUp } from "react-icons/tb";
import { FiUsers, FiMapPin, FiBriefcase, FiClipboard } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

// Adjust these imports based on your actual asset paths
import ban from "../../../assets/Services/ForCorporates/cban.png";
import groupImg from "../../../assets/Services/ForCorporates/group.png";

// ================= INTERNAL COMPONENTS (Premium Flow Architecture) ================= //

// 1. Core Benefit Card (The "Why")
const BenefitCard = ({ icon: Icon, title, color }) => (
  <div className="bg-white rounded-2xl lg:rounded-[1.5rem] xl:rounded-[2rem] p-6 lg:p-8 xl:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex items-center gap-4 lg:gap-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-100">
    <div
      className={`w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
        color === "orange"
          ? "bg-[#f47920]/10 text-[#f47920]"
          : "bg-[#00a3e0]/10 text-[#00a3e0]"
      }`}>
      <Icon className="text-2xl lg:text-3xl xl:text-4xl" />
    </div>
    <h3 className="text-[#002845] font-bold tracking-tight text-lg lg:text-xl xl:text-3xl leading-snug">
      {title}
    </h3>
  </div>
);

// 2. Flexibility / Scope Card (The "How")
const FeatureCard = ({ icon: Icon, title, color }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center gap-4 group transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]">
    <div
      className={`w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
        color === "orange"
          ? "bg-[#f47920]/20 text-[#f47920]"
          : "bg-[#00a3e0]/20 text-[#00a3e0]"
      }`}>
      <Icon className="text-xl lg:text-2xl xl:text-3xl" />
    </div>
    <h4 className="text-white font-semibold text-sm lg:text-base xl:text-lg leading-snug">
      {title}
    </h4>
  </div>
);

// 3. Action Step Link (The "Next Step" - Now interactive)
const ActionLink = ({ icon: Icon, title }) => (
  <Link
    to="/contact"
    state={{ category: "Corporate" }}
    className="bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-6 xl:p-8 flex items-center justify-between gap-4 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(244,121,32,0.2)] border-b-4 border-transparent hover:border-[#f47920] cursor-pointer">
    <div className="flex items-center gap-4 lg:gap-5">
      <div className="bg-[#002845] p-3 lg:p-4 rounded-xl text-white group-hover:bg-[#f47920] transition-colors duration-300 shrink-0">
        <Icon className="text-xl lg:text-2xl xl:text-3xl" />
      </div>
      <h3 className="text-[#002845] font-bold tracking-tight text-base lg:text-lg xl:text-2xl leading-tight">
        {title}
      </h3>
    </div>
    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#f47920]/10 transition-colors duration-300 shrink-0">
      <BsArrowRight className="text-xl lg:text-2xl text-[#002845] group-hover:text-[#f47920] transition-colors duration-300" />
    </div>
  </Link>
);

// --- The Advantage Section ---
const AdvantageSection = () => {
  return (
    <div className="w-full relative z-10 max-w-5xl xl:max-w-7xl mx-auto flex flex-col gap-6 lg:gap-8 xl:gap-10 px-6 lg:px-12 mt-12 lg:mt-10 xl:mt-14 mb-16 lg:mb-20 xl:mb-28">
      {/* 1. The Outcomes (Top Row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
        <BenefitCard
          icon={TbShieldCheck}
          title="De-risk hiring"
          color="orange"
        />
        <BenefitCard
          icon={TbTrendingUp}
          title="Accelerate Team Growth"
          color="sky"
        />
      </div>

      {/* 2. The Engine (Middle Banner) */}
      <div className="bg-gradient-to-r from-[#008bc0] to-[#00a3e0] rounded-2xl lg:rounded-[1.5rem] xl:rounded-[2rem] p-6 lg:p-8 xl:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8 hover:shadow-[0_15px_40px_rgba(0,163,224,0.25)] transition-all duration-300 border border-sky-300/30">
        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 text-center md:text-left">
          <div className="bg-white/20 p-3 lg:p-4 rounded-full shrink-0">
            <FiUsers className="text-2xl lg:text-3xl text-white" />
          </div>
          <h3 className="text-white font-bold tracking-tight text-lg lg:text-xl xl:text-3xl uppercase leading-tight">
            Reliable-Scalable-Agile <br className="hidden lg:block xl:hidden" />{" "}
            Pipeline from campuses
          </h3>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/40 rounded-full px-4 lg:px-6 py-2 xl:py-3 text-[10px] lg:text-xs xl:text-sm font-semibold text-white tracking-widest uppercase whitespace-nowrap shrink-0">
          Pre-vetted | Proven | Demonstrable Data
        </div>
      </div>

      {/* 3. The Scope (4-Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
        <FeatureCard
          icon={FiMapPin}
          title="Local Talent for Regional Projects"
          color="orange"
        />
        <FeatureCard
          icon={FiBriefcase}
          title="Regional Talent for Regional/National/Global Requirements"
          color="orange"
        />
        <FeatureCard
          icon={MdOutlineWorkOutline}
          title="Temporary & Permanent Roles"
          color="sky"
        />
        <FeatureCard
          icon={MdOutlineWorkOutline}
          title="Part-time & Full-time"
          color="sky"
        />
      </div>

      {/* 4. Action Steps (Bottom Row - Clickable Links) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 mt-2 xl:mt-4">
        <ActionLink icon={FiClipboard} title="Drop your Talent Requirements" />
        <ActionLink icon={FiUsers} title="Empanel Us as your Talent Partner" />
      </div>
    </div>
  );
};

// ================= MAIN CORPORATES COMPONENT ================= //

const Corporates = () => {
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

        {/* pt offset added to clear the fixed navbar */}
        <div className="relative z-10 text-center text-white px-6 md:px-10 flex flex-col items-center pt-20 lg:pt-28 xl:pt-32 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-bold tracking-tight drop-shadow-xl uppercase leading-tight xl:leading-tight">
            Where Learning Is Continuous, <br className="hidden lg:block" />
            <span className="text-sky-300">Opportunities Thrive</span>
          </h1>

          <div className="w-16 lg:w-20 xl:w-24 h-1 lg:h-1.5 bg-[#f47920] mt-6 lg:mt-8 xl:mt-10 rounded-full shadow-[0_0_15px_rgba(244,121,32,0.5)]"></div>

          <Link
            to="/contact"
            state={{ category: "Corporate" }}
            className="mt-8 lg:mt-10 xl:mt-12 inline-block bg-[#f47920] hover:bg-[#d96617] text-white text-base lg:text-lg xl:text-xl px-8 lg:px-10 xl:px-12 py-3 lg:py-3.5 xl:py-4 rounded-full font-semibold shadow-[0_10px_25px_rgba(244,121,32,0.3)] hover:shadow-[0_15px_35px_rgba(244,121,32,0.4)] transition-all duration-300 hover:-translate-y-1">
            Explore more
          </Link>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-14 xl:py-24 px-6 md:px-12 text-center shadow-sm relative z-10">
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-[#004270] leading-relaxed md:leading-relaxed xl:leading-normal">
          At cMPLiBe, we unite institutions, graduates and industry to build a
          generation <br /> defined by{" "}
          <span className="font-semibold text-[#f47920]">Learning Agility</span>{" "}
          and{" "}
          <span className="font-semibold text-[#004270]">Growth-Mindset</span>.
        </p>
      </section>

      <section className="bg-gradient-to-b from-[#005086] via-[#003b73] to-[#001f36] w-full flex flex-col items-center py-12 lg:py-8 xl:py-16 relative text-white z-0 overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-1/4 w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] bg-[#00a3e0] rounded-full opacity-10 blur-[100px] lg:blur-[150px] pointer-events-none"></div>

        <div className="space-y-4 lg:space-y-6 pt-4 lg:pt-6">
          <h2 className="text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            Reliable Talent <span className="text-[#f47920]">Advantage</span>
          </h2>
          <p className="text-base text-center md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-sky-200/90 max-w-4xl mx-auto font-medium">
            cMPLiBe makes early talent hiring seamless, smart and strategic.{" "}
            <br className="hidden md:block" />
            We connect you to a pre-validated talent pool from India's heartland
            - <br className="hidden md:block" />
            graduates with proven Learning Agility and a measurable
            Growth-Mindset.
          </p>
        </div>

        {/* --- PREMIUM ADVANTAGE SECTION --- */}
        <AdvantageSection />

        {/* ================= GROUP IMAGE & FINAL CTA ================= */}
        <div className="w-full relative z-20 flex justify-center max-w-5xl xl:max-w-7xl mx-auto mt-8 lg:mt-4 xl:mt-10 px-4 md:px-8">
          <div className="relative w-full rounded-t-3xl lg:rounded-t-[3rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.4)] border-t-8 border-x-8 border-white/10 bg-[#001f36]">
            <img
              src={groupImg}
              alt="Corporate Professionals"
              className="w-full h-auto max-h-[350px] lg:max-h-[450px] xl:max-h-[600px] object-cover object-top filter contrast-105"
            />

            {/* Smooth gradient overlay to blend the bottom edge nicely */}
            <div className="absolute inset-x-0 bottom-0 h-24 lg:h-32 xl:h-40 bg-gradient-to-t from-[#001f36] to-transparent pointer-events-none" />
          </div>

          {/* Floating CTA Button perfectly centered on the bottom edge */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 lg:-bottom-7 xl:-bottom-8 z-30 flex justify-center w-max">
            <Link
              to="/contact"
              state={{ category: "Corporate" }}
              className="group relative inline-flex items-center justify-center px-6 lg:px-10 xl:px-12 py-3.5 lg:py-4 xl:py-5 text-sm lg:text-lg xl:text-xl font-semibold text-white bg-[#f47920] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 whitespace-nowrap">
              {/* Button Shine Effect */}
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
              <span className="relative">
                Empanel cMPLiBe as Your Talent Partner
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corporates;
