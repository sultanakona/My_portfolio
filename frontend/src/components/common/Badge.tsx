import React from 'react';

export const Badge = ({ children, icon: Icon }: { children: React.ReactNode, icon?: React.ElementType }) => {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
      {Icon && <Icon className="w-3.5 h-3.5 text-purple-400" />}
      {children}
    </span>
  );
};
