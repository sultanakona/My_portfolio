"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
    fetch(`${apiUrl}/portfolio/profile/`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setProfile(data[0]);
        }
      })
      .catch((err) => console.error("Error fetching profile in Navbar:", err));
  }, []);

  // Format dynamic full name from profile for Brand Logo
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
    { name: "About me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-3 sm:top-5 lg:top-6 inset-x-0 z-50 flex justify-center px-3 sm:px-6 md:px-8 pointer-events-none"
    >
      <nav
        className={`w-full max-w-[1200px] pointer-events-auto flex flex-col px-3.5 py-2.5 sm:px-6 sm:py-4 lg:px-10 lg:py-5 rounded-[20px] sm:rounded-[30px] lg:rounded-full transition-all duration-300 border border-white/10 backdrop-blur-[20px] shadow-[inset_0px_0px_40px_rgba(124,110,250,0.15),0px_8px_32px_rgba(0,0,0,0.3)] ${
          scrolled || isOpen ? "bg-[#131929]/95" : "bg-[#131929]/80"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="text-[17px] sm:text-[22px] lg:text-[26px] font-bold italic tracking-wide text-white font-serif flex-shrink-0 capitalize whitespace-nowrap">
            {getBrandLogo()}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center gap-10 text-[16px] font-normal text-white/80">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#7C6EFA] transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden sm:flex bg-[#5B4FD4] hover:bg-[#4d42b5] text-white px-[20px] py-[10px] lg:px-[24px] lg:py-[12px] rounded-full text-[14px] lg:text-[16px] font-medium transition-all flex-shrink-0"
            >
              Hire Me
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden flex flex-col items-center gap-4 pt-6 pb-4"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-white text-[16px] font-medium hover:text-[#7C6EFA] transition-colors w-full text-center py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="sm:hidden bg-[#5B4FD4] hover:bg-[#4d42b5] text-white px-[24px] py-[12px] rounded-full text-[16px] font-medium transition-all w-full max-w-[200px] text-center mt-2"
              >
                Hire Me
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
