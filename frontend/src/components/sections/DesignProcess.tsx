"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionTitle, Subtitle } from "@/components/common/Typography";
import { Search, Layers, PenTool, Activity } from "lucide-react";

const processes = [
  {
    id: "01",
    title: "Discover & Research",
    description: "Understanding user behavior, business goals, and product challenges to uncover meaningful insights.",
    icon: Search,
  },
  {
    id: "02",
    title: "Strategy & Structure",
    description: "Organizing ideas into clear user flows, scalable systems, and intuitive product foundations.",
    icon: Layers,
  },
  {
    id: "03",
    title: "UI Design & Prototyping",
    description: "Crafting visually refined interfaces and interactive experiences that feel seamless and engaging.",
    icon: PenTool,
  },
  {
    id: "04",
    title: "Testing & Refinement",
    description: "Improving usability through iteration, feedback, and thoughtful design optimization.",
    icon: Activity,
  },
];

export const DesignProcess = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 w-full" id="process">
      <div className="w-full max-w-[1200px] mx-auto py-24">
      <div className="text-center mb-20">
        <SectionTitle>My Design <span className="text-[#7C6EFA]">Process</span></SectionTitle>
        <Subtitle className="mx-auto mt-4 text-[#94A3B8]">
          A clear and focused approach to creating meaningful digital experiences.
        </Subtitle>
      </div>

      <div className="flex flex-wrap justify-center gap-12 lg:gap-14 xl:gap-8">
        {processes.map((process, idx) => (
          <motion.div
            key={process.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="relative w-[260px] h-[320px] group cursor-pointer"
          >
            {/* Stacked Back Card */}
            <div className="absolute w-[264px] h-[324px] bg-[#1E2540] border border-[#2A3050] rounded-[14px] top-4 left-4 transition-all duration-300 ease-out group-hover:top-2 group-hover:-rotate-6" />

            {/* Main Front Card */}
            <div className="absolute w-[260px] h-[320px] bg-[#131929] border border-[#2A3050] rounded-[14px] top-0 left-0 transition-all duration-300 ease-out group-hover:top-5 group-hover:rotate-[6deg] flex flex-col items-center pt-8 px-6 pb-6 text-center z-10 shadow-2xl shadow-black/40">
              
              {/* Icon Box */}
              <div className="w-[48px] h-[48px] bg-[#1E2540] border border-[#2A3050] rounded-[8px] flex items-center justify-center mb-6">
                <process.icon className="w-5 h-5 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-[18px] font-semibold text-white mb-3 leading-tight">{process.title}</h3>
              <p className="text-[#94A3B8] text-[13px] leading-relaxed flex-1">
                {process.description}
              </p>

              {/* Number Circle */}
              <div className="w-[32px] h-[32px] bg-[#7C6EFA] rounded-full flex items-center justify-center text-white text-[10px] font-normal tracking-wide mt-auto">
                {process.id}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};
