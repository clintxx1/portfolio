"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiNextdotjs, SiPrisma } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDrizzle } from "react-icons/si";

export default function AboutSection({
  showAbout,
  handleDownloadResume,
}: {
  showAbout: boolean;
  handleDownloadResume: () => void;
}) {
  const skills = [
    {
      name: "JavaScript",
      icon: <FaJsSquare className="w-8 h-8 text-yellow-400" />,
    },
    {
      name: "React",
      icon: <FaReact className="w-8 h-8 text-blue-400" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-8 h-8 text-white" />,
    },
    {
      name: "Vue",
      icon: <IoLogoVue className="w-8 h-8 text-green-400" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-8 h-8 text-green-500" />,
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql className="w-8 h-8 text-blue-500" />,
    },
    {
      name: "PrismaORM",
      icon: <SiPrisma className="w-8 h-8 text-purple-400" />,
    },
    {
      name: "DrizzleORM",
      icon: <SiDrizzle className="w-8 h-8 text-orange-400" />,
    },
    {
      name: "NodeJS",
      icon: <IoLogoNodejs className="w-8 h-8 text-green-600" />,
    },
  ];
  return (
    <section
      className={`py-20 px-4 transition-all duration-1000 ${showAbout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="w-[365px] h-[365px] mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-lg border border-white/10 flex items-center justify-center">
              <Image
                src="https://ik.imagekit.io/cascades/Portfolio/IMG_7072.jpeg?updatedAt=1752074617814"
                alt=""
                width={325}
                height={325}
                className="w-[325px] h-[325px] rounded-full bg-gradient-to-br from-purple-400/30 to-cyan-400/30 flex items-center justify-center object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000" />
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 p-8">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hello, I'm Clint! 👋
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a full stack developer with 4+ years of experience. I
                  specialize in MEVN stack and have strong skills in Vue.js,
                  React.js, Next.js, Node.js, Express.js, and MongoDB.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about building robust web applications and
                  continuously learning new technologies to enhance my
                  expertise. Open to new ideas and opportunities to grow as a
                  developer.
                </p>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <div className="mt-8">
              <Card className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-lg border-white/10 p-6 hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300">
                <CardContent className="p-0 text-center space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Download Resume
                      </h4>
                      <p className="text-sm text-gray-400">
                        Get my latest CV in PDF format
                      </p>
                    </div>
                  </div>
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                    onClick={handleDownloadResume}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </h3>
          <div className="relative overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center mx-6 py-4 px-8 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 min-w-[150px]"
                >
                  <div className="mb-3">{skill.icon}</div>
                  <span className="text-sm font-medium text-white text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
