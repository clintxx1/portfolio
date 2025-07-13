"use client";

import {
  ChevronDown,
  Mail,
  Code,
  Hamburger,
  Bed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

export default function HeroSection({
  scrollY,
  handleGithubRedirect,
  handleLinkedInRedirect,
  handleMailRedirect,
}: {
  scrollY: number;
  handleGithubRedirect: () => void;
  handleLinkedInRedirect: () => void;
  handleMailRedirect: () => void;
}) {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.01}% ${
              50 + scrollY * 0.005
            }%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="space-y-4">
          <p className="text-6xl md:text-8xl font-bold pb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Clint Maribojoc
          </p>
          <div className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            <span className="inline-block animate-wave delay-100">
              Senior
            </span>{" "}
            <span className="inline-block animate-wave delay-200">Full</span>{" "}
            <span className="inline-block animate-wave delay-400">Stack</span>{" "}
            <span className="inline-block animate-wave delay-500">
              Developer
            </span>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="flex justify-center space-x-4 mt-12">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4">
              <Hamburger className="w-8 h-8 text-purple-400 mx-auto" />
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 delay-100">
            <CardContent className="p-4">
              <Code className="w-8 h-8 text-pink-400 mx-auto" />
            </CardContent>
          </Card>
          <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 delay-200">
            <CardContent className="p-4">
              <Bed className="w-8 h-8 text-cyan-400 mx-auto" />
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <Button
            onClick={handleGithubRedirect}
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
          >
            <FiGithub className="w-5 h-5" />
          </Button>
          <Button
            onClick={handleLinkedInRedirect}
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
          >
            <LuLinkedin className="w-5 h-5" />
          </Button>
          <Button
            onClick={handleMailRedirect}
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
}
