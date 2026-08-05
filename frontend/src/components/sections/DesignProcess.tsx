"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle, Subtitle } from "@/components/common/Typography";
import * as LucideIcons from "lucide-react";

export const DesignProcess = () => {
  const [profile, setProfile] = useState<any>(null);
  const [steps, setSteps] = useState<any[]>([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';
    fetch(`${apiUrl}/portfolio/profile/`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) setProfile(data[0]);
      })
      .catch((err) => console.error("Error fetching profile:", err));

    fetch(`${apiUrl}/portfolio/process-steps/`)
      .then((res) => res.json())
      .then((data) => setSteps(data))
      .catch((err) => console.error("Error fetching process steps:", err));
  }, []);

  const titleText = profile?.process_title || "My Development Process";
  const titleParts = titleText.split(" ");
  const highlightWord = titleParts.length > 0 ? titleParts.pop() : "";
  const normalWords = titleParts.join(" ");

  const defaultProcesses = [
    {
      step_number: "01",
      title: "System Architecture",
      description: "Planning complex database relationships, designing robust API architectures, and scalable infrastructure.",
      icon_name: "Server",
    },
    {
      step_number: "02",
      title: "Backend Logic & AI",
      description: "Writing robust Python/Django code, integrating AI models, and optimizing complex business rules.",
      icon_name: "Cpu",
    },
    {
      step_number: "03",
      title: "API & Integration",
      description: "Building fast, secure REST/GraphQL APIs and seamlessly connecting them to modern frontend interfaces.",
      icon_name: "Code2",
    },
    {
      step_number: "04",
      title: "Testing & Deployment",
      description: "Writing comprehensive tests, setting up CI/CD pipelines, and deploying containerized applications.",
      icon_name: "Rocket",
    },
  ];

  const displaySteps = steps.length > 0 ? steps : defaultProcesses;

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 w-full" id="process">
      <div className="w-full max-w-[1200px] mx-auto py-24">
      <div className="text-center mb-20">
        <SectionTitle>{normalWords} <span className="text-[#7C6EFA]">{highlightWord}</span></SectionTitle>
        <Subtitle className="mx-auto mt-4 text-[#94A3B8]">
          {profile?.process_subtitle || "A clear and focused approach to building robust backend systems and AI integrations."}
        </Subtitle>
      </div>

      <div className="flex flex-wrap justify-center gap-12 lg:gap-14 xl:gap-8">
        {displaySteps.map((process, idx) => {
          const FallbackIcon = (LucideIcons as any)[process.icon_name || "Layers"] || LucideIcons.Layers;
          return (
            <motion.div
              key={process.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative w-[260px] h-[320px] group cursor-pointer"
            >
              {/* Stacked Back Card */}
              <div className="absolute w-[264px] h-[324px] bg-[#1E2540] border border-[#2A3050] rounded-[14px] top-4 left-4 transition-all duration-300 ease-out group-hover:top-2 group-hover:-rotate-6 group-active:top-2 group-active:-rotate-6" />

              {/* Main Front Card */}
              <div className="absolute w-[260px] h-[320px] bg-[#131929] border border-[#2A3050] rounded-[14px] top-0 left-0 transition-all duration-300 ease-out group-hover:top-5 group-hover:rotate-[6deg] group-active:top-5 group-active:rotate-[6deg] flex flex-col items-center pt-8 px-6 pb-6 text-center z-10 shadow-2xl shadow-black/40">
                
                {/* Icon Box */}
                <div className="w-[48px] h-[48px] bg-[#1E2540] border border-[#2A3050] rounded-[8px] flex items-center justify-center mb-6">
                  <FallbackIcon className="w-5 h-5 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-[18px] font-semibold text-white mb-3 leading-tight">{process.title}</h3>
                <p className="text-[#94A3B8] text-[13px] leading-relaxed flex-1">
                  {process.description}
                </p>

                {/* Number Circle */}
                <div className="w-[32px] h-[32px] bg-[#7C6EFA] rounded-full flex items-center justify-center text-white text-[10px] font-normal tracking-wide mt-auto">
                  {`0${idx + 1}`.slice(-2)}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
};
