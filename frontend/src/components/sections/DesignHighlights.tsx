"use client";
import React from "react";
import { SectionTitle, Subtitle } from "@/components/common/Typography";

const mockupsRow1 = [
  "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
  "bg-gradient-to-br from-[#2A3050] to-[#131929]",
  "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
  "bg-gradient-to-br from-[#2A3050] to-[#131929]",
  "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
];

const mockupsRow2 = [
  "bg-gradient-to-br from-[#2A3050] to-[#131929]",
  "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
  "bg-gradient-to-br from-[#2A3050] to-[#131929]",
  "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
  "bg-gradient-to-br from-[#2A3050] to-[#131929]",
];

export const DesignHighlights = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center overflow-hidden w-full pt-[100px]" id="highlights">
      <div className="text-center mb-16 px-6 max-w-4xl mx-auto">
        <SectionTitle><span className="text-[#7C6EFA]">Design</span> <span className="text-white">Highlights</span></SectionTitle>
        <Subtitle className="mx-auto mt-4 text-[#94A3B8]">
          A curated collection of screens and interfaces that reflect my approach to crafting thoughtful digital experiences.
        </Subtitle>
      </div>

      <div className="flex flex-col gap-6 w-full relative">
        {/* Left/Right Fade Gradients for smooth infinite effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0F1E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0F1E] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left scrolling */}
        <div className="flex animate-marquee">
          {[...mockupsRow1, ...mockupsRow1].map((bg, idx) => (
            <div key={idx} className="w-[320px] h-[240px] md:w-[480px] md:h-[320px] flex-shrink-0 mx-3 rounded-2xl overflow-hidden border border-[#2A3050] group relative">
              <div className={`w-full h-full ${bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                <span className="text-white/20 font-semibold tracking-widest uppercase">Project Mockup</span>
              </div>
              <div className="absolute inset-0 bg-[#7C6EFA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Row 2: Right scrolling */}
        <div className="flex animate-marquee-reverse">
          {[...mockupsRow2, ...mockupsRow2].map((bg, idx) => (
            <div key={idx} className="w-[320px] h-[240px] md:w-[480px] md:h-[320px] flex-shrink-0 mx-3 rounded-2xl overflow-hidden border border-[#2A3050] group relative">
              <div className={`w-full h-full ${bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                <span className="text-white/20 font-semibold tracking-widest uppercase">Project Mockup</span>
              </div>
              <div className="absolute inset-0 bg-[#7C6EFA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
