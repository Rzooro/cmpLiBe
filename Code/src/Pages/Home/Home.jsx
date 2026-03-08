import React from "react";
import Hero from "./Hero.jsx";
import Options from "./Options.jsx";
import QCarousel from "./QCarousel.jsx";
import AppPromotion from "./AppPromotion.jsx";

function Home() {
  return (
    <div>
      <Hero />
      <Options />
      <QCarousel />
      <AppPromotion />
    </div>
  );
}

export default Home;
