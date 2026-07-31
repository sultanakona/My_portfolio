"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionTitle, Subtitle } from "@/components/common/Typography";
import { Card } from "@/components/common/Card";
import { Palette, PenTool, LayoutTemplate, Box, Layers } from "lucide-react";

export const Services = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 w-full" id="services">
      <div className="w-full max-w-[1300px] mx-auto py-24">
      <div className="text-center mb-16">
        <SectionTitle>My <span className="text-[#7C6EFA]">Services</span></SectionTitle>
        <Subtitle className="mx-auto mt-4 text-[#94A3B8]">
          I design experiences, brands, and digital products that are functional, meaningful, and visually refined.
        </Subtitle>
      </div>

      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)_minmax(0,1fr)] gap-[15px] w-full relative z-10">
          {/* Card 1: Spans 2 Rows on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-1 lg:row-span-2 flex"
          >
            <div className="flex flex-col p-[24px] bg-[#1E2540]/90 backdrop-blur-xl border border-[#2A3050] rounded-[20px] w-full h-full min-h-[580px] relative overflow-hidden group hover:border-[#7C6EFA]/50 transition-all duration-500">
              {/* Subtle glow behind icon */}
              <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#7C6EFA]/20 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center mb-6 relative z-10">
                <Palette className="w-6 h-6 text-[#7C6EFA]" />
              </div>
              <h3 className="text-[22px] font-bold text-white mb-2 relative z-10">UI / UX Design</h3>
              <p className="text-white/60 font-medium text-[14px] mb-6 relative z-10 tracking-wide">Research · Wireframes · Prototypes</p>
              <p className="text-[#94A3B8] text-[15px] leading-relaxed relative z-10">
                Crafting intuitive, user-centered digital experiences from research to final handoff.
              </p>
              
              {/* Diagram Placeholder */}
              <div className="mt-auto pt-8 flex-1 w-full flex items-end justify-center relative z-10">
                 <div className="w-full bg-black/20 backdrop-blur-md rounded-xl border border-white/10 min-h-[200px] flex items-center justify-center shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7C6EFA]/5" />
                   <p className="text-white/40 text-[13px] font-medium tracking-widest uppercase">UX Diagram</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Product Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="flex"
          >
            <div className="p-[24px] flex flex-col justify-start bg-[#1E2540]/90 backdrop-blur-xl border border-[#2A3050] rounded-[20px] w-full h-full relative overflow-hidden group hover:border-[#7C6EFA]/50 hover:shadow-[0_8px_32px_rgba(124,110,250,0.15)] transition-all duration-500">
              <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-[#7C6EFA]/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#7C6EFA]/20 group-hover:border-[#7C6EFA]/30 transition-all duration-300">
                <Box className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[19px] font-semibold text-white mb-2 relative z-10">Product Design</h3>
              <p className="text-white/50 font-medium text-[13px] mb-6 relative z-10 tracking-wide">Systems · Flows · Strategy</p>
              <div className="mt-auto w-full h-[110px] bg-black/20 backdrop-blur-md rounded-xl border border-white/5 relative z-10 flex items-center justify-center group-hover:border-white/10 transition-colors">
                  <p className="text-white/30 text-[11px] font-medium uppercase tracking-widest">Preview</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Framer Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="flex"
          >
            <div className="p-[24px] flex flex-col justify-start bg-[#1E2540]/90 backdrop-blur-xl border border-[#2A3050] rounded-[20px] w-full h-full relative overflow-hidden group hover:border-[#7C6EFA]/50 hover:shadow-[0_8px_32px_rgba(124,110,250,0.15)] transition-all duration-500">
              <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-[#7C6EFA]/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#7C6EFA]/20 group-hover:border-[#7C6EFA]/30 transition-all duration-300">
                <LayoutTemplate className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[19px] font-semibold text-white mb-2 relative z-10">Framer Development</h3>
              <p className="text-white/50 font-medium text-[13px] mb-6 relative z-10 tracking-wide">Websites · Animations · CMS</p>
              <div className="mt-auto w-full h-[110px] bg-black/20 backdrop-blur-md rounded-xl border border-white/5 relative z-10 flex items-center justify-center group-hover:border-white/10 transition-colors">
                  <p className="text-white/30 text-[11px] font-medium uppercase tracking-widest">Preview</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Branding & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
            className="flex"
          >
            <div className="p-[24px] flex flex-col justify-start bg-[#1E2540]/90 backdrop-blur-xl border border-[#2A3050] rounded-[20px] w-full h-full relative overflow-hidden group hover:border-[#7C6EFA]/50 hover:shadow-[0_8px_32px_rgba(124,110,250,0.15)] transition-all duration-500">
              <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-[#7C6EFA]/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#7C6EFA]/20 group-hover:border-[#7C6EFA]/30 transition-all duration-300">
                <PenTool className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[19px] font-semibold text-white mb-2 relative z-10">Branding & Identity</h3>
              <p className="text-white/50 font-medium text-[13px] mb-6 relative z-10 tracking-wide">Logo · Visual Systems · Guidelines</p>
              <div className="mt-auto w-full h-[110px] bg-black/20 backdrop-blur-md rounded-xl border border-white/5 relative z-10 flex items-center justify-center group-hover:border-white/10 transition-colors">
                  <p className="text-white/30 text-[11px] font-medium uppercase tracking-widest">Preview</p>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Framer Templates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4 }}
            className="flex"
          >
            <div className="p-[24px] flex flex-col justify-start bg-[#1E2540]/90 backdrop-blur-xl border border-[#2A3050] rounded-[20px] w-full h-full relative overflow-hidden group hover:border-[#7C6EFA]/50 hover:shadow-[0_8px_32px_rgba(124,110,250,0.15)] transition-all duration-500">
              <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-[#7C6EFA]/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#7C6EFA]/20 group-hover:border-[#7C6EFA]/30 transition-all duration-300">
                <Layers className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[19px] font-semibold text-white mb-2 relative z-10">Framer Templates</h3>
              <p className="text-white/50 font-medium text-[13px] mb-6 relative z-10 tracking-wide">Premium UI Kits · Components · Templates</p>
              <div className="mt-auto w-full h-[110px] bg-black/20 backdrop-blur-md rounded-xl border border-white/5 relative z-10 flex items-center justify-center group-hover:border-white/10 transition-colors">
                  <p className="text-white/30 text-[11px] font-medium uppercase tracking-widest">Preview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};
