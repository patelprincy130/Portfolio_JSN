import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, Clock, Briefcase, Award, User } from "lucide-react";

const Resume = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  const experiences = [
    {
      position: "Software Developer Intern",
      company: "GAO Tek Inc.",
      duration: " Dec 2024 - Mar 2025 ",
      description:
        "Designed and developed applications using JavaScript and MongoDB, focusing on scalable and maintainable code.",
      achievements: [
        "Designed and customized responsive websites using WordPress themes and page builders.",
        "Developed and modified custom WordPress themes and child themes using PHP, HTML, CSS, and JavaScript.",
        "Installed, configured, and managed WordPress plugins to extend site functionality.",
        "Optimized website performance by improving load times, compressing images, and minimizing scripts.",
        "Created and managed content using the WordPress dashboard, including posts, pages, and custom post types.",
      ],
    },
    {
      position: "Coding & Robotics Intructor",
      company: "Ultimate Coders",
      duration: "April 2024 - Aug 2024",
      description: "",
      achievements: [
        "Delivered engaging lessons on HTML, CSS, JavaScript, and robotics through a project-based learning model.",
        "Created step-by-step guides to support students in understanding coding logic and problem-solving.",
        "Designed interactive learning activities using Arduino hardware and real-world examples.",
      ],
    },
    {
      position: "Web Developement Intern",
      company: "SaiGuru InfoTech",
      duration: "Jun 2022 - Apr 2023",
      description:
        "Developed responsive web applications, collaborated with design team, and performed code reviews for quality assurance.",
      achievements: [
        "Developed 20+ client websites using HTML, CSS, and JavaScript",
        "Implemented responsive design principles for mobile compatibility",
        "Optimized website performance achieving 90+ PageSpeed scores",
      ],
    },
  ];

  const certifications = [
    {
      title: "Certificate of Complete JavaScript Course ",
      issuer: "Udemy",
      date: "Feb 2024",
      description: "For Project: Full Stack Platform",
    },
    {
      title:
        "Certificate of Java Data Structures & Algorithms + LeetCode Exercises",
      issuer: "Udemy",
      date: "Feb 2024",
      description: "Strong foundation in Data Structures and Algorithm",
    },
    {
      title: "Learning Jira(Cloud Edition)",
      issuer: "LinkedIn",
      date: "Mar 2025",
      description: "For Project: Tracking progess",
    },
    {
      title: "Azure DevOps for Beginners",
      issuer: "LinkedIn",
      date: "Mar 2025",
      description: "CI/CD Pipelines",
    },
  ];

  return (
    <section
      id="resume"
      className=" py-10 relative bg-gradient-to-b from-gray-900/50 to-gray-950"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="pb-1 leading-tight text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        >
          My Resume
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Here's a snapshot of my professional journey. For a complete
              overview, download the PDF version below.
            </p>

            <motion.a
              href="/PrincyKapatel.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} />
              Download Resume
              <motion.span className="group-hover:translate-x-1 transition-transform">
                →
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
              <Briefcase className="text-purple-400" />
              Work Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 relative"
                >
                  <div className="absolute top-8 left-0 w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {exp.position}
                      </h4>
                      <p className="text-purple-300">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-400 shrink-0">
                      <Clock size={16} className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <h5 className="font-semibold text-white mb-3">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shrink-0"></span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
              <Award className="text-purple-400" />
              Certifications & Awards
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    {cert.title}
                  </h4>
                  <p className="text-purple-300 mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">
                    Issued: {cert.date}
                  </p>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
