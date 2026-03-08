import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import NavLinks from "./Navlinks.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Hide / show + background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setScrolled(currentScrollPos > 40);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "fixed bg-sky-950/85 backdrop-blur-sm shadow-lg"
          : "absolute bg-transparent"
      }`}>
      {/* MAIN NAV */}
      <nav className="px-5 py-5 flex items-center justify-between text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-14 object-contain hover:scale-105 duration-300 filter brightness-110 contrast-105"
          />
        </Link>

        {/* Desktop NavLinks */}
        <NavLinks />

        {/* Login Button */}
        <Link
          to="/login"
          className="hidden md:block bg-orange-500 hover:bg-orange-700 hover:scale-[102%] px-10 py-3 rounded-2xl text-lg font-semibold transition">
          Login
        </Link>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-3xl text-white">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-0 bg-[#063b6e] text-white flex flex-col items-center justify-center gap-12 text-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <NavLinks isMobile closeMobile={() => setIsOpen(false)} />

        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="bg-orange-500 px-12 py-4 rounded-2xl font-semibold">
          Login
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
