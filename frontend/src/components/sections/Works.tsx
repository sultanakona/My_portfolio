"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionTitle, Subtitle } from "@/components/common/Typography";
import { Card } from "@/components/common/Card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Mobile Dashboard",
    category: "Mobile App Design",
    description: "A comprehensive financial dashboard helping users track expenses and invest seamlessly.",
    color: "bg-blue-500/20",
  },
  {
    title: "E-Commerce Web Experience",
    category: "UX/UI Design",
    description: "Redesigning the shopping cart experience to increase conversion rates by 25%.",
    color: "bg-emerald-500/20",
  },
  {
    title: "Healthcare SaaS Platform",
    category: "Web Application",
    description: "An intuitive patient management system for modern dental clinics and hospitals.",
    color: "bg-pink-500/20",
  }
];

export const Works = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full" id="work">
      <div className="text-center mb-16">
        <SectionTitle>Selected <span className="text-[#7C6EFA]">Works</span></SectionTitle>
        <Subtitle className="mx-auto mt-4 text-[#94A3B8]">
          A showcase of my recent projects, demonstrating my design process and visual aesthetic.
        </Subtitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="group cursor-pointer h-full"
          >
            <Card className="p-0 overflow-hidden bg-[#131929] border-[#2A3050] group-hover:border-[#7C6EFA]/50 transition-all duration-300 h-full flex flex-col group-hover:shadow-[0_10px_30px_rgba(124,110,250,0.15)]">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-[#0A0F1E] overflow-hidden">
                <div className={`absolute inset-0 ${project.color} opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                
                {/* Arrow Icon appears on hover */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[#7C6EFA] text-xs font-semibold tracking-wider uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7C6EFA] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                {/* View Project Link with animated line */}
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                  View Project
                  <div className="w-4 h-[2px] bg-white/70 group-hover:w-8 group-hover:bg-[#7C6EFA] transition-all duration-300" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
