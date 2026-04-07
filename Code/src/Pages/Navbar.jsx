import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure this path is correct
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavLinks from "./Navlinks.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-[#001f36]/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3 lg:py-3 xl:py-4"
            : "bg-transparent py-4 lg:py-5 xl:py-6"
        }`}>
        {/* MAIN NAV CONTAINER */}
        <nav className="relative flex items-center justify-between w-full px-5 sm:px-8 md:px-12 lg:px-4 xl:px-16 text-white max-w-[120rem] mx-auto">
          {/* Logo (Left) - Scaled down slightly for a more premium, understated look */}
          <Link
            to="/"
            className="relative z-[110] flex items-center"
            onClick={closeMenu}>
            <img
              src={logo}
              alt="cMPLiBe Logo"
              className="h-8 sm:h-9 md:h-10 lg:h-14 xl:h-16 object-contain hover:scale-105 transition-transform duration-300 filter brightness-110"
            />
          </Link>

          {/* Desktop NavLinks - Hidden on sm/md, visible on lg/xl and absolutely centered */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
            <NavLinks />
          </div>

          {/* Right Side: CTA & Mobile Toggle */}
          <div className="relative z-[110] flex items-center gap-4 sm:gap-6">
            {/* Desktop Contact Button - Sleeker padding and font size */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex relative items-center justify-center px-6 xl:px-8 py-2 xl:py-2.5 text-sm xl:text-base font-semibold text-white bg-[#f47920] rounded-full overflow-hidden shadow-[0_10px_20px_rgba(244,121,32,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_rgba(244,121,32,0.5)] group">
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
              <span className="relative tracking-wide">Contact Us</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-2xl md:text-3xl text-white focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu">
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 w-full h-[100dvh] bg-[#001f36]/95 backdrop-blur-2xl z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}>
        <div className="w-full px-8 flex flex-col items-center gap-8 mt-10">
          <NavLinks isMobile closeMobile={closeMenu} />

          {/* Mobile CTA - Scaled down from 2xl to a sleek text-lg */}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="w-full max-w-xs text-center bg-[#f47920] hover:bg-[#d96617] text-white px-8 py-3.5 rounded-full text-lg font-semibold shadow-[0_10px_25px_rgba(244,121,32,0.3)] transition-all duration-300 active:scale-95 tracking-wide">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
