import React from "react";
import { motion } from "framer-motion";
import { FcExpired } from "react-icons/fc";
import { BsCalendar2Date } from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaReact } from "react-icons/fa";


function Issued() {
  return (
    <>
      <section id="Issued" className="py-20 bg-blur">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frontend Developer <span className="text-purple-400"> (React)</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-xl border border-pink-800 hover:border-purple-400/50 transition-colors"
            >
            <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
  <BsCalendar2Date />
  Issued On
</h3>

              <div className="flex">
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: "#a84dbd" }}
                  className=" text-gray-300 px-3 py-1 rounded-full text-2xl"
                >
                  09-June-2025
                </motion.span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-xl border border-pink-800 hover:border-purple-400/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center gap-2 ">
                <FcExpired/>
               Expires On
              </h3>
              <div className="flex">
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: "#a84dbd" }}
                  className="text-2xl text-gray-300 px-3 py-1 rounded-full "
                >
                  N/A
                </motion.span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-xl border border-pink-800 hover:border-purple-400/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
             <LiaCertificateSolid/>   Duration
              </h3>
              <div className="flex">
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: "#a84dbd" }}
                  className=" text-gray-300 px-3 p-2 rounded-full text-2xl"
                >
               01-June-2025 to 01-June-2026
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Issued;
