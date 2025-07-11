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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 backdrop-blur-lg border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-3xl">
                <Image
                  src={project.coverPhoto || "/placeholder.png"}
                  alt={project.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-1">Full Stack Development</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedProject(null)}
              className="rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
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
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-white">
              Project Overview
            </h4>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.fullDesc}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-white">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white rounded-full border border-white/10 hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-white">
              Key Features
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button
              onClick={() => handleLiveDemoRedirect(project.id)}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Demo
            </Button>
            <Button
              onClick={() => handleRepoRedirect(project.id)}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-transparent"
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
