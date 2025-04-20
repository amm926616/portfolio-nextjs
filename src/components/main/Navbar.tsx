"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiCode, FiCpu } from "react-icons/fi";
import { GrContact } from "react-icons/gr";

const Navbar = () => {
  const navItems = [
    { name: "About", path: "/about", icon: <FiCpu className="inline mr-1" /> },
    {
      name: "Projects",
      path: "/projects",
      icon: <FiCode className="inline mr-1" />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <GrContact className="inline mr-1" />,
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-gradient-to-b from-gray-900 to-gray-800 border-b border-red-900/30 sticky top-0 z-50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with hover effect */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-red-400 group-hover:text-red-300 transition-colors">
                <FiCpu size={24} />
              </span>
              <span className="text-xl font-mono font-bold text-white group-hover:text-red-300 transition-colors">
                Aiden<span className="text-red-400">.dev</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.path}
                  className="text-gray-300 hover:text-red-400 transition-colors flex items-center font-mono text-sm"
                >
                  {item.icon}
                  <span className="relative">
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full" />
                  </span>
                </Link>
              </motion.div>
            ))}

            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-4">
              <motion.a
                href="https://github.com/amm926616"
                target="_blank"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button (placeholder - add functionality) */}
          <button className="md:hidden text-gray-300 hover:text-red-400 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Animated underline for active route */}
      <motion.div
        className="h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.nav>
  );
};

export default Navbar;
