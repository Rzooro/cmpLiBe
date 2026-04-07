import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const NAV_ITEMS = [
  {
    head: "Home",
    submenu: false,
    link: "/",
  },
  {
    head: "About Us",
    submenu: false,
    link: "/about",
  },
  {
    head: "Services",
    submenu: true,
    sublinks: [
      { name: "For Institutions", link: "/institutions" },
      { name: "For Graduates", link: "/graduates" },
      { name: "For Corporates", link: "/corporates" },
    ],
  },
  {
    head: "Tech Engine",
    submenu: false,
    link: "/tech-engine",
  },
];

function NavLinks({ isMobile = false, closeMobile }) {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);

  const isGroupActive = (sublinks) =>
    sublinks?.some(({ link }) => location.pathname.startsWith(link));

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <ul
      className={
        isMobile
          ? "flex flex-col items-center gap-6 md:gap-8 text-xl md:text-2xl font-medium w-full"
          : "hidden lg:flex items-center lg:gap-8 xl:gap-12 text-sm lg:text-lg xl:text-xl font-medium tracking-wide"
      }>
      {NAV_ITEMS.map((item, index) => {
        const active = item.submenu
          ? isGroupActive(item.sublinks)
          : location.pathname === item.link;

        return (
          <li
            key={index}
            className={`relative group ${
              isMobile ? "w-full flex flex-col items-center" : ""
            }`}>
            {/* HEAD (Trigger or Link) */}
            {item.submenu ? (
              <button
                type="button"
                onClick={() => isMobile && toggle(index)}
                className={`flex items-center gap-1.5 transition-colors duration-300 focus:outline-none ${
                  active ? "text-[#f47920]" : "text-white hover:text-sky-200"
                }`}>
                {item.head}
                <IoIosArrowDown
                  className={`transition-transform duration-300 text-sm xl:text-base ${
                    openIndex === index ? "rotate-180" : ""
                  } lg:group-hover:rotate-180`}
                />
              </button>
            ) : (
              <NavLink
                to={item.link}
                onClick={closeMobile}
                className={`transition-colors duration-300 ${
                  active ? "text-[#f47920]" : "text-white hover:text-sky-200"
                }`}>
                {item.head}
              </NavLink>
            )}

            {/* ORANGE UNDERLINE (Desktop Only) - Thinner and more elegant */}
            {!isMobile && (
              <span
                className={`absolute -bottom-2 xl:-bottom-2.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-[#f47920] transition-all duration-300 ${
                  active ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            )}

            {/* DESKTOP DROPDOWN (Premium White Card) */}
            {item.submenu && !isMobile && (
              <div className="absolute top-[120%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 z-50">
                <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-2 min-w-[220px] xl:min-w-[260px] border border-gray-100 relative">
                  {/* Small upward triangle pointer */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>

                  <div className="relative z-10 flex flex-col gap-1">
                    {item.sublinks.map((s, i) => (
                      <NavLink
                        key={i}
                        to={s.link}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 rounded-xl transition-all duration-300 text-sm xl:text-base font-medium ${
                            isActive
                              ? "bg-[#f47920]/10 text-[#f47920] font-semibold"
                              : "text-[#002845] hover:bg-gray-50 hover:text-[#f47920] hover:translate-x-1"
                          }`
                        }>
                        {s.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* MOBILE ACCORDION */}
            {item.submenu && isMobile && (
              <div
                className={`overflow-hidden transition-all duration-500 w-full flex justify-center ${
                  openIndex === index
                    ? "max-h-[300px] opacity-100 mt-4"
                    : "max-h-0 opacity-0 mt-0"
                }`}>
                <div className="flex flex-col items-center gap-5 text-lg md:text-xl font-medium bg-white/5 w-full max-w-sm rounded-2xl py-6 border border-white/10 shadow-inner">
                  {item.sublinks.map((s, i) => (
                    <NavLink
                      key={i}
                      to={s.link}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        `transition-colors duration-300 ${
                          isActive
                            ? "text-[#f47920] font-semibold"
                            : "text-sky-200"
                        }`
                      }>
                      {s.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
