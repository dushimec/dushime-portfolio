"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../images/logo.png';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // To track the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine if a link is active based on the current path
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-background text-foreground shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Brand */}
        <Link to="/" className="font-bold text-xl md:text-2xl text-teal-light hover:text-teal transition-colors">
          <img src={logo} alt="DUSHIME Christian Logo" className="h-8 md:h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`relative text-sm md:text-base hover:text-teal-light transition-colors ${
              isActive("/") ? "text-teal-light after:w-full" : "text-foreground"
            } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-teal-light after:transition-all after:duration-300 ${
              isActive("/") ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`relative text-sm md:text-base hover:text-teal-light transition-colors ${
              isActive("/about") ? "text-teal-light after:w-full" : "text-foreground"
            } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-teal-light after:transition-all after:duration-300 ${
              isActive("/about") ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            About Me
          </Link>
          <Link
            to="/skills"
            className={`relative text-sm md:text-base hover:text-teal-light transition-colors ${
              isActive("/skills") ? "text-teal-light after:w-full" : "text-foreground"
            } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-teal-light after:transition-all after:duration-300 ${
              isActive("/skills") ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            Skills
          </Link>
          <Link
            to="/portfolio"
            className={`relative text-sm md:text-base hover:text-teal-light transition-colors ${
              isActive("/portfolio") ? "text-teal-light after:w-full" : "text-foreground"
            } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-teal-light after:transition-all after:duration-300 ${
              isActive("/portfolio") ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/process"
            className={`relative text-sm md:text-base hover:text-teal-light transition-colors ${
              isActive("/process") ? "text-teal-light after:w-full" : "text-foreground"
            } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-teal-light after:transition-all after:duration-300 ${
              isActive("/process") ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            Process
          </Link>
          <Link
            to="/contact"
            className={`relative text-sm md:text-base hover:text-teal-light transition-colors ${
              isActive("/contact") ? "text-teal-light after:w-full" : "text-foreground"
            } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-teal-light after:transition-all after:duration-300 ${
              isActive("/contact") ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`}
          >
            Contact Me
          </Link>
          <a
            href="https://drive.google.com/file/d/1i2tEMJYiLZt_moMix61C_DeEyuWjZ-S9/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-foreground hover:text-teal-light transition-colors"
          >
            Resume
          </a>
          {/* {user ? (
            <button
              onClick={signOut}
              className="px-3 py-1 bg-teal text-foreground font-semibold rounded-md hover:bg-teal-light transition-all duration-300"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1 bg-teal text-foreground font-semibold rounded-md hover:bg-teal-light transition-all duration-300"
            >
              Sign In
            </Link>
          )} */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-foreground hover:text-teal-light focus:outline-none transition-colors"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card text-foreground shadow-lg">
          <Link
            to="/"
            className={`block px-4 py-2 hover:bg-teal-dark hover:text-foreground transition-colors ${
              isActive("/") ? "text-teal-light border-b-2 border-teal-light" : ""
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block px-4 py-2 hover:bg-teal-dark hover:text-foreground transition-colors ${
              isActive("/about") ? "text-teal-light border-b-2 border-teal-light" : ""
            }`}
            onClick={toggleMenu}
          >
            About Me
          </Link>
          <Link
            to="/skills"
            className={`block px-4 py-2 hover:bg-teal-dark hover:text-foreground transition-colors ${
              isActive("/skills") ? "text-teal-light border-b-2 border-teal-light" : ""
            }`}
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            to="/portfolio"
            className={`block px-4 py-2 hover:bg-teal-dark hover:text-foreground transition-colors ${
              isActive("/portfolio") ? "text-teal-light border-b-2 border-teal-light" : ""
            }`}
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/process"
            className={`block px-4 py-2 hover:bg-teal-dark hover:text-foreground transition-colors ${
              isActive("/process") ? "text-teal-light border-b-2 border-teal-light" : ""
            }`}
            onClick={toggleMenu}
          >
            Process
          </Link>
          <Link
            to="/contact"
            className={`block px-4 py-2 hover:bg-teal-dark hover:text-foreground transition-colors ${
              isActive("/contact") ? "text-teal-light border-b-2 border-teal-light" : ""
            }`}
            onClick={toggleMenu}
          >
            Contact Me
          </Link>
          <a
            href="https://drive.google.com/file/d/1i2tEMJYiLZt_moMix61C_DeEyuWjZ-S9/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 hover:bg-teal-dark hover:text-foreground transition-colors"
            onClick={toggleMenu}
          >
            Resume
          </a>
          {/* {user ? (
            <button
              onClick={() => {
                signOut();
                toggleMenu();
              }}
              className="block w-full text-left px-4 py-2 bg-teal text-foreground hover:bg-teal-light transition-colors"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="block px-4 py-2 bg-teal text-foreground hover:bg-teal-light transition-colors"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
          )} */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;