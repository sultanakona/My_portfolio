"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/common/Typography";
import { MapPin } from "lucide-react";

export const About = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';
    fetch(`${apiUrl}/portfolio/profile/`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setProfile(data[0]);
        }
      })
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 w-full" id="about">
      <div className="w-full max-w-[1100px] mx-auto py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <div>
          <SectionTitle>About <span className="text-white">Me</span></SectionTitle>
          <div className="space-y-6 text-[#94A3B8] mt-8 leading-[1.8] text-[15px] whitespace-pre-line">
            <p>
              {profile?.about_me || ""}
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
            {profile?.profile_image ? (
              <img src={profile.profile_image} alt={profile?.name || "Profile"} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1E2540] to-[#131929]" />
            )}
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
              <a href={profile?.linkedin_url || "#"} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-white/20 hover:bg-white/30 rounded-md text-[11px] font-bold text-white flex items-center justify-center underline underline-offset-2 transition-all">LinkedIn</a>
              <a href={profile?.github_url || "#"} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-white/20 hover:bg-white/30 rounded-md text-[11px] font-bold text-white flex items-center justify-center underline underline-offset-2 transition-all">GitHub</a>
            </div>
            <p className="text-white text-[14px] font-semibold leading-snug">{profile?.location || ""}</p>
            <p className="text-white/80 text-[12px] mt-1">{profile?.designation || ""}</p>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};
