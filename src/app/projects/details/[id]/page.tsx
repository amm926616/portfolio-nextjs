import { notFound } from "next/navigation";
import {
  FiGithub,
  FiExternalLink,
  FiCpu,
  FiCode,
  FiArrowLeft,
  FiImage,
  FiVideo,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/src/data/project.data";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const projectId = (await params).id;
  const project = projects.find((p) => p.id === projectId);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Project Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-red-400 mb-1">
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

            {/* Main Project Image */}
            <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Project Description */}
            <div className="prose prose-invert max-w-none mb-8">
              {project.detailedDescription.split("\n").map((paragraph, i) => (
                <p key={i} className="text-gray-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Screenshots Section */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                  <FiImage className="mr-2" /> Screenshots
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="group">
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-2 bg-gray-900">
                        <Image
                          src={screenshot.url}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-contain group-hover:opacity-90 transition-opacity duration-300"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                      {screenshot.caption && (
                        <p className="text-gray-400 text-sm italic text-center">
                          {screenshot.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video Demo Section */}
            {project.videoDemo && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                  <FiVideo className="mr-2" /> Video Demonstration
                </h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src={project.videoDemo}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {/* System Architecture & Technology Stack */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* System Architecture */}
              <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                  <FiCpu className="mr-2" /> System Architecture
                </h3>
                <div className="font-mono text-sm text-gray-300 whitespace-pre-line">
                  {project.systemArchitecture ||
                    "This project is straightforward and doesn't involve complex architecture."}
                </div>
              </div>

              {/* Technology Stack */}
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

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
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

            {/* Lessons Learned */}
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
        </div>
      </div>
    </div>
  );
}
