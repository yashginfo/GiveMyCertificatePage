import React from 'react'
import { motion, px } from "framer-motion";


function Details() {
  return (
    <>
     <section id="Details" className="py-20 bg-blur">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About<span className="text-blue-400"> The Course</span>
        </motion.h2>
        <h3 className='text-2xl' >Become a certified React Frontend Developer by mastering the world's most powerful UI library.This course empowers you with hands-on skills in building dynamic, responsive, and production-ready web applications.</h3>
      </div>
       <motion.div 
            className="md:w-2/2 my-4 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 rounded-xl border border-gray-800 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Professional Summary</h3>
              <p className="text-gray-300 mb-4">
               This certification validates your expertise in building modern, efficient, and responsive web interfaces using React—the industry’s most in-demand JavaScript library.
Through hands-on projects and in-depth training, you’ve demonstrated advanced proficiency in component-based architecture, state management, routing, and performance optimization.
              </p>
              <p className="text-gray-300 mb-4">
               Successfully earning this credential signifies your readiness to contribute to professional frontend development teams and deliver scalable, maintainable UI solutions.


              </p>
              <div className="mt-6">
               
              </div>
            </div>
          </motion.div>
     
    </section>
    </>
  )
}

export default Details