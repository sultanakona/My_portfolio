import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={cn("text-3xl md:text-5xl font-bold tracking-tight text-white mb-4", className)}>
    {children}
  </h2>
);

export const Subtitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <p className={cn("text-gray-400 text-lg max-w-2xl", className)}>
    {children}
  </p>
);
