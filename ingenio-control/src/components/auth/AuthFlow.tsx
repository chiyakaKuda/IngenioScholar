"use client";

import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Lock, Landmark, Activity } from 'lucide-react';
import Link from 'next/link';

interface AuthFlowProps {
  onClose: () => void;
}

export default function AuthFlow({ onClose }: AuthFlowProps) {
  const [isMounting, setIsMounting] = useState(false);

  useEffect(() => {
    setIsMounting(true);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-500 ${isMounting ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className={`
        relative w-full max-w-[420px] bg-white 
        rounded-[2.5rem] shadow-2xl transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform
        ${isMounting ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}>
        <div className="p-10">
          {/* Header */}
          <div className="flex justify-center mb-8">
            <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-blue-200">
              <ShieldCheck size={32} />
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Guardian Portal
            </h2>
            <p className="text-slate-500 font-medium mt-3 leading-relaxed">
              Security handshake complete. Access your student fund orchestration dashboard.
            </p>
          </div>

          {/* Action */}
          <div className="space-y-4">
            <Link 
              href="/dashboard"
              className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl hover:bg-slate-800"
            >
              Continue to Dashboard
              <ArrowRight size={20} />
            </Link>

            <div className="flex items-center justify-center gap-2 pt-2">
              <Lock size={12} className="text-slate-300" />
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                Identity Verified • Secure Session
              </p>
            </div>
          </div>

          {/* Institutional Trust Footer */}
          <div className="mt-10 pt-8 border-t border-slate-50 flex justify-around opacity-30 grayscale">
            <Landmark size={20} />
            <Activity size={20} />
            <ShieldCheck size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}