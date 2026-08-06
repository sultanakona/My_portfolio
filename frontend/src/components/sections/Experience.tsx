"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap } from "lucide-react";

export const Experience = () => {
  const [profile, setProfile] = useState<any>(null);
  const [experiences, setExperiences] = useState<any[]>([]);
  const [educations, setEducations] = useState<any[]>([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
    
    // Fetch Profile
    fetch(`${apiUrl}/portfolio/profile/`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) setProfile(data[0]);
      })
      .catch((err) => console.error(err));

    // Fetch Experiences
    fetch(`${apiUrl}/portfolio/experience/`)
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((err) => console.error(err));

    // Fetch Educations
    fetch(`${apiUrl}/portfolio/education/`)
      .then((res) => res.json())
      .then((data) => setEducations(data))
      .catch((err) => console.error(err));
  }, []);

  // Default data for preview if database is empty
  const defaultExperiences = [
    { title: "Senior Backend Developer", company_name: "Tech Solutions Inc.", start_date: "2023-01-01", is_current: true, highlight_color: "#7C6EFA" },
    { title: "AI Integration Engineer", company_name: "Innovate Labs", start_date: "2021-05-01", end_date: "2022-12-31", is_current: false, highlight_color: "#7C6EFA" },
  ];

  const defaultEducations = [
    { degree: "B.Sc. in Computer Science", institution_name: "University of Technology", start_date: "2018-01-01", end_date: "2022-01-01" },
    { degree: "Data Science Specialization", institution_name: "Coursera", start_date: "2022-06-01", end_date: "2022-12-01" },
  ];

  const displayExperiences = experiences.length > 0 ? experiences : defaultExperiences;
  const displayEducations = educations.length > 0 ? educations : defaultEducations;

  // Helper to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section className="pt-[100px] pb-[60px] px-6 md:px-12 w-full flex justify-center" id="experience">
      <div className="w-full max-w-[1200px] mx-auto">
      {/* Top Title */}
      <div className="text-center mb-24">
        <h2 className="text-[42px] font-bold">
          <span className="text-[#7C6EFA]">Experience &</span> <span className="text-white">Education</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
        
        {/* Left Column: Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#7C6EFA]/10 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#7C6EFA]" />
            </div>
            <h3 className="text-[24px] font-semibold text-white">Experience</h3>
          </div>
          
          <div className="flex flex-col gap-5">
            {displayExperiences.map((exp, idx) => (
              <motion.div
                key={`exp-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative w-full bg-[#131929] rounded-[14px] flex group hover:bg-[#1E2540]/80 transition-colors cursor-default"
              >
                <div className="w-[6px] flex-shrink-0 rounded-l-[14px]" style={{ backgroundColor: '#7C6EFA' }} />
                <div className="flex-1 flex flex-col sm:flex-row sm:items-start justify-between p-6">
                  <div className="flex flex-col gap-1.5 w-full sm:w-[70%]">
                    <span className="text-[17px] font-semibold text-white">{exp.title}</span>
                    <div className="flex flex-wrap items-center gap-2 text-[14px] text-[#94A3B8]">
                      <span>{exp.company_name}</span>
                      {exp.location && (
                        <>
                          <span className="text-[10px] opacity-50">●</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                    {exp.description && (
                      <div 
                        className="mt-2 text-[13px] text-[#94A3B8]/80 leading-relaxed max-w-none prose prose-invert prose-p:my-1 prose-ul:my-1 prose-ul:list-disc prose-ul:pl-4 prose-li:my-0.5"
                        dangerouslySetInnerHTML={{ __html: exp.description }}
                      />
                    )}
                  </div>
                  <div className="mt-4 sm:mt-0 whitespace-nowrap bg-[#1E2540] px-3 py-1.5 rounded-full self-start">
                    <span className="text-[12px] font-medium text-[#7C6EFA]">
                      {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#00C9A7]/10 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#00C9A7]" />
            </div>
            <h3 className="text-[24px] font-semibold text-white">Education</h3>
          </div>
          
          <div className="flex flex-col gap-5">
            {displayEducations.map((edu, idx) => (
              <motion.div
                key={`edu-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative w-full bg-[#131929] rounded-[14px] flex group hover:bg-[#1E2540]/80 active:bg-[#1E2540]/80 transition-colors cursor-default"
              >
                <div className="w-[6px] flex-shrink-0 bg-[#00C9A7] rounded-l-[14px]" />
                <div className="flex-1 flex flex-col sm:flex-row sm:items-start justify-between p-6">
                  <div className="flex flex-col gap-1.5 w-full sm:w-[70%]">
                    <span className="text-[17px] font-semibold text-white">{edu.degree}</span>
                    <div className="flex flex-wrap items-center gap-2 text-[14px] text-[#94A3B8]">
                      <span>{edu.institution_name}</span>
                      {edu.cgpa && (
                        <>
                          <span className="text-[10px] opacity-50">●</span>
                          <span>CGPA: {edu.cgpa}</span>
                        </>
                      )}
                    </div>
                    {edu.achievement && (
                      <div 
                        className="mt-2 text-[13px] text-[#94A3B8]/80 leading-relaxed max-w-none prose prose-invert prose-p:my-1 prose-ul:my-1 prose-ul:list-disc prose-ul:pl-4 prose-li:my-0.5"
                        dangerouslySetInnerHTML={{ __html: edu.achievement }}
                      />
                    )}
                  </div>
                  <div className="mt-4 sm:mt-0 whitespace-nowrap bg-[#1E2540] px-3 py-1.5 rounded-full self-start">
                    <span className="text-[12px] font-medium text-[#00C9A7]">
                      {formatDate(edu.start_date)} - {edu.end_date ? formatDate(edu.end_date) : "Present"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Resume Button */}
      {profile?.resume_file && (
        <motion.div 
          id="resume"
          className="flex justify-center mt-12 scroll-mt-[40vh]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href={profile.resume_file} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 bg-transparent border-2 border-[#5B4FD4] rounded-full overflow-hidden flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(91,79,212,0.4)]"
          >
            <div className="absolute inset-0 bg-[#5B4FD4] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 text-[15px] font-semibold text-white">View My Resume</span>
            <Download className="w-4 h-4 text-white relative z-10 group-hover:animate-bounce" />
          </a>
        </motion.div>
      )}

      </div>
    </section>
  );
};
