import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Get current route to highlight active links
  const { pathname } = useLocation();

  // Helper function to check if the link is active
  const isActive = (path) => pathname === path;

  return (
    <footer className="bg-gradient-to-b from-[#001f36] to-[#000f1a] text-white pt-16 lg:pt-20 pb-3 lg:pb-4 border-t border-white/5">
      {/* Removed 'container' and 'max-w-7xl' to let it stretch end-to-end on massive screens */}
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-12 xl:gap-16 mb-8 lg:mb-10">
          {/* Column 1: Main Links */}
          <div className="col-span-1">
            <h3 className="text-sky-400/80 font-semibold tracking-widest uppercase text-[10px] lg:text-xs mb-6 lg:mb-8">
              Company
            </h3>
            <ul className="space-y-4 lg:space-y-5 text-sm lg:text-base">
              <li>
                <Link
                  to="/"
                  className={`${
                    isActive("/")
                      ? "text-[#f47920]"
                      : "text-sky-100/70 hover:text-white"
                  } transition-all duration-300 flex items-center group font-medium`}>
                  <span
                    className={`${
                      isActive("/")
                        ? "w-4 mr-2"
                        : "w-0 mr-0 group-hover:w-4 group-hover:mr-2"
                    } h-px bg-[#f47920] transition-all duration-300`}></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${
                    isActive("/about")
                      ? "text-[#f47920]"
                      : "text-sky-100/70 hover:text-white"
                  } transition-all duration-300 flex items-center group font-medium`}>
                  <span
                    className={`${
                      isActive("/about")
                        ? "w-4 mr-2"
                        : "w-0 mr-0 group-hover:w-4 group-hover:mr-2"
                    } h-px bg-[#f47920] transition-all duration-300`}></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/tech-engine"
                  className={`${
                    isActive("/tech-engine")
                      ? "text-[#f47920]"
                      : "text-sky-100/70 hover:text-white"
                  } transition-all duration-300 flex items-center group font-medium`}>
                  <span
                    className={`${
                      isActive("/tech-engine")
                        ? "w-4 mr-2"
                        : "w-0 mr-0 group-hover:w-4 group-hover:mr-2"
                    } h-px bg-[#f47920] transition-all duration-300`}></span>
                  Tech Engine
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${
                    isActive("/contact")
                      ? "text-[#f47920]"
                      : "text-sky-100/70 hover:text-white"
                  } transition-all duration-300 flex items-center group font-medium`}>
                  <span
                    className={`${
                      isActive("/contact")
                        ? "w-4 mr-2"
                        : "w-0 mr-0 group-hover:w-4 group-hover:mr-2"
                    } h-px bg-[#f47920] transition-all duration-300`}></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Service Links */}
          <div className="col-span-1">
            <h3 className="text-sky-400/80 font-semibold tracking-widest uppercase text-[10px] lg:text-xs mb-6 lg:mb-8">
              Our Services
            </h3>
            <ul className="space-y-4 lg:space-y-5 text-sm lg:text-base">
              <li>
                <Link
                  to="/institutions"
                  className={`${
                    isActive("/institutions")
                      ? "text-[#f47920]"
                      : "text-sky-100/70 hover:text-white"
                  } transition-all duration-300 flex items-center group font-medium`}>
                  <span
                    className={`${
                      isActive("/institutions")
                        ? "w-4 mr-2"
                        : "w-0 mr-0 group-hover:w-4 group-hover:mr-2"
                    } h-px bg-[#f47920] transition-all duration-300`}></span>
                  For Institutions
                </Link>
              </li>
              <li>
                <Link
                  to="/graduates"
                  className={`${
                    isActive("/graduates")
                      ? "text-[#f47920]"
                      : "text-sky-100/70 hover:text-white"
                  } transition-all duration-300 flex items-center group font-medium`}>
                  <span
                    className={`${
                      isActive("/graduates")
                        ? "w-4 mr-2"
                        : "w-0 mr-0 group-hover:w-4 group-hover:mr-2"
                    } h-px bg-[#f47920] transition-all duration-300`}></span>
                  For Graduates
                </Link>
              </li>
              <li>
                <Link
                  to="/corporates"
                  className={`${
                    isActive("/corporates")
                      ? "text-[#f47920]"
                      : "text-sky-100/70 hover:text-white"
                  } transition-all duration-300 flex items-center group font-medium`}>
                  <span
                    className={`${
                      isActive("/corporates")
                        ? "w-4 mr-2"
                        : "w-0 mr-0 group-hover:w-4 group-hover:mr-2"
                    } h-px bg-[#f47920] transition-all duration-300`}></span>
                  For Corporations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-sky-400/80 font-semibold tracking-widest uppercase text-[10px] lg:text-xs mb-6 lg:mb-8">
              Headquarters
            </h3>
            <address className="not-italic text-sm lg:text-base text-sky-100/70 leading-relaxed lg:leading-loose font-medium">
              19, 2nd Cross, 2nd Main, NS Palya,
              <br />
              2nd Stage, BTM Layout,
              <br />
              Bengaluru, Karnataka - 560076
            </address>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-sky-400/80 font-semibold tracking-widest uppercase text-[10px] lg:text-xs mb-6 lg:mb-8">
              Get in Touch
            </h3>

            <div className="space-y-4 lg:space-y-5 mb-8">
              <a
                href="tel:+918217707976"
                className="flex items-center gap-3 lg:gap-4 text-sky-100/70 hover:text-white transition-colors group">
                <div className="bg-white/5 p-2 lg:p-2.5 rounded-full group-hover:bg-[#f47920] transition-colors shrink-0">
                  <MdCall className="size-3.5 lg:size-4 text-white" />
                </div>
                <span className="font-medium text-sm lg:text-base">
                  +91 8217707976
                </span>
              </a>
              <a
                href="mailto:cmplifutureadi@gmail.com"
                className="flex items-center gap-3 lg:gap-4 text-sky-100/70 hover:text-white transition-colors group">
                <div className="bg-white/5 p-2 lg:p-2.5 rounded-full group-hover:bg-[#f47920] transition-colors shrink-0">
                  <MdEmail className="size-3.5 lg:size-4 text-white" />
                </div>
                <span className="font-medium text-xs md:text-sm lg:text-base break-all">
                  cmplifutureadi@gmail.com
                </span>
              </a>
            </div>

            <div className="flex gap-3 lg:gap-4">
              <a
                href="https://www.instagram.com/cmplibe/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2.5 lg:p-3 rounded-full hover:bg-[#f47920] hover:-translate-y-1 transition-all duration-300">
                <FaInstagram className="size-4 lg:size-5" />
              </a>
              <a
                href="https://www.youtube.com/@cMPLiBe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2.5 lg:p-3 rounded-full hover:bg-[#f47920] hover:-translate-y-1 transition-all duration-300">
                <FaYoutube className="size-4 lg:size-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/cmpli-be-learningtech-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2.5 lg:p-3 rounded-full hover:bg-[#f47920] hover:-translate-y-1 transition-all duration-300">
                <FaLinkedin className="size-4 lg:size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs lg:text-sm text-sky-100/50 font-medium">
            <p className="text-center md:text-left">
              © {currentYear} cMPLiBe. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
              <Link
                to="/terms-of-service"
                className={`${
                  isActive("/terms-of-service")
                    ? "text-white"
                    : "hover:text-white"
                } transition-colors`}>
                Privacy Policy & Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
