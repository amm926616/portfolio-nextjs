"use client";

import { motion } from "framer-motion";
import { FiCode, FiGithub, FiBookOpen, FiZap, FiUser } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function HeroComponent() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Floating tech elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-red-500/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-red-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <div className="inline-flex items-center bg-gray-800 px-4 py-2 rounded-full mb-6 border border-gray-700">
              <FiCode className="text-red-400 mr-2" />
              <span className="text-gray-300 text-sm font-mono">
                CODING MANIAC
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-red-400 font-mono">{"{"}</span>
              Aiden
              <span className="text-red-400 font-mono">{"}"}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Building solutions where{" "}
              <span className="text-red-300">logic</span> meets{" "}
              <span className="text-red-300">creativity</span>
            </p>
            {/* About Me Mini-Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 p-6 bg-gray-800/50 border border-gray-700 rounded-xl"
            >
              <div className="flex items-start">
                <FiZap className="text-red-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Self-taught developer with a knack for turning caffeine into
                    code. I may be junior in title but senior in curiosity.
                  </p>
                  <Link
                    href="/contact"
                    className="block mt-2 text-red-300 font-medium hover:text-red-400 transition-colors"
                  >
                    Already impressed?{" "}
                    <span className="underline">
                      Hire me before I get expensive!
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/projects"
                className="flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
              >
                <FiBookOpen className="mr-2" /> View Projects
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/amm926616"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 border border-gray-600 hover:border-red-400 text-gray-300 hover:text-white rounded-lg transition"
              >
                <FiGithub className="mr-2" /> GitHub
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/about"
                className="flex items-center px-6 py-3 border border-gray-600 hover:border-red-400 text-gray-300 hover:text-white rounded-lg transition"
              >
                <FiUser className="mr-2" /> Who is this guy?
              </motion.a>
            </div>{" "}
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="relative w-full max-w-md aspect-square mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-xl" />
              <div className="absolute -inset-4 border border-red-400/20 rounded-full animate-spin-slow" />

              {/* Your image with tech-inspired frame */}
              <div className="relative rounded-full overflow-hidden border-4 border-gray-700 hover:border-red-400 transition-all duration-500 h-full w-full">
                <Image
                  src="/images/profile.jpg"
                  alt="Aiden - Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Tech badge */}
              <div className="absolute -bottom-5 -right-5 bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg shadow-lg">
                <span className="text-red-400 font-mono text-sm">
                  npm install talent
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
