"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/constants";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

export default function ProjectModal({
  selectedProject,
  setSelectedProject,
  handleLiveDemoRedirect,
  handleRepoRedirect,
}: {
  selectedProject: number | null;
  setSelectedProject: (id: number | null) => void;
  handleLiveDemoRedirect: (id: number) => void;
  handleRepoRedirect: (id: number) => void;
}) {
  if (!selectedProject) return null;
  const project = projects.find((p) => p.id === selectedProject);
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-black/90 backdrop-blur-lg border border-white/20 rounded-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto">
        <div className="p-4 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-3xl">
                <Image
                  src={project.coverPhoto || "/placeholder.png"}
                  alt={project.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-1 text-sm sm:text-base">
                  Full Stack Development
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedProject(null)}
              className="rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 mt-2 sm:mt-0 float-right"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-white">
              Project Overview
            </h4>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              {project.fullDesc}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6 sm:mb-8">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-white">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white rounded-full border border-white/10 hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300 text-sm sm:text-base"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6 sm:mb-8">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-white">
              Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 sm:space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {project.url ? <Button
              onClick={() => handleLiveDemoRedirect(project.id)}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Demo
            </Button> : null}
            <Button
              onClick={() => handleRepoRedirect(project.id)}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-transparent w-full sm:w-auto"
            >
              <FiGithub className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
