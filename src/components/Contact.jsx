// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useForm, ValidationError } from "@formspree/react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   Github,
//   Linkedin,
//   Twitter,
// } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [state, handleSubmit] = useForm("xwpozbvz");
//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
//   }
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Valid email is required";
//     if (!formData.subject.trim()) newErrors.subject = "Subject is required";
//     if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     try {
//       // Replace with your actual submission logic
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       setSubmitStatus("success");
//       setFormData({ name: "", email: "", subject: "", message: "" });
//       setErrors({});
//     } catch (error) {
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.8,
//       },
//     },
//   };

//   const contactInfo = [
//     {
//       icon: <Mail size={20} className="text-purple-400" />,
//       title: "Email",
//       value: "patelprincy130@gmail.com",
//       link: "mailto:patelprincy130@gmail.com",
//     },
//     {
//       icon: <Phone size={20} className="text-purple-400" />,
//       title: "Phone",
//       value: "+1 (416) 771-1304",
//       link: "tel:+14167711304",
//     },
//     {
//       icon: <MapPin size={20} className="text-purple-400" />,
//       title: "Location",
//       value: "Toronto, ON",
//       link: "https://maps.google.com/?q=Toronto,+ON",
//     },
//   ];

//   return (
//     <section
//       id="contact"
//       className="py-10 relative bg-gradient-to-b from-gray-900/50 to-gray-950"
//     >
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl"></div>
//         <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
//         >
//           Get In Touch
//         </motion.h2>

//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid md:grid-cols-2 gap-12 items-start"
//         >
//           {/* Contact Info */}
//           <motion.div variants={itemVariants}>
//             <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
//               <h3 className="text-2xl font-bold mb-6 text-purple-300">
//                 Contact Information
//               </h3>
//               <p className="text-gray-300 mb-8 leading-relaxed">
//                 Feel free to reach out to me! Whether you have a project in
//                 mind, a question, or just want to connect, I'd love to hear from
//                 you.
//               </p>

//               <div className="space-y-6 mb-8">
//                 {contactInfo.map((item, index) => (
//                   <motion.a
//                     key={index}
//                     href={item.link}
//                     target={item.title === "Location" ? "_blank" : "_self"}
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-900/50 group-hover:bg-purple-800/70 transition-colors">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-400">{item.title}</p>
//                       <p className="font-medium">{item.value}</p>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>

//               <h3 className="text-2xl font-bold mb-6 text-purple-300">
//                 Connect With Me
//               </h3>
//               <div className="flex gap-4">
//                 {[
//                   {
//                     icon: <Github size={20} />,
//                     url: "https://github.com/patelprincy130",
//                     label: "GitHub",
//                   },
//                   {
//                     icon: <Linkedin size={20} />,
//                     url: "https://www.linkedin.com/in/princyypatel/",
//                     label: "LinkedIn",
//                   },
//                   // {
//                   //   icon: <Twitter size={20} />,
//                   //   url: "https://twitter.com",
//                   //   label: "Twitter",
//                   // },
//                 ].map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={social.label}
//                     className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//                     whileHover={{ y: -3 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div variants={itemVariants}>
//             <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
//               <h3 className="text-2xl font-bold mb-6 text-purple-300">
//                 Send Me a Message
//               </h3>

//               <AnimatePresence>
//                 {submitStatus && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     className={`mb-6 p-4 rounded-lg border ${
//                       submitStatus === "success"
//                         ? "bg-green-500/20 text-green-300 border-green-500/30"
//                         : "bg-red-500/20 text-red-300 border-red-500/30"
//                     }`}
//                   >
//                     {submitStatus === "success"
//                       ? "Thank you for your message! I'll get back to you soon."
//                       : "Failed to send message. Please try again."}
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 gap-6">
//                   {["name", "email", "subject", "message"].map((field) => (
//                     <div key={field}>
//                       <label
//                         htmlFor={field}
//                         className="block text-sm font-medium text-gray-300 mb-2"
//                       >
//                         {field.charAt(0).toUpperCase() + field.slice(1)}
//                         {errors[field] && (
//                           <span className="text-red-400 ml-1">*</span>
//                         )}
//                       </label>
//                       {field === "message" ? (
//                         <textarea
//                           id={field}
//                           name={field}
//                           value={formData[field]}
//                           onChange={handleChange}
//                           rows="5"
//                           className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all ${
//                             errors[field]
//                               ? "border-red-500/50"
//                               : "border-gray-600/50 hover:border-gray-500/50"
//                           }`}
//                           placeholder={`Your ${field}...`}
//                         />
//                       ) : (
//                         <input
//                           type={field === "email" ? "email" : "text"}
//                           id={field}
//                           name={field}
//                           value={formData[field]}
//                           onChange={handleChange}
//                           className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all ${
//                             errors[field]
//                               ? "border-red-500/50"
//                               : "border-gray-600/50 hover:border-gray-500/50"
//                           }`}
//                           placeholder={`Your ${field}...`}
//                         />
//                       )}
//                       {errors[field] && (
//                         <motion.p
//                           initial={{ opacity: 0, y: -5 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="text-sm text-red-400 mt-2"
//                         >
//                           {errors[field]}
//                         </motion.p>
//                       )}
//                     </div>
//                   ))}

