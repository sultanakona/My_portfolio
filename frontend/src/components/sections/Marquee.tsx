"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const defaultSkills = [
  "Python", "Django", "REST APIs", "PostgreSQL", 
  "System Architecture", "Docker", "Git", "Backend Development"
];

export const Marquee = () => {
  const [skillsList, setSkillsList] = useState<string[]>([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
    fetch(`${apiUrl}/portfolio/skills/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const names = data.map((item: any) => item.name);
          setSkillsList(names);
        }
      })
      .catch((err) => console.error("Error fetching marquee skills:", err));
  }, []);

  const displaySkills = skillsList.length > 0 ? skillsList : defaultSkills;

  return (
    <div className="w-full bg-[#1A1A24]/50 backdrop-blur-sm border-y border-white/5 py-4 my-6 relative z-10 overflow-hidden flex whitespace-nowrap">
      <div className="animate-marquee flex items-center w-max">
        {/* Duplicate the array 4 times for infinite seamless scroll */}
        {[...displaySkills, ...displaySkills, ...displaySkills, ...displaySkills].map((skill, index) => (
          <div key={index} className="flex items-center gap-4 px-6 text-gray-300 font-medium text-lg">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
