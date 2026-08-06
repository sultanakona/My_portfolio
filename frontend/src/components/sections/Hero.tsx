"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
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
    <section 
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-[105px] pb-16 md:pb-24" 
      id="home"
    >
      
      {/* Exact ambient glow from reference (Fixed static) */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[403px] h-[444px] bg-[rgba(124,110,250,0.5)] blur-[80px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 text-center flex flex-col items-center px-4 max-w-4xl mx-auto mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col items-center gap-6 relative">
            {/* Fast Animated Greeting with Waving Hand */}
            <span className="text-[#C4C9D6] font-medium text-[15px] flex items-center gap-1.5">
              {profile?.note || "Hello There!"}
              <motion.span
                animate={{ rotate: [0, 25, -15, 25, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.5 }}
                className="inline-block origin-bottom-right"
              >
                👋
              </motion.span>
            </span>
            
            {/* Floating Avatar Container */}
            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              className="w-[192px] h-[192px] rounded-full overflow-hidden bg-[#1E2540] border-2 border-[#2A3050] shadow-[0_10px_30px_rgba(124,110,250,0.3)] hover:border-[#7C6EFA] transition-all cursor-pointer"
            >
              {profile?.profile_image ? (
                <img src={profile.profile_image} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]" />
              )}
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[52px] font-bold text-white mb-4 tracking-[-2.08px] leading-[1.1em]"
        >
          I'm <span className="text-[#7C6EFA]">{profile?.name || ""}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[36px] font-semibold text-white mb-8 tracking-[-0.36px] leading-[1.2em]"
        >
          {profile?.designation || ""}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#94A3B8] text-[16px] mb-10 max-w-[400px] mx-auto leading-relaxed"
        >
          {profile?.hero_tagline || profile?.short_intro || "I turn complex problems into experiences that feel effortless."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          {/* Badge: exactly 210px x 38px */}
          <div className="bg-[#7C6EFA]/10 border border-[#7C6EFA]/30 rounded-full h-[38px] px-6 flex items-center justify-center mx-auto">
            <span className="text-[#7C6EFA] text-[16px] font-semibold">
              {profile?.experience_years ? `${profile.experience_years}+ Years of Experience` : ""}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#work" className="bg-transparent border border-white/60 text-white text-[16px] font-normal rounded-full h-[48px] w-[180px] flex items-center justify-center transition-all hover:bg-white/5">
            View My work
          </a>
          <a href="#contact" className="bg-[#5B4FD4] text-white text-[16px] font-normal rounded-full h-[48px] w-[180px] flex items-center justify-center transition-all hover:opacity-90 hover:shadow-[0_4px_20px_rgba(91,79,212,0.4)]">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};


