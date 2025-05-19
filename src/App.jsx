import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact", "resume"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-purple-950 to-slate-900 text-gray-100">
        {/* Blurry Cursor */}
        <motion.div
          className="cursor-blur"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            filter: "blur(24px)",
            pointerEvents: "none",
            zIndex: 9999,
            transform: `translate(${cursorPosition.x - 48}px, ${
              cursorPosition.y - 48
            }px)`,
          }}
        />

        <Navbar activeSection={activeSection} />

        <main>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Resume />
            </motion.div>
          </AnimatePresence>
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
