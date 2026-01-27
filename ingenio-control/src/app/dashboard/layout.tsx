"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Top from '@/components/dashboard/Top';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8F9FC]">
      {/* Sidebar - Controlled by state for mobile responsiveness */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Top onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="flex-1 p-4 md:p-10 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        <footer className="px-6 md:px-10 py-6 border-t border-slate-200 bg-white/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] text-center md:text-left">
              Ingenio Core v2.0 • System Stable
            </p>
            <div className="flex gap-4">
              <span className="text-[10px] font-bold text-slate-300 uppercase">Privacy Policy</span>
              <span className="text-[10px] font-bold text-slate-300 uppercase">Support</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}