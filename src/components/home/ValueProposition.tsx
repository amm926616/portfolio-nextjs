"use client";

import { motion } from "framer-motion";
import { FiZap, FiPieChart, FiBox, FiCpu } from "react-icons/fi";

const principles = [
  {
    icon: <FiZap className="w-6 h-6 text-red-400" />,
    title: "First Principles",
    description: "Deconstructing problems to their fundamental truths",
  },
  {
    icon: <FiPieChart className="w-6 h-6 text-red-400" />,
    title: "Systems Mapping",
    description: "Visualizing relationships between components",
  },
  {
    icon: <FiBox className="w-6 h-6 text-red-400" />,
    title: "Modular Design",
    description: "Building interchangeable, testable units",
  },
  {
    icon: <FiCpu className="w-6 h-6 text-red-400" />,
    title: "Abstract Thinking",
    description: "Operating comfortably in conceptual spaces",
  },
];

export default function ValueProposition() {
  return (
    <section id="value" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How I <span className="text-red-400">Process</span> Information
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My INTP cognitive stack applied to problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-700/50 hover:bg-gray-700/70 p-6 rounded-xl border border-gray-600 hover:border-red-400/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-800 rounded-lg mr-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {principle.title}
                </h3>
              </div>
              <p className="text-gray-300">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
