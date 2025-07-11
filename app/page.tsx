"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectModal from "@/components/ProjectModal";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/lib/constants";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Show about section when scrolled past hero
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowAbout(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = async () => {
    const response = await fetch(
      "https://ik.imagekit.io/cascades/Portfolio/Clint%20Maribojoc.pdf?updatedAt=1752224218719"
    );
    if (!response.ok) {
      console.error("Failed to download resume");
      return;
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    // Create a temporary link to download the resume
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Clint Maribojoc.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  const handleGithubRedirect = () => {
    window.open("https://github.com/clintxx1", "_blank", "noopener,noreferrer");
  };

  const handleLinkedInRedirect = () => {
    window.open(
      "https://www.linkedin.com/in/clint-maribojoc/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleMailRedirect = () => {
    window.location.href = "mailto:clintmaribojoc14@gmail.com";
  };

  const handleLiveDemoRedirect = (id: number) => {
    const project = projects.find((p) => p.id === id);
    window.open(
      project?.url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleRepoRedirect = (id: number) => {
    const project = projects.find((p) => p.id === id);
    window.open(
      project?.codeURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection
        scrollY={scrollY}
        handleGithubRedirect={handleGithubRedirect}
        handleLinkedInRedirect={handleLinkedInRedirect}
        handleMailRedirect={handleMailRedirect}
      />
      <AboutSection
        showAbout={showAbout}
        handleDownloadResume={handleDownloadResume}
      />
      <ProjectsSection setSelectedProject={setSelectedProject} />
      <ContactSection handleMailRedirect={handleMailRedirect} />
      <ProjectModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        handleLiveDemoRedirect={handleLiveDemoRedirect}
        handleRepoRedirect={handleRepoRedirect}
      />
    </div>
  );
}
