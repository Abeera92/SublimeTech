// File: src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, Search, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { SiSublimetext } from "react-icons/si";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Utilities", path: "/utilities" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact Us", path: "/contact" },
  ];

  // Scroll to top function
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-lg bg-white/80 shadow-md
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
    >
      <div className="mx-auto w-[90%] flex items-center justify-between py-4 md:py-5">
        {/* LOGO */}
        <NavLink to="/" onClick={handleNavClick} className="flex items-center gap-1">
          <SiSublimetext className="text-teal-500 text-3xl" />
          <p className="font-bold text-2xl relative right-1.5">ublime</p>
          <p className="text-teal-500 font-bold text-2xl relative right-1">Tech</p>
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-black ">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `border-b-2 transition-all duration-300 pb-1 ${
                    isActive
                      ? "border-teal-500 text-teal-600"
                      : "border-transparent hover:border-teal-500"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ICONS & BUTTON */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Search className="cursor-pointer text-black hover:text-teal-500 transition-colors duration-300" />
            <button
              className="border-2 border-black hover:border-white text-black rounded-full px-5 py-3 font-medium hover:bg-teal-500 hover:text-white transition duration-300"
              onClick={handleNavClick}
            >
              Get Started
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 transition duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="text-black" /> : <Menu className="text-black" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-white/90 via-teal-50 to-teal-100 backdrop-blur-lg shadow-xl rounded-xl py-8 px-6 transition-all duration-300">
          <ul className="flex flex-col items-center gap-6 text-gray-800 font-medium text-lg">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="w-full text-center px-6 rounded-lg cursor-pointer hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <NavLink to={item.path} onClick={handleNavClick}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="w-full">
              <button
                className=" w-full bg-teal-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-teal-600 transition duration-300"
                onClick={handleNavClick}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
