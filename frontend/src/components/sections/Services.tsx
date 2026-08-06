"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle, Subtitle } from "@/components/common/Typography";
import { Palette, PenTool, LayoutTemplate, Box, Layers, MonitorSmartphone } from "lucide-react";

export const Services = () => {
  const [profile, setProfile] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
    
    // Fetch Profile for titles
    fetch(`${apiUrl}/portfolio/profile/`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setProfile(data[0]);
        }
      })
      .catch((err) => console.error("Error fetching profile:", err));

    // Fetch Services for cards
    fetch(`${apiUrl}/portfolio/services/`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  // Split title to highlight the last word
  const titleText = profile?.services_title || "My Services";
  const titleParts = titleText.split(" ");
  const highlightWord = titleParts.length > 1 ? titleParts.pop() : "";
  const normalWords = titleParts.join(" ");

  // Helper function to render a placeholder icon if no icon image is uploaded
  const renderIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('ui') || t.includes('design')) return <Palette className="w-6 h-6 text-[#7C6EFA]" />;
    if (t.includes('product')) return <Box className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />;
    if (t.includes('framer') || t.includes('web')) return <LayoutTemplate className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />;
    if (t.includes('brand')) return <PenTool className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />;
    return <MonitorSmartphone className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />;
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 w-full flex justify-center scroll-mt-20" id="services">
      <div className="w-full max-w-[1300px] mx-auto">
      <div className="text-center mb-16">
        <SectionTitle>
          {normalWords} <span className="text-[#7C6EFA]">{highlightWord}</span>
        </SectionTitle>
        <Subtitle className="mx-auto mt-4 text-[#94A3B8]">
          {profile?.services_subtitle || "I design experiences, brands, and digital products that are functional, meaningful, and visually refined."}
        </Subtitle>
      </div>

      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)_minmax(0,1fr)] gap-[15px] w-full relative z-10">
          
          {services.map((service, index) => {
            // Only the very first item is large, ignoring layout_type field completely
            const isLarge = index === 0;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${isLarge ? 'lg:col-span-1 lg:row-span-2' : ''}`}
              >
                <div className={`flex flex-col p-[24px] bg-[#1E2540]/90 backdrop-blur-xl border border-[#2A3050] rounded-[20px] w-full h-full relative overflow-hidden group hover:border-[#7C6EFA]/50 hover:shadow-[0_8px_32px_rgba(124,110,250,0.15)] transition-all duration-500 ${isLarge ? 'min-h-[580px]' : ''}`}>
                  
                  {/* Subtle glow */}
                  <div className={`absolute top-0 left-0 ${isLarge ? 'w-[200px] h-[200px] bg-[#7C6EFA]/20' : 'w-[150px] h-[150px] bg-[#7C6EFA]/10 opacity-0 group-hover:opacity-100'} blur-[60px] rounded-full pointer-events-none transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 ${!isLarge && 'group-hover:bg-[#7C6EFA]/20 group-hover:border-[#7C6EFA]/30'} transition-all duration-300`}>
                    {service.icon ? (
                      <img src={service.icon} alt={service.title} className="w-6 h-6 object-contain" />
                    ) : (
                      renderIcon(service.title)
                    )}
                  </div>
                  
                  <h3 className={`${isLarge ? 'text-[22px] font-bold' : 'text-[19px] font-semibold'} text-white mb-2 relative z-10`}>
                    {service.title}
                  </h3>
                  
                  <p className={`${isLarge ? 'text-white/60 text-[14px]' : 'text-white/50 text-[13px]'} font-medium mb-6 relative z-10 tracking-wide`}>
                    {service.short_title || service.subtitle || ""}
                  </p>
                  
                  {isLarge && service.description && (
                    <p className="text-[#94A3B8] text-[15px] leading-relaxed relative z-10">
                      {service.description}
                    </p>
                  )}
                  
                  {/* Thumbnail / Preview Area */}
                  <div className={`mt-auto w-full relative z-10 flex items-center justify-center overflow-hidden ${isLarge ? 'pt-8 flex-1 items-end' : 'h-[110px] bg-black/20 backdrop-blur-md rounded-xl border border-white/5 group-hover:border-white/10 transition-colors'}`}>
                    {service.thumbnail ? (
                       <img src={service.thumbnail} alt={service.title} className={`w-full ${isLarge ? 'rounded-xl shadow-2xl border border-white/10 object-cover' : 'h-full object-cover rounded-xl'}`} />
                    ) : (
                       <div className={`${isLarge ? 'w-full bg-black/20 backdrop-blur-md rounded-xl border border-white/10 min-h-[200px] flex items-center justify-center shadow-2xl relative overflow-hidden' : ''}`}>
                         {isLarge && <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7C6EFA]/5" />}
                         <p className="text-white/30 text-[11px] font-medium uppercase tracking-widest relative z-10">
                           {isLarge ? 'UX Diagram' : 'Preview'}
                         </p>
                       </div>
                    )}
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
          
        </div>
      </div>
      </div>
    </section>
  );
};
