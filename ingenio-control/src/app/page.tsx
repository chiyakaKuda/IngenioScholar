import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { Lock, Zap, Smartphone } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      
      <Hero />

      {/* Feature Section */}
      <section className="px-6 md:px-16 py-24 grid grid-cols-1 md:grid-cols-3 gap-10 bg-white border-t border-gray-100">
        <Feature 
          icon={<Lock size={32} strokeWidth={2.5} />} 
          title="Zero Custody" 
          desc="We don't hold the funds. All money remains secure in the partner bank at all times."
        />
        <Feature 
          icon={<Zap size={32} strokeWidth={2.5} />} 
          title="Dual Currency" 
          desc="Set independent authorization rules for USD and ZiG on the same account number."
        />
        <Feature 
          icon={<Smartphone size={32} strokeWidth={2.5} />} 
          title="Instant Control" 
          desc="Instantly freeze cards or set spending windows directly from your dashboard."
        />
      </section>
    </main>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 rounded-[2.5rem] border border-gray-100 bg-[#F8FAFC] transition-all hover:border-[#3c74bf]/30 hover:shadow-2xl">
      <div className="text-[#3c74bf] mb-6">{icon}</div>
      <h3 className="text-2xl font-black mb-3 text-[#111827] tracking-tight">{title}</h3>
      <p className="text-gray-500 leading-relaxed font-semibold">{desc}</p>
    </div>
  );
}