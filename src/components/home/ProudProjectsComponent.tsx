"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce app built with Next.js, Spring Boot, and MySQL, featuring user authentication and payment integration.",
    image: "/images/ecommerce.jpg",
    tech: ["Next.js", "Spring Boot", "MySQL"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/amm926616/ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "A React-based task manager with real-time updates using WebSockets and a Python backend.",
    image: "/images/taskmanager.jpg",
    tech: ["React", "Python", "WebSockets"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/amm926616/taskmanager",
  },
];

const ProudProjects = () => {
  return (
    <section className="py-20 bg-gray-900/50 border-y border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-red-400 font-mono">{"<"}</span>
            Proud Projects
            <span className="text-red-400 font-mono">{">"}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my best work, where code meets impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 hover:from-gray-800/60 hover:to-gray-900/80 border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/10"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-gray-700/50 text-gray-300 text-sm rounded-full font-mono border border-gray-600 hover:border-red-400 hover:text-white transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all hover:shadow-lg hover:shadow-red-500/20"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 py-2.5 border border-gray-600 hover:border-red-400 text-gray-300 hover:text-white rounded-lg transition-all hover:shadow-lg hover:shadow-gray-500/10"
                  >
                    <FiGithub className="mr-2" /> Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all hover:shadow-lg hover:shadow-red-500/20 text-lg font-medium"
          >
            View All Projects{" "}
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProudProjects;
