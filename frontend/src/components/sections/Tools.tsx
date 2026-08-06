"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle, Subtitle } from "@/components/common/Typography";
import * as LucideIcons from "lucide-react";

export const Tools = () => {
  const [profile, setProfile] = useState<any>(null);
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
    fetch(`${apiUrl}/portfolio/profile/`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) setProfile(data[0]);
      })
      .catch((err) => console.error("Error fetching profile:", err));

    fetch(`${apiUrl}/portfolio/skills/`)
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  const titleText = profile?.tools_title || "Tools I Work With";
  const titleParts = titleText.split(" ");
  const highlightWords = titleParts.length > 1 ? titleParts.slice(-2).join(" ") : "";
  const normalWords = titleParts.length > 1 ? titleParts.slice(0, -2).join(" ") : titleText;

  // Fallback static tools if API returns empty
  const defaultTools = [
    { name: "Figma", icon_name: "Triangle", color: "#5B4FD4" },
    { name: "ChatGPT", icon_name: "MessageSquare", color: "#10A37F" },
    { name: "Framer", icon_name: "Frame", color: "#0055FF" },
    { name: "Illustrator", icon_name: "PenTool", color: "#FF9A00" },
    { name: "Notion", icon_name: "FileText", color: "#000000" },
    { name: "Claude", icon_name: "Sparkles", color: "#D97757" },
    { name: "PhotoShop", icon_name: "Image", color: "#31A8FF" },
    { name: "Midjourney", icon_name: "Box", color: "#FFFFFF" },
  ];

  const displayTools = skills.length > 0 ? skills : defaultTools;

  return (
    <section className="pt-[100px] pb-[60px] px-6 md:px-12 w-full flex justify-center" id="skills">
      <div className="w-full max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <SectionTitle>{normalWords} <span className="text-[#7C6EFA]">{highlightWords}</span></SectionTitle>
        <Subtitle className="mx-auto mt-4 text-[#94A3B8]">
          {profile?.tools_subtitle || "Tools that help me turn ideas into polished and interactive experiences."}
        </Subtitle>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {displayTools.map((tool, idx) => {
          const FallbackIcon = (LucideIcons as any)[tool.icon_name || "Box"] || LucideIcons.Box;
          const bgHoverStyle = tool.color ? { boxShadow: `0px 4px 20px 0px ${tool.color}40`, borderColor: `${tool.color}80` } : {};
          const bgIconStyle = tool.color ? { backgroundColor: tool.color } : { backgroundColor: "#5B4FD4" };

          return (
            <motion.div
              key={tool.name || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="w-full h-[180px] bg-[#131929] border border-[#2A3050] rounded-[14px] flex items-center justify-center group cursor-pointer transition-all duration-300 hover:shadow-[0px_4px_20px_0px_rgba(91,79,212,0.4)] hover:border-[#5B4FD4]/50 active:shadow-[0px_4px_20px_0px_rgba(91,79,212,0.4)] active:border-[#5B4FD4]/50 active:scale-[0.98]"
              style={{ '--hover-color': tool.color } as any}
              onClick={() => tool.official_url && window.open(tool.official_url, "_blank")}
            >
              <div className="flex flex-col items-center gap-[20px] transition-transform duration-300 group-hover:scale-[1.04] group-active:scale-[1.04]">
                <div 
                  className="w-[64px] h-[64px] rounded-[14px] flex items-center justify-center"
                  style={bgIconStyle}
                >
                  {tool.icon ? (
                    <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                  ) : tool.logo ? (
                    <img src={tool.logo} alt={tool.name} className="w-8 h-8 object-contain" />
                  ) : (
                    <FallbackIcon className="w-8 h-8 text-white" />
                  )}
                </div>
                <h3 className="text-[18px] text-white font-semibold">
                  {tool.name}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
};
