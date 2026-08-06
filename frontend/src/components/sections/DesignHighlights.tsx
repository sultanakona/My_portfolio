"use client";
import React, { useState, useEffect } from "react";
import { SectionTitle, Subtitle } from "@/components/common/Typography";

const mockupsRow1 = [
  "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
  "bg-gradient-to-br from-[#2A3050] to-[#131929]",
  "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
  "bg-gradient-to-br from-[#2A3050] to-[#131929]",
  "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
];

const mockupsRow2 = [
  "bg-gradient-to-br from-[#2A3050] to-[#131929]",
  "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
  "bg-gradient-to-br from-[#2A3050] to-[#131929]",
  "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
  "bg-gradient-to-br from-[#2A3050] to-[#131929]",
];

export const DesignHighlights = () => {
  const [profile, setProfile] = useState<any>(null);
  const [highlightsRow1, setHighlightsRow1] = useState<any[]>([]);
  const [highlightsRow2, setHighlightsRow2] = useState<any[]>([]);

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

    fetch(`${apiUrl}/portfolio/projects/`)
      .then((res) => res.json())
      .then((data) => {
        // Filter projects that have highlight_row set to 1 or 2
        setHighlightsRow1(data.filter((p: any) => p.highlight_row === 1));
        setHighlightsRow2(data.filter((p: any) => p.highlight_row === 2));
      })
      .catch((err) => console.error("Error fetching projects for highlights:", err));
  }, []);

  const titleText = profile?.highlights_title || "Project Highlights";
  const titleParts = titleText.split(" ");
  const highlightWord = titleParts.length > 1 ? titleParts.shift() : "";
  const normalWords = titleParts.join(" ");

  // Default mockups if no images uploaded
  const defaultMockupsRow1 = [
    "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
    "bg-gradient-to-br from-[#2A3050] to-[#131929]",
    "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
    "bg-gradient-to-br from-[#2A3050] to-[#131929]",
  ];
  const defaultMockupsRow2 = [
    "bg-gradient-to-br from-[#2A3050] to-[#131929]",
    "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
    "bg-gradient-to-br from-[#2A3050] to-[#131929]",
    "bg-gradient-to-br from-[#1E2540] to-[#0A0F1E]",
  ];

  // Helper to render a card
  const renderCard = (item: any, idx: number) => {
    const isDynamic = typeof item !== 'string';
    
    const content = (
      <>
        {isDynamic && item.thumbnail ? (
          <img src={item.thumbnail} alt={item.title || "Project Mockup"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-110" />
        ) : (
          <div className={`w-full h-full ${!isDynamic ? item : 'bg-[#1E2540]'} flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-active:scale-105`}>
            <span className="text-white/20 font-semibold tracking-widest uppercase">Project Mockup</span>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#0A0F1E]/90 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
          {isDynamic && item.title && (
            <h3 className="text-white font-bold text-xl md:text-2xl mb-2 translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500">{item.title}</h3>
          )}
          {isDynamic && item.categories && (
            <p className="text-[#00C9A7] text-sm md:text-base font-medium translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 delay-75 mb-4">
              {item.categories.split(',').join(' • ')}
            </p>
          )}
          {isDynamic && item.project_url && (
            <span className="inline-flex items-center text-[#7C6EFA] text-sm font-semibold gap-2 translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 delay-100">
              View Case Study <span className="text-lg">→</span>
            </span>
          )}
        </div>
      </>
    );

    const cardClass = "w-[320px] h-[240px] md:w-[480px] md:h-[320px] flex-shrink-0 mx-3 rounded-[14px] overflow-hidden border border-[#2A3050] group relative bg-[#1E2540] block cursor-pointer shadow-lg hover:border-[#7C6EFA]/50 transition-colors duration-300";

    if (isDynamic && item.project_url) {
      return (
        <a key={idx} href={item.project_url} target="_blank" rel="noopener noreferrer" className={cardClass}>
          {content}
        </a>
      );
    }

    return (
      <div key={idx} className={cardClass}>
        {content}
      </div>
    );
  };

  // Pad user items with default items to make at least 4 items for smooth scrolling
  const getPaddedItems = (userItems: any[], defaultItems: string[]) => {
    if (userItems.length >= 4) return userItems;
    let padded = [...userItems];
    let i = 0;
    while (padded.length < 4) {
      padded.push(defaultItems[i % defaultItems.length]);
      i++;
    }
    return padded;
  };

  const displayRow1 = getPaddedItems(highlightsRow1, defaultMockupsRow1);
  const displayRow2 = getPaddedItems(highlightsRow2, defaultMockupsRow2);

  return (
    <section className="py-16 md:py-24 flex flex-col justify-center overflow-hidden w-full scroll-mt-20" id="highlights">
      <div className="text-center mb-16 px-6 max-w-4xl mx-auto">
        <SectionTitle><span className="text-[#7C6EFA]">{highlightWord}</span> <span className="text-white">{normalWords}</span></SectionTitle>
        <Subtitle className="mx-auto mt-4 text-[#94A3B8]">
          {profile?.highlights_subtitle || "A curated collection of screens and interfaces that reflect my approach to crafting thoughtful digital experiences."}
        </Subtitle>
      </div>

      <div className="flex flex-col gap-6 w-full relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0F1E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0F1E] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...displayRow1, ...displayRow1].map((item, idx) => renderCard(item, idx))}
        </div>

        <div className="flex animate-marquee-reverse">
          {[...displayRow2, ...displayRow2].map((item, idx) => renderCard(item, idx))}
        </div>
      </div>
    </section>
  );
};
