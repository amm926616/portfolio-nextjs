"use client";

import SystemDiagram from "@/src/components/projects/SystemDiagram";
import TechStackVisualizer from "@/src/components/projects/TechStackVisualizer";
import { projects } from "@/src/data/project.data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiCode,
  FiCpu,
  FiExternalLink,
  FiGithub,
  FiLayers,
} from "react-icons/fi";

const ProjectsPage = () => {
  const [viewMode, setViewMode] = useState<"list" | "cards">("list");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with view toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h1 className="text-4xl font-bold text-red-400 font-mono mb-2">
              &lt;Projects Portfolio/&gt;
            </h1>
            <p className="text-gray-300">
              Detailed analysis of engineered solutions and their architectures
            </p>
          </div>

          <div className="flex space-x-2 bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1 rounded-md text-sm cursor-pointer ${viewMode === "list" ? "bg-red-500 text-white" : "text-gray-300"}`}
            >
              <FiCode className="inline mr-1" /> List
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3 py-1 rounded-md text-sm cursor-pointer ${viewMode === "cards" ? "bg-red-500 text-white" : "text-gray-300"}`}
            >
              <FiLayers className="inline mr-1" /> Cards
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-colors duration-300"
              >
                <div className="h-48 bg-gray-700 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    width={500}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-red-300 text-sm">{project.tagline}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <TechStackVisualizer
                    technologies={project.technologies.map((t) => t.name)}
                  />

                  <div className="mt-6 flex justify-between items-center">
                    <Link
                      href={`/projects/details/${project.id}`}
                      className="text-red-400 hover:text-red-300 text-sm font-mono flex items-center"
                    >
                      <FiCpu className="mr-1" /> System Analysis
                    </Link>
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-red-400"
                          aria-label="GitHub"
                        >
                          <FiGithub size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-red-400"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 h-64 bg-gray-700 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-red-400 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-red-300 font-mono text-sm mb-4">
                      {project.tagline}
                    </p>

                    <div className="prose prose-invert max-w-none text-gray-300 mb-4">
                      {project.detailedDescription
                        .split("\n")
                        .map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                    </div>

                    <SystemDiagram architecture={project.systemArchitecture} />

                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link
                        href={`/projects/details/${project.id}`}
                        className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-md flex items-center text-sm"
                      >
                        <FiCpu className="mr-2" /> Technical Deep Dive
                      </Link>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md flex items-center text-sm"
                      >
                        <FiGithub className="mr-2" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
