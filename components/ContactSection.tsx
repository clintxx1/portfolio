"use client";

import { Button } from "@/components/ui/button";

export default function ContactSection({
  handleMailRedirect,
}: {
  handleMailRedirect: () => void;
}) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Ready to bring your ideas to life? Let's create something amazing
          together.
        </p>
        <Button
          onClick={handleMailRedirect}
          className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
