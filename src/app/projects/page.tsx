"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiCpu,
  FiLayers,
} from "react-icons/fi";
import TechStackVisualizer from "@/src/components/projects/TechStackVisualizer";
import SystemDiagram from "@/src/components/projects/SystemDiagram";
import ProjectDetailModal from "@/src/components/projects/ProjectDetailModal";

type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  image: string;
  technologies: {
    name: string;
    purpose: string;
  }[];
  challenges: string[];
  solutions: string[];
  liveUrl?: string;
  githubUrl: string;
  systemArchitecture?: string;
  lessonsLearned: string[];
};

const projectsData: Project[] = [
  {
    id: "1",
    title: "April Music Player",
    tagline: "Language learning through synchronized lyrics",
    description:
      "Desktop music player with precise lyric synchronization for language learners",
    detailedDescription: `
      A PyQt6-based music player designed specifically for language learners, featuring:
      - Millisecond-precise lyric synchronization
      - Note-taking system tied to song timestamps
      - Vocabulary extraction and tracking
      - Custom audio waveform visualization

      The system uses SQLite for local storage and implements a custom tagging system
      to organize learning materials by difficulty and language concepts.
    `,
    image: "/images/april-music-player.png",
    technologies: [
      { name: "Python", purpose: "Core application logic" },
      { name: "PyQt6", purpose: "GUI framework" },
      { name: "SQLite", purpose: "Local data persistence" },
      { name: "FFmpeg", purpose: "Audio processing" },
    ],
    challenges: [
      "Achieving frame-perfect lyric synchronization",
      "Memory management with large audio libraries",
      "Cross-platform compatibility issues",
    ],
    solutions: [
      "Implemented custom timing algorithms with sub-millisecond precision",
      "Developed a lazy-loading system for audio files",
      "Created platform-specific abstraction layers",
    ],
    githubUrl: "https://github.com/amm926616/april-music-player",
    systemArchitecture: `
      1. Presentation Layer (PyQt6 UI)
      2. Application Layer (Core logic)
      3. Service Layer (Audio processing)
      4. Data Access Layer (SQLite)
    `,
    lessonsLearned: [
      "The importance of separation between UI and business logic",
      "How to optimize Python applications for performance",
      "Cross-platform development challenges",
    ],
  },
  {
    id: "2",
    title: "Hygiene Nerds",
    tagline: "E-commerce with analytical insights",
    description:
      "Full-stack e-commerce platform with custom analytics dashboard",
    detailedDescription: `
      A complete e-commerce solution featuring:
      - JWT authentication system
      - Real-time inventory management
      - Custom analytics dashboard with data visualization
      - Automated reporting system

      The backend implements a microservices architecture with Spring Boot,
      while the frontend uses React with TailwindCSS for responsive design.
    `,
    image: "/images/hygiene-nerds.png",
    technologies: [
      { name: "Java", purpose: "Backend services" },
      { name: "Spring Boot", purpose: "Application framework" },
      { name: "React", purpose: "Frontend framework" },
      { name: "MySQL", purpose: "Primary database" },
    ],
    challenges: [
      "Implementing secure payment processing",
      "Handling high-volume inventory updates",
      "Creating meaningful data visualizations",
    ],
    solutions: [
      "Integrated Stripe API with proper PCI compliance",
      "Developed an event-sourcing pattern for inventory",
      "Built custom D3.js visualizations for business metrics",
    ],
    githubUrl: "https://github.com/amm926616/hygiene-nerds",
    systemArchitecture: `
      1. Client Layer (React Frontend)
      2. API Gateway (Spring Cloud)
      3. Microservices (Products, Orders, Users)
      4. Data Storage (MySQL + Redis cache)
    `,
    lessonsLearned: [
      "Microservices communication patterns",
      "Frontend performance optimization",
      "Security best practices for e-commerce",
    ],
  },
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"cards" | "list">("cards");

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
              &lt;Systems Portfolio/&gt;
            </h1>
            <p className="text-gray-300">
              Detailed analysis of engineered solutions and their architectures
            </p>
          </div>

          <div className="flex space-x-2 bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3 py-1 rounded-md text-sm ${viewMode === "cards" ? "bg-red-500 text-white" : "text-gray-300"}`}
            >
              <FiLayers className="inline mr-1" /> Cards
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1 rounded-md text-sm ${viewMode === "list" ? "bg-red-500 text-white" : "text-gray-300"}`}
            >
              <FiCode className="inline mr-1" /> List
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-colors duration-300"
              >
                <div className="h-48 bg-gray-700 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
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
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-red-400 hover:text-red-300 text-sm font-mono flex items-center"
                    >
                      <FiCpu className="mr-1" /> System Analysis
                    </button>
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
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 h-64 bg-gray-700 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
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
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-md flex items-center text-sm"
                      >
                        <FiCpu className="mr-2" /> Technical Deep Dive
                      </button>
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

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
