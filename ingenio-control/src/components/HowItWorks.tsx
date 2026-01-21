import React from 'react';
import { CreditCard, Smartphone, Landmark, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3c74bf] mb-4">
            The Ecosystem
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#111827] mb-6 tracking-tight">
            How Ingenio Control Works
          </h3>
          <p className="text-lg text-gray-500 font-semibold leading-relaxed">
            We bridge the gap between traditional bank accounts and modern parental oversight. 
            No money is moved; we simply provide the authorization logic that keeps your child safe.
          </p>
        </div>

        {/* The 3-Step Journey */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Step 1: Matching Nav "Student ID Card" */}
          <div className="relative group">
            <div className="w-16 h-16 rounded-2xl bg-[#3c74bf]/10 flex items-center justify-center text-[#3c74bf] mb-8 group-hover:bg-[#3c74bf] group-hover:text-white transition-all duration-300">
              <CreditCard size={32} />
            </div>
            <h4 className="text-2xl font-black text-[#111827] mb-4">01. Student ID Card</h4>
            <p className="text-gray-500 font-semibold leading-relaxed mb-6">
              The student uses a standard bank-issued ID card. It functions everywhere—tuckshops, 
              transport, and bookshops—supporting both <span className="text-[#3c74bf]">USD & ZiG</span>.
            </p>
            <ul className="space-y-3 text-sm font-bold text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]" /> Dual-Currency Chip</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]" /> NFC Contactless</li>
            </ul>
          </div>

          {/* Step 2: Matching Nav "Parent Control App" */}
          <div className="relative group">
            <div className="w-16 h-16 rounded-2xl bg-[#3c74bf]/10 flex items-center justify-center text-[#3c74bf] mb-8 group-hover:bg-[#3c74bf] group-hover:text-white transition-all duration-300">
              <Smartphone size={32} />
            </div>
            <h4 className="text-2xl font-black text-[#111827] mb-4">02. Parent Control App</h4>
            <p className="text-gray-500 font-semibold leading-relaxed mb-6">
              Link the card to your Ingenio App. Set daily limits, allowed merchants, 
              and receive instant alerts every time the card is tapped.
            </p>
            <ul className="space-y-3 text-sm font-bold text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]" /> Real-time Rule Engine</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]" /> Spending Windows</li>
            </ul>
          </div>

          {/* Step 3: Matching Nav "Bank Partnership" */}
          <div className="relative group">
            <div className="w-16 h-16 rounded-2xl bg-[#3c74bf]/10 flex items-center justify-center text-[#3c74bf] mb-8 group-hover:bg-[#3c74bf] group-hover:text-white transition-all duration-300">
              <Landmark size={32} />
            </div>
            <h4 className="text-2xl font-black text-[#111827] mb-4">03. Bank Partnership</h4>
            <p className="text-gray-500 font-semibold leading-relaxed mb-6">
              Funds never leave the bank. We only authorize transactions based on your rules. 
              Maximum security with zero custody of your money.
            </p>
            <ul className="space-y-3 text-sm font-bold text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]" /> Non-Custodial Model</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#10B981]" /> Bank-Grade Encryption</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}