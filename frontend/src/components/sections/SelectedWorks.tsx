"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle, Subtitle } from "@/components/common/Typography";
import { Plus, Minus } from "lucide-react";

const works = [
  { id: "01", title: "Foodie Mobile App Redesign", categories: ["Category 1", "Category 2"] },
  { id: "02", title: "Chatter App Case Study", categories: ["Category 1", "Category 2"] },
  { id: "03", title: "Saas Dashboard Redesign", categories: ["Category 1", "Category 2"] },
  { id: "04", title: "Mobizo App Case Study", categories: ["Category 1", "Category 2"] },
  { id: "05", title: "Mealio App Case Study", categories: ["Category 1", "Category 2"] },
];

export const SelectedWorks = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="pt-[100px] pb-[80px] px-6 md:px-12 w-full flex justify-center" id="work">
      <div className="w-full max-w-[1720px] mx-auto">
      <div className="text-center mb-16">
        <SectionTitle><span className="text-[#7C6EFA]">Selected</span> <span className="text-white">Works</span></SectionTitle>
        <Subtitle className="mx-auto mt-4 text-[#94A3B8]">
          A collection of some of the projects I have worked on throughout my career
        </Subtitle>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {works.map((work, idx) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="w-full bg-[#131929] border border-[#2A3050] rounded-[14px] overflow-hidden"
          >
            {/* Row Header */}
            <div 
              className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-white/[0.02] transition-colors"
              onClick={() => setOpenId(openId === work.id ? null : work.id)}
            >
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-full border border-[#2A3050] flex items-center justify-center text-[#7C6EFA] text-sm font-semibold bg-transparent">
                  {work.id}
                </div>
                <h3 className="text-[18px] font-semibold text-white">{work.title}</h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2">
                  {work.categories.map((cat, i) => (
                    <span key={i} className="bg-[#1E2540] text-[#00C9A7] text-xs font-semibold px-2 py-1.5 rounded-md">
                      {cat}
                    </span>
                  ))}
                </div>
                <button className="text-white ml-2 transition-transform duration-300">
                  {openId === work.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Accordion Content */}
            <AnimatePresence>
              {openId === work.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-[#2A3050]/50 mt-2">
                    <p className="text-[#94A3B8] text-[15px] leading-relaxed max-w-2xl mb-4">
                      This is a placeholder case study description for the {work.title}. It highlights the core challenges, design process, and the final solution delivered.
                    </p>
                    <a href="#" className="inline-flex items-center text-[#7C6EFA] hover:text-white transition-colors text-sm font-semibold gap-2">
                      View Full Case Study <span className="text-lg">→</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};
