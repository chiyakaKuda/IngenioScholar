import React from 'react';
import { Landmark, Coins, ClipboardCheck, Users } from 'lucide-react';
import { Reveal } from './Reveal';

export default function ForSchools() {
  return (
    <section id="for-schools" className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section with Reveal */}
        <Reveal delay={0.1}>
          <div className="max-w-3xl mb-16">
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3c74bf] mb-4">
              Institutional Solutions
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#111827] mb-6 tracking-tight">
              The modern standard for <br /> cashless campuses.
            </h3>
            <p className="text-lg text-gray-500 font-semibold leading-relaxed">
              Eliminate the risks of physical cash. Ingenio Fincontroller integrates with 
              existing bank accounts to provide a seamless, digital-first financial environment 
              for your students and staff.
            </p>
          </div>
        </Reveal>

        {/* Schools Benefit Grid with Staggered Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Benefit 1: Reduced Cash Handling */}
          <Reveal delay={0.2}>
            <div className="p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 flex gap-6 group hover:border-[#3c74bf]/30 transition-all h-full">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white text-[#3c74bf] flex items-center justify-center shadow-sm group-hover:bg-[#3c74bf] group-hover:text-white transition-all">
                <Coins size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#111827] mb-2">Zero Cash Risk</h4>
                <p className="text-gray-500 font-semibold text-sm leading-relaxed">
                  Reduce the security burden of holding cash on campus. All tuckshop and 
                  administrative payments move through secure, trackable bank channels.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Benefit 2: Fee Discipline */}
          <Reveal delay={0.3}>
            <div className="p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 flex gap-6 group hover:border-[#3c74bf]/30 transition-all h-full">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white text-[#3c74bf] flex items-center justify-center shadow-sm group-hover:bg-[#3c74bf] group-hover:text-white transition-all">
                <ClipboardCheck size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#111827] mb-2">Better Fee Tracking</h4>
                <p className="text-gray-500 font-semibold text-sm leading-relaxed">
                  Gain better visibility into student accounts. Ensure that pocket money is 
                  actually spent on school essentials, not diverted elsewhere.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Benefit 3: Bank Partnership */}
          <Reveal delay={0.4}>
            <div className="p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 flex gap-6 group hover:border-[#3c74bf]/30 transition-all h-full">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white text-[#3c74bf] flex items-center justify-center shadow-sm group-hover:bg-[#3c74bf] group-hover:text-white transition-all">
                <Landmark size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#111827] mb-2">Official Bank Integration</h4>
                <p className="text-gray-500 font-semibold text-sm leading-relaxed">
                  We work with your existing bank partners. No need to switch banks or 
                  open complex new accounts for the institution.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Benefit 4: Parent Trust */}
          <Reveal delay={0.5}>
            <div className="p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 flex gap-6 group hover:border-[#3c74bf]/30 transition-all h-full">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white text-[#3c74bf] flex items-center justify-center shadow-sm group-hover:bg-[#3c74bf] group-hover:text-white transition-all">
                <Users size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#111827] mb-2">Increased Parent Trust</h4>
                <p className="text-gray-500 font-semibold text-sm leading-relaxed">
                  Offer parents the ultimate peace of mind. Schools that implement 
                  Ingenio are seen as modern, tech-forward, and student-focused.
                </p>
              </div>
            </div>
          </Reveal>

        </div>

        {/* School Partnership CTA with its own Reveal */}
        <Reveal delay={0.6}>
          <div className="mt-16 bg-[#3c74bf] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-3xl font-black text-white mb-4">Request a Campus Demo</h4>
              <p className="text-white/80 font-semibold">
                See how Ingenio can transform your school's financial ecosystem. 
                Our team will provide a full walk-through of the integration process.
              </p>
            </div>
            <button className="bg-white text-[#3c74bf] px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0">
              Partner With Us
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}