//                   <motion.button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`btn-primary inline-flex items-center justify-center gap-2 w-full ${
//                       isSubmitting ? "opacity-80 cursor-not-allowed" : ""
//                     }`}
//                     whileHover={!isSubmitting ? { scale: 1.03 } : {}}
//                     whileTap={!isSubmitting ? { scale: 0.98 } : {}}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <svg
//                           className="animate-spin h-5 w-5"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           />
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           />
//                         </svg>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send size={18} />
//                         Send Message
//                       </>
//                     )}
//                   </motion.button>
//                 </div>
//               </form>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [state, handleSubmit] = useForm("xwpozbvz");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    await handleSubmit(e);
    if (state.succeeded) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } else if (state.errors.length > 0) {
      setSubmitStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, when: "beforeChildren" },
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
  };

  const contactInfo = [
    {
      icon: <Mail size={20} className="text-purple-400" />,
      title: "Email",
      value: "patelprincy130@gmail.com",
      link: "mailto:patelprincy130@gmail.com",
    },
    {
      icon: <Phone size={20} className="text-purple-400" />,
      title: "Phone",
      value: "+1 (416) 771-1304",
      link: "tel:+14167711304",
    },
    {
      icon: <MapPin size={20} className="text-purple-400" />,
      title: "Location",
      value: "Toronto, ON",
      link: "https://maps.google.com/?q=Toronto,+ON",
    },
  ];

  return (
    <section
      id="contact"
      className="py-10 relative bg-gradient-to-b from-gray-900/50 to-gray-950"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left Side Info */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">
                Contact Information
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out to me! Whether you have a project in
                mind, a question, or just want to connect, I'd love to hear from
                you.
              </p>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target={item.title === "Location" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-900/50 group-hover:bg-purple-800/70 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.title}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-purple-300">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Github size={20} />,
                    url: "https://github.com/patelprincy130",
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin size={20} />,
                    url: "https://www.linkedin.com/in/princyypatel/",
                    label: "LinkedIn",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">
                Send Me a Message
              </h3>

              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`mb-6 p-4 rounded-lg border ${
                      submitStatus === "success"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : "bg-red-500/20 text-red-300 border-red-500/30"
                    }`}
                  >
                    {submitStatus === "success"
                      ? "Thank you for your message! I'll get back to you soon."
                      : "Failed to send message. Please try again."}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  {["name", "email", "subject", "message"].map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                        {errors[field] && (
                          <span className="text-red-400 ml-1">*</span>
                        )}
                      </label>
                      {field === "message" ? (
                        <textarea
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          rows="5"
                          className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all ${
                            errors[field]
                              ? "border-red-500/50"
                              : "border-gray-600/50 hover:border-gray-500/50"
                          }`}
                          placeholder={`Your ${field}...`}
                        />
                      ) : (
                        <input
                          type={field === "email" ? "email" : "text"}
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all ${
                            errors[field]
                              ? "border-red-500/50"
                              : "border-gray-600/50 hover:border-gray-500/50"
                          }`}
                          placeholder={`Your ${field}...`}
                        />
                      )}
                      {errors[field] && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-400 mt-2"
                        >
                          {errors[field]}
                        </motion.p>
                      )}
                      <ValidationError
                        prefix={field.charAt(0).toUpperCase() + field.slice(1)}
                        field={field}
                        errors={state.errors}
                      />
                    </div>
                  ))}

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className={`btn-primary inline-flex items-center justify-center gap-2 w-full ${
                      state.submitting ? "opacity-80 cursor-not-allowed" : ""
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    {state.submitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
