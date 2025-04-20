"use client";

import { motion } from "framer-motion";
import { FiCode, FiGithub } from "react-icons/fi";

export default function QuickLinks() {
  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-3">
            Explore My <span className="text-red-400">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Practical implementations of problem-solving through code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            whileHover={{ y: -5 }}
            href="/projects"
            className="group bg-gray-800 hover:bg-gray-700/80 p-6 rounded-xl border border-gray-700 hover:border-red-400/30 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gray-700 group-hover:bg-red-500/10 rounded-lg mr-4 transition-colors">
                <FiCode className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white">Project Gallery</h3>
            </div>
            <p className="text-gray-400 text-sm">
              See my complete projects with technical breakdowns and live demos
            </p>
          </motion.a>

          <motion.a
            whileHover={{ y: -5 }}
            href="https://github.com/amm926616"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 hover:bg-gray-700/80 p-6 rounded-xl border border-gray-700 hover:border-red-400/30 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gray-700 group-hover:bg-red-500/10 rounded-lg mr-4 transition-colors">
                <FiGithub className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white">GitHub</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Explore my code, contributions, and ongoing experiments
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
