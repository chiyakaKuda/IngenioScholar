"use client";

import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export default function Top() {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 flex justify-between items-center sticky top-0 z-40">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search transactions or rules..."
          className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 pl-10 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="relative p-2 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 rounded-lg">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>
        
        <div className="h-8 w-px bg-slate-200 mx-2" />

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-900">Marcus Aurelius</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Primary Guardian</p>
          </div>
          <div className="w-10 h-10 bg-slate-900 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white font-bold">
            M
          </div>
        </div>
      </div>
    </header>
  );
}