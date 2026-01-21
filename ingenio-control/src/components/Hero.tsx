import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Landmark, Users2, Lock } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Convincing Message */}
          <Reveal delay={0.1}>
            <div className="space-y-8 z-10">
              {/* Trust Signal Badge */}
              <div className="inline-flex items-center gap-2 bg-[#3c74bf]/10 px-4 py-2 rounded-full border border-[#3c74bf]/20">
                <ShieldCheck size={18} className="text-[#3c74bf]" />
                <span className="text-[11px] font-black uppercase tracking-widest text-[#3c74bf]">
                  Bank-Issued Security • Non-Custodial
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] text-[#111827]">
                Empower Their Future, <br />
                <span className="text-[#3c74bf]">Control Their Spending.</span>
              </h1>

              <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-lg font-medium">
                Give your child financial independence with the safety net they need. 
                Manage <span className="font-bold text-[#10B981]">USD</span> & 
                <span className="font-bold text-[#3c74bf]"> ZiG</span> allowances through 
                their school ID card—real-time rules, zero stress, funds stay in the bank.
              </p>

              {/* Main Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center justify-center gap-3 bg-[#3c74bf] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#2e5b99] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Get Started <ArrowRight size={22} />
                </button>
                <button className="px-10 py-5 rounded-2xl font-black text-lg border-2 border-[#3c74bf]/20 text-[#3c74bf] hover:bg-[#3c74bf]/5 transition-all">
                  How It Works
                </button>
              </div>

              {/* Sub-Hero Trust Signal */}
              <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-6 items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Trusted By:</span>
                <div className="flex items-center gap-2 text-gray-400">
                  <Landmark size={16} />
                  <span className="text-xs font-bold">Partner Banks</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Users2 size={16} />
                  <span className="text-xs font-bold">Local Schools</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Lock size={16} />
                  <span className="text-xs font-bold">Regulatory Compliant</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Image */}
          <Reveal delay={0.3}>
            <div className="relative flex justify-center items-center">
              {/* Background decorative circles */}
              <div className="absolute w-[450px] h-[450px] bg-[#3c74bf]/10 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative w-full max-w-[550px] aspect-square">
                <Image 
                  src="/persn.svg" 
                  alt="Student expenses illustration"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
                
                {/* Floating Reassurance Tags */}
                <div className="absolute top-10 right-0 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 hidden lg:block animate-bounce" style={{animationDuration: '3s'}}>
                   <p className="text-[10px] font-black text-[#10B981] uppercase tracking-wider">Dual Wallet</p>
                   <p className="text-sm font-bold text-[#111827]">USD & ZiG Support</p>
                </div>

                <div className="absolute bottom-20 left-0 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 hidden lg:block animate-bounce" style={{animationDuration: '4s'}}>
                   <p className="text-[10px] font-black text-[#3c74bf] uppercase tracking-wider">Instant Safety</p>
                   <p className="text-sm font-bold text-[#111827]">Freeze Card Anytime</p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Hero;