import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ban from "../../../assets/Services/ForInstitutes/iban.jpeg";
import img1 from "../../../assets/Services/ForInstitutes/1.png";
import img2 from "../../../assets/Services/ForInstitutes/2.png";
import img3 from "../../../assets/Services/ForInstitutes/3.png";

const Institutes = () => {
  const tabs = [
    {
      id: "differentiation",
      title: "DIFFERENTIATION & REGIONAL LEADERSHIP",
      content: (
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold mb-4 text-sky-800">
            Differentiation & Regional Leadership
          </h3>
          <p className="text-lg">
            cMPLiBe partners exclusively with Higher Education Institutions
            across India’s Tier‑2 & 3 cities and towns.
          </p>
          <p className="text-lg">
            We help you become Anchor Institutions - trusted talent and research
            partners for companies at the regional level.
          </p>
          <p className="text-lg">
            We co‑create future‑ready ecosystems for GCCs (Global Capability
            Centres) expanding beyond metros and tier‑1 cities
          </p>
        </div>
      ),
    },
    {
      id: "faculty",
      title: "EMPOWERING FACULTY",
      content: (
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold mb-4 text-sky-800">
            Empowering Faculty
          </h3>
          <p className="text-lg">
            We inspire your teachers with the Portfolio of Discoveries (cMPLi
            PoD).
          </p>
          <p className="text-lg">
            For committed educators, we offer Personalized‑on‑Demand development
            (cMPLi PoD+).
          </p>
          <p className="text-lg">
            cMPLiBe's Faculty Foundry helps you to source high-potential
            industry professionals into next-generation educators for your
            institution
          </p>
        </div>
      ),
    },
    {
      id: "partnership",
      title: "EXCLUSIVE PARTNERSHIP",
      content: (
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold mb-4 text-sky-800">
            Exclusive Partnership
          </h3>
          <p className="text-lg">
            We partner with only one institution per region (district). Be the
            first in your area to build this legacy.
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
    }, 10000);

    return () => clearInterval(interval);
  }, [autoRotate, tabs.length]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setAutoRotate(false);
  };

  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_30%] blur-xs opacity-80"
          style={{ backgroundImage: `url(${ban})` }}
        />
        <div className="absolute inset-0 bg-[rgba(6,59,110,0.65)]" />

        <div className="relative z-10 text-center text-white px-10">
          <h1 className="text-4xl md:text-6xl leading-snug font-bold max-w-6xl">
            WHERE LEARNING IS CONTINUOUS, OPPORTUNITIES THRIVE
          </h1>

          <Link
            to="/contact"
            className="mt-6 inline-block bg-orange-500 hover:bg-orange-700 md:text-xl transition px-6 py-3 rounded-lg font-semibold">
            Explore more
          </Link>
        </div>
      </section>

      {/* ================= INTRO STRIP ================= */}
      <section className="text-sky-700 flex justify-center py-16 px-10">
        <h2 className="text-4xl max-w-6xl font-bold text-center leading-snug">
          At cMPLiBe, we unite institutions, graduates and industry to build a
          generation defined by Learning Agility and Growth-Mindset.
        </h2>
      </section>

      <section className="bg-linear-to-b from-[#003b73] to-[#01a3e0] pt-24 pb-10 px-6 flex flex-col items-center">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">
          Building Leadership Beyond Campus
        </h2>

        <div className="relative w-full max-w-6xl min-h-[380px]">
          {/* LEFT STACK */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 relative z-10">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                onClick={() => handleTabClick(index)}
                className={`cursor-pointer px-8 py-6 rounded-2xl transition-all duration-500 md:text-xl
          ${
            activeIndex === index
              ? "bg-sky-800 text-white scale-[1.03] ring-4 ring-sky-400"
              : "bg-sky-700 text-white opacity-80 hover:opacity-100"
          }`}>
                <span className="font-semibold tracking-wide">{tab.title}</span>
              </div>
            ))}
          </div>

          {/* FLOATING RIGHT PANEL */}
          <div
            className="
      absolute 
      top-0 
      right-0 
      w-full 
      lg:w-[75%] 
      lg:translate-x-[8%]
      mt-16 
      lg:-mt-4
      z-20
    ">
            <div
              key={activeIndex}
              className="
          bg-white
          rounded-3xl 
          p-12 
          shadow-[0_25px_60px_rgba(0,0,0,0.25)]
          transition-all 
          duration-500 
          animate-slideIn
        ">
              {tabs[activeIndex].content}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-linear-to-b from-[#01a3e0] to-[#003b73]  text-white py-24 overflow-hidden">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            How Do We Deliver This Partnership?
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-4xl mx-auto">
            We integrate as your strategic partner through three definitive
            service models:
          </p>

          {/* Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-10">
            {/* Card */}
            <div
              className="group relative bg-linear-to-b from-white to-gray-100 
                text-black py-10 rounded-xl md:w-md flex flex-col items-center gap-4
                shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
              {/* 3D Stripe Wrapper */}
              <div className="absolute -left-6 top-10 w-32 h-14">
                {/* Back depth layer */}
                <div
                  className="absolute inset-0 bg-cyan-700 
                    rounded-r-full 
                    translate-x-2 translate-y-2 
                    opacity-40 blur-sm"></div>

                {/* Main stripe */}
                <div
                  className="relative w-full h-full bg-cyan-500 
                    rounded-r-full 
                    shadow-md
                    flex items-center justify-center">
                  {/* Subtle highlight */}
                  <div
                    className="absolute top-0 left-0 w-full h-1/2 
                      bg-white/20 rounded-t-r-full"></div>
                </div>
              </div>

              <img src={img1} alt="cMPLiBe's PaaS" className="w-40" />

              <div>
                <h3 className="text-2xl font-extrabold">cMPLiBe's PaaS</h3>
                <p className="text-lg font-semibold text-gray-600">
                  (Placement-as-a-Service)
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group relative bg-linear-to-b from-white to-gray-100 
                text-gray-800 py-10 rounded-xl md:w-md flex flex-col items-center gap-4
                shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
              {/* 3D Stripe Wrapper */}
              <div className="absolute -left-6 top-10 w-32 h-14">
                {/* Back depth layer */}
                <div
                  className="absolute inset-0 bg-orange-700 
                    rounded-r-full 
                    translate-x-2 translate-y-2 
                    opacity-40 blur-sm"></div>

                {/* Main stripe */}
                <div
                  className="relative w-full h-full bg-orange-500 
                    rounded-r-full 
                    shadow-md
                    flex items-center justify-center">
                  {/* Subtle highlight */}
                  <div
                    className="absolute top-0 left-0 w-full h-1/2 
                      bg-white/20 rounded-t-r-full"></div>
                </div>
              </div>

              <img src={img2} alt="cMPLiBe's LaaS" className="w-40" />

              <div>
                <h3 className="text-2xl font-extrabold">
                  cMPLiBe's LaaS for Innovation
                </h3>
                <p className="text-lg font-semibold text-gray-600">
                  (Learning-as-a-Service)
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group relative bg-linear-to-b from-white to-gray-100 
                text-gray-800 py-10 rounded-xl md:w-md flex flex-col items-center gap-4
                shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
              {/* 3D Stripe Wrapper */}
              <div className="absolute -left-6 top-10 w-32 h-14">
                {/* Back depth layer */}
                <div
                  className="absolute inset-0 bg-blue-950 
                    rounded-r-full 
                    translate-x-2 translate-y-2 
                    opacity-40 blur-sm"></div>

                {/* Main stripe */}
                <div
                  className="relative w-full h-full bg-blue-900 
                    rounded-r-full 
                    shadow-md
                    flex items-center justify-center">
                  {/* Subtle highlight */}
                  <div
                    className="absolute top-0 left-0 w-full h-1/2 
                      bg-white/20 rounded-t-r-full"></div>
                </div>
              </div>

              <img
                src={img3}
                alt="cMPLiBe's Faculty Foundry"
                className="w-40"
              />

              <h3 className="text-2xl font-extrabold">
                cMPLiBe's Faculty Foundry
              </h3>
            </div>
          </div>

          {/* Bottom Statement */}
          <p className="mt-20 text-2xl md:text-3xl font-semibold max-w-4xl lg:max-w-5xl mx-auto leading-snug">
            Together, we transform your institution into a recognized powerhouse
            that attracts top talent, premium partnerships and regional
            investment.
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="mt-14 bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold px-14 py-5 rounded-full 
                       shadow-[0_15px_30px_rgba(0,0,0,0.3)]
                       hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                       transition-all duration-300 hover:scale-[102%]">
            Become a cMPLiBe Partner Institution
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Institutes;
