"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 md:h-auto">
          <Image
            src="/mee.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl w-[325px] h-[325px] object-cover"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Clint!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-purple-600">
              Junior Frontend Developer{" "}
            </span>
            based in Calbayog City, Philippines. Dedicated to shaping the future
            one line of code at a time.
          </p>
          <Link
            to="projects"
            className="cursor-pointer text-neutral-100 font-semibold px-6 py-3 bg-purple-600 rounded shadow hover:bg-purple-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          className="cursor-pointer animate-bounce"
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
