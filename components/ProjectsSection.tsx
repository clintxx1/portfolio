"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { AiTwotoneSound } from "react-icons/ai";
import { RiRadioButtonLine } from "react-icons/ri";

interface Project {
  title: string;
  description: string;
  image: string;
  tools: string[];
  link?: string;
  url?: string;
}

const projects: Project[] = [
  {
    title: "Cascades International School",
    description:
      "<p><strong>Project Overview</strong><br>I designed and developed the official website for <strong>Cascades School</strong>, a progressive preschool and early elementary program in the Philippines. The site serves as the school's primary digital presence, providing program information, admissions details, and a glimpse into its Reggio‑Emilia inspired philosophy.</p><p>&nbsp;</p><p><strong>Key Contributions</strong></p><ul><li><strong>Frontend development using Next.js and TypeScript</strong>, building a fast, SEO-friendly, and fully responsive website optimized for performance and accessibility.</li><li><strong>Tailwind CSS</strong> for rapid and consistent UI styling, aligned with the school's brand—playful, clean, and modern.</li><li><strong>Dynamic routing</strong> for pages like program levels, scholarships, and FAQ using Next.js App Router (or Pages Router, if applicable).</li><li><strong>Reusable React components</strong> for sections like the hero banner, contact forms, testimonials, campus info, and program cards.</li><li><strong>Deployed via Vercel</strong> with CI/CD for smooth updates and performance monitoring.</li></ul>",
    image:
      "https://ik.imagekit.io/cascades/Portfolio/84170458_736278030112580_746331046777192448_n.jpg?updatedAt=1752074576411",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/clintxx1/cascades",
    url: "https://www.cascades.ph",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with Stripe integration.",
    image: "",
    tools: ["React", "Node.js", "Stripe", "CSS"],
    link: "",
    url: ""
  },
  {
    title: "Blog Platform",
    description: "A markdown-powered blog with authentication and comments.",
    image: "",
    tools: ["Vue", "JavaScript", "HTML", "CSS"],
    link: "",
    url: "",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-4xl mb-10">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded" />
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-stone-800 transition-all duration-300 focus:outline-none"
            >
              <div className="relative h-64 w-full group">
                <Image
                  src={project.image || "/placeholder.png"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute bottom-0 left-0 w-full p-4"
                  style={{
                    backdropFilter: "blur(8px)",
                    background: "rgba(30, 41, 59, 0.6)",
                  }}
                >
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="bg-white/30 text-xs text-white px-2 py-0.5 rounded-full border border-white/20 backdrop-blur-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-semibold text-white truncate">
                    {project.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm w-full">
          <div className="bg-white dark:bg-stone-900 rounded-xl shadow-2xl max-w-2xl w-full p-6 relative overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-2xl font-bold focus:outline-none"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-stone-900 dark:text-white">
              {selectedProject.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-2">
                {selectedProject.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-white/30 text-xs text-white px-2 py-0.5 rounded-full border border-white/20 backdrop-blur-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            <div
              className="mb-8 text-gray-700 dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: selectedProject.description }}
            ></div>
            <div className="flex justify-end gap-2">
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                <RiRadioButtonLine className="mr-2" />
                View Live
              </a>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
