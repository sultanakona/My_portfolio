"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "UI/UX Designer",
    company: "Creative Studio Co.",
    date: "Jan 2023 – Present",
    color: "bg-[#7C6EFA]",
  },
  {
    role: "Job Designation",
    company: "Company or Organization Name",
    date: "From-To Date",
    color: "bg-[#7C6EFA]",
  },
  {
    role: "Google UX Design Certificate",
    company: "Coursera",
    date: "Jun 2022 – Dec 2022",
    color: "bg-[#00C9A7]",
  },
];

export const Experience = () => {
  return (
    <section className="pt-[100px] pb-[60px] px-6 md:px-12 w-full flex justify-center" id="resume">
      <div className="w-full max-w-[1200px] mx-auto">
      {/* Top Title */}
      <div className="text-center mb-24">
        <h2 className="text-[42px] font-bold">
          <span className="text-[#7C6EFA]">Experience &</span> <span className="text-white">Education</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <h3 className="text-[29px] font-semibold text-white leading-snug mb-6">
            Some people solve puzzles for fun — I <span className="text-[#7C6EFA]">redesign confusing interfaces instead.</span>
          </h3>
          <p className="text-[#94A3B8] text-[15px] leading-[1.8]">
            I'm a self-taught designer who turned curiosity into craft. Through real projects, certifications, and freelance work, I've been building experiences that are both functional and beautiful.
          </p>
        </motion.div>

        {/* Right Side Cards */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative w-full bg-[#131929] rounded-[14px] flex group hover:bg-[#1E2540]/80 transition-colors cursor-default"
            >
              {/* Left colored bar */}
              <div className={`w-[6px] flex-shrink-0 ${exp.color} rounded-l-[14px]`} />
              
              {/* Card Content */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between p-6">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs text-[#C4C9D6]">{exp.role}</span>
                  <span className="text-[15px] font-semibold text-[#C4C9D6]">{exp.company}</span>
                </div>
                <div className="mt-4 sm:mt-0">
                  <span className="text-[11px] font-medium text-[#C4C9D6]/80">{exp.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
