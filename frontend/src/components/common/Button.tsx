"use client";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-[#7C6EFA] text-white hover:opacity-90 hover:shadow-[0_0_20px_rgba(124,110,250,0.6)] border border-[#7C6EFA]/50",
      secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/5 backdrop-blur-sm",
      outline: "bg-transparent text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
