import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-950/90 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center text-center gap-4"
        >
          <p className="text-gray-400">
            © {currentYear} Princy Ka Patel. All rights reserved.
          </p>

          <p className="text-gray-400 flex items-center justify-center gap-1">
            Made with{" "}
            <Heart
              size={16}
              className="text-pink-500 animate-pulse"
              aria-label="love"
            />{" "}
            using <span className="font-medium text-white">React</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
