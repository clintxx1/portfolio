import { Database } from "lucide-react";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiNextdotjs, SiPrisma } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
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
    icon: <Database className="w-8 h-8 text-orange-400" />,
  },
  {
    name: "NodeJS",
    icon: <IoLogoNodejs className="w-8 h-8 text-green-600" />,
  },
];

export const projects = [
  {
    id: 1,
    title: "Cascades International School",
    shortDesc:
      "Cascades School is a modern, responsive website for a progressive educational institution, built with Next.js and Tailwind CSS.",
    fullDesc:
      "Cascades School is a commercial website for a progressive educational institution. The site presents the school's philosophy, curriculum, programs, branches, features, and community, and provides information for prospective students and parents. It includes interactive sections, program details, contact forms, admin tools, and visually rich content to communicate the school's values and offerings.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostCSS",
      "PrismaORM",
      "Vercel",
    ],
    features: [
      "Server-Side Rendering & Static Generation",
      "Responsive Design",
      "Admin dashboard",
      "Dynamic Content",
      "Contact & Inquiry Forms",
      "Branch & Program Listings",
      "Automated Code Quality"
    ],
    url: "https://www.cascades.ph",
    codeURL: "https://github.com/clintxx1/cascades",
    coverPhoto: "https://ik.imagekit.io/cascades/Portfolio/84170458_736278030112580_746331046777192448_n.jpg?updatedAt=1752074576411"
  },
];
