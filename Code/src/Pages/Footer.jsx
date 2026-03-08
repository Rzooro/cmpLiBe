import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F1F2E] text-white">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-8">
          <div>
            <ul className="space-y-3 text-sm md:text-lg">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-gray-300 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-gray-300 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/tech-engine"
                  className="hover:text-gray-300 transition-colors duration-200">
                  Tech Engine
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-gray-300 transition-colors duration-200">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 text-sm md:text-lg">
              <li>
                <Link
                  to="/for-graduates"
                  className="hover:text-gray-300 transition-colors duration-200">
                  For Institutions
                </Link>
              </li>
              <li>
                <Link
                  to="/for-graduates"
                  className="hover:text-gray-300 transition-colors duration-200">
                  For Graduates
                </Link>
              </li>
              <li>
                <Link
                  to="/for-corporations"
                  className="hover:text-gray-300 transition-colors duration-200">
                  For Corporations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 tracking-wide">
              Office Contact Address
            </h3>
            <address className="not-italic text-lg leading-relaxed text-gray-300">
              19, 2nd Cross, 2nd Main, NS Palya,
              <br />
              2nd Stage, BTM Layout,
              <br />
              Bengaluru, Karnataka - 560076
            </address>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6 text-sm md:text-lg">
              <MdCall className="size-4 md:size-6 shrink-0" />
              <span>+91 8217707976</span>
            </div>

            <div className="flex gap-4 text-white">
              <FaFacebookF className="size-5 md:size-8 hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
              <FaInstagram className="size-5 md:size-8 hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
              <FaYoutube className="size-5 md:size-8 hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
              <FaLinkedin className="size-5 md:size-8 hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
              <FaXTwitter className="size-5 md:size-8 hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 py-4 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-base text-gray-300">
          <p className="mb-2 md:mb-0">
            © {currentYear} - Copyright All Rights Reserved
          </p>
          <div className="flex gap-3 md:gap-4">
            <Link
              to="/cookies-policy"
              className="hover:text-white transition-colors">
              Cookies Policy
            </Link>
            <span>|</span>
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
