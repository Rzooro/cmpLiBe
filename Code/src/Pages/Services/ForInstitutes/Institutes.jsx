import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Adjust these imports based on your actual asset paths
import ban from "../../../assets/Services/ForInstitutes/iban.png";
import img1 from "../../../assets/Services/ForInstitutes/1.png";
import img2 from "../../../assets/Services/ForInstitutes/2.png";
import img3 from "../../../assets/Services/ForInstitutes/3.png";

const Institutes = () => {
  const tabs = [
    {
      id: "differentiation",
      title: "DIFFERENTIATION & REGIONAL LEADERSHIP",
      content: (
        <div className="flex flex-col gap-3 lg:gap-4 xl:gap-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-[#004270]">
            Differentiation & Regional Leadership
          </h3>
          <p className="text-sm lg:text-base xl:text-xl text-gray-600 leading-relaxed font-medium">
            cMPLiBe partners exclusively with Higher Education Institutions
            across India’s Tier‑2 & 3 cities and towns.
          </p>
          <p className="text-sm lg:text-base xl:text-xl text-gray-600 leading-relaxed font-medium">
            We help you become{" "}
            <span className="text-[#f47920] font-semibold">
              Anchor Institutions
            </span>{" "}
            - trusted talent and research partners for companies at the regional
            level.
          </p>
          <p className="text-sm lg:text-base xl:text-xl text-gray-600 leading-relaxed font-medium">
            We co‑create future‑ready ecosystems for GCCs (Global Capability
            Centres) expanding beyond metros and tier‑1 cities.
          </p>
        </div>
      ),
    },
    {
      id: "faculty",
      title: "EMPOWERING FACULTY",
      content: (
        <div className="flex flex-col gap-3 lg:gap-4 xl:gap-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-[#004270]">
            Empowering Faculty
          </h3>
          <p className="text-sm lg:text-base xl:text-xl text-gray-600 leading-relaxed font-medium">
            We inspire your teachers with the{" "}
            <span className="text-[#00a3e0] font-semibold">
              Portfolio of Discoveries (cMPLi PoD)
            </span>
            .
          </p>
          <p className="text-sm lg:text-base xl:text-xl text-gray-600 leading-relaxed font-medium">
            For committed educators, we offer Personalized‑on‑Demand development
            (cMPLi PoD+).
          </p>
          <p className="text-sm lg:text-base xl:text-xl text-gray-600 leading-relaxed font-medium">
            cMPLiBe's Faculty Foundry helps you to source high-potential
            industry professionals into next-generation educators for your
            institution.
          </p>
        </div>
      ),
    },
    {
      id: "partnership",
      title: "EXCLUSIVE PARTNERSHIP",
      content: (
        <div className="flex flex-col gap-3 lg:gap-4 xl:gap-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-[#004270]">
            Exclusive Partnership
          </h3>
          <p className="text-sm lg:text-base xl:text-xl text-gray-600 leading-relaxed font-medium">
            We partner with only{" "}
            <span className="text-[#f47920] font-semibold">
              one institution per region (district)
            </span>
            . Be the first in your area to build this legacy.
          </p>
        </div>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [autoRotate, tabs.length]);

  const handleTabInteraction = (index) => {
    setActiveIndex(index);
    setAutoRotate(false);
  };

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

        <div className="relative z-10 text-center text-white px-6 md:px-10 flex flex-col items-center pt-20 lg:pt-28 xl:pt-32 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-bold tracking-tight drop-shadow-xl uppercase leading-tight xl:leading-tight">
            Where Learning Is Continuous, <br className="hidden lg:block" />
            <span className="text-sky-300">Opportunities Thrive</span>
          </h1>

          <div className="w-16 lg:w-20 xl:w-24 h-1 lg:h-1.5 bg-[#f47920] mt-6 lg:mt-8 xl:mt-10 rounded-full shadow-[0_0_15px_rgba(244,121,32,0.5)]"></div>

          <Link
            to="/contact"
            state={{ category: "College/Institute" }}
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

      {/* ================= TABS SECTION ================= */}
      <section className="bg-gradient-to-b from-[#005086] via-[#003b73] to-[#001f36] py-12 lg:py-16 xl:py-28 px-6 flex flex-col items-center relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] bg-[#00a3e0] rounded-full opacity-10 blur-[100px] lg:blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] bg-[#f47920] rounded-full opacity-10 blur-[100px] lg:blur-[150px] pointer-events-none"></div>

        <div className="text-center mb-8 lg:mb-12 xl:mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight drop-shadow-md">
            Building Leadership{" "}
            <span className="text-[#f47920]">Beyond Campus</span>
          </h2>
        </div>

        <div className="relative w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-0">
          {/* LEFT STACK (Tabs Menu) */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center gap-3 lg:gap-4 relative z-20">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onMouseEnter={() => handleTabInteraction(index)}
                onClick={() => handleTabInteraction(index)}
                className={`text-left px-6 lg:px-8 py-4 lg:py-5 xl:py-6 rounded-2xl transition-all duration-500 font-semibold text-xs md:text-sm lg:text-base xl:text-lg border focus:outline-none ${
                  activeIndex === index
                    ? "bg-[#f47920] text-white border-[#f47920] shadow-[0_15px_30px_rgba(244,121,32,0.4)] lg:translate-x-4 xl:translate-x-6"
                    : "bg-white/5 text-sky-200 border-white/10 hover:bg-white/10 hover:text-white"
                }`}>
                <span className="tracking-wide">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* RIGHT PANEL (Content) */}
          <div className="w-full lg:w-[65%] z-10 lg:-ml-4 xl:-ml-6 flex">
            <div className="bg-white w-full rounded-2xl lg:rounded-[2rem] p-6 lg:p-10 xl:p-16 lg:pl-16 xl:pl-24 shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex items-center border border-sky-100/50">
              {/* CSS GRID STACKING TRICK: Eliminates Jitter entirely */}
              <div className="grid w-full">
                {tabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    className={`col-start-1 row-start-1 flex flex-col justify-center transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "opacity-100 z-10 translate-y-0"
                        : "opacity-0 invisible -z-10 translate-y-4 pointer-events-none"
                    }`}>
                    {tab.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE CARDS SECTION ================= */}
      <section className="bg-gray-50 py-12 lg:py-16 xl:py-28 px-6 lg:px-12 xl:px-20 relative overflow-hidden">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#004270] mb-3 lg:mb-5 tracking-tight">
            How Do We Deliver This Partnership?
          </h2>
          <div className="w-16 lg:w-20 xl:w-24 h-1 lg:h-1.5 bg-[#f47920] mx-auto rounded-full mb-5 lg:mb-8"></div>

          <p className="text-sm md:text-base lg:text-lg xl:text-2xl text-gray-600 mb-10 lg:mb-12 xl:mb-20 max-w-4xl font-medium px-4 leading-relaxed">
            We integrate as your strategic partner through three definitive
            service models:
          </p>

          {/* Cards Grid - 3 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 xl:gap-12 w-full">
            {/* Card 1 */}
            <div className="group relative bg-white text-gray-800 p-6 xl:p-12 rounded-2xl xl:rounded-[2rem] flex flex-col items-center text-center gap-3 lg:gap-4 xl:gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              {/* Premium Ribbon Badge (Scaled down on lg) */}
              <div className="absolute -left-2 top-5 xl:top-8 w-20 lg:w-24 xl:w-32 h-7 lg:h-8 xl:h-10 drop-shadow-lg z-20">
                <div className="absolute inset-0 bg-[#00a3e0] rounded-r-full flex items-center pl-3 lg:pl-4 xl:pl-6">
                  <span className="text-white font-bold text-[9px] lg:text-[10px] xl:text-sm tracking-widest uppercase">
                    Model 1
                  </span>
                </div>
                <div className="absolute -bottom-2 left-0 border-t-8 border-r-8 border-transparent border-t-[#007ba8]"></div>
              </div>

              {/* Image scaled down on lg */}
              <img
                src={img1}
                alt="cMPLiBe's PaaS"
                className="w-20 md:w-24 lg:w-24 xl:w-40 mt-6 lg:mt-8 xl:mt-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
              />

              {/* Typography scaled down on lg */}
              <div className="mt-1 lg:mt-2 xl:mt-4">
                <h3 className="text-[#004270] text-base lg:text-lg xl:text-2xl font-bold mb-1 xl:mb-2 tracking-tight">
                  cMPLiBe's PaaS
                </h3>
                <p className="text-[10px] lg:text-[11px] xl:text-sm font-semibold text-sky-600 tracking-wide uppercase">
                  (Placement-as-a-Service)
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white text-gray-800 p-6 xl:p-12 rounded-2xl xl:rounded-[2rem] flex flex-col items-center text-center gap-3 lg:gap-4 xl:gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="absolute -left-2 top-5 xl:top-8 w-20 lg:w-24 xl:w-32 h-7 lg:h-8 xl:h-10 drop-shadow-lg z-20">
                <div className="absolute inset-0 bg-[#f47920] rounded-r-full flex items-center pl-3 lg:pl-4 xl:pl-6">
                  <span className="text-white font-bold text-[9px] lg:text-[10px] xl:text-sm tracking-widest uppercase">
                    Model 2
                  </span>
                </div>
                <div className="absolute -bottom-2 left-0 border-t-8 border-r-8 border-transparent border-t-[#c25c14]"></div>
              </div>

              <img
                src={img2}
                alt="cMPLiBe's LaaS"
                className="w-20 md:w-24 lg:w-24 xl:w-40 mt-6 lg:mt-8 xl:mt-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
              />

              <div className="mt-1 lg:mt-2 xl:mt-4">
                <h3 className="text-[#004270] text-base lg:text-lg xl:text-2xl font-bold mb-1 xl:mb-2 tracking-tight">
                  cMPLiBe's LaaS <br className="hidden lg:block xl:hidden" />{" "}
                  for Innovation
                </h3>
                <p className="text-[10px] lg:text-[11px] xl:text-sm font-semibold text-sky-600 tracking-wide uppercase">
                  (Learning-as-a-Service)
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white text-gray-800 p-6 xl:p-12 rounded-2xl xl:rounded-[2rem] flex flex-col items-center text-center gap-3 lg:gap-4 xl:gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="absolute -left-2 top-5 xl:top-8 w-20 lg:w-24 xl:w-32 h-7 lg:h-8 xl:h-10 drop-shadow-lg z-20">
                <div className="absolute inset-0 bg-[#004270] rounded-r-full flex items-center pl-3 lg:pl-4 xl:pl-6">
                  <span className="text-white font-bold text-[9px] lg:text-[10px] xl:text-sm tracking-widest uppercase">
                    Model 3
                  </span>
                </div>
                <div className="absolute -bottom-2 left-0 border-t-8 border-r-8 border-transparent border-t-[#002845]"></div>
              </div>

              <img
                src={img3}
                alt="cMPLiBe's Faculty Foundry"
                className="w-20 md:w-24 lg:w-24 xl:w-40 mt-6 lg:mt-8 xl:mt-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
              />

              <div className="mt-1 lg:mt-2 xl:mt-4">
                <h3 className="text-[#004270] text-base lg:text-lg xl:text-2xl font-bold mb-1 xl:mb-2 tracking-tight">
                  cMPLiBe's Faculty Foundry
                </h3>
                <p className="text-[10px] lg:text-[11px] xl:text-sm font-semibold text-sky-600 tracking-wide uppercase">
                  (Empowering Educators)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="bg-[#001f36] px-6 py-16 lg:py-20 xl:py-32 text-center flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-10 xl:gap-12 max-w-5xl mx-auto">
          <p className="text-white font-light text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-normal">
            Together, we transform your institution into a{" "}
            <span className="font-semibold text-[#f47920]">
              recognized powerhouse
            </span>{" "}
            that attracts top talent, premium partnerships and regional
            investment.
          </p>

          <Link
            to="/contact"
            state={{ category: "College/Institute" }}
            className="group relative inline-flex items-center justify-center px-6 lg:px-10 xl:px-12 py-3 lg:py-4 xl:py-5 text-sm lg:text-lg xl:text-xl font-semibold text-white bg-[#f47920] rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
            {/* Button Shine Effect */}
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
            <span className="relative">
              Become a cMPLiBe Partner Institution
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Institutes;
