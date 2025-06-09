import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";
import React from "react";
import { IoPlanetOutline } from "react-icons/io5";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/Givemycertificate/blog-GiveMyCertificate",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/company/givemycertificate/",
      label: "LinkedIn",
    },
    // { icon: <FiTwitter />, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
    // { icon: <FiMail />, href: '/#contact', label: 'Email' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className=" backdrop-blur-md border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and copyright */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center md:items-start"
          >
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2"
            >
              𝔾𝕚𝕧𝕖 𝕄𝕪 ℂ𝕖𝕣𝕥𝕚𝕗𝕚𝕔𝕒𝕥𝕖
            </a>
             <p className="text-gray-400 text-sm">
              Verified by <span className="font-semibold">Ravi Goswami</span><span  className="text-purple-400"> (Co-founder & MD, Give My Certificate)</span>
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3, color: "#3b82f6" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-300 hover:text-blue-400 text-xl transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <motion.a
                href="mailto:your@email.com"
                whileHover={{ color: "#3b82f6" }}
                className="flex items-center text-gray-300 hover:text-blue-400 text-sm transition-colors gap-2"
              >
                <FiMail className="text-blue-400" />
                support@givemycertificate.com
              </motion.a>
              <motion.a
                href="tel:+91 86867 30308"
                whileHover={{ color: "#3b82f6" }}
                className="flex items-center text-gray-300 hover:text-blue-400 text-sm transition-colors gap-2"
              >
                <FiPhone className="text-blue-400" />
                +91 86867 30308
              </motion.a>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <motion.div
          className="mt-12 flex justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="#home"
            className="text-gray-300 hover:text-blue-400 text-sm flex items-center gap-1 transition-colors"
          >
            Back to top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
