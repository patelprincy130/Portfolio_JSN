import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import { useMemo } from "react";
import profilePhoto1 from "/pry1.jpg";
import profilePhoto2 from "/pry2.jpg";
import profilePhoto3 from "/pry3.jpg";

// Sample images - replace with your actual images
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Developer working on laptop",
  },
  {
    src: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Code editor with React code",
  },
  {
    src: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    alt: "Web development concepts",
  },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  // Manual navigation
  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden w-full"
      style={{
        zIndex: 10, // Ensure it's above other elements
        position: "relative", // Important for stacking context
      }}
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">
            <span className="text-white">Hello, I'm</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Princy Ka Patel
            </span>
          </h1>

          <div className="text-xl md:text-3xl font-bold text-gray-300 h-16 md:h-20">
            <TypeAnimation
              sequence={[
                "Software Developer",
                1500,
                "Full Stack Developer",
                1500,
                "React Specialist",
                1500,
                "Problem Solver",
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="inline-block"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-300 mt-8 max-w-lg">
            I build modern, responsive web applications with a focus on user
            experience and clean code. Turning ideas into elegant digital
            solutions.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
            <a
              href="/PrincyKapatel.pdf"
              target="_blank"
              download
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex space-x-6 mt-12"
          >
            <a
              href="https://github.com/patelprincy130"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/princyypatel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a> */}
          </motion.div>
        </motion.div>

        {/* Right Column - Image Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-80 md:h-96 lg:h-[500px]"
        >
          {/* Main profile photo */}
          <AnimatePresence mode="wait">
            {[profilePhoto1, profilePhoto2, profilePhoto3].map(
              (photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: currentImageIndex === index ? 1 : 0,
                    scale: currentImageIndex === index ? 1 : 0.9,
                    zIndex: currentImageIndex === index ? 10 : 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className={`absolute inset-0 flex items-center justify-center ${
                    index === 1 ? "rotate-2" : index === 2 ? "-rotate-2" : ""
                  }`}
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-purple-400/30 shadow-2xl">
                    <img
                      src={photo}
                      alt={`Profile ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>

          {/* Floating decorative elements */}
          <div className="absolute -z-10 inset-0">
            <motion.div
              animate={{
                x: [0, 10, 0, -10, 0],
                y: [0, -5, 0, 5, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-600/20 blur-xl"
            />
            <motion.div
              animate={{
                x: [0, -15, 0, 15, 0],
                y: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-pink-600/20 blur-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        }}
        className="absolute bottom-10 hidden sm:block"
      >
        <a
          href="#about"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll Down"
        >
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
