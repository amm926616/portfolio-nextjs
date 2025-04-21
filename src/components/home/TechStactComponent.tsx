"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiCode, FiCpu, FiDatabase, FiLayers } from "react-icons/fi";

const TechStack = () => {
  const shouldReduceMotion = useReducedMotion();

  const technologies = [
    { name: "Python", icon: <FiCode className="text-red-400" />, level: "90%" },
    { name: "Java", icon: <FiCpu className="text-red-400" />, level: "85%" },
    {
      name: "JavaScript",
      icon: <FiCode className="text-red-400" />,
      level: "80%",
    },
    {
      name: "React",
      icon: <FiLayers className="text-red-400" />,
      level: "75%",
    },
    {
      name: "Spring Boot",
      icon: <FiCpu className="text-red-400" />,
      level: "70%",
    },
    {
      name: "MySQL",
      icon: <FiDatabase className="text-red-400" />,
      level: "80%",
    },
  ];

  return (
    <section className="py-16 bg-gray-900/50 border-y border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-3">
            <span className="text-red-400 font-mono">{"<"}</span>
            Tech Arsenal
            <span className="text-red-400 font-mono">{">"}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools I wield to turn abstract concepts into functional reality
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 min-h-[300px]">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="bg-gray-800/50 hover:bg-gray-700/30 border border-gray-700 rounded-xl p-6 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-700 rounded-lg mr-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{tech.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: tech.level }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="h-full bg-red-500 rounded-full"
                />
              </div>
              <p className="text-right text-xs text-gray-400 mt-1 font-mono">
                {tech.level} mastery
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
