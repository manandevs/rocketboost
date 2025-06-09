import { useState, useEffect, useRef } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";

const navitems = [
  { LABEL: "HOME", URL: "#home", isActive: true },
  { LABEL: "SERVICE", URL: "#service" },
  { LABEL: "FAQ", URL: "#faq" },
  { LABEL: "CONTACT US", URL: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (menuOpen) {
      scrollPosition.current = window.scrollY;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.scrollTo(0, scrollPosition.current);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
   
      <div
        className={`max-w-[1280px] mx-auto md:py-3.5 text-white px-6 py-4 md:px-14 md:pt-10 ${
          menuOpen ? "min-h-screen max-w-screen bg-[#4949495d] p-1" : "h-auto"
        }`}
      >
        <div className="w-full flex justify-between items-center relative">
          {/* Logo */}
          <a
            href="#"
            className="font-bold flex items-center"
            style={{ fontSize: "23.4px" }}
          >
            <IoRocketOutline
              className="mr-2 text-red-500"
              style={{ fontSize: "26px" }}
            />
            <span className="text-white">SEO-</span>
            <span className="text-red-400">Arizona</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            {navitems.map((item) => (
              <a
                key={item.LABEL}
                href={item.URL}
                className={`relative group px-1 text-[18px] ${
                  item.isActive ? "text-red-400 font-semibold" : "text-white"
                } hover:text-red-400 transition`}
              >
                {item.LABEL}
                <span
                  className="block absolute left-0 -bottom-1 h-0.5 bg-red-400 rounded-full transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                  style={{ width: "100%" }}
                />
              </a>
            ))}
          </nav>

          {/* Hamburger menu button */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <HiOutlineX size={36.4} />
            ) : (
              <HiOutlineMenu size={36.4} />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col h-full items-center justify-center space-y-3.5 mt-28">
            {navitems.map((item) => (
              <a
                key={item.LABEL}
                href={item.URL}
                className={`relative group px-2 text-center text-[20px] ${
                  item.isActive ? "text-red-400 font-semibold" : "text-white"
                } hover:text-red-400 transition`}
                onClick={() => setMenuOpen(false)}
              >
                {item.LABEL}
                <span
                  className="block absolute left-0 -bottom-1 h-0.5 bg-red-400 rounded-full transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                  style={{ width: "100%" }}
                />
              </a>
            ))}
          </nav>
        )}
      </div>
    
  );
}
