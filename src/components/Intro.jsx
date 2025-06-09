import React from "react";
import { motion, px } from "framer-motion";
import adobe from "../assets/adobe.png";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";


function Intro() {
  return (
    <div>
      <section id="home" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{
                    width: "100%",
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  className="inline-block overflow-hidden whitespace-nowrap"
                >
                  Hii,Welcome to{" "}
                </motion.span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{
                    width: "100%",
                    transition: { duration: 1, delay: 1.5 },
                  }}
                  className="inline-block overflow-hidden text-blue-400 whitespace-nowrap"
                >
                  Give My Certificate
                </motion.span>
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-2xl text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                World's Most User-Friendly Credential System
              </motion.h2>
              <motion.div
                className="flex justify-center md:justify-start space-x-6 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.a
                  href="https://github.com/Givemycertificate/blog-GiveMyCertificate"
                  target="_blank"
                  whileHover={{ y: -5, color: "#3b82f6" }}
                  className="text-gray-400 hover:text-blue-400 text-2xl"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/givemycertificate/"
                  target="_blank"
                  whileHover={{ y: -5, color: "#3b82f6" }}
                  className="text-gray-400 hover:text-blue-400 text-2xl"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="/"
                  target="_blank"
                  whileHover={{ y: -5, color: "#3b82f6" }}
                  className="text-gray-400 hover:text-blue-400 text-2xl"
                >
                  <FaEnvelope />
                </motion.a>
              </motion.div>

              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              ></motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-85 md:h-85 rounded-full border-4 border-blue-400/30 relative overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full  flex items-center justify-center relative text-center">
                    <span className="text-3xl flex items-center gap-1">𝔾𝕚𝕧𝕖 𝕄𝕪 ℂ𝕖𝕣𝕥𝕚𝕗𝕚𝕔𝕒𝕥𝕖</span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-400/50 border-r-purple-400/30"
                ></motion.div>
              </div>
            </motion.div>
          </div>
          <br />
         
        </div>
      </section>
    </div>
  );
}

export default Intro;
