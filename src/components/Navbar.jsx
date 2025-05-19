import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { title: "Home", url: "#home" },
  { title: "About", url: "#about" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
  { title: "Resume", url: "#resume" },
];

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  // Improved scroll function with offset calculation
  const scrollToSection = useCallback((sectionId) => {
    setIsMenuOpen(false); // First close the menu

    // Delay the scroll slightly to ensure the menu is hidden
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 70; // adjust if your navbar height is different
        const elementPosition =
          el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 300); // 300ms to match the closing animation
  }, []);

  // Accessibility improvements for keyboard navigation
  const handleKeyDown = (e, sectionId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-purple-950/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={() => {
              window.location.href = "/"; // triggers full reload
            }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
            aria-label="Return to home"
          >
            Port<span className="text-white">Folio</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const sectionId = link.url.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.title}
                  href={link.url}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, sectionId)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded px-2 py-1 ${
                    isActive
                      ? "text-purple-400 font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                  tabIndex="0"
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-x-0 -bottom-1 h-0.5 bg-purple-400"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {link.title}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-300" />
              ) : (
                <Moon size={20} className="text-purple-300" />
              )}
            </button> */}

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X size={24} className="text-white" />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={
          isMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden"
        aria-hidden={!isMenuOpen}
      >
        <div className="px-4 pt-3 pb-4 space-y-2 bg-purple-950/90 backdrop-blur-lg">
          {navLinks.map((link) => {
            const sectionId = link.url.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.title}
                href={link.url}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(sectionId);
                }}
                onKeyDown={(e) => handleKeyDown(e, sectionId)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                  isActive
                    ? "bg-purple-700/50 text-white"
                    : "text-gray-300 hover:bg-purple-800/30 hover:text-white"
                }`}
                tabIndex={isMenuOpen ? "0" : "-1"}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
