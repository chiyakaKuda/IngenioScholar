"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, X, Smartphone, ShieldCheck, Landmark } from 'lucide-react';

type AuthStep = 'entry' | 'otp';

export default function AuthFlow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<AuthStep>('entry');
  const [phone, setPhone] = useState('');
  const [isMounting, setIsMounting] = useState(false);

  useEffect(() => {
    setIsMounting(true);
    // Prevent scrolling when auth is open
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className={`fixed inset-0 z-[100] flex items-end md:items-center justify-center transition-opacity duration-300 ${isMounting ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Dimmed Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" 
        onClick={onClose} 
      />

      {/* Auth Container: Drawer on Mobile, Centered Modal on Desktop */}
      <div className={`
        relative w-full md:max-w-[440px] bg-white 
        rounded-t-[2.5rem] md:rounded-[2rem] 
        shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] md:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)]
        transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1) transform
        ${isMounting ? 'translate-y-0' : 'translate-y-full md:translate-y-4 md:scale-95'}
      `}>
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-50">
          <div className="w-10">
            {step === 'otp' && (
              <button onClick={() => setStep('entry')} className="p-2 -ml-2 text-gray-400 hover:text-black transition-colors">
                <ChevronLeft size={24} />
              </button>
            )}
          </div>
          
          <div className="flex flex-col items-center">
             <div className="text-sm font-black tracking-tighter text-[#111827]">
               INGENIO<span className="text-[#3c74bf]">FIN</span>
             </div>
          </div>

          <div className="w-10 flex justify-end">
            <button onClick={onClose} className="p-2 -mr-2 text-gray-300 hover:text-black transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-8 pt-10 pb-12 md:pb-10">
          
          <div className="space-y-2 mb-10">
            <h2 className="text-3xl font-black text-[#111827] tracking-tight">
              {step === 'entry' ? "Welcome Back!" : "Verify Code"}
            </h2>
            <p className="text-[15px] font-medium text-gray-400 leading-relaxed">
              {step === 'entry' 
                ? "Access your account through your phone number." 
                : `We've sent a 6-digit code to +263 ${phone}`}
            </p>
          </div>

          {step === 'entry' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Enter Your Phone Number
                </label>
                <div className="flex items-center bg-[#F1F3F5] rounded-2xl px-5 py-5 transition-all focus-within:ring-2 focus-within:ring-[#3c74bf]/10">
                  <div className="flex items-center gap-2 pr-4 border-r border-gray-200">
                    <div className="w-6 h-4 bg-white rounded-sm overflow-hidden border border-gray-100 flex flex-col">
                       <div className="h-1/3 bg-[#000]"/>
                       <div className="h-1/3 bg-[#f00]"/>
                       <div className="h-1/3 bg-[#0f0]"/>
                    </div>
                    <span className="font-bold text-[#111827] text-sm">+263</span>
                  </div>
                  <input 
                    autoFocus
                    type="tel" 
                    placeholder="772 123 456"
                    className="w-full bg-transparent pl-4 outline-none font-bold text-lg text-[#111827] placeholder:text-gray-300"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <button 
                  onClick={() => setStep('otp')}
                  className="w-full bg-[#111827] text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all active:scale-[0.98]"
                >
                  Continue
                </button>
                <div className="text-center text-sm font-semibold text-gray-400">
                  Don't have an account? <button className="text-[#3c74bf] font-bold hover:underline">Signup</button>
                </div>
              </div>
            </div>
          )}

          {step === 'otp' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-2 duration-500">
               <div className="flex justify-between gap-2">
                {[...Array(6)].map((_, i) => (
                  <input 
                    key={i}
                    type="text"
                    maxLength={1}
                    className="w-full h-14 text-center text-xl font-bold bg-[#F1F3F5] rounded-xl outline-none transition-all focus:ring-2 focus:ring-[#3c74bf] focus:bg-white text-[#111827]"
                  />
                ))}
              </div>
              <button 
                className="w-full bg-[#111827] text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all active:scale-[0.98]"
              >
                Verify & Login
              </button>
              <div className="text-center">
                <button className="text-sm font-bold text-[#3c74bf]">Resend Code</button>
              </div>
            </div>
          )}

          {/* Minimal Trust signals */}
          <div className="mt-12 flex items-center justify-center gap-6 opacity-30 grayscale">
            <div className="flex items-center gap-1.5"><Landmark size={14}/><span className="text-[10px] font-black uppercase tracking-widest">Bank Grade</span></div>
            <div className="flex items-center gap-1.5"><ShieldCheck size={14}/><span className="text-[10px] font-black uppercase tracking-widest">SSL Secure</span></div>
          </div>

        </div>
      </div>
    </div>
  );
}