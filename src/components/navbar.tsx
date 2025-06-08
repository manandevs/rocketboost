import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";

const navitems = [
  { LABEL: "HOME", URL: "#", isActive: true },
  { LABEL: "STORE", URL: "#" },
  { LABEL: "SERVICE", URL: "#" },
  { LABEL: "ABOUT US", URL: "#" },
  { LABEL: "CONTACT US", URL: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="py-6 px-4 sm:px-8 md:px-16 z-20 w-full text-white">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold flex items-center">
            <IoRocketOutline  className="mr-2 text-red-500" size={32} />
            <span className="text-white">COMPANY</span>
            <span className="text-red-400">LOGO</span>
          </a>
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navitems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.URL}
                  className={
                    item.isActive
                      ? "hover:text-red-400 transition-colors border-b-2 border-red-500 pb-1"
                      : "hover:text-red-400 transition-colors"
                  }
                >
                  {item.LABEL}
                </a>
              </div>
            ))}
          </nav>
          {/* Hamburger menu button */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <HiOutlineX size={28} />
            ) : (
              <HiOutlineMenu size={28} />
            )}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#2c1e4a]/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center space-y-3">
            {navitems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.URL}
                  className={
                    item.isActive
                      ? "text-2xl text-red-400 transition-colors leading-[1.05]"
                      : "text-2xl hover:text-red-400 transition-colors leading-[1.05]"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.LABEL}
                </a>
              </div>
            ))}
            {/* Close menu button */}
            <button
              className="text-2xl text-[#9f9f9f] transition-colors leading-[1.05] mt-4"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <HiOutlineX size={32} />
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
