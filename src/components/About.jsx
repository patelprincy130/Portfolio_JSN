import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Server,
  Palette,
  Users,
  Bookmark,
  Lightbulb,
} from "lucide-react";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
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
      },
    },
  };
  const skills = [
    {
      name: "Frontend Development",
      icon: <Code size={36} className="text-purple-400" />,
      description:
        "Building responsive and intuitive user interfaces using modern frameworks.",
    },
    {
      name: "Backend Development",
      icon: <Server size={36} className="text-blue-400" />,
      description:
        "Creating robust and scalable server-side applications and APIs.",
    },
    {
      name: "UI/UX Design",
      icon: <Palette size={36} className="text-pink-400" />,
      description:
        "Designing beautiful and functional user experiences with a focus on usability.",
    },
    {
      name: "Team Collaboration",
      icon: <Users size={36} className="text-green-400" />,
      description:
        "Working effectively in cross-functional teams to deliver exceptional products.",
    },
    {
      name: "Project Management",
      icon: <Bookmark size={36} className="text-yellow-400" />,
      description:
        "Planning, organizing, and managing resources to successfully complete projects.",
    },
    {
      name: "Problem Solving",
      icon: <Lightbulb size={36} className="text-orange-400" />,
      description:
        "Analyzing complex problems and developing effective solutions.",
    },
  ];

  const technicalSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML & CSS", level: 92 },
    { name: "TypeScript", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 80 },
    { name: "Data Structures and Algorithms", level: 65 },
  ];

  const education = [
    {
      degree: "Computer Programming",
      institution: "Georgian College, ON, Canada",
      year: "2023 - 2025",
      description:
        "Focused on Full-Stack Development and Software Engineering.",
    },
    {
      degree: "High School Major with Computer Science & Mathematics",
      institution: "RPTP Science College, Gujarat, India",
      year: "2020 - 2022",
      description: "Specialized in Web Development and Problem Solving.",
    },
  ];
  return (
    <motion.section
      id="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-10 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-8 items-start mb-20"
        >
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Who I Am
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate Full Stack Developer with over 1 year of
                experience creating web applications that are not only
                functional but also provide exceptional user experiences.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                My journey in software development began during my high school
                years, where I discovered my passion for turning ideas into
                reality through code.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating
                intuitive interfaces that make technology accessible to
                everyone.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">
                Education Timeline
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l-2 border-purple-500/50 group"
                    whileHover={{ x: 5 }} // Added hover effect
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500 group-hover:bg-pink-500 transition-colors"></div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {item.degree}
                    </h4>
                    <p className="text-purple-300/80 mb-1">
                      {item.institution}
                    </p>
                    <p className="text-gray-400 text-sm mb-2">{item.year}</p>
                    <p className="text-gray-300/90">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.h3
          variants={itemVariants}
          className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        >
          What I've Learned
        </motion.h3>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }} // Added hover effect
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-gray-700/50 rounded-full">
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">
                {skill.name}
              </h4>
              <p className="text-gray-300/90">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          variants={itemVariants}
          className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        >
          Technical Skills
        </motion.h3>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {technicalSkills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-6">
              <div className="flex justify-between mb-3">
                <h4 className="font-medium text-gray-200">{skill.name}</h4>
                <span className="text-purple-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
