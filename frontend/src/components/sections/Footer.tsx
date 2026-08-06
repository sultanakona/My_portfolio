"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, Mail } from "lucide-react";

export const Footer = () => {
  const [profile, setProfile] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);

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

    fetch(`${apiUrl}/portfolio/services/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setServices(data);
        }
      })
      .catch((err) => console.error("Error fetching services in Footer:", err));
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

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About Me", href: "#about" },
    { name: "Design Process", href: "#process" },
    { name: "Experience", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#0A0F1E] flex flex-col pt-16 border-t border-[#2A3050]">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-10 pb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-[12px] w-[280px] shrink-0">
            <Link href="/" className="text-[26px] font-bold italic tracking-wider text-white font-serif capitalize">
              {getBrandLogo()}
            </Link>
            <h4 className="text-white text-[13px] font-semibold mt-1">{profile?.designation || "Backend Developer & AI Engineer"}</h4>
            <p className="text-[#94A3B8] text-[13px] leading-relaxed">
              {profile?.contact_description || "I design and build scalable backend systems, APIs, and AI integrations."}
            </p>
          </div>

          <div className="hidden lg:block w-[2px] h-[231px] bg-[#2A3050] mx-6" />

          {/* Navigation Col */}
          <div className="flex flex-col gap-[12px] flex-1">
            <h4 className="text-[#7C6EFA] text-[11px] font-semibold tracking-[2px] uppercase">Navigation</h4>
            <div className="flex flex-col gap-[12px]">
              {navLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-white text-[11px] font-semibold tracking-[1px] underline hover:text-[#7C6EFA] transition-colors w-fit">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-[2px] h-[231px] bg-[#2A3050] mx-6" />

          {/* Services Col */}
          <div className="flex flex-col gap-[12px] flex-1">
            <h4 className="text-[#7C6EFA] text-[11px] font-semibold tracking-[2px] uppercase">Services</h4>
            <div className="flex flex-col gap-[12px]">
              {services.length > 0 ? (
                services.map((service) => (
                  <Link key={service.id || service.title} href="#services" className="text-white text-[11px] font-semibold tracking-[1px] cursor-pointer hover:text-[#7C6EFA] transition-colors w-fit">
                    {service.title}
                  </Link>
                ))
              ) : (
                ["Backend Development", "API Design", "AI Integration", "Database Architecture"].map((item) => (
                  <Link key={item} href="#services" className="text-white text-[11px] font-semibold tracking-[1px] cursor-pointer hover:text-[#7C6EFA] transition-colors w-fit">
                    {item}
                  </Link>
                ))
              )}
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
              {profile?.github_url && (
                <a href={profile.github_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#2A3050] bg-[#131929] flex items-center justify-center text-white hover:bg-[#7C6EFA] hover:border-[#7C6EFA] transition-all">
                  <Globe className="w-4 h-4" />
                </a>
              )}
              {profile?.email && (
                <a href={`mailto:${profile.email}`} className="w-10 h-10 rounded-full border border-[#2A3050] bg-[#131929] flex items-center justify-center text-white hover:bg-[#7C6EFA] hover:border-[#7C6EFA] transition-all">
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#131929] py-5 px-6 border-t border-[#2A3050]/80">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[#94A3B8] text-[13px] font-medium">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold capitalize">
              {profile?.name || "Sultana Parvin Kona"}
            </span>
            . All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-white/80">
            <span>Crafted with</span>
            <span className="text-[#7C6EFA]">❤</span>
            <span>using Django & Next.js</span>
            <span className="hidden sm:inline mx-1 text-white/20">|</span>
            <span className="text-[#7C6EFA] font-semibold">Architecting Scalable Backend Solutions 🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
