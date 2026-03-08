import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const NAV_ITEMS = [
  {
    head: "About Us",
    submenu: false,
    link: "/about",
  },
  {
    head: "Services",
    submenu: true,
    sublinks: [
      { name: "For Graduates", link: "/graduates" },
      { name: "For Institutes", link: "/institutions" },
      { name: "For Corporates", link: "/corporates" },
    ],
  },
  {
    head: "Tech Engine",
    submenu: false,
    link: "/tech-engine",
  },
  {
    head: "Contact Us",
    submenu: false,
    link: "/contact",
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
          ? "flex flex-col gap-6 text-2xl font-semibold"
          : "hidden md:flex items-end gap-6 text-xl"
      }>
      {NAV_ITEMS.map((item, index) => {
        const active = item.submenu
          ? isGroupActive(item.sublinks)
          : location.pathname === item.link;

        return (
          <li
            key={index}
            className={`relative group ${
              active ? "text-sky-400" : "text-white"
            }`}>
            {/* HEAD */}
            {item.submenu ? (
              <button
                type="button"
                onClick={() => isMobile && toggle(index)}
                className="flex items-center gap-1">
                {item.head}
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  } md:group-hover:translate-y-1`}
                />
              </button>
            ) : (
              <NavLink to={item.link} onClick={closeMobile}>
                {item.head}
              </NavLink>
            )}

            {/* UNDERLINE */}
            {!isMobile && (
              <span
                className={`absolute -bottom-3 left-0 h-0.75 rounded-full bg-sky-400 transition-all duration-300 ${
                  active ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            )}

            {/* DESKTOP DROPDOWN */}
            {item.submenu && !isMobile && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <div className="bg-sky-500 text-white rounded-xl shadow-xl p-4 min-w-55">
                  {item.sublinks.map((s, i) => (
                    <NavLink
                      key={i}
                      to={s.link}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg transition ${
                          isActive ? "bg-sky-600" : "hover:bg-gray-300/60"
                        }`
                      }>
                      {s.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}

            {/* MOBILE ACCORDION */}
            {item.submenu && isMobile && (
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-100 opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <div className="mt-3 ml-4 flex flex-col gap-3 text-lg">
                  {item.sublinks.map((s, i) => (
                    <NavLink
                      key={i}
                      to={s.link}
                      onClick={closeMobile}
                      className="text-sky-300">
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
