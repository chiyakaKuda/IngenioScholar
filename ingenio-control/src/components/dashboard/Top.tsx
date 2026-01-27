"use client";

import React from 'react';
import { Bell, Search, Settings, Menu } from 'lucide-react';

// Assuming data is passed or imported
const parent = { name: "Mrs. Chiyaka", role: "Primary Guardian", avatar: "MC" };

interface TopProps {
  onMenuClick: () => void;
}

export default function Top({ onMenuClick }: TopProps) {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-8 flex justify-between items-center sticky top-0 z-40">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-xl border border-slate-100"
        >
          <Menu size={20} />
        </button>

        {/* Search Bar - Hidden on mobile, visible from MD up */}
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search transactions..."
            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 pl-10 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-5">
        {/* Notifications */}
        <button className="relative p-2.5 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 rounded-xl border border-slate-100 group">
          <Bell size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-slate-900 leading-none mb-1">{parent.name}</p>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest opacity-80">{parent.role}</p>
          </div>
          
          <div className="relative group cursor-pointer">
            <div className="w-10 h-10 bg-slate-900 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center shadow-lg shadow-slate-200 overflow-hidden border-2 border-white">
               <span className="text-white font-black text-sm -rotate-3 group-hover:rotate-0 transition-transform">
                {parent.avatar}
               </span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
          </div>
        </div>
      </div>
    </header>
  );
}