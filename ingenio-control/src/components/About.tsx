import React from 'react';
import { Target, Heart, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <Reveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3c74bf] mb-4">
                  Our Mission
                </h2>
                <h3 className="text-4xl md:text-5xl font-black text-[#111827] mb-6 tracking-tight">
                  Financial literacy starts <br /> with responsible freedom.
                </h3>
                <p className="text-lg text-gray-500 font-semibold leading-relaxed italic border-l-4 border-[#3c74bf]/20 pl-6">
                  "At Ingenio, we believe that children shouldn't just be given money; they should be guided on how to use it. Our goal is to build the digital infrastructure for the next generation of financially savvy Africans."
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F8FAFC] text-[#3c74bf] flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#111827]">Built for Zimbabwe</h4>
                    <p className="text-gray-500 text-sm font-semibold">Tailored specifically for our local dual-currency economy, ensuring USD and ZiG work seamlessly.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F8FAFC] text-[#3c74bf] flex items-center justify-center">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#111827]">Community First</h4>
                    <p className="text-gray-500 text-sm font-semibold">Partnering directly with schools to create safer, cash-light environments for students.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Stats Grid */}
          <div className="relative">
            {/* Background Decor */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#3c74bf]/5 rounded-full blur-3xl -z-10" />
            
            <div className="grid grid-cols-2 gap-6">
              <Reveal delay={0.3}>
                <div className="bg-[#F8FAFC] p-8 rounded-[2.5rem] text-center border border-gray-100 group hover:border-[#3c74bf]/30 transition-all">
                  <div className="text-4xl font-black text-[#3c74bf] mb-2">100%</div>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Non-Custodial</div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="bg-[#111827] p-8 rounded-[2.5rem] text-center border border-gray-100 group hover:scale-105 transition-all">
                  <div className="text-4xl font-black text-white mb-2">24/7</div>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Real-time Auth</div>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="bg-[#3c74bf] p-8 rounded-[2.5rem] text-center border border-gray-100 group hover:scale-105 transition-all">
                  <div className="text-4xl font-black text-white mb-2">AES</div>
                  <div className="text-xs font-black text-white/60 uppercase tracking-widest">Encryption</div>
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="bg-[#F8FAFC] p-8 rounded-[2.5rem] text-center border border-gray-100 group hover:border-[#3c74bf]/30 transition-all">
                  <div className="text-4xl font-black text-[#111827] mb-2">ZiG</div>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Native Support</div>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}