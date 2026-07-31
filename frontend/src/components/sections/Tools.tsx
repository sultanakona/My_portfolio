"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionTitle, Subtitle } from "@/components/common/Typography";
import { Triangle, MessageSquare, Frame, PenTool, FileText, Sparkles, Image as ImageIcon, Box } from "lucide-react";

const tools = [
  { name: "Figma", icon: Triangle },
  { name: "ChatGPT", icon: MessageSquare },
  { name: "Framer", icon: Frame },
  { name: "Illustrator", icon: PenTool },
  { name: "Notion", icon: FileText },
  { name: "Claude", icon: Sparkles },
  { name: "PhotoShop", icon: ImageIcon },
  { name: "Midjourney", icon: Box },
];

export const Tools = () => {
  return (
    <section className="pt-[100px] pb-[60px] px-6 md:px-12 w-full flex justify-center" id="skills">
      <div className="w-full max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <SectionTitle>Tools I <span className="text-[#7C6EFA]">Work With</span></SectionTitle>
        <Subtitle className="mx-auto mt-4 text-[#94A3B8]">
          Tools that help me turn ideas into polished and interactive experiences.
        </Subtitle>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tools.map((tool, idx) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="w-full h-[180px] bg-[#131929] border border-[#2A3050] rounded-[14px] flex items-center justify-center group cursor-pointer transition-all duration-300 hover:shadow-[0px_4px_20px_0px_rgba(91,79,212,0.4)] hover:border-[#5B4FD4]/50"
          >
            <div className="flex flex-col items-center gap-[20px] transition-transform duration-300 group-hover:scale-[1.04]">
              <div className="w-[64px] h-[64px] bg-[#5B4FD4] rounded-[14px] flex items-center justify-center">
                <tool.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[18px] text-white font-semibold">
                {tool.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};
