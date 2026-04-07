import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Pages/Navbar.jsx";
import Footer from "./Pages/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import TechEngine from "./Pages/TechEngine/techEngine.jsx";
import Institutes from "./Pages/Services/ForInstitutes/Institutes.jsx";
import Graduates from "./Pages/Services/ForGraduates/Graduates.jsx";
import Corporates from "./Pages/Services/ForCorporates/Corporates.jsx";
import LegalPolicies from "./Pages/LegalPolicies.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/tech-engine" element={<TechEngine />} />
        <Route path="/institutions" element={<Institutes />} />
        <Route path="/graduates" element={<Graduates />} />
        <Route path="/corporates" element={<Corporates />} />
        <Route path="/terms-of-service" element={<LegalPolicies />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
