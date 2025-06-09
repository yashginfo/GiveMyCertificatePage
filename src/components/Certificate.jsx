import React from "react";
import { motion, px } from "framer-motion";
import { FaGithub,FaDownload,FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import White from "../assets/White.png";

function Certificate() {
  return (
    <>
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
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
    transition: { duration: 1, delay: 2 },
  }}
  className="inline-block max-w-full text-center break-words sm:whitespace-nowrap overflow-hidden"
>
  Certificate of <span className="text-blue-400">Achievement</span>
</motion.span>

      </motion.h1>
      <h3 className="text-center text-2xl " >Issued in recognition of <span className="text-blue-400">advanced skills </span> in building dynamic, <span className="text-purple-400">high-performance</span> React interfaces</h3>
      <br />
      <div className="inline-flex items-center justify-center p-4 rounded-xl relative group transition-all duration-500">
        <img
          src={White}
          alt="Zoomable Image"
          className="w-[65%] p-2 object-cover scale-100 group-hover:scale-105 transform transition-transform duration-500 rounded-[2rem] group-hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.6)]"
        />
      </div>
     <div className="flex justify-center p-1 m-0">
  <motion.div
    className="flex space-x-6 mt-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2 }}
  >
    <motion.a
      href="/"
      target="_blank"
      whileHover={{ y: -5, color: "#3b82f6" }}
      className="text-gray-400 hover:text-blue-400 text-2xl"
    >
      <FaDownload />
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
      <BsFillShareFill />
    </motion.a>
  </motion.div>
</div>

    </>
  );
}

export default Certificate;
