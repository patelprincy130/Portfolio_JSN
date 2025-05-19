import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Globe, X, ArrowRight } from "lucide-react";

const projectCategories = ["All", "Frontend", "Backend", "Full Stack"];

const projectData = [
  {
    id: 1,
    title: "Wander-A Full Stack Property Listing Platform",
    category: "Full Stack",
    image: "/wanderProject.jpg",
    description:
      "Wander is a dynamic web application, Where users can register, authenticate securely, and post listings that include essential details such as images, pricing, description and location.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Passport.js",
      "Express",
      "MongoDB",
    ],
    liveUrl: "https://wander-project-orgn.onrender.com/listings",
    githubUrl: "https://github.com/patelprincy130/wander-project",
  },
  {
    id: 2,
    title: "PrepWise : AI Mock Interview System",
    category: "Full Stack",
    image: "/AIProject.png",
    description:
      "An interactive AI-driven mock interview platform enabling users to simulate real interview experiences via voice calls with an AI assistant. ",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "Vapi AI(Voice Agent)",
      "Google AI Studio",
    ],
    liveUrl: "https://ai-powered-mock-interview-project.vercel.app/",
    githubUrl:
      "https://github.com/patelprincy130/AI-powered-mock-interview-project",
  },
  // {
  //   id: 3,
  //   title: "Task Management API",
  //   category: "Backend",
  //   image:
  //     "https://images.pexels.com/photos/4068379/pexels-photo-4068379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   description:
  //     "RESTful API for task management with user authentication, task CRUD operations, and team collaboration features.",
  //   technologies: ["Node.js", "Express", "MongoDB", "JWT"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },
  // {
  //   id: 4,
  //   title: "Real Estate Listing Platform",
  //   category: "Full Stack",
  //   image:
  //     "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   description:
  //     "A platform for property listings with search functionality, map integration, and user messaging system.",
  //   technologies: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },
  {
    id: 5,
    title: "Weather Dashboard",
    category: "Frontend",
    image: "/weatherProject.jpg",
    description:
      "Interactive weather dashboard that provides real-time weather information, forecasts, and historical data visualization.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://patelprincy130.github.io/WeatherApp/",
    githubUrl: "https://github.com/patelprincy130/WeatherApp",
  },
  {
    id: 6,
    title: "Portfolio",
    category: "Frontend",
    image: "/portfolioProject.png",
    description:
      "Crafted a responsive React portfolio with smooth animations, showcasing projects, skills, and creativity.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projectData);
    } else {
      setFilteredProjects(
        projectData.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="py-10 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="pb-1 text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-tight"
        >
          My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 p-1 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700/50">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover="hover"
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                onMouseEnter={() => setIsHovered(project.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovered === project.id ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <span className="inline-block px-3 py-1 bg-purple-600/80 text-white text-xs font-semibold rounded-full mb-2">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    {/* <motion.button
                      onClick={() => openProjectModal(project)}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium"
                    >
                      View Details <ArrowRight size={16} />
                    </motion.button> */}
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Live demo"
                      >
                        <Globe size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center py-12"
          >
            <p className="text-gray-400">No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-purple-600/80 text-white text-xs font-semibold rounded-full mb-2">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-xl font-semibold mb-4 text-white">
                  Project Overview
                </h4>
                <p className="text-gray-300 mb-6">
                  {selectedProject.description}
                </p>

                <h4 className="text-xl font-semibold mb-4 text-white">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-700/50 text-gray-200 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 group"
                  >
                    <Globe size={18} /> Live Demo
                    <motion.span
                      animate={{ x: groupHover ? 5 : 0 }}
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      →
                    </motion.span>
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2 group"
                  >
                    <Github size={18} /> View Code
                    <motion.span
                      animate={{ x: groupHover ? 5 : 0 }}
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      →
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
