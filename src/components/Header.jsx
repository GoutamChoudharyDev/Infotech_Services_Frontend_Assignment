import { useState } from "react";
// React Icons
import {
  FaHome,
  FaInfoCircle,
  FaHandsHelping,
  FaTag,
  FaQuestionCircle,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <FaHome />, href: "#home", color: "text-red-500" },
    { name: "About Us", icon: <FaInfoCircle />, href: "#about" },
    { name: "Our Services", icon: <FaHandsHelping />, href: "#services" },
    { name: "Pricing", icon: <FaTag />, href: "#pricing" },
    { name: "FAQ", icon: <FaQuestionCircle />, href: "#faq" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="logo.png" alt="Company Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">COMPANY</span>
              <span className="text-xs text-gray-500">business tagline</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition flex items-center gap-1"
              >
                {link.icon && <span className={link.color}>{link.icon}</span>}
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition">
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Sidebar from Right */}
            <div className="relative bg-pink-100 w-72 p-6 flex flex-col space-y-6 h-full">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-red-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTimes size={24} />
              </button>

              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img src="logo.png" alt="Company Logo" className="h-10 w-auto" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900">COMPANY</span>
                  <span className="text-xs text-gray-500">business tagline</span>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 font-medium text-gray-700 hover:text-gray-900 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className={link.color}>{link.icon}</span>
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* CTA Button */}
              <button className="mt-auto bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg w-full">
                CONTACT US
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
