import React from "react";
import img1 from "../../assets/home/img1.jpg";
import img2 from "../../assets/home/img2.jpg";
import img3 from "../../assets/home/img3.jpg";
import img4 from "../../assets/home/img4.jpg";

function Options() {
  return (
    <>
      <div className="bg-linear-140 from-[#00a2dc] to-[#003972] gap-24 py-20 flex flex-col items-center">
        <div className="flex pl-15 gap-18 justify-center items-center">
          <img
            src={img1}
            alt="Two students talking"
            className="rounded-xl w-140"
          />
          <div className="flex flex-col gap-6 justify-center">
            <p className="font-roboto text-white text-3xl leading-relaxed w-10/12">
              Across the higher education landscape in India's tier ll & lll
              cities/towns, cMPLiBe is sparking a new wave of ambition. It
              starts by activating the growth-mindset of graduate students,
              transforming them into a pre-validated talent pipeline for
              companies and elevating institutions into recognizable leaders who
              shape regional growth.
            </p>
            <button className="text-xl text-white bg-orange-500 w-fit px-4 py-2 rounded-xl cursor-pointer">
              Know More
            </button>
          </div>
        </div>
        <h1 className="text-white text-5xl leading-relaxed text-center">
          cMPLiBe's unique solution is based on it's proprietary <br />
          <strong>learnAgilitiQuotient®</strong> metric.
        </h1>
        <div className="flex flex-col gap-10">
          <div className="flex pl-15 gap-14 justify-center items-center">
            <img src={img2} alt="Classroom" className="rounded-xl w-140" />
            <div className="flex flex-col gap-6 justify-center">
              <h1 className="text-4xl text-white font-bold">
                For Institutions
              </h1>
              <p className="font-roboto text-white text-2xl leading-relaxed w-10/12">
                We come in as your strategic partner to reveal the
                growth-mindset (GM) & innovation-mindset (IM) of your graduate
                students. We help you build Institutional Leadership
                differentiated on ‘unique value’ to your customers- the
                students.
              </p>
              <button className="text-xl text-white bg-orange-500 w-fit px-4 py-2 rounded-xl cursor-pointer hover:scale-105 hover:bg-orange-600 transition-all duration-300">
                Partner with Us
              </button>
            </div>
          </div>
          <div className="flex pl-15 gap-10 justify-center items-center">
            <img src={img3} alt="Classroom" className="rounded-xl w-140" />
            <div className="flex flex-col gap-6 justify-center">
              <h1 className="text-4xl text-white font-bold">For Graduates</h1>
              <p className="font-roboto text-white text-2xl leading-relaxed w-10/12">
                We quantify hard-to-measure, critical attributes hidden in you &
                reward you with unique micro-Credentials, preparing you & giving
                you ‘exclusive visibility’ in the world of opportunities.
              </p>
              <button className="text-xl text-white bg-orange-500 w-fit px-4 py-2 rounded-xl cursor-pointer hover:scale-105 hover:bg-orange-600 transition-all duration-300">
                Join Us
              </button>
            </div>
          </div>
          <div className="flex pl-15 gap-10 justify-center items-center">
            <img src={img4} alt="Classroom" className="rounded-xl w-140" />
            <div className="flex flex-col gap-6 justify-center">
              <h1 className="text-4xl text-white font-bold">For Corporates</h1>
              <p className="font-roboto text-white text-2xl leading-relaxed w-10/12">
                We help you by providing seamless access to proven
                growth-mindsets across campuses in Bharat’s heartland for all
                your talent requirements- local/regional/national/global,
                temporary or full-time.
              </p>
              <button className="text-xl text-white bg-orange-500 w-fit px-4 py-2 rounded-xl cursor-pointer hover:scale-105 hover:bg-orange-600 transition-all duration-300">
                Hire from Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Options;
