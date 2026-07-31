import React from "react";
import { Star } from "lucide-react";

const skills = [
  "Logo Design", "UI Design", "UX Strategy", "User Research", 
  "Framer Development", "Web Design", "App Design", "Branding"
];

export const Marquee = () => {
  return (
    <div className="w-full bg-[#1A1A24]/50 backdrop-blur-sm border-y border-white/5 py-4 overflow-hidden flex whitespace-nowrap">
      <div className="animate-marquee flex items-center w-max">
        {/* We duplicate the array 4 times to ensure seamless infinite scroll on wide screens */}
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex items-center gap-4 px-6 text-gray-300 font-medium text-lg">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
