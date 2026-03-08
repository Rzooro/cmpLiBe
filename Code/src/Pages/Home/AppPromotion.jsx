import React from "react";
import pimg from "../../assets/home/phone_app.png";
import dia from "../../assets/home/dialogue.png";

function AppPromotion() {
  return (
    <div className="bg-[#063b6e] py-20 flex gap-20 items-center justify-center">
      <img src={pimg} alt="cmPLibe app" className="w-80" />
      <div className="flex flex-col gap-18 justify-center">
        <h2 className="font-roboto text-white text-4xl max-w-240 text-pretty">
          The cMPLiBe App turns goal-oriented learning into a curious & exciting
          journey with real games, real challenges, real opportunities and real
          rewards, blending physical and digital experiences in optimal
          proportions, integrating into any UG/PG programmes.
        </h2>
        <img src={dia} alt="Dialogue" className="w-140" />
      </div>
    </div>
  );
}

export default AppPromotion;
