"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/common/Typography";
import { MapPin } from "lucide-react";

export const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 w-full" id="about">
      <div className="w-full max-w-[1100px] mx-auto py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <div>
          <SectionTitle>About <span className="text-white">Me</span></SectionTitle>
          <div className="space-y-6 text-[#94A3B8] mt-8 leading-[1.8] text-[15px]">
            <p>
              Passionate about creating meaningful digital experiences through thoughtful design and problem-solving. Focused on crafting intuitive interfaces that balance usability, aesthetics, and business goals.
            </p>
            <p>
              Experienced in user research, wireframing, prototyping, and visual design across web and mobile platforms. Continuously exploring emerging technologies, design systems, and innovative workflows to build products that deliver value and delight users.
            </p>
          </div>
        </div>

        {/* Right Side: Image Card with Tooltip */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center lg:justify-end w-full max-w-[480px] mx-auto lg:ml-auto h-[480px]"
        >
          {/* Ambient Glow Behind Image */}
          <div className="absolute -top-[98px] -right-[30px] w-[440px] h-[440px] bg-[#7C6EFA]/50 blur-[80px] rounded-full pointer-events-none z-0" />

          {/* Main Image Container */}
          <div className="absolute top-0 right-0 w-[75%] h-full bg-[#1E2540] rounded-[12px] overflow-hidden z-10">
            {/* Replace with actual image later */}
            <div className="w-full h-full bg-gradient-to-br from-[#1E2540] to-[#131929]" />
          </div>
          
          {/* Floating Tooltip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-0 left-0 bg-[#5B4FD4] rounded-[14px] w-[60%] h-[23%] flex flex-col justify-center px-5 z-20 cursor-default"
          >
            <div className="flex gap-2 mb-2">
              <span className="p-1.5 bg-white/20 rounded-md flex items-center justify-center"><MapPin className="w-3.5 h-3.5 text-white" /></span>
              <span className="px-2 py-1 bg-white/20 rounded-md text-[11px] font-bold text-white flex items-center justify-center">Be</span>
              <span className="px-2 py-1 bg-white/20 rounded-md text-[11px] font-bold text-white flex items-center justify-center">In</span>
            </div>
            <p className="text-white text-[14px] font-semibold leading-snug">Working globally, based in India</p>
            <p className="text-white/80 text-[12px] mt-1">Product UI/UX Designer</p>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};
