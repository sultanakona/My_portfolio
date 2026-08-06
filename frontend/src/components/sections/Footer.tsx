"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, Mail } from "lucide-react";

export const Footer = () => {
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
      .catch((err) => console.error("Error fetching profile in Footer:", err));
  }, []);

  const getBrandLogo = () => {
    if (!profile?.name) return <>Sultana <span className="text-[#7C6EFA] font-light">Kona</span></>;
    const nameParts = profile.name.trim().split(" ");
    if (nameParts.length > 1) {
      const lastWord = nameParts.pop();
      const restName = nameParts.join(" ");
      return <>{restName} <span className="text-[#7C6EFA] font-light">{lastWord}</span></>;
    }
    return <>{profile.name}</>;
  };

  return (
    <footer className="w-full bg-[#0A0F1E] flex flex-col pt-16 border-t border-[#2A3050]">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-10 pb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-[12px] w-[280px] shrink-0">
            <Link href="/" className="text-[26px] font-bold italic tracking-wider text-white font-serif capitalize">
              {getBrandLogo()}
            </Link>
            <h4 className="text-white text-[13px] font-semibold mt-1">{profile?.designation || "Backend Developer"}</h4>
            <p className="text-[#94A3B8] text-[13px] leading-relaxed">
              I design and build digital experiences that are intuitive, functional and delightful to use.
            </p>
          </div>

          <div className="hidden lg:block w-[2px] h-[231px] bg-[#2A3050] mx-6" />

          {/* Navigation Col */}
          <div className="flex flex-col gap-[12px] flex-1">
            <h4 className="text-[#7C6EFA] text-[11px] font-semibold tracking-[2px] uppercase">Navigation</h4>
            <div className="flex flex-col gap-[12px]">
              {["Home", "Projects", "Services", "About Me", "Design Process", "Experience", "Contact"].map((item) => (
                <Link key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className="text-white text-[11px] font-semibold tracking-[1px] underline hover:text-[#7C6EFA] transition-colors w-fit">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-[2px] h-[231px] bg-[#2A3050] mx-6" />

          {/* Services Col */}
          <div className="flex flex-col gap-[12px] flex-1">
            <h4 className="text-[#7C6EFA] text-[11px] font-semibold tracking-[2px] uppercase">Services</h4>
            <div className="flex flex-col gap-[12px]">
              {["UI/UX Design", "Framer Development", "Framer Web Template", "Design Systems", "Web Design", "Prototyping", "Interaction Design", "UX Research"].map((item) => (
                <span key={item} className="text-white text-[11px] font-semibold tracking-[1px] cursor-pointer hover:text-[#7C6EFA] transition-colors w-fit">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-[2px] h-[231px] bg-[#2A3050] mx-6" />

          {/* Connect Col */}
          <div className="flex flex-col gap-[12px] flex-1">
            <h4 className="text-[#7C6EFA] text-[11px] font-semibold tracking-[2px] uppercase">Connect</h4>
            <p className="text-white text-[11px] font-semibold tracking-[1px] leading-[1.6]">
              Let's connect and create something extraordinary.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-[#2A3050] bg-[#131929] flex items-center justify-center text-white hover:bg-[#7C6EFA] hover:border-[#7C6EFA] transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#2A3050] bg-[#131929] flex items-center justify-center text-white hover:bg-[#7C6EFA] hover:border-[#7C6EFA] transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#2A3050] py-4 px-6">
        <div className="flex flex-row items-center justify-center gap-5 flex-wrap">
          <p className="text-[#C4C9D6] text-[12px] font-semibold">
            © {new Date().getFullYear()} {profile?.name || "Sultana Kona"}. All rights reserved.
          </p>
          <span className="text-[#C4C9D6] text-[12px] font-semibold">⭐ Designed & Built with 🤍 using Next.js</span>
          <span className="text-[#C4C9D6] text-[12px] font-semibold">⭐ Always learning. Always creating.</span>
        </div>
      </div>
    </footer>
  );
};
