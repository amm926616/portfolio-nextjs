import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink, FiCpu, FiCode } from "react-icons/fi";

type ProjectDetailModalProps = {
  project: {
    title: string;
    tagline: string;
    detailedDescription: string;
    technologies: { name: string; purpose: string }[];
    challenges: string[];
    solutions: string[];
    systemArchitecture: string;
    lessonsLearned: string[];
    githubUrl: string;
    liveUrl?: string;
  };
  onClose: () => void;
};

const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative bg-gray-800 border border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition-colors"
            aria-label="Close"
          >
            <FiX size={24} />
          </button>

          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-red-400 mb-1">
                  {project.title}
                </h2>
                <p className="text-red-300 font-mono">{project.tagline}</p>
              </div>
              <div className="flex space-x-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300 hover:text-white transition-colors"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-8">
              {project.detailedDescription.split("\n").map((paragraph, i) => (
                <p key={i} className="text-gray-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                  <FiCpu className="mr-2" /> System Architecture
                </h3>
                <div className="font-mono text-sm text-gray-300 whitespace-pre-line">
                  {project.systemArchitecture}
                </div>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                  <FiCode className="mr-2" /> Technology Stack
                </h3>
                <ul className="space-y-3">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="flex justify-between">
                      <span className="text-red-300 font-mono">
                        {tech.name}
                      </span>
                      <span className="text-gray-300 text-sm text-right">
                        {tech.purpose}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h3 className="text-xl font-bold text-red-400 mb-4">
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="text-gray-300 flex">
                      <span className="text-red-400 mr-2">→</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h3 className="text-xl font-bold text-red-400 mb-4">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution, i) => (
                    <li key={i} className="text-gray-300 flex">
                      <span className="text-green-400 mr-2">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-700/30 p-6 rounded-lg border border-gray-600">
              <h3 className="text-xl font-bold text-red-400 mb-4">
                Lessons Learned
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.lessonsLearned.map((lesson, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-red-500/20 text-red-400 rounded-full p-1 mr-3 mt-1">
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <p className="text-gray-300">{lesson}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
