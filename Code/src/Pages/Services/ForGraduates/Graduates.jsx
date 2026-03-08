import React from "react";
import { Link } from "react-router-dom";
import ban from "../../../assets/Services/ForGraduates/gban.jpeg";
import img1 from "../../../assets/Services/ForGraduates/img1.jpg";
import img2 from "../../../assets/Services/ForGraduates/img2.jpg";
import ic1 from "../../../assets/Services/ForGraduates/or1.png";
import ic2 from "../../../assets/Services/ForGraduates/or2.png";
import ic3 from "../../../assets/Services/ForGraduates/or3.png";

function Graduates() {
  return (
    <div className="w-full font-sans text-white">
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-position-[center_30%] blur-xs opacity-80"
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

      {/* INTRO STRIP */}
      <div className="text-sky-600 py-24 px-12 text-center text-4xl font-bold leading-snug">
        At cMPLiBe, we unite institutions, graduates and industry to build a
        generation defined by Learning Agility and Growth-Mindset.
      </div>

      {/* TRANSFORMING POTENTIAL SECTION */}
      <section className="bg-linear-to-b from-[#135c83] to-[#0f3b5f] px-12 py-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-28">
          {/* SECTION TITLE */}
          <h1 className="text-3xl md:text-6xl font-bold text-center">
            Transforming Potential into Proof
          </h1>

          {/* FIRST ROW */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src={img1}
              alt="Transforming Potential"
              className="h-88 rounded-xl shadow-lg"
            />

            <div className="space-y-6 text-2xl leading-relaxed text-center md:text-left">
              <p>
                In today's world, LQ (Learning Quotient) is the new IQ. At
                cMPLiBe, we call it the learnAgiliQuotient — the mindset to
                Learn, Unlearn and Relearn. It's your new currency.
              </p>

              <p>
                We help you seed, nurture and present this million-dollar
                mindset to the world, through our unique framework.
              </p>
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <img
              src={img2}
              alt="Your Exclusive Path"
              className="h-88 rounded-xl shadow-lg"
            />

            <div className="text-center md:text-left">
              <h3 className="text-4xl font-bold mb-6">Your Exclusive Path:</h3>

              <p className="text-2xl leading-relaxed mb-6 text-pretty">
                Embark on a gamified journey integrated into your campus life
                for real-world Exposure, hands-on Experience and a sharp
                Eye-on-Goal.
              </p>

              <Link
                to="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-2 text-lg rounded-md font-semibold transition">
                Know more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE MAKE IT HAPPEN */}
      <section className="bg-gradient-to-r from-[#0f4f73] via-[#1c6c96] to-[#0f4f73] px-12 py-24 flex flex-col items-center gap-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How Do We Make It Happen?
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            {/* CARD 1 */}
            <div className="relative rounded-3xl border-3 border-orange-500 p-2">
              <div className="relative w-fit h-40 rounded-2xl bg-[#e6e6e6] flex gap-2 items-center justify-between px-10">
                <div className="absolute -top-6 left-8 bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">
                  1
                </div>

                <p className="text-[#1c3b50] font-semibold leading-tight font-mono text-xl">
                  COACH-LED <br /> SELF-DISCOVERY
                </p>
                <img src={ic1} alt="Person with arrows" className="w-24" />

                {/* icon placeholder */}
                <div className="text-orange-500 text-4xl"></div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative rounded-3xl border-3 border-orange-500 p-2">
              <div className="relative w-fit h-40 rounded-2xl bg-[#e6e6e6] flex gap-2 items-center justify-between px-10">
                <div className="absolute -top-6 left-8 bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">
                  2
                </div>

                <p className="text-[#1c3b50] font-semibold leading-tight font-mono text-xl">
                  PERSONAL TALENT <br /> BRANDING
                </p>
                <img
                  src={ic2}
                  alt="A human with gear as brain"
                  className="w-24"
                />

                <div className="text-orange-500 text-4xl"></div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="relative rounded-3xl border-3 border-orange-500 p-2">
              <div className="relative w-fit h-40 rounded-2xl bg-[#e6e6e6] flex gap-2 items-center justify-between px-10">
                <div className="absolute -top-6 left-8 bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">
                  3
                </div>

                <p className="text-[#1c3b50] font-semibold text-pretty leading-tight font-mono text-xl">
                  CURATED EXPERIENTIAL <br />
                  LEARNING & PLACEMENT <br />
                  OPPORTUNITIES
                </p>
                <img
                  src={ic3}
                  alt="Magnifying glass with arrows"
                  className="w-24"
                />

                <div className="text-orange-500 text-4xl"></div>
              </div>
            </div>
          </div>

          <p className="text-white font-semibold text-3xl text-center max-w-3xl leading-snug">
            Your potential deserves proof. We help you earn it, own it and
            launch it with joy & pride.
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-orange-500 text-white font-bold lg:py-6 lg:px-12 rounded-4xl text-2xl shadow-lg hover:bg-orange-600 transition-colors">
          Become a cMPLiBe Learner
        </Link>
      </section>
    </div>
  );
}

export default Graduates;
